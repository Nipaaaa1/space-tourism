import { cn } from "@/lib/utils";

type PaginationElementProps = {
  index: number;
  isActive: boolean;
};

export const CrewPagination = () => {
  return (
    <div className="flex items-center gap-4">
      <PaginationElement index={1} isActive={true} />
      <PaginationElement index={2} isActive={false} />
      <PaginationElement index={3} isActive={false} />
      <PaginationElement index={4} isActive={false} />
    </div>
  );
};

const PaginationElement = ({ index, isActive }: PaginationElementProps) => {
  return (
    <button
      className={cn(
        "size-[10px] rounded-full",
        isActive ? "bg-white" : "bg-white/20",
      )}
    >
      <span className="sr-only">{index}</span>
    </button>
  );
};
