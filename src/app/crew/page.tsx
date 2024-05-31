import Image from "next/image";
import bgImage from "@/assets/crew/bg-image.png";
import { PageTitle } from "@/components/page-title";
import { CrewExplanation } from "@/components/crew/explanation";
import { CrewPagination } from "@/components/crew/pagination";
import { CrewImage } from "@/components/crew/image";
import { CrewContent } from "@/components/crew/content";
import { Metadata } from "next";
import { BgImage } from "@/components/bg-image";

export const metadata: Metadata = {
  title: "Space Tourism | Crew",
};

export default function CrewPage() {
  return (
    <>
      <BgImage bgImage={bgImage} />
      <section className="flex flex-1 flex-col overflow-clip p-6 text-white md:p-10">
        <div className="flex w-full flex-1 flex-col items-center gap-6 md:mx-auto xl:max-w-[1110px]">
          <PageTitle pageIndex="02" pageTitle="MEET YOUR CREW" />
          <CrewContent />
        </div>
      </section>
    </>
  );
}
