import Nav from "../components/nav";
import Hero from "../components/hero";

import Title6 from "../components/svg/title6";
import ContactForm from "../components/contactform";
import PageMeta from "../components/pagemeta";
import Foundations from "../components/foundations";
import Testimonials from "../components/testimonials";
import Curriculum from "../components/curriculum";
import About from "../components/about";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <PageMeta />
      <Nav />
      <main>
        <Hero />
        <Foundations />
        <Curriculum />
        <Testimonials />
        <About />
        <section
          id="contact"
          className="bg-grey md:bg-white px-8 py-16 lg:px-48 lg:pt-16 lg:pb-32"
        >
          <div className="hidden md:flex md:flex-column md:justify-center lg:w-8/12 lg:m-auto">
            <Title6 />
          </div>
          <div className="flex flex-column justify-center md:hidden">
            <img
              src="/mobiletitle3.png"
              alt="Magpie's Cores Of Language Learning"
            />
          </div>
          <div className="mt-8 mb-24 md:mx-36 lg:mx-32">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
