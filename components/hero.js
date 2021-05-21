import BigStar from "../components/svg/bigstar";
import Polygon from "../components/svg/polygon";
import LongRectangle from "../components/svg/longrectangle";
import Rectangle from "../components/svg/rectangle";

function Hero({}) {
  return (
    <section id="welcome" className="hero bg-grey overflow-hidden">
      <BigStar />
      <Polygon />
      <LongRectangle />
      <Rectangle />
    </section>
  );
}

export default Hero;
