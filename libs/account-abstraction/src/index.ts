/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { sepolia } from "@alchemy/aa-core";
import { AlchemySigner } from "@alchemy/aa-alchemy";

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
  const txHash = await client.sendTransaction(tx);
  console.log(txHash);
  return txHash;
}

export { authenticate, completeAuthenticate, sendTx };
