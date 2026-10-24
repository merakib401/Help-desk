import "../../app.css";

export default function ToggleBtn({ toggleStatus, setToggleStatus }) {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <div>
      <div className="text-right w-11/12 mx-auto mb-8">
        {btns.map((btn, ind) => {
          return (
            <button
              key={ind}
              className={`toggleBtn ${ind == 0 && " rounded-l-lg"} ${ind == btns.length - 1 && " rounded-r-lg"} ${toggleStatus == btn && "bg-purple-500! text-white!"}`}
              onClick={() => setToggleStatus(btn)}
            >
              {btn}
            </button>
          );
        })}
        {/* <button
          className={` toggleBtn ${toggleStatus == "Pending" && "!bg-purple-500 !text-white"} `}
          onClick={() => setToggleStatus("Pending")}
        >
          Pending{" "}
        </button>
        <button
          className={`toggleBtn ${toggleStatus == "Submitted" && "!bg-purple-500 !text-white"}`}
          onClick={() => setToggleStatus("Submitted")}
        >
          Submitted
        </button>
        <button
          className={`toggleBtn rounded-r-lg ${toggleStatus == "Reviewed" && "!bg-purple-500 !text-white"}`}
          onClick={() => setToggleStatus("Reviewed")}
        >
          Reviewed
        </button> */}
      </div>
    </div>
  );
}
