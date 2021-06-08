function Testimonial({ svg, subtitle, title, description, opposite }) {
  return (
    // <div className="flex flex-col justify-center lg:justify-start mt-16 ">
    //   <div
    //     className={
    //       "testimonial-description p-6 flex flex-col flex-1 justify-between z-10" +
    //       " " +
    //       (opposite
    //         ? "bg-black text-white shadow-boxWhite"
    //         : "bg-white shadow-boxBlack")
    //     }
    //   >
    //     <div className="h-60 -mt-16 z-40 mx-auto -mb-12 lg:-mb-12">{svg}</div>
    //     <p className="text-body font-bold pt-4 ">{description}</p>
    //     <hgroup className="pt-8">
    //       {/* <h3 className="text-title">{subtitle}</h3> */}
    //       <h2 className="text-title font-bold">- {title}</h2>
    //     </hgroup>
    //   </div>
    // </div>

    <div className="flex flex-col justify-center lg:justify-start mt-16 ">
      <div className="foundation text-center lg:text-left  bg-white shadow-boxBlack flex flex-col flex-1">
        <div className="h-48 mb-4 md:mb-4 flex flex-row justify-center items-center px-4 lg:mt-0 z-50">
          {svg}
        </div>
        <hgroup className="px-6 pb-2">
          <h2 className="text-title font-bold">{title}</h2>
        </hgroup>
        <p className="text-body px-6 pb-6">{description}</p>
      </div>
    </div>
  );
}

export default Testimonial;
