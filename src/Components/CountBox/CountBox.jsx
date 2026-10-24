export default function CountBox({value}) {
  const pendingVlue = value.filter((element) =>element.status== "Pending")
  const submittedVlue = value.filter((element) =>element.status== "Submitted")
  const reviewedVlue = value.filter((element) =>element.status== "Reviewed")
 

  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-3 gap-3 w-11/12 mx-auto my-8">
        <div className="bg-[#4A5565] h-50 rounded-xl p-7 text-white flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Pending</h1>
          <p className="font-semibold text-2xl">{pendingVlue.length}</p>
        </div>
        <div className="bg-[#A543F3] h-50 rounded-xl p-7 text-white flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Submitted</h1>
          <p className="font-semibold text-2xl">{submittedVlue.length}</p>
        </div>
        <div className="bg-[#00BBA7] h-50 rounded-xl p-7 text-white flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Reviewed</h1>
          <p className="font-semibold text-2xl">{reviewedVlue.length} </p>
        </div>
      </div>
    </div>
  );
}
