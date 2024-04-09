import {
  AccountBridge,
  Account,
  TransactionCommon,
  SignOperationEvent,
  CurrencyBridge,
} from "@ledgerhq/types-live";
import { AssertionError } from "assert";
import { first, firstValueFrom, map, reduce } from "rxjs";

export type ScenarioTransaction<T> = T & {
  name: string;
  expect?: (account: Account) => void;
};

export type Scenario<T extends TransactionCommon> = {
  setup: () => Promise<{
    accountBridge: AccountBridge<T>;
    currencyBridge: CurrencyBridge;
    account: Account;
    testTimeout?: number;
    retryInterval?: number;
    onSignerConfirmation?: (e?: SignOperationEvent) => Awaited<void>;
  }>;
  transactions: ScenarioTransaction<T>[];
  beforeAll?: () => Awaited<void>;
  afterAll?: () => Awaited<void>;
  afterEach?: () => Awaited<void>;
  teardown?: () => void;
};

export async function executeScenario<T extends TransactionCommon>(scenario: Scenario<T>) {
  const { accountBridge, currencyBridge, account, retryInterval, onSignerConfirmation } =
    await scenario.setup();

  console.log("Setup completed ✓");
  await scenario.beforeAll?.();
  console.log("BeforeAll completed ✓");

  const data = await currencyBridge.preload(account.currency);
  currencyBridge.hydrate(data, account.currency);

  console.log("Preload + hydrate completed ✓");

  console.log("Running a synchronization on the account...");
  let scenarioAccount = await firstValueFrom(
    accountBridge
      .sync(account, { paginationConfig: {} })
      .pipe(reduce((acc, f: (arg0: Account) => Account) => f(acc), account)),
  );

  console.log("Synchronization completed ✓");

  console.log("Starting running scenario transactions...");
  for (const [index, testTransaction] of scenario.transactions.entries()) {
    console.log(`Test ${index + 1}: ${testTransaction.name}`);

    if (scenario.transactions.indexOf(testTransaction) > 0) {
      scenarioAccount = await firstValueFrom(
        accountBridge
          .sync(account, { paginationConfig: {} })
          .pipe(reduce((acc, f: (arg0: Account) => Account) => f(acc), account)),
      );
    }

    const defaultTransaction = accountBridge.createTransaction(scenarioAccount);
    const transaction = await accountBridge.prepareTransaction(scenarioAccount, {
      ...defaultTransaction,
      ...testTransaction,
    } as T);

    // const status = await accountBridge.getTransactionStatus(scenarioAccount, transaction);
    // if (Object.entries(status.errors).length) {
    //   throw new Error(`Error in transaction status: ${JSON.stringify(status.errors, null, 3)}`);
    // }

    const { signedOperation } = await firstValueFrom(
      accountBridge
        .signOperation({
          account,
          transaction,
          deviceId: "",
        })
        .pipe(
          map(e => {
            if (e.type === "device-signature-requested") {
              onSignerConfirmation?.(e);
            }

            return e;
          }),
          first((e): e is SignOperationEvent & { type: "signed" } => e.type === "signed"),
        ),
    );

    if (!signedOperation) {
      throw new Error("Could not sign operation");
    }

    const optimisticOperation = await accountBridge.broadcast({
      account: scenarioAccount,
      signedOperation,
    });

    const rety_limit = 10;

    const expcectHandler = async (retry = rety_limit) => {
      scenarioAccount = await firstValueFrom(
        accountBridge
          .sync({ ...account, pendingOperations: [optimisticOperation] }, { paginationConfig: {} })
          .pipe(reduce((acc, f: (arg0: Account) => Account) => f(acc), account)),
      );

      try {
        testTransaction.expect?.(scenarioAccount);
      } catch (e) {
        if (e instanceof AssertionError) {
          if (retry === 0) {
            console.error("Retried 10 times and could not assert this test");
            throw e;
          }

          console.warn("Test asssertion failed. Retrying...");
          await new Promise(resolve => setTimeout(resolve, retryInterval || 5000));
          expcectHandler(retry - 1);
        }

        throw e;
      }
    };

    expcectHandler();
    scenario.afterEach?.();
    console.log(`Test ${index}: ${testTransaction.name} completed`);
  }

  await scenario.afterAll?.();
  await scenario.teardown?.();
}
