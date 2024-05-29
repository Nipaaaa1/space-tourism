"use client";
import { useTechStore } from "@/app/store/store";
import { cn } from "@/lib/utils";

type PaginationButtonProps = {
  index: number;
};

export const TechnologyPagination = () => {
  return (
    <ul className="flex justify-center gap-4 md:max-w-lg xl:flex-col xl:gap-8">
      <li>
        <PaginationButton index={1} />
      </li>
      <li>
        <PaginationButton index={2} />
      </li>
      <li>
        <PaginationButton index={3} />
      </li>
    </ul>
  );
};

const PaginationButton = ({ index }: PaginationButtonProps) => {
  const currentTechIndex = useTechStore((state) => state.currentTechIndex);
  const changeTechIndex = useTechStore((state) => state.changeTechIndex);

  const isActive = index === currentTechIndex + 1 ? true : false;

  const styles = cn(
    "size-10 md:size-14 xl:size-20 rounded-full heading-s",
    isActive
      ? "bg-white text-dark-navy"
      : "border border-white/25 hover:border-white transition ease-in-out",
  );

  const handleClick = () => {
    if (!isActive) {
      changeTechIndex(index - 1);
    }
  };
  return (
    <button className={styles} onClick={handleClick}>
      {index}
    </button>
  );
};
