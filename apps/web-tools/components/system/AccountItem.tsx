import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { getAccountName } from "@ledgerhq/coin-framework/lib-es/account/helpers";
import { formatCurrencyUnit } from "@ledgerhq/coin-framework/lib-es/currencies/formatCurrencyUnit";

export const AccountItem = ({ account }: any) => {
  return (
    <Card className="p-3">
      <Accordion type="single" collapsible>
        <AccordionItem key={account.id} value={account.id}>
          <AccordionTrigger>{getAccountName(account)}</AccordionTrigger>
          <AccordionContent>
            <span>{formatCurrencyUnit(account.unit, account.balance, { showCode: true })}</span>
            <code>{account.freshAddress}</code>
            {/* {account.children.map((subAsset: any) => (
              <div key={subAsset.id}>{subAsset.name}</div>
            ))} */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
