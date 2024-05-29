import { cn } from "@/lib/utils";

type PaginationButtonProps = {
  index: number;
  isActive?: boolean;
};

export const TechnologyPagination = () => {
  return (
    <ul className="flex justify-center gap-4 md:max-w-lg">
      <li>
        <PaginationButton index={1} isActive />
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

const PaginationButton = ({ index, isActive }: PaginationButtonProps) => {
  const styles = cn(
    "size-10 md:size-14 rounded-full",
    isActive ? "bg-white text-dark-navy" : "border border-white/25",
  );
  return <button className={styles}>{index}</button>;
};
