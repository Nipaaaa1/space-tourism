"use client";

import data from "@/app/data/technology-data.json";
import { useTechStore } from "@/app/store/store";

export const TechnologyExplanation = () => {
  const currentTechIndex = useTechStore((state) => state.currentTechIndex);
  const { name, description } = data[currentTechIndex];
  return (
    <div className="flex flex-col gap-4 md:max-w-lg">
      <div className="flex flex-col items-center gap-4 xl:items-start">
        <span className="heading-s text-white/50">THE TERMINOLOGY...</span>
        <h2 className="heading-m">{name}</h2>
      </div>
      <p className="body text-center text-light-blue xl:text-left">
        {description}
      </p>
    </div>
  );
};
