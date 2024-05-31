import data from "@/app/data.json";

import { DestinationDetail } from "./detail";
import { DestinationImage } from "./image";
import { DestinationPagination } from "./pagination";

export const DestinationContent = () => {
  return (
    <div className="flex flex-col gap-8 xl:grid xl:flex-1 xl:grid-cols-2 xl:items-center">
      <div className="grid w-full place-items-center py-[26.6px] md:py-[42px] xl:h-full xl:px-[29.5px]">
        <DestinationImage />
      </div>
      <div className="md:py-[11.5px] xl:w-full">
        <div className="space-y-6 md:mx-auto md:max-w-[514px] xl:mx-0 xl:px-10">
          <DestinationPagination />
          <DestinationDetail data={data} />
        </div>
      </div>
    </div>
  );
};
