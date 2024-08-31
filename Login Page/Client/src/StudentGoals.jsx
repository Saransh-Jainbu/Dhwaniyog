import React from 'react'
import StuLeftbar from './StuLeftBar'

const StudentGoals = () => {
  return (
   <>
        <div className="flex">
        <StuLeftbar/>
        <div className="flex flex-col p-2 mt-12 w-[850px] ml-[380px] ">
          <span className="font-roboto font-bold text-3xl"> Goals </span>

          <div className="flex flex-col ml-4 mt-16">
            
            <span className="font-roboto font-bold text-xl ">
              Progress
            </span>
          </div>
          <textarea type="text" placeholder="Type your progress here" className="border-2 p-4 mt-4 h-[20vh] w-[70vh] mb-2"></textarea>

          <div className="flex flex-col ml-4 mt-8">
            
            <span className="font-roboto font-bold text-xl ">
              Expectation 
            </span>
          </div>
          <textarea type="text" placeholder="Type your expectations here" className="border-2 p-4 mt-4 h-[20vh] w-[70vh] mb-8"></textarea>
        <div className="flex justify-between gap-20  ">

          <button className="font-montserrat p-2 font-semibold text-lg bg-red-500 w-auto rounded-3xl text-white pr-4 pl-4">Add Attachments</button>
          <button className="font-montserrat p-2 font-semibold text-lg bg-red-500 w-auto rounded-3xl text-white pr-4 pl-4">Add Activity</button>
          <button className="bg-blue-950 p-2 text-white font-montserrat font-semibold rounded-3xl w-[120px]"> Submit </button>


          </div>
        </div>
      </div>  
   </>
  )
}

export default StudentGoals