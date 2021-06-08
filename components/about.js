import Title5 from "../components/svg/title5";
import PencilAndApple from "../components/svg/pencilandapple";

const About = () => {
  return (
    <section
      id="about-dustin"
      className="bg-green px-8 py-24 lg:px-48 lg:pt-16 lg:pb-32"
    >
      <div className="hidden md:flex md:flex-column md:justify-center lg:w-8/12 lg:m-auto">
        <Title5 />
      </div>
      <div className="flex flex-column justify-center md:hidden">
        <img
          src="/mobiletitle5.png"
          alt="Magpie's Cores Of Language Learning"
        />
      </div>
      <div className="relative bg-white shadow-boxBlack lg:grid lg:grid-cols-3 gap-x-14 py-8 px-6 md:mx-32 lg:mx-0 lg:px-12 mt-8 md:mt-16 lg:w-11/12 lg:mx-auto">
        <div className="hidden lg:block lg:absolute lg:-top-48 lg:right-0 lg:w-80">
          <PencilAndApple />
        </div>
        <div className="flex flex-col justify-center">
          <img src="/dustin.png" alt="Teacher Dustin" />
        </div>
        <div className="lg:col-span-2 lg:grid lg:grid-cols-1">
          <div className="mt-auto">
            <p className="pt-6 lg:pt-0 text-body font-bold ">
              Dustin Chok <br /> email@email.com <br /> +01234567891011
            </p>
          </div>
          <div className="pt-6 text-bodymobile lg:text-body">
            <p>
              Hi! I’m Teacher Dustin. My goal as an ESL teacher is more than
              just helping you learn a new language; I wish to help you discover
              new and interesting parts about yourself through language. Fluency
              will help us foster self-confidence which will allow us to
              interact creatively. My teaching method focuses on creativity
              because, yes, learning should be fun and interesting, but it can
              also help us discover the types of people we want to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
