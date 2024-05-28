import Image from "next/image";
import bgImage from "@/assets/destination/bg-image.png";
import { DestinationImage } from "@/components/destination/image";
import { TabButton } from "@/components/destination/tab-button";
import data from "@/app/data.json";
import { DestinationDetail } from "@/components/destination/detail";

export default function Destination() {
  const navigation = ["MOON", "MARS", "EUROPA", "TITAN"];
  return (
    <>
      <Image
        className="absolute inset-0 -z-[1] object-cover"
        src={bgImage}
        alt=""
        fill={true}
      />
      <section className="flex flex-1 flex-col p-6 text-white md:p-10 xl:py-12">
        {/* box-1 */}
        <div className="flex flex-1 flex-col gap-6 md:mx-auto">
          <h1 className="heading-xs flex justify-center gap-6 md:justify-start">
            <span className="font-bold text-white/25">01</span>PICK YOUR
            DESTINATION
          </h1>
          {/* box-2 */}
          <div className="flex flex-col gap-8 xl:grid xl:flex-1 xl:grid-cols-2 xl:items-center">
            {/* moon image */}
            <div className="grid w-full place-items-center py-[26.6px] md:py-[42px] xl:h-full xl:px-[29.5px]">
              <DestinationImage />
            </div>
            {/* details */}
            <div className="md:py-[11.5px] xl:w-full">
              <div className="space-y-6 md:mx-auto md:max-w-[514px] xl:mx-0 xl:px-10">
                {/* destination tab */}
                <ul className="navigation flex h-8 items-start justify-center gap-8 text-light-blue *:h-full xl:justify-start">
                  {navigation.map((value, index) => (
                    <TabButton key={index} index={index}>
                      {value}
                    </TabButton>
                  ))}
                </ul>
                {/* detail paragraph */}
                <DestinationDetail data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
