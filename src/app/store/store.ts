import { create } from "zustand";

type TabStore = {
  currentTab: number;
  changeTab: (newTabIndex: number) => void;
};

type CrewStoreTypes = {
  currentCrewIndex: number;
  changeCrewIndex: (newCrewIndex: number) => void;
};

export const useStore = create<TabStore>((set) => ({
  currentTab: 0,
  changeTab: (newTabIndex: number) => {
    set({ currentTab: newTabIndex });
  },
}));

export const useCrewStore = create<CrewStoreTypes>((set) => ({
  currentCrewIndex: 0,
  changeCrewIndex: (newCrewIndex) => {
    set({ currentCrewIndex: newCrewIndex });
  },
}));
