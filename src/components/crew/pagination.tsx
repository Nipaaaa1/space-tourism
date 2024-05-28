"use client";

import { useCrewStore } from "@/app/store/store";
import { cn } from "@/lib/utils";

type PaginationElementProps = {
  index: number;
};

export const CrewPagination = () => {
  return (
    <div className="flex items-center gap-4 xl:min-h-[63px] xl:gap-10 xl:self-start">
      <PaginationElement index={0} />
      <PaginationElement index={1} />
      <PaginationElement index={2} />
      <PaginationElement index={3} />
    </div>
  );
};

const PaginationElement = ({ index }: PaginationElementProps) => {
  const currentCrewIndex = useCrewStore((state) => state.currentCrewIndex);
  const changeCrewIndex = useCrewStore((state) => state.changeCrewIndex);
  const isActive = index === currentCrewIndex ? true : false;
  return (
    <button
      className={cn(
        "size-[10px] rounded-full xl:size-[15px]",
        isActive
          ? "bg-white"
          : "bg-white/20 transition ease-in-out hover:bg-white/50",
      )}
      onClick={() => {
        if (!isActive) changeCrewIndex(index);
      }}
    >
      <span className="sr-only">{index}</span>
    </button>
  );
};
