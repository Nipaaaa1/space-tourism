import Image from "next/image";
import launchVehicle from "@/assets/technology/launch-vehicle.jpg";
import { TechnologyPagination } from "./pagination";
import { TechnologyExplanation } from "./explanation";

export const TechnologyContent = () => {
  return (
    <div className="flex w-full flex-col gap-8 xl:grid xl:flex-1 xl:grid-cols-2">
      <div className="pt-16 xl:order-2 xl:grid xl:place-items-center xl:p-0">
        <Image
          src={launchVehicle}
          className="h-[258px] w-full object-cover md:h-[357px] xl:h-max"
          alt="A Space Rocket"
        />
      </div>
      <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-16">
        <TechnologyPagination />
        <TechnologyExplanation />
      </div>
    </div>
  );
};
