import PageMeta from "../components/pagemeta";
import MagpieEnglish from "../components/svg/magpieenglish";
import PayButton from "../components/paypalbutton";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <PageMeta
        title="Magpie English - Enroll Now!"
        description="Enroll in the Magpie English 6 week program now!"
      />
      <section className="bg-red h-screen px-8 py-16">
        <div className="w-3/12 m-auto">
          <MagpieEnglish />
        </div>
        <PayButton />
      </section>
    </div>
  );
}
