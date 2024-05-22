import bgImage from "@/assets/bg-mobile.png";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col">
      <Image
        src={bgImage}
        className="absolute inset-0 -z-[1] object-cover"
        fill={true}
        alt=""
      />
      <Navbar />
      <section className="flex flex-1 flex-col p-6 md:gap-[66px] md:p-32">
        <div className="text-light-blue flex flex-col gap-6 text-center">
          <span className="heading-xs">SO, YOU WANT TO TRAVEL TO</span>
          <h1 className="heading-xl text-white">SPACE</h1>
          <p className="body">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="grid flex-1 place-items-center">
          <div className="grid size-36 place-items-center rounded-full bg-white md:size-[272px]">
            <Link href="/destination" className="text-dark-navy heading-s ">
              EXPLORE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
