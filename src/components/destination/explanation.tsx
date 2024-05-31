"use client";

import { useStore } from "@/app/store/store";
import { Separator } from "../ui/separator";

interface DataType {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}
export const DestinationExplanation = ({ data }: { data: DataType[] }) => {
  const currentTab = useStore((state) => state.currentTab);
  const details = data[currentTab];
  return (
    <>
      <div className="space-y-4 text-center xl:text-left">
        <h2 className="heading-l">{details.name}</h2>
        <p className="body text-light-blue">{details.description}</p>
      </div>
      <Separator className="bg-[#979797]" />
      {/* distance */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full space-y-3 text-center xl:text-left">
          <h3 className="subheading-s text-light-blue">AVG. DISTANCE</h3>
          <span className="subheading-l">{details.distance}</span>
        </div>
        <div className="w-full space-y-3 text-center xl:text-left">
          <h3 className="subheading-s text-light-blue">EST. TRAVEL TIME</h3>
          <span className="subheading-l">{details.travelTime}</span>
        </div>
      </div>
    </>
  );
};
