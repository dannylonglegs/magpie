import Title2 from "../components/svg/title2";
import Apple1 from "../components/svg/apple1";
import Apple2 from "../components/svg/apple2";
import Apple3 from "../components/svg/apple3";

let data = [
  {
    svg: <Apple1 />,
    title: "Fluency",
    desc: "Fluency is the most important part of speaking because it helps us to communicate our ideas as naturally as possible.",
  },
  {
    svg: <Apple2 />,
    title: "Confidence",
    desc: " Confidence is trusting our judgment and abilities. Self-confidence gives us permission to be ourselves!",
  },
  {
    svg: <Apple3 />,
    title: "Creativity",
    desc: "Creativity is the act of turning new and imaginative ideas into reality. Creativity is at the heart of Magpie English.",
  },
];

const Foundations = () => {
  let foundations = data.map((f, i) => {
    return (
      <div className="flex flex-col justify-center lg:justify-start mt-16 ">
        <div className="foundation text-center lg:text-left  bg-white shadow-boxBlack flex flex-col flex-1">
          <div className="h-60 mb-6 md:mb-12 flex flex-row justify-center items-center px-4 lg:-mt-16 z-50">
            {f.svg}
          </div>
          <hgroup className="px-6 pb-2">
            <h2 className="text-title font-bold">{f.title}</h2>
          </hgroup>
          <p className="text-body px-6 pb-6">{f.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <section id="method" className="bg-blueDark px-8 p-16 lg:px-48 lg:py-24">
      <div className="hidden md:flex md:flex-column md:justify-center lg:w-8/12 lg:m-auto">
        <Title2 />
      </div>
      <div className="flex flex-column justify-center md:hidden">
        <img
          src="/mobiletitle1.png"
          alt="Magpie's Cores Of Language Learning"
        />
      </div>
      <div className=" grid grid-cols-1 md:px-32 lg:px-0 lg:gap-x-24 lg:grid-cols-3">
        {foundations}
      </div>
    </section>
  );
};

export default Foundations;
