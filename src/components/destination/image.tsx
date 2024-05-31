"use client";

import Image from "next/image";

import MoonImage from "@/assets/destination/moon-image.png";
import MarsImage from "@/assets/destination/mars-image.png";
import EuropaImage from "@/assets/destination/europa-image.png";
import TitanImage from "@/assets/destination/titan-image.png";

import { useStore } from "@/app/store/store";

export const DestinationImage = () => {
  const currentTab = useStore((state) => state.currentTab);
  const images = [MoonImage, MarsImage, EuropaImage, TitanImage];
  return (
    <Image
      src={images[currentTab]}
      className="size-[150px] md:size-[300px] xl:size-[480px]"
      alt=""
    />
  );
};
