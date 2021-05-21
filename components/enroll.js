import Star from "./svg/star";

function Enroll({}) {
  return (
    <div className="star-wrapper fixed top-0 left-0 pt-6 pl-4">
      <h1 className="absolute m-auto text-center font-bold underline">
        Enroll Today!
      </h1>
      <Star className="absolute" />
    </div>
  );
}

export default Enroll;
