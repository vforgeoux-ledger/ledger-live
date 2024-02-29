import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { getAccountName } from "@ledgerhq/coin-framework/account/helpers";
import { formatCurrencyUnit } from "@ledgerhq/coin-framework/currencies/formatCurrencyUnit";
import { Box } from "lucide-react";

export const AccountItem = ({ account }: any) => {
  return (
    <Box>
      {getAccountName(account)}
      {account?.balance}
    </Box>
  );
};

export const AssetItem = ({ asset }: any) => {
  const { currency, accounts, amount } = asset;

  return (
    <Card className="p-3">
      <Accordion type="single" collapsible>
        <AccordionItem key={asset.id} value={asset.id}>
          <AccordionTrigger>{currency.name}</AccordionTrigger>
          <AccordionContent>
            {/* <span>{formatCurrencyUnit(account.unit, account.balance, { showCode: true })}</span> */}
            {/* <code>{account.freshAddress}</code> */}
            {/* {account.children.map((subAsset: any) => (
              <div key={subAsset.id}>{subAsset.name}</div>
            ))} */}
            {accounts?.map(account => <AccountItem key={account.id} account={account} />)}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
