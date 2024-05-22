import logo from "@/assets/logo.svg";
import hamburgerMenu from "@/assets/menu.svg";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed flex w-full justify-between p-6">
      <div>
        <Image src={logo} className="size-10" alt="Space Tourism logo" />
      </div>
      <Sheet>
        <SheetTrigger>
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
