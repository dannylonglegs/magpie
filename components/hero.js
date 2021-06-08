import Discover from "./svg/discover";
import MagpieEnglish from "./svg/magpieenglish";

function Hero({}) {
  return (
    <section
      id="welcome"
      className="hero px-8 py-16 bg-yellow overflow-hidden lg:px-48 lg:pb-32 lg:pt-32"
    >
      <div className="flex flex-col h-auto lg:flex-row lg:justify-center lg:items-center lg:content-center lg:px-64 z-50">
        <MagpieEnglish />
      </div>
      <div className="flex flex-row justify-center px-8 lg:px-0 z-60 md:w-3/4 lg:w-4/12 md:mx-auto">
        <Discover />
      </div>
      <div className="opening-description shadow-boxWhite relative bg-black py-12 px-8 lg:py-12 lg:px-12 z-50 lg:w-3/4 lg:m-auto">
        <p className="text-bodymobile md:text-body text-white">
          At <span className="font-bold">Magpie English</span> our mission is to
          give you the attention that you need in order to discover the language
          within you. Everybody has a different language that's unique to them;
          that’s your voice. Using the three foundations of language learning:{" "}
          <span className="font-bold">Fluency, Self-Confidence,</span> and{" "}
          <span className="font-bold">Creativity</span> we wish to help you
          discover your voice.
        </p>
      </div>
    </section>
  );
}

export default Hero;
