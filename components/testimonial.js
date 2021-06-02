function Testimonial({ svg, subtitle, title, description, opposite }) {
  return (
    <div className="flex flex-col justify-center mt-16 ">
      <div className="h-80 z-40">{svg}</div>
      <div
        className={
          "testimonial-description p-6 flex flex-col justify-between -mt-20 z-10" +
          " " +
          (opposite
            ? "bg-black text-white shadow-boxWhite"
            : "bg-white shadow-boxBlack")
        }
      >
        <p className="text-body font-bold pt-4 ">{description}</p>
        <hgroup className="pt-8">
          {/* <h3 className="text-title">{subtitle}</h3> */}
          <h2 className="text-title font-bold">- {title}</h2>
        </hgroup>
      </div>
    </div>
  );
}

export default Testimonial;
