import Testimonial from "../components/testimonial";
import Title4 from "../components/svg/title4";
import StudentStar1 from "../components/svg/studentstar1";
import StudentStar2 from "../components/svg/studentstar2";
import StudentStar3 from "../components/svg/studentstar3";

let data = [
  {
    svg: <StudentStar1 />,
    title: "Sophia",
    desc: "“Thank you for being my teacher so I can learn and grow”",
  },
  {
    svg: <StudentStar2 />,
    title: "Jenna",
    desc: "“Tr. Dustin always works hard to prepare fun teaching material and organizes our classes to go well!”",
  },
  {
    svg: <StudentStar3 />,
    title: "Ivor",
    desc: "“Thanks for making us laugh in class every day!”",
  },
];

const Testimonials = () => {
  let testimonials = data.map((t, i) => {
    return <Testimonial svg={t.svg} title={t.title} description={t.desc} />;
  });

  return (
    <section
      id="why-magpie"
      className="bg-red px-8 pt-16 pb-24 lg:px-48 lg:py-24"
    >
      <div className="hidden md:flex md:flex-column md:justify-center lg:w-8/12 lg:m-auto">
        <Title4 />
      </div>
      <div className="flex flex-column justify-center md:hidden">
        <img
          src="/mobiletitle2.png"
          alt="Magpie's Cores Of Language Learning"
        />
      </div>
      <div className="grid grid-cols-1 md:px-32 lg:px-0 lg:gap-x-24 lg:grid-cols-3">
        {testimonials}
      </div>
    </section>
  );
};

export default Testimonials;
