import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";
import { Account, AssetsDistribution } from "@ledgerhq/types-live";

interface Data {}

interface Store {
  accounts: Account[];
  addAccount: (account: Account) => void;
  //
  assets: AssetsDistribution;
  addAssets: (assets: AssetsDistribution) => void;
}

export const useStore = createTrackedSelector(
  create<Store>()(set => ({
    accounts: [],
    addAccount: (newAccount: Account) =>
      set(state => ({
        ...state,
        accounts: [...state.accounts, newAccount],
      })),
    //
    assets: {
      isAvailable: true,
      showFirst: 0,
      list: [],
      sum: 0,
    },
    addAssets: (newAssets: AssetsDistribution) =>
      set(state => ({
        ...state,
        assets: newAssets,
      })),
  })),
);
