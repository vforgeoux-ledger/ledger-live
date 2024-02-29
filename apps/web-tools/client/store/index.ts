import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";
import { Account } from "@ledgerhq/types-live";

interface Store {
  accounts: Account[];
  addAccounts: (accounts: Account[]) => void;
  removeAccount: (accountId: string) => void;
}

export const useStore = createTrackedSelector(
  create<Store>()(set => ({
    accounts: [],
    removeAccount: (accountId: string) =>
      set(state => ({
        accounts: state.accounts.filter(a => a.id !== accountId),
      })),
    addAccounts: (newAccounts: Account[]) =>
      set(state => {
        const existingSet = new Set(state.accounts.map(a => a.id));
        return {
          accounts: state.accounts.concat(newAccounts.filter(a => !existingSet.has(a.id))),
        };
      }),
  })),
);
