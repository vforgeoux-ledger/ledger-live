import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Account } from "@ledgerhq/types-live";

interface Store {
  accounts: Account[];
  addAccount: (account: Account) => void;
}

export const useStore = createTrackedSelector(
  create<Store>()(set => ({
    accounts: [],
    addAccount: (newAccount: Account) =>
      set(state => ({
        accounts: [...state.accounts, newAccount],
      })),
  })),
);
