import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { arbitrumSepolia } from "@alchemy/aa-core";
import { AlchemySigner } from "@alchemy/aa-alchemy";

const chain = arbitrumSepolia;

export const signer = new AlchemySigner({
  client: {
    // This is created in your dashboard under `https://dashboard.alchemy.com/settings/access-keys`
    // NOTE: it is not recommended to expose your API key on the client, instead proxy requests to your backend and set the `rpcUrl`
    // here to point to your backend.
    connection: { apiKey: "" },
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
    const client = await createModularAccountAlchemyClient({
      // get your Alchemy API key at https://dashboard.alchemy.com
      apiKey: "L-jqi7xsnl7jMzasEbLLqnPCr0ROdxqy",
      chain,
      signer,
    });

    // Fund your account address with ETH to send for the user operations
    // (e.g. Get Sepolia ETH at https://sepoliafaucet.com)
    console.log("Smart Account Address: ", client.getAddress()); // Log the smart account address
    return client.getAddress();
  };
  return await initializeClient();
}

/*
const initializeClient = async () => {
  // Create a smart account client to send user operations from your smart account
  const client = await createModularAccountAlchemyClient({
    // get your Alchemy API key at https://dashboard.alchemy.com
    apiKey: "L-jqi7xsnl7jMzasEbLLqnPCr0ROdxqy",
    chain,
    signer,
  });

  // Fund your account address with ETH to send for the user operations
  // (e.g. Get Sepolia ETH at https://sepoliafaucet.com)
  console.log("Smart Account Address: ", client.getAddress()); // Log the smart account address
};

initializeClient();
*/

export { authenticate, completeAuthenticate };
