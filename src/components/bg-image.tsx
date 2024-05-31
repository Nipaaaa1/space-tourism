import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type BgImageProps = {
  bgImage: StaticImageData;
  desktopImage?: StaticImageData;
};

export const BgImage = ({ bgImage, desktopImage }: BgImageProps) => {
  const imageStyle = cn(
    "absolute inset-0 -z-[1] object-cover",
    desktopImage && "xl:hidden",
  );
  return (
    <>
      <Image src={bgImage} className={imageStyle} fill={true} alt="" />
      {desktopImage && (
        <Image
          src={desktopImage}
          className="absolute inset-0 -z-[1] hidden object-cover xl:block"
          fill={true}
          alt=""
        />
      )}
    </>
  );
};
