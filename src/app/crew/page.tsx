import Image from "next/image";
import bgImage from "@/assets/crew/bg-image.png";
import { PageTitle } from "@/components/page-title";
import { CrewExplanation } from "@/components/crew/explanation";
import { CrewPagination } from "@/components/crew/pagination";
import { CrewImage } from "@/components/crew/image";

export default function CrewPage() {
  return (
    <>
      <Image
        className="absolute inset-0 -z-[1] object-cover"
        src={bgImage}
        alt=""
        fill={true}
      />
      <section className="flex flex-1 flex-col p-6 text-white">
        <div className="flex flex-1 flex-col gap-6 md:mx-auto">
          <PageTitle pageIndex="02" pageTitle="MEET YOUR CREW" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-6">
              <CrewExplanation
                crewRank="COMMANDER"
                crewName="DOUGLAS HURLEY"
                crewDescription="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
              />
              <CrewPagination />
            </div>
            <CrewImage />
          </div>
        </div>
      </section>
    </>
  );
}
