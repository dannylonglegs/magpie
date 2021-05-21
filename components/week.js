function Week({ number, title, description, color }) {
  let opacity = "bg-opacity-100";
  let bgcolor = "bg-white";

  if (color == "neonYellow") {
    opacity = "bg-opacity-20";
    bgcolor = "bg-neonYellow";
  }

  return (
    <li
      className={
        bgcolor + " " + opacity + " flex flex-row w-full rounded-full p-2 mb-4"
      }
    >
      <h2 className="pl-8 text-title font-bold">{number}</h2>
      <p className="text-body">
        <b className="font-bold">{title} </b>
        <br />
        {description}
      </p>
    </li>
  );
}

export default Week;
