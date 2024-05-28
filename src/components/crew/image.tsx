"use client";

import douglasHurley from "@/assets/crew/douglas-hurley.png";
import markShuttleworth from "@/assets/crew/mark-shuttleworth.png";
import victorGlover from "@/assets/crew/victor-glover.png";
import anoushehAnsari from "@/assets/crew/anousheh-ansari.png";
import Image from "next/image";
import { useCrewStore } from "@/app/store/store";

export const CrewImage = () => {
  const currentCrewIndex = useCrewStore((state) => state.currentCrewIndex);
  const crewImages = [
    douglasHurley,
    markShuttleworth,
    victorGlover,
    anoushehAnsari,
  ];
  return (
    <div className="relative flex flex-1 items-center justify-center">
      <Image
        src={crewImages[currentCrewIndex]}
        className="h-[340px] w-max md:absolute md:top-0 md:h-[560px] xl:static xl:h-max xl:w-full"
        alt="The Commander's Douglas Hurley"
      />
    </div>
  );
};
