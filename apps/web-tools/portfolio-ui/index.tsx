import "./live-common-setup";

import { useStore } from "@/client/store";
import { AssetItem } from "@/components/system/AssetItem";
import Box from "@/components/system/box";
import { Combobox } from "@/components/system/combobox";
import Flex from "@/components/system/flex";
import { H2, H4, Subtitle } from "@/components/system/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/portfolio-ui/nav/header";
import {
  formatCurrencyUnit,
  getCryptoCurrencyById,
  getFiatCurrencyByTicker,
} from "@ledgerhq/coin-framework/currencies/index";
import { listSupportedCurrencies } from "@ledgerhq/coin-framework/currencies/support";
import {
  Countervalues,
  useCountervaluesState,
  useTrackingPairForAccounts,
} from "@ledgerhq/live-countervalues-react";
import { getAssetsDistribution } from "@ledgerhq/live-countervalues/portfolio";
import { Account } from "@ledgerhq/types-live";
import BigNumber from "bignumber.js";
import { useMemo, useState } from "react";
import { scanAccounts, useLocalStorage } from "./logic";

const deviceId = "webhid";
const countervalue = getFiatCurrencyByTicker("EUR");
const locale = "en";

const NoAccount = () => {
  const { addAccounts } = useStore();

  const [network, setNetwork] = useState("");
  const [pending, setPending] = useState(false);

  const onAddAccounts = () => {
    const currency = getCryptoCurrencyById(String(network));
    setPending(true);
    scanAccounts(currency, deviceId).subscribe({
      next: account => {
        addAccounts([account]);
      },
      error: error => {
        console.error("Error while scanning accounts", error);
        setPending(false);
      },
      complete: () => {
        setPending(false);
      },
    });
  };

  return (
    <Box full className="space-y-2">
      <H4 className="font-semibold">{"You don't have any account yet."}</H4>
      <Combobox
        className="self-center"
        items={listSupportedCurrencies().map(item => ({ value: item.id, label: item.id }))}
        searching="Network"
        value={network}
        onChange={setNetwork}
      />
      <Button onClick={onAddAccounts} disabled={pending}>
        Add accounts
      </Button>
    </Box>
  );
};

const NoAssets = () => {
  return (
    <Box full className="space-y-2">
      <H4 className="font-semibold">{"You don't have any asset yet."}</H4>

      <Button>Buy Asset with Ledger</Button>
    </Box>
  );
};

function Portfolio() {
  const { accounts } = useStore();
  const cvState = useCountervaluesState();
  const assets = getAssetsDistribution(accounts, cvState, countervalue);

  return (
    <Flex className="flex-col gap-6">
      <Card className="p-3 space-y-1">
        <Subtitle className="text-muted-foreground">Balance</Subtitle>
        {
          <H2 className="font-bold">
            {formatCurrencyUnit(countervalue.units[0], BigNumber(assets.sum), { showCode: true })}
          </H2>
        }
      </Card>

      <Card className="p-4">
        {!accounts.length ? (
          <NoAccount />
        ) : !assets?.list.length ? (
          <NoAssets />
        ) : (
          assets?.list.map((asset, index) => <AssetItem asset={asset} key={index} />)
        )}
      </Card>
    </Flex>
  );
}

const PortfolioPage = () => {
  const { accounts, addAccounts } = useStore();

  const trackingPairs = useTrackingPairForAccounts(accounts, countervalue);
  const userSettings = useMemo(() => ({ trackingPairs, autofillGaps: true }), [trackingPairs]);

  useLocalStorage(accounts, addAccounts);

  return (
    <div className={"flex min-h-screen flex-col font-inter antialiased"}>
      <Header />
      <main>
        <Countervalues userSettings={userSettings}>
          <Portfolio />
        </Countervalues>
      </main>
    </div>
  );
};

export default PortfolioPage;
