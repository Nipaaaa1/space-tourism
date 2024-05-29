import Image from "next/image";
import launchVehicle from "@/assets/technology/launch-vehicle.jpg";
import { TechnologyPagination } from "./pagination";
import { TechnologyExplanation } from "./explanation";

export const TechnologyContent = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="pt-16">
        <Image
          src={launchVehicle}
          className="h-[258px] w-full object-cover md:h-[357px]"
          alt="A Space Rocket"
        />
      </div>
      <div className="flex flex-col items-center gap-10">
        <TechnologyPagination />
        <TechnologyExplanation />
      </div>
    </div>
  );
};
