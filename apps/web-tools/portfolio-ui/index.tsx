"use client";
import "../portfolio/live-common-setup";

import { useStore } from "@/client/store";
import Box from "@/components/system/box";
import { Combobox } from "@/components/system/combobox";
import { H2, H4, Subtitle } from "@/components/system/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/portfolio-ui/nav/footer";
import Header from "@/portfolio-ui/nav/header";
import { getAccountName } from "@ledgerhq/coin-framework/lib-es/account/helpers";
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

export const getStaticProps = async () => ({ props: {} });

const EmptyPortfolio = () => {
  const { addAccount } = useStore();

  const [network, setNetwork] = useState("");

  const addAccountToStore = async () => {
    const retrievedAccount = await retrieveAccount(network);

    if (retrievedAccount) {
      addAccount(retrievedAccount);
    }
  };

  return (
    <Box>
      <Card className="p-4 space-y-4">
        <H4 className="font-semibold">You don't have any account yet.</H4>
        <Combobox
          className="self-center"
          items={listSupportedCurrencies().map(item => ({ value: item.id, label: item.id }))}
          searching="Network"
          value={network}
          onChange={setNetwork}
        />
        <Button onClick={() => addAccountToStore()}>Add account</Button>
      </Card>
    </Box>
  );
};

const Portfolio2 = () => {
  const { accounts } = useStore();

  const trackingPairs = useTrackingPairForAccounts(accounts, countervalue);
  const userSettings = useMemo(() => ({ trackingPairs, autofillGaps: true }), [trackingPairs]);
  const cvState = useCountervaluesState();
  const assets = getAssetsDistribution(accounts, cvState, countervalue);

  return (
    <Box className="space-y-10">
      <Countervalues userSettings={userSettings}>
        <Card className="p-4 space-y-2">
          <Subtitle className="text-muted-foreground">Balance</Subtitle>
          <H2 className="font-bold">
            {formatCurrencyUnit(countervalue.units[0], BigNumber(assets.sum), { showCode: true })}
          </H2>
        </Card>
      </Countervalues>

      <Card className="p-4">
        {accounts.map(account => (
          <div key={account.id}>
            <strong>{getAccountName(account)}</strong>
            <code>{account.freshAddress}</code>
            <span>{formatCurrencyUnit(account.unit, account.balance, { showCode: true })}</span>
          </div>
        ))}
      </Card>
    </Box>
  );
};

function Portfolio() {
  const { accounts } = useStore();

  if (!accounts.length) return <EmptyPortfolio />;
  return <Portfolio2 />;
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

      <div className="mb-auto">
        <Portfolio />
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
