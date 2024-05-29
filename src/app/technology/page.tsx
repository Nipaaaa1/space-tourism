import { CrewContent } from "@/components/crew/content";
import { PageTitle } from "@/components/page-title";
import Image from "next/image";

import bgImage from "@/assets/technology/bg-image.png";
import { TechnologyContent } from "@/components/technology/content";

export default function TechnologyPage() {
  return (
    <>
      <Image
        className="absolute inset-0 -z-[1] object-cover"
        src={bgImage}
        alt=""
        fill={true}
      />
      <section className="flex flex-1 flex-col overflow-clip p-6 text-white md:p-10 xl:px-0">
        <div className="flex w-full flex-1 flex-col items-center gap-6 md:mx-auto xl:pl-[165px]">
          <PageTitle pageIndex="03" pageTitle="SPACE LAUNCH 101" />
          <TechnologyContent />
        </div>
      </section>
    </>
  );
}
