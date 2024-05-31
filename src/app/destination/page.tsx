import { Metadata } from "next";

import bgImage from "@/assets/destination/bg-image.png";

import { BgImage } from "@/components/bg-image";
import { PageTitle } from "@/components/page-title";
import { DestinationContent } from "@/components/destination/content";

export const metadata: Metadata = {
  title: "Space Tourism | Destination",
};

export default function DestinationPage() {
  return (
    <>
      <BgImage bgImage={bgImage} />
      <section className="flex flex-1 flex-col p-6 text-white md:p-10 xl:py-12">
        <div className="flex flex-1 flex-col gap-6 md:mx-auto">
          <PageTitle pageIndex="01" pageTitle="PICK YOUR DESTINATION" />
          <DestinationContent />
        </div>
      </section>
    </>
  );
}
