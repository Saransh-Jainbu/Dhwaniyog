import React from 'react'
import Heading from './Heading'
import { useNavigate } from 'react-router-dom'

const Reset = () => {
const navigate = useNavigate();
    return (
    <>
    <Heading />
    <div className='flex w-screen h-[80vh] justify-center items-center'>
        <div className='flex flex-col items-start justify-center'>
            <span className='text-2xl font-medium'>Reset Your Password</span>

            <span className='text-gray-500 text-sm mt-4'>Type in your registered email address to reset password</span>
        <input type='email' placeholder='Email Address *' className='mb-4 border p-2 rounded w-[400px] mt-4'/>
        <button onClick={()=> navigate("/resetpassword")} className='flex mr-40 bg-[#FF685B] py-2.5 px-5 items-center rounded-md tracking-wide font-bold font-montserrat text-white text-sm not-italic space-x-2.5 mb-4 '>Next
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor" className="w-4 h-4 ml-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </button>
        <button onClick={() => navigate("/studentlogin")} className='w-[400px] flex justify-center items-center bg-black text-white text-sm font-medium uppercase tracking-[0.46px] py-3 rounded shadow-md font-roboto'>Back to Login</button>
        </div>
    </div>

    </>
  )
}

export default Reset