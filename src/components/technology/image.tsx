import Image from "next/image";
import launchVehicle from "@/assets/technology/launch-vehicle.jpg";

export const TechnologyImage = () => {
  return (
    <div className="pt-16 xl:order-2 xl:grid xl:place-items-center xl:p-0">
      <Image
        src={launchVehicle}
        className="h-[258px] w-full object-cover md:h-[357px] xl:h-max"
        alt="A Space Rocket"
      />
    </div>
  );
};
