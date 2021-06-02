import MagpieEnglish from "./svg/magpieenglish";

function Hero({}) {
  return (
    <section
      id="welcome"
      className="hero px-8 py-16 bg-yellow overflow-hidden lg:px-32 lg:pb-32"
    >
      <div className="flex flex-col h-auto pt-12 lg:flex-row lg:justify-center lg:h-auto lg:items-center lg:content-center mb-16 z-50">
        <MagpieEnglish />
      </div>
      <div className="opening-description shadow-boxWhite relative bg-black py-12 px-8 lg:py-24 lg:px-24 z-50">
        <p className="text-bodymobile md:text-body text-white">
          At Magpie English our mission is to give you the attention that you
          need in order to discover the language within you. Everybody has a
          different language that's unique to them; that’s your voice. Using the
          three foundations of language learning: Fluency, Self-Confidence, and
          Creativity we wish to help you discover your voice.
        </p>
      </div>
    </section>
  );
}

export default Hero;
