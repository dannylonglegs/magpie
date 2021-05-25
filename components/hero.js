import BigStar from "../components/svg/bigstar";
import Polygon from "../components/svg/polygon";
import LongRectangle from "../components/svg/longrectangle";
import Rectangle from "../components/svg/rectangle";
import MagpieEnglish from "./svg/magpieenglish";
import Magpie from "./svg/magpie";

function Hero({}) {
  return (
    <section
      id="welcome"
      className="hero px-8 py-16 bg-grey overflow-hidden lg:px-32 lg:pb-32"
    >
      <div className="flex flex-col h-screen pt-12 lg:flex-row lg:justify-center lg:h-auto lg:items-center lg:content-center mb-16 z-50">
        <MagpieEnglish />
        <Magpie />
      </div>
      <div className="opening-description relative bg-white rounded-full py-32 px-12 lg:py-16 lg:px-32 z-50">
        <p className="text-body">
          At Magpie English our mission is to give you the attention that you
          need in order to discover the language within you. Everybody has a
          different language that's unique to them; that’s your voice. Using the
          three foundations of language learning: Fluency, Self-Confidence, and
          Creativity we wish to help you discover your voice.
        </p>
      </div>
      <BigStar />
      <LongRectangle />
      <Rectangle />
    </section>
  );
}

export default Hero;
