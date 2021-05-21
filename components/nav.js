import Link from "next/link";

function Nav({}) {
  return (
    <nav className="w-full pb-8 px-marginDesktop fixed left-0 bottom-0 z-100">
      <Link href="/#welcome">
        <button className="nav-button bg-grey font-bold underline">
          Welcome
        </button>
      </Link>

      <Link href="#method">
        <button className="nav-button bg-pink font-bold underline">
          Method
        </button>
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
    </nav>
  );
}

export default Nav;
