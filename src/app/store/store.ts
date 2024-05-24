import { create } from "zustand";

type TabStore = {
  currentTab: number;
  changeTab: (newTabIndex: number) => void;
};

export const useStore = create<TabStore>((set) => ({
  currentTab: 0,
  changeTab: (newTabIndex: number) => {
    set({ currentTab: newTabIndex });
  },
}));
