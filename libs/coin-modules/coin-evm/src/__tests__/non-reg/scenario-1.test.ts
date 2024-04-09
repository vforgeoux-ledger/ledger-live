import Eth from "@ledgerhq/hw-app-eth";
import { BigNumber } from "bignumber.js";
import { ethers, providers } from "ethers";
import { killSpeculos, spawnSigner } from "@ledgerhq/coin-tester/docker";
import { executeScenario, Scenario, ScenarioTransaction } from "@ledgerhq/coin-tester/main";
import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets/currencies";
import { buildAccountBridge, buildCurrencyBridge } from "../../bridge/js";
import { ethereum, ERC20Interface, USDC_ON_ETHEREUM, ERC721Interface } from "./helpers";
import { clearExplorerAppendix, getLogs, setBlock } from "./indexer";
import { makeAccount } from "../fixtures/common.fixtures";
import { EvmNftTransaction, Transaction as EvmTransaction } from "../../types";
import resolver from "../../hw-getAddress";
import { killAnvil, spawnAnvil } from "./docker";
import { setCoinConfig } from "../../config";
import { SignOperationEvent } from "@ledgerhq/types-live";
import axios from "axios";

const nonce = 0;

const scenarioSendTransaction: ScenarioTransaction<EvmTransaction> = {
  name: "Send ethereum",
  amount: new BigNumber(100),
  useAllAmount: false,
  recipient: "0x6bfD74C0996F269Bcece59191EFf667b3dFD73b9",
  feesStrategy: "medium",
  family: "evm",
  mode: "send",
  gasPrice: new BigNumber(0),
  gasLimit: new BigNumber(21000),
  nonce,
  chainId: 1,
};

const scenarioERC721Transaction: ScenarioTransaction<EvmTransaction & EvmNftTransaction> = {
  name: "Send NFT",
  amount: new BigNumber(1),
  useAllAmount: false,
  recipient: "0x6bfD74C0996F269Bcece59191EFf667b3dFD73b9",
  feesStrategy: "medium",
  family: "evm",
  mode: "erc721",
  nft: {
    tokenId: "3368",
    contract: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    quantity: new BigNumber(1),
    collectionName: "Bored Ape",
  },
  gasPrice: new BigNumber(0),
  gasLimit: new BigNumber(21000),
  nonce: nonce + 1,
  chainId: 1,
};

const defaultNanoAppVersion = { firmware: "2.2.3" as const, version: "1.10.4" as const };
const scenarioEthereum: Scenario<EvmTransaction> = {
  setup: async () => {
    const [transport] = await Promise.all([
      spawnSigner(
        "speculos",
        `/${defaultNanoAppVersion.firmware}/Ethereum/app_${defaultNanoAppVersion.version}.elf`,
      ),
      spawnAnvil("https://rpc.ankr.com/eth"),
    ]);

    const provider = new providers.StaticJsonRpcProvider("http://127.0.0.1:8545");
    const signerContext = (deviceId: string, fn: any): any => fn(new Eth(transport));
    const onSignerConfirmation = async (e?: SignOperationEvent): Promise<void> => {
      if (e?.type === "device-signature-requested") {
        const { data } = await axios.get(
          `http://localhost:${process.env.API_PORT}/events?currentscreenonly=true`,
        );

        if (data.events[0].text !== "Accept") {
          await axios.post(`http://localhost:${process.env.API_PORT}/button/right`, {
            action: "press-and-release",
          });
          onSignerConfirmation(e);
        } else {
          await axios.post(`http://localhost:${process.env.API_PORT}/button/both`, {
            action: "press-and-release",
          });
        }
      }
    };

    setCoinConfig(() => ({
      info: {
        status: {
          type: "active",
        },
        gasTracker: {
          type: "ledger",
          explorerId: "eth",
        },
        node: {
          type: "external",
          uri: "http://127.0.0.1:8545",
        },
        explorer: {
          type: "ledger",
          explorerId: "eth",
        },
      },
    }));

    const currencyBridge = buildCurrencyBridge(signerContext);
    await currencyBridge.preload(ethereum);

    const accountBridge = buildAccountBridge(signerContext);
    const getAddress = resolver(signerContext);
    const { address } = await getAddress("", {
      path: "44'/60'/0'/0/0",
      currency: getCryptoCurrencyById("ethereum"),
      derivationMode: "",
    });

    const scenarioAccount = makeAccount(address, ethereum);

    await setBlock();

    const addressToImpersonateBinance = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503"; // Binance

    await provider.send("anvil_impersonateAccount", [addressToImpersonateBinance]);

    const sendUSDC = {
      from: addressToImpersonateBinance,
      to: USDC_ON_ETHEREUM.contractAddress,
      data: ERC20Interface.encodeFunctionData("transfer", [
        address,
        ethers.utils.parseUnits("100", USDC_ON_ETHEREUM.units[0].magnitude),
      ]),
      value: ethers.BigNumber.from(0).toHexString(),
      gas: ethers.BigNumber.from(1_000_000).toHexString(),
      type: "0x0",
      gasPrice: (await provider.getGasPrice()).toHexString(),
      nonce: "0x" + (await provider.getTransactionCount(addressToImpersonateBinance)).toString(16),
      chainId: "0x" + (await provider.getNetwork()).chainId.toString(16),
    };

    const hash = await provider.send("eth_sendTransaction", [sendUSDC]);
    await provider.send("anvil_stopImpersonatingAccount", [addressToImpersonateBinance]);
    await provider.waitForTransaction(hash);

    // Bored Ape
    const addressToImpersonateBoredApe = "0x440Bcc7a1CF465EAFaBaE301D1D7739cbFe09dDA";
    await provider.send("anvil_impersonateAccount", [addressToImpersonateBoredApe]);
    const sendBoredApe = {
      from: addressToImpersonateBoredApe,
      to: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      data: ERC721Interface.encodeFunctionData("transferFrom", [
        addressToImpersonateBoredApe,
        address,
        "3368",
      ]),
      value: ethers.BigNumber.from(0).toHexString(),
      gas: ethers.BigNumber.from(1_000_000).toHexString(),
      type: "0x0",
      gasPrice: (await provider.getGasPrice()).toHexString(),
      nonce: "0x" + (await provider.getTransactionCount(addressToImpersonateBoredApe)).toString(16),
      chainId: "0x" + (await provider.getNetwork()).chainId.toString(16),
    };

    const boredApeTxHash = await provider.send("eth_sendTransaction", [sendBoredApe]);
    await provider.send("anvil_stopImpersonatingAccount", [addressToImpersonateBoredApe]);
    await provider.waitForTransaction(boredApeTxHash);

    await getLogs();

    return { currencyBridge, accountBridge, account: scenarioAccount, onSignerConfirmation };
  },
  afterEach: () => {
    clearExplorerAppendix();
  },
  transactions: [scenarioSendTransaction, scenarioERC721Transaction],
  afterAll: async () => {
    console.log("All tests done ✓");
    await Promise.all([killSpeculos(), killAnvil()]);
  },
};

