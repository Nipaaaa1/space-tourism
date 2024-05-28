import { CrewExplanation } from "./explanation";
import { CrewImage } from "./image";
import { CrewPagination } from "./pagination";

export const CrewContent = () => {
  return (
    <div className="flex flex-col gap-8 xl:grid xl:flex-1 xl:grid-cols-2">
      <div className="flex flex-col items-center gap-6 md:max-w-lg">
        <CrewExplanation />
        <CrewPagination />
      </div>
      <CrewImage />
    </div>
  );
};
