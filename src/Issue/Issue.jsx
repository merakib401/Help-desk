import Card from "../Components/Card/Card";
import CountBox from "../Components/CountBox/CountBox";
import ToggleBtn from "../Components/ToggleBtn/ToggleBtn";
import { use, useState } from "react";

export default function Issue({ fetchPromise }) {
  const [toggleStatus, setToggleStatus] = useState("All");
  const data = use(fetchPromise);
  // console.log(data);
  const [value, setValue] = useState(data)

  const filterValue = toggleStatus == "All" ? data : data.filter((el) => el.status == toggleStatus)

  return (
    <div>
      <CountBox value = {value} />
      <ToggleBtn
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtn>

      <div className="grid md:grid-cols-3 gap-3 max-w-11/12 mx-auto ">
        {filterValue.map((issue, ind) => {
          return <Card key={ind} issue={issue} />;
        })}
      </div>
    </div>
  );
}
