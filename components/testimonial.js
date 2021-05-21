function Testimonial({ svg, subtitle, title, description }) {
  return (
    <div>
      {svg}
      <hgroup className="pt-8">
        <h3 className="text-title">{subtitle}</h3>
        <h2 className="text-title font-bold">{title}</h2>
      </hgroup>
      <p className="text-body pt-4">{description}</p>
    </div>
  );
}

export default Testimonial;
