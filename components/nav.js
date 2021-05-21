function Nav({}) {
  return (
    <nav className="w-full pb-8 px-marginDesktop fixed left-0 bottom-0">
      <button className="nav-button bg-grey">Welcome</button>
      <button className="nav-button bg-pink">Method</button>
      <button className="nav-button bg-yellow">Program</button>
      <button className="nav-button bg-green">Why Magpie?</button>
      <button className="nav-button bg-blueLight">About Dustin</button>
    </nav>
  );
}

export default Nav;
