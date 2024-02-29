import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Card } from "../ui/card";
import { Accordion } from "../ui/accordion";

export const AssetItem = ({ asset }: any) => {
  return (
    <Card>
      <Accordion type="single" collapsible>
        <AccordionItem key={asset.id} value={asset.id}>
          <AccordionTrigger>{asset.name}</AccordionTrigger>
          <AccordionContent>
            {asset.children.map((subAsset: any) => (
              <div key={subAsset.id}>{subAsset.name}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
