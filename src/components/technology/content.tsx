import { TechnologyPagination } from "./pagination";
import { TechnologyExplanation } from "./explanation";
import { TechnologyImage } from "./image";

export const TechnologyContent = () => {
  return (
    <div className="flex w-full flex-col gap-8 xl:grid xl:flex-1 xl:grid-cols-2">
      <TechnologyImage />
      <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-16">
        <TechnologyPagination />
        <TechnologyExplanation />
      </div>
    </div>
  );
};
