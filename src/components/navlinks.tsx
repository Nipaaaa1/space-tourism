"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  index: string;
  href: string;
  name: string;
};

export const Navlink = ({ index, href, name }: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <li
      className={cn(
        "flex h-full",
        pathname === href
          ? "border-b-[3px] border-white"
          : "border-white/50 hover:border-b-[3px]",
      )}
    >
      <Link className="flex gap-3 self-center" href={href}>
        <span className="font-bold">{index}</span>
        {name}
      </Link>
    </li>
  );
};

export const MobileNavlink = ({ index, href, name }: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={cn(
          "flex gap-3",
          pathname === href && "border-r-[3px] border-white",
        )}
        href={href}
      >
        <span className="font-bold">{index}</span>
        {name}
      </Link>
    </li>
  );
};
