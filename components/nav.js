import { useState } from "react";
import Link from "next/link";
import Enroll from "../components/enroll";
import Menu from "./svg/menu";

const links = (
  <>
    <Link href="/#welcome">
      <button className="nav-button bg-grey font-bold underline">
        Welcome
      </button>
    </Link>
    <Link href="#method">
      <button className="nav-button bg-pink font-bold underline">Method</button>
    </Link>
    <Link href="#program">
      <button className="nav-button bg-yellow font-bold underline">
        Program
      </button>
    </Link>
    <Link href="#why-magpie">
      <button className="nav-button bg-green font-bold underline">
        Why Magpie?
      </button>
    </Link>
    <Link href="#about-dustin">
      <button className="nav-button bg-blueLight font-bold underline">
        About Dustin
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
    "fixed flex flex-col bg-blueDark w-screen h-screen items-center py-16";

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
          "lg:bg-transparent lg:bg-opacity-0 lg:translate-x-0 lg:h-auto lg:w-auto lg:flex lg:flex-row lg:w-full lg:pb-8 lg:px-32 lg:fixed lg:left-0 lg:bottom-0 lg:z-100"
        }
      >
        {links}
      </nav>
    </>
  );
}

export default Nav;
