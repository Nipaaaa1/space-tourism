import { Metadata } from "next";

import bgImage from "@/assets/homepage/bg-mobile.png";
import desktopBgImage from "@/assets/homepage/bg-desktop.png";

import { BgImage } from "@/components/bg-image";
import { HomeContent } from "@/components/home/content";

export const metadata: Metadata = {
  title: "Space Tourism | Home",
};

export default function HomePage() {
  return (
    <>
      <BgImage bgImage={bgImage} desktopImage={desktopBgImage} />
      <section className="flex flex-1 flex-col p-6 md:gap-[66px] md:p-32 xl:flex-row xl:items-end xl:px-[10.3125rem] xl:py-32">
        <div className="flex w-full flex-1 flex-col md:gap-[66px] xl:flex-row">
          <HomeContent />
        </div>
      </section>
    </>
  );
}
