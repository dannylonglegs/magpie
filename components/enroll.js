import Star from "./svg/star";

function Enroll({}) {
  return (
    // <div className="star-wrapper flex flex-col justify-center items-center lg:block lg:fixed lg:top-0 lg:left-0 lg:pt-6 lg:pl-4">
    <div className="star-wrapper flex flex-col justify-center items-center invisible block fixed bottom-0 mb-auto w-full pb-6 lg:visible lg:top-0 lg:left-0 lg:pt-4 lg:pl-2 lg:w-64">
      <a
        href="https://magpie-english.myshopify.com"
        className="absolute lg:m-auto lg:text-center lg:font-bold underline"
      >
        Enroll Today!
      </a>
      <Star className="lg:absolute" />
    </div>
  );
}

export default Enroll;
