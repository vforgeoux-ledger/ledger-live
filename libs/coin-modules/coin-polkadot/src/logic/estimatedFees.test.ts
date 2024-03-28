import BigNumber from "bignumber.js";
import { loadPolkadotCrypto } from "./polkadot-crypto";
import estimatedFees from "./estimatedFees";
import { fixtureChainSpec, fixtureTxMaterialWithMetadata } from "../network/sidecar.fixture";
import { createFixtureAccount, createFixtureTransaction } from "../types/model.fixture";

jest.mock("./polkadot-crypto");
const mockPaymentInfo = jest.fn();
jest.mock("../network", () => ({
  ...jest.requireActual("../network/sidecar"),
  fetchChainSpec: () => jest.fn().mockResolvedValue(fixtureChainSpec),
  getTransactionMaterialWithMetadata: () =>
    jest.fn().mockResolvedValue(fixtureTxMaterialWithMetadata),
  paymentInfo: (args: any) => mockPaymentInfo(args),
}));
mockPaymentInfo.mockResolvedValue({
  weight: "WHATEVER",
  class: "WHATEVER",
  partialFee: "155099814",
});

describe("estimatedFees", () => {
  const transaction = createFixtureTransaction();

  beforeEach(() => {
    mockPaymentInfo.mockClear();
  });

  it("calls loadPolkadotCrypto (WASM check)", async () => {
    // Given
    const account = createFixtureAccount();
    const mockLoadPolkadotCrypto = jest.mocked(loadPolkadotCrypto);

    // When
    await estimatedFees({
      accountAddress: account.freshAddress,
      amount: BigInt(transaction.amount.toString()),
    });

    // Then
    // Test to comply with existing code. Should be 1 time only.
    expect(mockLoadPolkadotCrypto).toHaveBeenCalledTimes(2);
  });

  it("returns estimation from Polkadot explorer", async () => {
    // Given
    const account = createFixtureAccount();
    const partialFee = "155099812";
    mockPaymentInfo.mockResolvedValue({
      weight: "WHATEVER",
      class: "WHATEVER",
      partialFee,
    });

    // When
    const result = await estimatedFees({
      accountAddress: account.freshAddress,
      amount: BigInt(transaction.amount.toString()),
    });

    // Then
    expect(mockPaymentInfo).toHaveBeenCalledTimes(1);
    // Receive hex signature computed by Polkadot lib
    expect(mockPaymentInfo.mock.lastCall).not.toBeNull();
    expect(result).toEqual(BigInt(partialFee));
  });
});
