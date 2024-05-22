import logo from "@/assets/logo.svg";
import hamburgerMenu from "@/assets/menu.svg";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="relative flex w-full justify-between p-6 md:p-0 xl:mt-10 xl:justify-end">
      <div className="md:px-10 md:py-6 xl:flex xl:w-full xl:items-center xl:gap-16 xl:pl-16">
        <Image
          src={logo}
          className="size-10 md:size-12"
          alt="Space Tourism logo"
        />
        <div className="absolute left-[176px] z-20 hidden h-[1px] w-[560px] bg-[#979797] xl:block" />
      </div>
      <ul className="navigation hidden w-full items-center justify-end gap-12 bg-white/5 pr-10 text-white backdrop-blur-xl *:py-6 md:flex xl:w-max xl:pl-[10rem] xl:pr-16">
        <li className="flex h-full border-b-[3px] border-white">
          <Link className="flex gap-3 self-center" href="/">
            <span className="font-bold">00</span>Home
          </Link>
        </li>
        <li className="flex h-full">
          <Link className="flex gap-3 self-center" href="/destination">
            <span className="font-bold">01</span>Destination
          </Link>
        </li>
        <li className="flex h-full">
          <Link className="flex gap-3 self-center" href="/crew">
            <span className="font-bold">02</span>Crew
          </Link>
        </li>
        <li className="flex h-full">
          <Link className="flex gap-3 self-center" href="/technology">
            <span className="font-bold">03</span>Technology
          </Link>
        </li>
      </ul>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Image src={hamburgerMenu} className="size-max" alt="" />
        </SheetTrigger>
        <SheetContent className="border-none bg-transparent pl-8 pr-0 backdrop-blur-xl">
          <ul className="navigation mt-[144px] space-y-8 text-white">
            <li>
              <Link className="flex gap-3 border-r-[3px] border-white" href="/">
                <span className="font-bold">00</span>Home
              </Link>
            </li>
            <li>
              <Link className="flex gap-3" href="/destination">
                <span className="font-bold">01</span>Destination
              </Link>
            </li>
            <li>
              <Link className="flex gap-3" href="/crew">
                <span className="font-bold">02</span>Crew
              </Link>
            </li>
            <li>
              <Link className="flex gap-3" href="/technology">
                <span className="font-bold">03</span>Technology
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
