import logo from "@/assets/logo.svg";
import hamburgerMenu from "@/assets/menu.svg";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MobileNavlink, Navlink } from "./navlinks";

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
        <Navlink index="00" name="HOME" href="/" />
        <Navlink index="01" name="DESTINATION" href="/destination" />
        <Navlink index="02" name="CREW" href="/crew" />
        <Navlink index="03" name="TECHNOLOGY" href="/technology" />
      </ul>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Image src={hamburgerMenu} className="size-max" alt="" />
        </SheetTrigger>
        <SheetContent className="border-none bg-transparent pl-8 pr-0 backdrop-blur-xl">
          <ul className="navigation mt-[144px] space-y-8 text-white">
            <MobileNavlink index="00" name="HOME" href="/" />
            <MobileNavlink index="01" name="DESTINATION" href="/destination" />
            <MobileNavlink index="02" name="CREW" href="/crew" />
            <MobileNavlink index="03" name="TECHNOLOGY" href="/technology" />
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
