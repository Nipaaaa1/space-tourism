"use client";

import crewData from "@/app/data/crew-data.json";
import { useCrewStore } from "@/app/store/store";

export const CrewExplanation = () => {
  const currentCrewIndex = useCrewStore((state) => state.currentCrewIndex);
  const { rank, name, description } = crewData[currentCrewIndex];
  return (
    <div className="flex flex-col gap-6 pt-10 text-center xl:flex-1 xl:justify-center xl:text-left">
      <div className="space-y-2 xl:space-y-4">
        <span className="heading-s text-white/50">{rank}</span>
        <h2 className="heading-m">{name}</h2>
      </div>
      <p className="body min-h-[168px] text-light-blue md:min-h-[117px] xl:min-h-0">
        {description}
      </p>
    </div>
  );
};
