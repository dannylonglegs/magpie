import Head from "next/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Week from "../components/week";
import Testimonial from "../components/testimonial";
import StudentStar1 from "../components/svg/studentstar1";
import StudentStar2 from "../components/svg/studentstar2";
import StudentStar3 from "../components/svg/studentstar3";
import Title2 from "../components/svg/title2";
import Title3 from "../components/svg/Title3";
import Title4 from "../components/svg/title4";
import Title5 from "../components/svg/title5";
import Apple1 from "../components/svg/apple1";
import Apple2 from "../components/svg/apple2";
import Apple3 from "../components/svg/apple3";
import Pencil1 from "../components/svg/pencil1";
import PencilAndApple from "../components/svg/pencilandapple";
import Title6 from "../components/svg/title6";
import ContactForm from "../components/contactform";
import MobileTitle from "../components/svg/mobile/mobiletitle";
import PageMeta from "../components/pagemeta";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <PageMeta />
      <Nav />

      <main>
        <Hero />
        <section
          id="method"
          className="bg-blueDark px-8 p-16 lg:px-32 lg:py-32"
        >
          <div className="hidden md:flex md:flex-column md:justify-center">
            <Title2 />
          </div>
          <div className="flex flex-column justify-center md:hidden">
            <img
              src="/mobiletitle1.png"
              alt="Magpie's Cores Of Language Learning"
            />
          </div>
          <div className=" grid grid-cols-1 md:px-32 lg:px-0 lg:gap-x-24 lg:grid-cols-3">
            <div className="flex flex-col justify-center lg:justify-start mt-16 ">
              <div className="h-72 mb-6 md:mb-12 flex flex-row justify-center items-center lg:mt-0 z-50">
                <Apple1 />
              </div>
              <div className="foundation -mt-12 text-center lg:text-left p-6 bg-white shadow-boxBlack flex flex-col flex-1">
                <hgroup className="mb-4">
                  <h2 className="text-title font-bold">Fluency</h2>
                </hgroup>
                <p className="text-body">
                  Fluency is the most important part of speaking because it
                  helps us to communicate our ideas as naturally as possible.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start mt-16 ">
              <div className="h-72 mb-6 md:mb-12 flex flex-row justify-center items-center lg:mt-0 z-50">
                <Apple2 />
              </div>
              <div className="foundation -mt-12 text-center lg:text-left p-6 bg-white shadow-boxBlack flex flex-col flex-1">
                <hgroup className="mb-4">
                  <h2 className="text-title font-bold">Confidence</h2>
                </hgroup>
                <p className="text-body">
                  Confidence is trusting our judgment and abilities.
                  Self-confidence gives us permission to be ourselves!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start mt-16 ">
              <div className="h-72 mb-6 md:mb-12  flex flex-row justify-center items-center lg:mt-0 z-50">
                <Apple3 />
              </div>
              <div className="foundation -mt-12 text-center lg:text-left p-6 bg-white shadow-boxBlack flex flex-col flex-1">
                <hgroup className="mb-4">
                  <h2 className="text-title font-bold">Creativity</h2>
                </hgroup>
                <p className="text-body">
                  Creativity is the act of turning new and imaginative ideas
                  into reality. Creativity is at the heart of Magpie English.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="program" className="bg-green px-8 p-16 lg:px-32 lg:py-32">
          <div className="hidden md:flex md:flex-column md:justify-center">
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
            <ol className="mt-8 weeks-list md:px-24 lg:p-0 lg:pl-16 w-full mt-0 lg:mt-24">
              <Week
                number="1"
                title="Schedule for Success:"
                description="Personalized scheduling to steer you on track."
                color="neonYellow"
              />
              <Week
                number="2"
                title="Effective Communication:"
                description="Interactive group lessons to challenge your speaking and listening skills. "
                color="white"
              />
              <Week
                number="3"
                title="Reading Comprehension:"
                description="Become a confident reader by connecting to your school’s reading material."
                color="neonYellow"
              />
              <Week
                number="4"
                title="Exam Prep:"
                description="Dedicated exam guidance that fits your schedule."
                color="white"
              />
              <Week
                number="5"
                title="Essay Writing: "
                description="Give your essay writing the advantage with a strategy that suits your style."
                color="neonYellow"
              />
              <Week
                number="6"
                title="Impromptu Speech: "
                description="Weekly group lessons to bolster your impromptu speaking creativity."
                color="white"
              />
            </ol>
          </div>
        </section>
        <section
          id="why-magpie"
          className="bg-red px-8 pt-16 pb-24 lg:px-32 lg:py-32"
        >
          <div className="hidden md:flex md:flex-column md:justify-center">
            <Title4 />
          </div>
          <div className="flex flex-column justify-center md:hidden">
            <img
              src="/mobiletitle2.png"
              alt="Magpie's Cores Of Language Learning"
            />
          </div>
          <div className="grid grid-cols-1 md:px-32 lg:px-0 lg:gap-x-24 lg:grid-cols-3">
            <Testimonial
              svg={<StudentStar1 />}
              subtitle=""
              title="Sophia"
              description="“Thank you for being my teacher so I can learn and grow”"
            />
            <Testimonial
              svg={<StudentStar2 />}
              subtitle="性格"
              title="Jenna"
              description="“Tr. Dustin always works hard to prepare fun teaching material and organizes our classes to go well!”"
              opposite
            />
            <Testimonial
              svg={<StudentStar3 />}
              subtitle=""
              title="Ivor"
              description="“Thanks for making us laugh in class every day!”"
            />
          </div>
        </section>
        <section
          id="about-dustin"
          className="bg-green px-8 py-16 lg:px-32 lg:pt-16 lg:pb-32"
        >
          <div className="hidden md:flex md:flex-column md:justify-center">
            <Title5 />
          </div>
          <div className="flex flex-column justify-center md:hidden">
            <img
              src="/mobiletitle5.png"
              alt="Magpie's Cores Of Language Learning"
            />
          </div>
          <div className="bg-white shadow-boxBlack lg:grid lg:grid-cols-3 gap-x-14 py-8 px-6 md:mx-32 lg:mx-0 lg:px-12 mt-8 md:mt-24">
            <div className="flex flex-col justify-center">
              <img src="/dustin.png" alt="Teacher Dustin" />
            </div>
            <div className="lg:col-span-2 lg:grid lg:grid-cols-3">
              <div className="mt-auto">
                <p className="pt-6 lg:pt-0 text-body font-bold ">
                  Dustin Chok <br /> email@email.com <br /> +01234567891011
                </p>
              </div>
              <div className="hidden lg:block lg:col-span-2 lg:-mt-32 md:px-8 lg:px-0 xl:px-12">
                <PencilAndApple />
              </div>
              <div className="lg:col-span-3 pt-6 text-bodymobile lg:text-body">
                <p>
                  Hi! I’m Teacher Dustin. My goal as an ESL teacher is more than
                  just helping you learn a new language; I wish to help you
                  discover new and interesting parts about yourself through
                  language. Fluency will help us foster self-confidence which
                  will allow us to interact creatively. My teaching method
                  focuses on creativity because, yes, learning should be fun and
                  interesting, but it can also help us discover the types of
                  people we want to be.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-grey md:bg-white px-8 py-16 lg:px-32 lg:pt-16 lg:pb-32"
        >
          <div className="hidden md:flex md:flex-column md:justify-center">
            <Title6 />
          </div>
          <div className="flex flex-column justify-center md:hidden">
            <img
              src="/mobiletitle3.png"
              alt="Magpie's Cores Of Language Learning"
            />
          </div>
          <div className="mt-8 mb-24 md:mx-32 lg:mx-0">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
