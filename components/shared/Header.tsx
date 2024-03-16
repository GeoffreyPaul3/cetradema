import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between wrapper">
        <Link href="/">
          <Image
            src="/assets/images/cetradema.png"
            width={80}
            height={38}
            alt="Cetradema Logo"
          />
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
