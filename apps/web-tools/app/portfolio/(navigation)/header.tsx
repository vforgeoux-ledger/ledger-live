import Box from "@/components/system/box";
import Ledger from "@/components/ui/icons/ledger";

export default function Header() {
  return (
    <header className="flex w-full justify-center items-center pt-11 pb-6">
      <div className="flex flex-row gap-4 w-content">
        <Ledger className="h-8" />
        <h1 className="font-bold">Portfolio</h1>
      </div>
    </header>
  );
}
