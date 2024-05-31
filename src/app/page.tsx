import bgImage from "@/assets/homepage/bg-mobile.png";
import desktopBgImage from "@/assets/homepage/bg-desktop.png";
import Image from "next/image";
import { Explore } from "@/components/explore";
import { Metadata } from "next";
import { BgImage } from "@/components/bg-image";

export const metadata: Metadata = {
  title: "Space Tourism | Home",
};

export default function Home() {
  return (
    <>
      <BgImage bgImage={bgImage} desktopImage={desktopBgImage} />
      <section className="flex flex-1 flex-col p-6 md:gap-[66px] md:p-32 xl:flex-row xl:items-end xl:px-[10.3125rem] xl:py-32">
        <div className="flex w-full flex-1 flex-col md:gap-[66px] xl:flex-row">
          <div className="flex flex-col gap-6 text-center text-light-blue xl:max-w-[540px] xl:text-left">
            <span className="heading-xs">SO, YOU WANT TO TRAVEL TO</span>
            <h1 className="heading-xl text-white">SPACE</h1>
            <p className="body">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="grid flex-1 place-items-center xl:justify-end">
            <Explore />
          </div>
        </div>
      </section>
    </>
  );
}
