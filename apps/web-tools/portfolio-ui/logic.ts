import React, { useCallback, useEffect, useRef } from "react";
import { clearAccount, fromAccountRaw, toAccountRaw } from "@ledgerhq/live-common/account/index";
import { isCurrencySupported } from "@ledgerhq/live-common/currencies/index";
import { getAccountBridge, getCurrencyBridge } from "@ledgerhq/live-common/bridge/index";
import connectApp from "@ledgerhq/live-common/hw/connectApp";
import { filter, find, map, mergeMap, reduce } from "rxjs/operators";
import { makeBridgeCacheSystem } from "@ledgerhq/live-common/bridge/cache";
import { Account } from "@ledgerhq/types-live";
import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import { promiseAllBatched } from "@ledgerhq/live-common/promise";
import { Observable, lastValueFrom, tap } from "rxjs";

// thin headless wrapper to first do the logic that will drive all the calls to access the app (NB: we may want to hook UI to it in future)
function appForCurrency<T>(
  deviceId: string,
  currency: CryptoCurrency,
  job: () => Observable<T>,
): Observable<T> {
  console.log(deviceId, currency, job)
  return connectApp({
    deviceId,
    request: {
      appName: currency.managerAppName,
      allowPartialDependencies: false,
    },
  }).pipe(
    tap(e => console.log("connectApp", e)),
    find(e => e.type === "opened"),
    mergeMap(job),
  );
}

/**
 * @example
 *
 * setPending(true);
 * scanAccounts(currency, deviceId).subscribe(account => {
 *  console.log("account", account);
 * }, error => {
 *   console.error("error", error);
 *   setPending(false);
 * }, () => {
 *  setPending(false);
 * });
 * ;
 */
export function scanAccounts(currency: CryptoCurrency, deviceId: string): Observable<Account> {
  // This is how we scan for accounts with the bridge today
  const currencyBridge = getCurrencyBridge(currency);
  console.log('Bridge', currencyBridge)
  return appForCurrency(deviceId, currency, () =>
    currencyBridge.scanAccounts({
      currency,
      deviceId,
      syncConfig: {
        paginationConfig: {},
        blacklistedTokenIds: [],
      },
    }),
  ).pipe(
    filter(e => e.type === "discovered"),
    map(e => e.account),
  );
}

/**
 * given a HTMLInputElement file event, load the accounts from the file and add them with a function
 */
export function loadAppJsonFile(e: any, addAccounts: (_: Account[]) => void) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    const text = reader.result;
    if (typeof text !== "string") return;
    try {
      const json = JSON.parse(text);
      const all: Account[] = [];
      for (const d of json.data.accounts) {
        const { data } = d;
        try {
          const account = fromAccountRaw(data);
          if (isCurrencySupported(account.currency)) {
            all.push(account);
          }
        } catch (e) {
          console.warn("ignoring an account due to", e);
        }
      }
      console.log("found all these accounts", all);
      addAccounts(all);
    } catch (e) {
      console.error(e);
    }
  };
  reader.readAsText(file);
}

// Here comes the internal accounts state managements (account sync, bridges,...)

const localCache: Record<string, unknown> = {};
const bridgeCache = makeBridgeCacheSystem({
  saveData(c, d) {
    localCache[c.id] = d;
    return Promise.resolve();
  },

  getData(c) {
    return Promise.resolve(localCache[c.id]);
  },
});

type AccountUpdater = (_: Account) => Account;

// this is a minimalistic impl of a "sync all accounts"
export function useSyncAllAccounts(
  accounts: Account[],
  setAccounts: (_: (_: Account[]) => Account[]) => void,
): () => Promise<void> {
  const currentAccountsRef = useRef<Account[]>(accounts);
  useEffect(() => {
    currentAccountsRef.current = accounts;
  }, [accounts]);
  const syncAllAccounts = useCallback(async () => {
    const accounts = currentAccountsRef.current;
    const parallel = 4;
    const updaters: Array<[string, AccountUpdater]> = await promiseAllBatched(
      parallel,
      accounts,
      makeSyncAccountUpdater,
    );
    setAccounts(accounts =>
      accounts.map(a => {
        const updater = updaters.find(([id]) => id === a.id);
        return updater ? updater[1](a) : a;
      }),
    );
  }, [setAccounts]);
  return syncAllAccounts;
}

async function makeSyncAccountUpdater(account: Account): Promise<[string, AccountUpdater]> {
  const bridge = getAccountBridge(account);
  // in the current implementation, it is mandatory to have prepare the currency before syncing
  // the cache will ensure not to do it twice
  await bridgeCache.prepareCurrency(account.currency);
  const syncConfig = {
    paginationConfig: {},
    blacklistedTokenIds: [],
  };

  const observable = bridge.sync(account, syncConfig);
  const reduced = observable.pipe(reduce((a, f) => f(a), account));
  const sync = await lastValueFrom(reduced);
  const updater = (_: Account) => sync; // FIXME here, account may have changed by an external update, we ignore this for now
  return [account.id, updater];
}

// this implement a storage of accounts into localStorage
// we explicitly remove the heavy data of these accounts with some sanitization
export function useLocalStorage(accounts: Account[], addAccounts: (accounts: Account[]) => void) {
  // on first load, we import the accounts from localStorage
  useEffect(() => {
    const data = localStorage.getItem("accounts");
    if (!data) return;
    const accounts = JSON.parse(data);
    addAccounts(accounts.map(fromAccountRaw));
  }, [addAccounts]);

  // on each accounts change, we save the accounts into localStorage
  useEffect(() => {
    const data = accounts.map(a => {
      const cleared = clearAccount(a);
      return toAccountRaw(cleared);
    });
    localStorage.setItem("accounts", JSON.stringify(data));
  }, [accounts]);
}
