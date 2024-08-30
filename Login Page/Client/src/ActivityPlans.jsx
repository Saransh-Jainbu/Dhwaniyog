import React from "react";
import Leftbar from "./Leftbar";

const ActivityPlans = () => {
  return (
    <>
      <div className="flex">
        <Leftbar />
        <div className="flex flex-col p-2 mt-12 w-[850px] ml-[380px] ">
          <span className="font-roboto font-bold text-3xl">Activity Plans</span>

          <div className="flex flex-col ml-4 mt-20">
            {/* Activity-1 */}
            <div className=" font-bold text-xl">
              <div className="flex justify-between">
                Activity 1:
                <button className="font-montserrat p-2 w-[180px] font-semibold text-lg bg-red-500 w-auto rounded-3xl text-white ">View Application</button>
              </div>
              <div className="mb-4 font-normal ml-4 text-[16px] text-slate-600 font-roboto ">
                Try to twist tongue
              </div>
            </div>

            {/* Activity-2 */}
            <div className="font-bold text-xl mt-8">
              Activity 2:
              <div className="mt-4 font-normal ml-4 text-[16px] text-slate-600 font-roboto">
                Try to twist tongue
              </div>
            </div>
          </div>
          <div className="mt-12 ">
            <span className="font-roboto font-bold text-xl ">
              Suggestion / Remarks
            </span>
          </div>

          

          <div className="border-2 p-4 mt-4 w-[70vh] h-[20vh] mb-8">Try to twist tongue</div>
        <div className="flex justify-end  ">
          <button className="bg-blue-950 p-2 text-white font-montserrat font-semibold rounded-3xl w-[120px]"> Submit </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityPlans;
