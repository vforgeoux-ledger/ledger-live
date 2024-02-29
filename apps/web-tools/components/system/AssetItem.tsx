import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";

export const AssetItem = ({ asset }: any) => {
  return (
    <Card className="p-3">
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
