import Flex from "@/components/system/flex";
import Ledger from "@/components/ui/icons/ledger";

export default function Header() {
  return (
    <header className="py-6">
      <Flex className="flex-row gap-4">
        <Ledger className="h-8" />
        <h1 className="font-bold">Portfolio</h1>
      </Flex>
    </header>
  );
}
