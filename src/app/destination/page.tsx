import Image from "next/image";
import bgImage from "@/assets/destination/bg-image.png";
import MoonImage from "@/assets/destination/moon-image.png";
import { Separator } from "@/components/ui/separator";

export default function Destination() {
  return (
    <>
      <Image
        className="absolute inset-0 -z-[1] object-cover"
        src={bgImage}
        alt=""
        fill={true}
      />
      <section className="flex flex-1 flex-col p-6 text-white md:p-10">
        {/* box-1 */}
        <div className="space-y-6">
          <h1 className="heading-xs flex justify-center gap-6 md:justify-start">
            <span className="font-bold text-white/25">01</span>PICK YOUR
            DESTINATION
          </h1>
          {/* box-2 */}
          <div className="flex flex-col gap-8">
            {/* moon image */}
            <div className="grid w-full place-items-center py-[26.6px] md:py-[42px]">
              <Image
                src={MoonImage}
                className="size-[150px] md:size-[300px]"
                alt=""
              />
            </div>
            {/* details */}
            <div className="md:py-[11.5px]">
              <div className="space-y-6 md:mx-auto md:max-w-[514px]">
                {/* destination tab */}
                <ul className="navigation flex h-8 items-start justify-center gap-8 text-light-blue *:h-full">
                  <li className="border-b-[3px] text-white">MOON</li>
                  <li>MARS</li>
                  <li>EUROPA</li>
                  <li>TITAN</li>
                </ul>
                {/* detail paragraph */}
                <div className="space-y-4 text-center">
                  <h2 className="heading-l">MOON</h2>
                  <p className="body text-light-blue">
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                  </p>
                </div>
                <Separator className="bg-[#979797]" />
                {/* distance */}
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="w-full space-y-3 text-center">
                    <h3 className="subheading-s text-light-blue">
                      AVG. DISTANCE
                    </h3>
                    <span className="subheading-l">384,400 KM</span>
                  </div>
                  <div className="w-full space-y-3 text-center">
                    <h3 className="subheading-s text-light-blue">
                      EST. TRAVEL TIME
                    </h3>
                    <span className="subheading-l">3 DAYS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
