"use client";
import { AssetItem } from "@/components/system/AssetItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Ledger from "@/components/ui/icons/ledger";
import Link from "next/link";

const assets = [
  {
    name: "ethereum",
    id: "eth",
    children: [{ name: "subEth", id: "subEth" }],
  },
  {
    name: "bitcoin",
    id: "btc",
    children: [{ name: "subBTC", id: "subBTC" }],
  },
];

const usePortfolio = () => {
  const handleAddClick = () => {
    console.log("add");
  };

  const handleSendClick = () => {
    console.log("send");
  };

  const balance = 800;

  return { handleAddClick, handleSendClick, balance };
};

function Portfolio() {
  const { handleAddClick, handleSendClick, balance } = usePortfolio();

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-4 w-content">
        <div className="flex flex-row gap-4">
          <Ledger className="h-8" />
          <h1>Portfolio</h1>
        </div>
        <Card className="w-content">
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <h4>{balance}</h4>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>My assets</CardTitle>
            <div className="flex flex-row gap-4">
              <Button onClick={handleAddClick}>Add asset</Button>
              <Button onClick={handleSendClick}>Send</Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {assets.map(asset => (
              <AssetItem asset={asset} key={asset.id} />
            ))}
          </CardContent>
        </Card>
        <Link href="/portfolio-debugger">Portfolio Debugger</Link>
      </div>
    </div>
  );
}

export default Portfolio;