/*
const scenarioPolygon: Scenario = {
  currency: {
    ...polygon,
    ethereumLikeInfo: {
      ...polygon.ethereumLikeInfo,
      node: {
        type: "external",
        uri: "http://127.0.0.1:8545",
      },
    } as EthereumLikeInfo,
  },
  rpc: "https://rpc.ankr.com/polygon",
  nanoApp: { firmware: "2.1.0", version: "1.10.3" },
  beforeTransactions: async (address: string) => {
    await setBlock();

    const addressToImpersonate = "0x45dDa9cb7c25131DF268515131f647d726f50608"; // Random owner of 8M USDC
    await provider.send("anvil_impersonateAccount", [addressToImpersonate]);

    const sendUSDC = {
      from: addressToImpersonate,
      to: USDC_ON_POLYGON.contractAddress,
      data: ERC20Interface.encodeFunctionData("transfer", [
        address,
        ethers.utils.parseUnits("100", USDC_ON_POLYGON.units[0].magnitude),
      ]),
      value: ethers.BigNumber.from(0).toHexString(),
      gas: ethers.BigNumber.from(1_000_000).toHexString(),
      type: "0x0",
      gasPrice: (await provider.getGasPrice()).toHexString(),
      nonce: "0x" + (await provider.getTransactionCount(addressToImpersonate)).toString(16),
      chainId: "0x" + (await provider.getNetwork()).chainId.toString(16),
    };

    const hash = await provider.send("eth_sendTransaction", [sendUSDC]);
    await provider.send("anvil_stopImpersonatingAccount", [addressToImpersonate]);

    await provider.waitForTransaction(hash);
    await getLogs();
  },
  transactions: [
    {
      amount: new BigNumber(ethers.utils.parseEther("1").toString()),
      recipient: ethers.constants.AddressZero,
    },
    {
      amount: new BigNumber(ethers.utils.parseEther("10").toString()),
      recipient: ethers.constants.AddressZero,
    },
    {
      recipient: "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503", // Random Receiver
      amount: new BigNumber(
        ethers.utils.parseUnits("100", USDC_ON_POLYGON.units[0].magnitude).toString(),
      ),
      subAccountId: encodeTokenAccountId(
        "js:2:polygon:0x2FBde3Ac8F867e5ED06e4C7060d0df00D87E2C35:",
        USDC_ON_POLYGON,
      ),
    },
  ],
};
*/

jest.setTimeout(600_000); // 10 Min
global.console = require("console");

try {
  describe("EVM Deterministic Tester", () => {
    it("should send ETH & USDC on Ethereum", async () => {
      try {
        await executeScenario(scenarioEthereum);
      } catch (e) {
        if (e != "done") {
          throw e;
        }
      }
    });
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}

["exit", "SIGINT", "SIGQUIT", "SIGTERM", "SIGUSR1", "SIGUSR2", "uncaughtException"].map(e =>
  process.on(e, async () => {
    await Promise.all([killSpeculos(), killAnvil()]);
  }),
);
