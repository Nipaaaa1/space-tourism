import douglasHurley from "@/assets/crew/douglas-hurley.png";
import Image from "next/image";

export const CrewImage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Image
        src={douglasHurley}
        className="h-[340px] w-max"
        alt="The Commander's Douglas Hurley"
      />
    </div>
  );
};
