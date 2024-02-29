import "./live-common-setup";

import { useStore } from "@/client/store";
import { AccountItem } from "@/components/system/AccountItem";
import Box from "@/components/system/box";
import { Combobox } from "@/components/system/combobox";
import { H2, H4, Subtitle } from "@/components/system/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/portfolio-ui/nav/footer";
import Header from "@/portfolio-ui/nav/header";
import {
  formatCurrencyUnit,
  getCryptoCurrencyById,
  getFiatCurrencyByTicker,
} from "@ledgerhq/coin-framework/lib-es/currencies/index";
import { listSupportedCurrencies } from "@ledgerhq/coin-framework/lib-es/currencies/support";
import { getCurrencyBridge } from "@ledgerhq/live-common/lib-es/bridge/impl";
import {
  Countervalues,
  useCountervaluesState,
  useTrackingPairForAccounts,
} from "@ledgerhq/live-countervalues-react";
import { getAssetsDistribution } from "@ledgerhq/live-countervalues/lib-es/portfolio";
import { Account } from "@ledgerhq/types-live";
import BigNumber from "bignumber.js";
import { useMemo, useState } from "react";

const deviceId = "webhid";
const countervalue = getFiatCurrencyByTicker("EUR");
const locale = "en";

const EmptyPortfolio = () => {
  const { addAccount, accounts } = useStore();

  const [network, setNetwork] = useState("");

  const addAccountToStore = async () => {
    const retrievedAccount = await retrieveAccount(network);

    if (retrievedAccount) {
      addAccount(retrievedAccount);
    }
  };

  return (
    <Box full className="space-y-2">
      <H4 className="font-semibold">You don't have any account yet.</H4>
      <Combobox
        className="self-center"
        items={listSupportedCurrencies().map(item => ({ value: item.id, label: item.id }))}
        searching="Network"
        value={network}
        onChange={setNetwork}
      />
      <Button onClick={() => addAccountToStore()}>Add account</Button>
    </Box>
  );
};

const Balance = () => {
  const { accounts } = useStore();

  const cvState = useCountervaluesState();
  const assets = getAssetsDistribution(accounts, cvState, countervalue);

  return (
    <Card className="p-3 space-y-1">
      <Subtitle className="text-muted-foreground">Balance</Subtitle>
      <H2 className="font-bold">
        {formatCurrencyUnit(countervalue.units[0], BigNumber(assets.sum), { showCode: true })}
      </H2>
    </Card>
  );
};

function Portfolio() {
  const { accounts } = useStore();

  const trackingPairs = useTrackingPairForAccounts(accounts, countervalue);
  const userSettings = useMemo(() => ({ trackingPairs, autofillGaps: true }), [trackingPairs]);

  return (
    <Box className="flex flex-col gap-4">
      <Countervalues userSettings={userSettings}>
        <Balance />
      </Countervalues>

      <Card className="p-4">
        {!accounts.length ? (
          <EmptyPortfolio />
        ) : (
          accounts.map(account => <AccountItem key={account.id} account={account} />)
        )}
      </Card>
    </Box>
  );
}

const retrieveAccount = async (networkId: string): Promise<Account | undefined> => {
  const currency = getCryptoCurrencyById(String(networkId));
  const currencyBridge = getCurrencyBridge(currency);
  const sub = currencyBridge.scanAccounts({
    currency,
    deviceId,
    syncConfig: {
      paginationConfig: {},
      blacklistedTokenIds: [],
    },
  });

  const sub2 = sub.toPromise();
  const event = await sub2;

  if (event && event.type === "discovered") {
    return event.account;
  }

  return undefined;
};

const PortfolioPage = () => {
  return (
    <div className={"flex min-h-screen flex-col font-inter antialiased"}>
        <Header />
        <Portfolio />
    </div>
  );
};

export default PortfolioPage;
