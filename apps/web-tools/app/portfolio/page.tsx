"use client";
import { AssetItem } from "@/components/system/AssetItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return { handleAddClick, handleSendClick };
};

function Portfolio() {
  const { handleAddClick, handleSendClick } = usePortfolio();

  return (
    <div>
      <h1>Portfolio</h1>
      <Link href="/portfolio-debugger">Portfolio Debugger</Link>
      <Card className="w-content">
        <CardHeader className="flex flex-row">
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
    </div>
  );
}

export default Portfolio;
