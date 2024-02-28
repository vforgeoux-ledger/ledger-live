import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";

export const AssetItem = ({ asset }) => {
  return (
    <Card>
      <Accordion type="single" collapsible>
        <AccordionItem key={asset.id} value={asset.id}>
          <AccordionTrigger>{asset.name}</AccordionTrigger>
          <AccordionContent>
            {asset.children.map(subAsset => (
              <div>{subAsset.name}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
