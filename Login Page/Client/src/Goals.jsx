import React from "react";
import Leftbar from "./Leftbar";

const Goals = () => {
  return (
    <>
      <div className="flex">
        <Leftbar />
        <div className="flex flex-col p-2 ml-[380px] mt-12 w-[850px] ">
          <span className="font-roboto font-bold text-3xl">Goals Plan</span>

          <div className="flex flex-col ml-4 mt-20">
            {/* Activity-1 */}
            <div className=" font-bold text-xl">
              <div className="flex justify-between">
                Progress
                <button className="font-montserrat p-2 font-semibold text-lg bg-red-500 w-auto rounded-3xl text-white ">
                  View Attachments
                </button>
              </div>
              <div className="mb-4 font-normal ml-4 text-[16px] text-slate-600 font-roboto ">
                Try to twist tongue
              </div>
            </div>

            {/* Activity-2 */}
            <div className="font-bold text-xl mt-8">
              Expectation
              <div className="mt-4 font-normal ml-4 text-[16px] text-slate-600 font-roboto">
                Try to twist tongue
              </div>
            </div>
          </div>
          <div className="mt-12 ">
            <span className="font-roboto font-bold text-xl ">Feedback:</span>
          </div>

          <input type="text" placeholder="Type your suggestions here" className="border-2 p-4 mt-4 w-[70vh] h-[10vh] mb-8"></input>
            

          <select className="border p-3 rounded w-[200px] pr-8">
                <option value="" disabled selected hidden>
                  Evaluate
                </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
          <div className="flex justify-end  ">
            <button className="bg-blue-950 p-2 text-white font-montserrat font-semibold rounded-3xl w-[120px] mb-12">
              {" "}
              Submit{" "}
            </button>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Goals;
