"use client";

import { useStore } from "@/app/store/store";
import { cn } from "@/lib/utils";

export const TabButton = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const currentTab = useStore((state) => state.currentTab);
  const changeTab = useStore((state) => state.changeTab);
  return (
    <li
      className={cn(
        currentTab === index
          ? "border-b-[3px] border-white"
          : "border-white/50 hover:border-b-[3px]",
      )}
    >
      <button onClick={() => changeTab(index)}>{children}</button>
    </li>
  );
};
