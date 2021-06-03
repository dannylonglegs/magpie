function Week({ number, title, description, color }) {
  let text1 = "text-black";
  let text2 = "text-white";
  let bgcolor1 = "bg-white";
  let bgcolor2 = "bg-black";
  let boxShadow1 = "shadow-boxWhite";
  let boxShadow2 = "shadow-boxBlack";

  if (color == "neonYellow") {
    text1 = "text-white";
    text2 = "text-black";
    bgcolor1 = "bg-black";
    bgcolor2 = "bg-white";
    boxShadow1 = "shadow-boxBlack";
    boxShadow2 = "shadow-boxWhite";
  }

  return (
    <li className={" flex flex-col lg:flex-row w-full p-2 mb-4"}>
      <div
        className={
          bgcolor1 +
          " " +
          text1 +
          " " +
          boxShadow2 +
          " " +
          " text-title font-bold flex flex-col justify-center text-center p-4 lg:p-0"
        }
      >
        <h2>{number}</h2>
      </div>
      <p
        className={
          bgcolor2 +
          " " +
          text2 +
          " " +
          boxShadow1 +
          " " +
          "text-body px-4 py-8 lg:p-2 lg:pl-4"
        }
      >
        <b className="font-bold">{title} </b>
        <br />
        {description}
      </p>
    </li>
  );
}

export default Week;
