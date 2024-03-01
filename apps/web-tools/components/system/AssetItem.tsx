import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { getAccountName } from "@ledgerhq/coin-framework/lib-es/account/helpers";
import { formatCurrencyUnit } from "@ledgerhq/coin-framework/lib-es/currencies/formatCurrencyUnit";
import Box from "@/components/system/box";
import CryptoIcon from "../ui/crypto-icon";
import { getFiatCurrencyByTicker } from "@ledgerhq/coin-framework/lib-es/currencies/index";
import BigNumber from "bignumber.js";
import { getBalanceHistoryWithCountervalue } from "@ledgerhq/live-countervalues/lib-es/portfolio";

const countervalues = getFiatCurrencyByTicker("EUR");

const AccountLine = ({ title, subtitle, value, counterValue }: any) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-col justify-between items-start">
        <h4>{title}</h4>
        <h3 className="text-muted-foreground">{subtitle}</h3>
      </div>
      <div className="flex flex-col justify-between items-end">
        <h4>{counterValue}</h4>
        <h3 className="text-muted-foreground">{value}</h3>
      </div>
    </div>
  )
}

getBalanceHistoryWithCountervalue

export const AccountItem = ({ account }: any) => {
  return (
    <div>
      <AccountLine title={account?.name} subtitle={account?.currency?.name} counterValue={formatCurrencyUnit(account?.unit, account.balance) + ` ${account?.currency?.ticker}`}
    />
    </div>
  )
}

export const AssetItem = ({ asset }: any) => {
  const {currency, accounts, amount, countervalue} = asset;

  console.log(amount, currency)
  return (
    <Card className="p-3 bg-gray-300 bg-opacity-10">
      <Accordion type="single" collapsible>
        <AccordionItem key={currency?.id} value={currency?.id}>
          <AccordionTrigger>
            <div className="w-full flex flex-row gap-3 items-center pr-4">
              <div className="w-8 h-8">
              <CryptoIcon iconName={currency?.ticker}/>
              </div>
              <AccountLine title={currency?.name} subtitle={currency?.ticker} value={formatCurrencyUnit(currency.units[0], amount)} counterValue={formatCurrencyUnit(countervalues?.units[0], BigNumber(countervalue), { showCode: true })}/>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 pr-8 pl-11">
            {accounts?.map((account) => (
              <AccountItem key={account.id} account={account} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
