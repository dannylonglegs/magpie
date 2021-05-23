import Star from "./svg/star";

function Enroll({}) {
  return (
    <div className="star-wrapper flex flex-col justify-center items-center lg:block lg:fixed lg:top-0 lg:left-0 lg:pt-6 lg:pl-4">
      <h1 className="absolute lg:m-auto lg:text-center lg:font-bold underline">
        Enroll Today!
      </h1>
      <Star className="lg:absolute" />
    </div>
  );
}

export default Enroll;
