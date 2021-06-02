import { useState } from "react";
import Link from "next/link";
import Enroll from "../components/enroll";
import Menu from "./svg/menu";

const links = (
  <>
    <Link href="/#welcome">
      <button className="nav-button bg-yellow font-bold underline w-full h-20 border">
        Discover
      </button>
    </Link>
    <Link href="#method">
      <button className="nav-button bg-blueDark text-white font-bold underline w-full h-20 border">
        Learning
      </button>
    </Link>
    <Link href="#program">
      <button className="nav-button bg-green font-bold underline w-full h-20 border">
        Curriculum
      </button>
    </Link>
    <Link href="#why-magpie">
      <button className="nav-button bg-red font-bold underline w-full h-20 border">
        Students
      </button>
    </Link>
    <Link href="#about-dustin">
      <button className="nav-button bg-green font-bold underline w-full h-20 border">
        About Dustin
      </button>
    </Link>
    <Link href="#contact">
      <button className="nav-button bg-black text-white font-bold underline w-full h-20 border">
        Contact
      </button>
    </Link>
    <Link href="">
      <button className="nav-button bg-white font-bold underline w-full h-20 border">
        Enroll
      </button>
    </Link>
  </>
);

function Nav({}) {
  const [menuClosed, setMenuClosed] = useState(true);
  const menuHandler = () => {
    menuClosed ? setMenuClosed(false) : setMenuClosed(true);
  };
  let mobileClasses =
    "fixed grid grid-cols-1 gap-y-4 pl-6 pr-10 bg-blueDark w-screen h-screen items-center py-16";

  let menu = (
    <div
      className="menu-wrapper fixed top-6 right-6 lg:hidden"
      onClick={menuHandler}
    >
      <Menu />
    </div>
  );
  return (
    <>
      <Enroll />
      {menu}
      <nav
        className={
          (menuClosed ? "menu" : "menu-visible") +
          " " +
          mobileClasses +
          " " +
          "lg:bg-transparent lg:bg-opacity-0 lg:translate-x-0 lg:h-auto lg:w-auto lg:grid lg:grid-cols-7 lg:gap-x-6 lg:w-full lg:pb-8 lg:px-32 lg:fixed lg:left-0 lg:bottom-0 lg:z-100"
        }
      >
        {links}
      </nav>
    </>
  );
}

export default Nav;
