import { TransactionCommon } from "../../ledgerjs/packages/types-live/lib";

type Setup = {
  onValidateTransaction: () => void;
};

type ScenarioTransaction = {
  tx: TransactionCommon;
  expects: (() => void)[];
};

export type Scenario = {
  name: string;
  setup?: Setup;
  beforeAll: () => void;
  transactions: ScenarioTransaction[];
  afterall: () => void;
  teardown?: () => void;
};
