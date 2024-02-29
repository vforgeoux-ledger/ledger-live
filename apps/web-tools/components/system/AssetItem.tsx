import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { getAccountName } from "@ledgerhq/coin-framework/lib-es/account/helpers";
import { formatCurrencyUnit } from "@ledgerhq/coin-framework/lib-es/currencies/formatCurrencyUnit";
import Box from "@/components/system/box";
import CryptoIcon from "../ui/crypto-icon";

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

export const AccountItem = ({ account }: any) => {

  return (
    <div>
      <AccountLine title={account?.name} subtitle={account?.currency?.name} value={formatCurrencyUnit(account?.currency.unit, account.balance)} counterValue={'none'}
    />
    </div>
  )
}

export const AssetItem = ({ asset }: any) => {
  const {currency, accounts, amount} = asset;
  return (
    <Card className="p-3 bg-gray-300 bg-opacity-10">
      <Accordion type="single" collapsible>
        <AccordionItem key={currency?.id} value={currency?.id}>
          <AccordionTrigger>
            <div className="w-full flex flex-row gap-3 items-center pr-4">
              <div className="w-8 h-8">
              <CryptoIcon iconName={currency?.ticker}/>
              </div>
              <AccountLine title={currency?.name} subtitle={currency?.ticker} value={formatCurrencyUnit(currency.unit, amount.balance)} counterValue={"none"}/>
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
