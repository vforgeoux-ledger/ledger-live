import Flex from "@/components/system/flex";
import { H4 } from "@/components/system/typography";
import Ledger from "@/components/ui/icons/ledger";

export default function Header() {
  return (
    <header className="py-6">
      <Flex className="flex-row gap-4">
        <Ledger className="h-8" />
        <H4 className="font-semibold tracking-tighter">Portfolio</H4>
      </Flex>
    </header>
  );
}
