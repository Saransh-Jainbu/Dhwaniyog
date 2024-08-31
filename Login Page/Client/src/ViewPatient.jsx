import React from "react";

import dashboard_1 from "./assets/dashboard_1.jpeg";
import StuLeftbar from "./StuLeftBar";

const ViewPatient = () => {
  return (
    <div className="flex">
      <StuLeftbar />
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button className="text-2xl font-bold">Patient's Info</button>
            <div className="flex ml-auto items-center space-x-4">
              
              
            </div>
            <div className="relative ml-4">
              <img
                src={dashboard_1}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 rounded">
                First Name
              </div>

              <div className="border p-2 rounded">
                Last Name
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 rounded">
                Gender
              </div>
            
              <div  className="border p-2 rounded">
                Age
              </div>
            </div>
            
            <div className="border p-2 rounded w-full">
                Email
            </div>
            <div className="border p-2 rounded w-full">
                Address
             </div>
            <div className="border p-2 rounded w-full">
                Contact Number
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 rounded">
                Appoint To
              </div>
              <div className="border p-2 rounded">
                Category
              </div>
            </div>


            <div className="border p-2 rounded w-full h-24">
                Feedbacks
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
