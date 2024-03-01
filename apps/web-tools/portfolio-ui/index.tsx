import "./live-common-setup";

import { useStore } from "@/client/store";
import { AssetItem } from "@/components/system/AssetItem";
import Box from "@/components/system/box";
import { Combobox } from "@/components/system/combobox";
import Flex from "@/components/system/flex";
import { H2, H4, Subtitle } from "@/components/system/typography";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
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
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {Loader2} from 'lucide-react';
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { HeadlessSendFlow } from "@/portfolio";

const deviceId = "webhid";
const countervalue = getFiatCurrencyByTicker("EUR");
const locale = "en";

const NoAccount = () => {
  return (
    <Box full className="space-y-2 text-center py-6">
      <H4 className="font-semibold">{"You don't have any account yet."}</H4>
    </Box>
  );
};

const Send = () => {
  const { accounts } = useStore();

  return (
    <Dialog>
      <DialogPrimitive.Close id="closeDialog"/>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Send
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
          <DialogTitle>Send funds</DialogTitle>
          <DialogDescription>
            Select an account you want to send funds from.
          </DialogDescription>
        </DialogHeader>
        <HeadlessSendFlow accounts={accounts}/>
  </DialogContent>
</Dialog>
  )
}

const AddAssets = () => {
  const { addAccounts } = useStore();

  const [network, setNetwork] = useState("");
  const [pending, setPending] = useState(false);

  const dialogClose = () => {
    document.getElementById('closeDialog')?.click();
  }

  const onAddAccounts = () => {
    const currency = getCryptoCurrencyById(String(network));
    setPending(true);
    scanAccounts(currency, deviceId).subscribe({
      next: account => {
        addAccounts([account]);
        dialogClose();
        setPending(false);
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
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Add account</DialogTrigger>
      <DialogContent className="space-y-2">
        <DialogPrimitive.Close id="closeDialog"/>
        <DialogHeader>
          <DialogTitle>Add Accounts</DialogTitle>
          <DialogDescription>
            Plug in your Ledger nano via USB and select the account you want to add.
          </DialogDescription>
        </DialogHeader>
        {pending ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
        </div>
        ) : (
          <>
            <Combobox
              className="self-center w-full"
              items={listSupportedCurrencies().map(item => ({ value: item.id, label: item.id }))}
              searching="Network"
              value={network}
              onChange={setNetwork}
            />
            <DialogFooter>
              <Button onClick={onAddAccounts} disabled={pending}>
                Add accounts
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

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
  const hasAccounts = accounts?.length !== 0;

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
        <CardHeader className="p-0 pb-4">
          <div className="flex flex-row justify-between w-full gap-4">
            <H4 className="font-semibold">My assets</H4>
            <div className="flex flex-row gap-1">
              <AddAssets/>
              {hasAccounts && <Send/>}
            </div>
          </div>
        </CardHeader>
        {!hasAccounts ? (
          <NoAccount />
        ) : !assets?.list.length ? (
          <NoAssets />
        ) : (
          <div className="space-y-4">
            {assets.list.map(asset => (<AssetItem key={asset.currency.id} asset={asset} />))}
          </div>
        )}
      </Card>
    </Flex>
  );
}

const PortfolioPage = () => {
  const { accounts, addAccounts } = useStore();

  const trackingPairs = useTrackingPairForAccounts(accounts, countervalue);
  const userSettings = useMemo(() => ({ trackingPairs, autofillGaps: true }), [trackingPairs]);

  // useLocalStorage(accounts, addAccounts);

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
