/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { sepolia } from "@alchemy/aa-core";
import { AlchemySigner } from "@alchemy/aa-alchemy";
import { encodeFunctionData } from "viem";

const chain = sepolia;
//@ts-expect-error
let client = null;

export const signer = new AlchemySigner({
  client: {
    // This is created in your dashboard under `https://dashboard.alchemy.com/settings/access-keys`
    // NOTE: it is not recommended to expose your API key on the client, instead proxy requests to your backend and set the `rpcUrl`
    // here to point to your backend.
    connection: { apiKey: "alcht_wZ6aisidYNbZ3Conc4GeWVllYgFFy4" },
    iframeConfig: {
      // you will need to render a container with this id in your DOM
      iframeContainerId: "turnkey-iframe-container",
    },
  },
});

function authenticate(email: string) {
  signer.authenticate({ type: "email", email });
}

async function completeAuthenticate(orgId: string, bundle: string) {
  await signer.authenticate({ type: "email", bundle, orgId });
  const initializeClient = async () => {
    // Create a smart account client to send user operations from your smart account
    client = await createModularAccountAlchemyClient({
      // get your Alchemy API key at https://dashboard.alchemy.com
      apiKey: "-4DNBT1xJpmgCcjuuOALsQuS0b9qmjqJ",
      chain,
      signer,
      gasManagerConfig: {
        policyId: "af93d626-bf51-46e1-8963-db712ab8cc0c",
      },
    });

    // Fund your account address with ETH to send for the user operations
    // (e.g. Get Sepolia ETH at https://sepoliafaucet.com)
    console.log("Smart Account Address: ", client.getAddress()); // Log the smart account address
    return client.getAddress();
  };
  return await initializeClient();
}

//@ts-expect-error
async function sendTx({ to, value }) {
  const tx = {
    value,
    to,
  };
  //@ts-expect-error
  const txHash = await client.sendTransaction(tx, {
    txMaxRetries: 20,
  });
  console.log(txHash);
  return txHash;
}

const MintNFTABI = [
  {
    inputs: [
      { internalType: "address", name: "nftContract", type: "address" },
      { internalType: "address", name: "feeRecipient", type: "address" },
      {
        internalType: "address",
        name: "minterIfNotPayer",
        type: "address",
      },
      { internalType: "uint256", name: "quantity", type: "uint256" },
    ],
    name: "mintPublic",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const NFT_CONTRACT = "0xC1D91FF003321b49678fA188472649e945Cd271f";
const FEE_RECIPIENT = "0x0000a26b00c1F0DF003000390027140000fAa719";
const MINT_PUBLIC = "0x00005EA00Ac477B1030CE78506496e8C2dE24bf5";

async function mintNft() {
  const uoCallData = encodeFunctionData({
    abi: MintNFTABI,
    functionName: "mintPublic",
    args: [NFT_CONTRACT, FEE_RECIPIENT, "0x0000000000000000000000000000000000000000", 1],
  });
  //@ts-expect-error
  const uo = await client.sendUserOperation(
    {
      uo: {
        target: MINT_PUBLIC,
        data: uoCallData,
      },
    },
    {
      txMaxRetries: 20,
    },
  );
  //@ts-expect-error
  const txHash = await client.waitForUserOperationTransaction(uo);
  return { txHash };
}

export { authenticate, completeAuthenticate, sendTx, mintNft };
