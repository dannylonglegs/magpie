import Link from "next/link";

function Nav({}) {
  return (
    <nav className="w-full pb-8 px-marginDesktop fixed left-0 bottom-0 z-100">
      <Link href="/#welcome">
        <button className="nav-button bg-grey">Welcome</button>
      </Link>

      <Link href="#method">
        <button className="nav-button bg-pink">Method</button>
      </Link>
      <Link href="#program">
        <button className="nav-button bg-yellow">Program</button>
      </Link>
      <Link href="#why-magpie">
        <button className="nav-button bg-green">Why Magpie?</button>
      </Link>
      <Link href="#about-dustin">
        <button className="nav-button bg-blueLight">About Dustin</button>
      </Link>
    </nav>
  );
}

export default Nav;
