"use client";
import Image from "next/image";
import launchVehicle from "@/assets/technology/launch-vehicle.jpg";
import spaceport from "@/assets/technology/spaceport.jpg";
import spaceCapsule from "@/assets/technology/space-capsule.jpg";
import { useTechStore } from "@/app/store/store";

export const TechnologyImage = () => {
  const currentTechIndex = useTechStore((state) => state.currentTechIndex);
  const images = [launchVehicle, spaceport, spaceCapsule];
  return (
    <div className="pt-16 xl:order-2 xl:grid xl:place-items-center xl:p-0">
      <Image
        src={images[currentTechIndex]}
        className="h-[258px] w-full object-cover md:h-[357px] xl:h-max"
        alt="A Space Rocket"
      />
    </div>
  );
};
