import Week from "../components/week";
import Title3 from "../components/svg/Title3";
import Pencil1 from "../components/svg/pencil1";

let data = [
  {
    num: "1",
    title: "Schedule for Success:",
    desc: "Personalized scheduling to steer you on track.",
    color: "neonYellow",
  },
  {
    num: "2",
    title: "Effective Communication:",
    desc: "Interactive group lessons to challenge your speaking and listening skills.",
    color: "white",
  },
  {
    num: "3",
    title: "Reading Comprehension:",
    desc: "Become a confident reader by connecting to your school’s reading material.",
    color: "neonYellow",
  },
  {
    num: "4",
    title: "Exam Prep:",
    desc: "Dedicated exam guidance that fits your schedule.",
    color: "white",
  },
  {
    num: "5",
    title: "Essay Writing: ",
    desc: "Give your essay writing the advantage with a strategy that suits your style.",
    color: "neonYellow",
  },
  {
    num: "6",
    title: "Impromptu Speech: ",
    desc: "Weekly group lessons to bolster your impromptu speaking creativity.",
    color: "white",
  },
];

const Curriculum = () => {
  let weeks = data.map((w, i) => {
    return (
      <Week
        number={w.num}
        title={w.title}
        description={w.desc}
        color={w.color}
      />
    );
  });

  return (
    <section id="program" className="bg-green px-8 p-16 lg:px-48 lg:py-24">
      <div className="hidden md:flex md:flex-column md:justify-center lg:w-8/12 lg:m-auto">
        <Title3 />
      </div>
      <div className="flex flex-column justify-center md:hidden">
        <img
          src="/mobiletitle4.png"
          alt="Magpie's Cores Of Language Learning"
        />
      </div>
      <div className="flex flex-row ">
        <div className="hidden lg:block">
          <Pencil1 />
        </div>
        <ol className="mt-8 weeks-list md:px-24 lg:p-0 lg:pl-16 w-full mt-0 ">
          {weeks}
        </ol>
      </div>
    </section>
  );
};

export default Curriculum;
