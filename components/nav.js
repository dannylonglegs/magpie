import { useState } from "react";
import Link from "next/link";
import Enroll from "../components/enroll";
import Menu from "./svg/menu";
import Close from "./svg/close";

function Nav({}) {
  const [menuClosed, setMenuClosed] = useState(true);
  const menuHandler = () => {
    menuClosed ? setMenuClosed(false) : setMenuClosed(true);
  };
  let mobileClasses =
    "fixed grid grid-cols-1 gap-y-4 px-6 bg-blueDark w-screen h-screen items-center pt-20 pb-12";

  let menu = (
    <div
      className="bg-yellow p-4 menu-wrapper fixed top-4 right-4 lg:hidden"
      onClick={menuHandler}
    >
      <Menu />
    </div>
  );

  let close = (
    <div
      className="p-4 menu-wrapper fixed top-4 right-4 lg:hidden"
      onClick={menuHandler}
    >
      <Close />
    </div>
  );

  const links = (
    <>
      <Link href="/#welcome">
        <button
          onClick={menuHandler}
          className="nav-button bg-yellow font-bold underline w-full h-full lg:h-20 border"
        >
          Discover
        </button>
      </Link>
      <Link href="#method">
        <button
          onClick={menuHandler}
          className="nav-button bg-blueDark text-white font-bold underline w-full h-full lg:h-20 border"
        >
          Learning
        </button>
      </Link>
      <Link href="#program">
        <button
          onClick={menuHandler}
          className="nav-button bg-green font-bold underline w-full h-full lg:h-20 border"
        >
          Curriculum
        </button>
      </Link>
      <Link href="#why-magpie">
        <button
          onClick={menuHandler}
          className="nav-button bg-red font-bold underline w-full h-full lg:h-20 border"
        >
          Students
        </button>
      </Link>
      <Link href="#about-dustin">
        <button
          onClick={menuHandler}
          className="nav-button bg-green font-bold underline w-full h-full lg:h-20 border"
        >
          About Dustin
        </button>
      </Link>
      <Link href="#contact">
        <button
          onClick={menuHandler}
          className="nav-button bg-black text-white font-bold underline w-full h-full lg:h-20 border"
        >
          Contact
        </button>
      </Link>
      <a href="https://magpie-english.myshopify.com/">
        <button
          onClick={menuHandler}
          className="nav-button bg-white font-bold underline w-full h-full lg:h-20 border"
        >
          Enroll
        </button>
      </a>
    </>
  );

  return (
    <>
      <Enroll />
      {menuClosed ? menu : close}
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
