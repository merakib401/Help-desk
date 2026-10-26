export default function Card({ issue, value, setValue }) {
  const handleClick = () => {
    // console.log("ckikdfj");

    const currentValue = value.find((el) => el.ticketId === issue.ticketId)
    // console.log(currentValue);

    if(currentValue.status == "Pending"){
        currentValue.status = "Submitted"
    }else if (currentValue.status == "Submitted"){
        currentValue.status = "Reviewed"
    }
    
    const restValue = value.filter((el) =>el.ticketId !== issue.ticketId)
// console.log(restValue);

    setValue ([currentValue , ...restValue])
  };
  return (
    <div className="">
      <div className=" bg-base-200 w-110 shadow-sm " onClick={handleClick}>
        <figure>
          <img
            className=" rounded-full h-20 w-20 p-4"
            src={issue.userImg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{issue.requestedBy}</h2>

          <div className="flex justify-between">
            <h1 className="font-bold text-xl">{issue.subject}</h1>
            <div>
              <button
                className={`btn  mx-2 ${issue.priority == "High" ? "text-red-500 bg-red-100" : issue.priority == "Medium" ? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"}`}
              >
                {issue.priority}
              </button>
              <button
                className={`btn px-2 ${issue.status == "Submitted" ? "text-red-500 bg-red-100" : issue.status == "Reviewed" ? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"}`}
              >
                {issue.status}
              </button>
            </div>
          </div>
          <p>{issue.description}</p>
        </div>
      </div>
    </div>
  );
}
