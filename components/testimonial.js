function Testimonial({ svg, subtitle, title, description, opposite }) {
  return (
    <div className="flex flex-col justify-center lg:justify-start mt-16 ">
      <div className="foundation text-center lg:text-left  bg-white shadow-boxBlack flex flex-col flex-1">
        <div className="h-60  mb-4 md:mb-4 flex flex-row justify-center items-center px-4 lg:h-48 lg:mt-0 z-50">
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
