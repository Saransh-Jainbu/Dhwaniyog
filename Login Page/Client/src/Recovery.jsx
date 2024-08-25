import React from 'react'
import Heading from './Heading'


const Recovery = () => {
  return (
    <>
    <Heading />
    <div className='flex w-screen h-[80vh] justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
            <span className='text-2xl font-medium'>Recovery Email Sent!</span>

            <span className='text-gray-500 text-sm mt-4'>Please check your email for next steps to reset your password.</span>
        <button className='w-[400px] flex justify-center items-center bg-black text-white text-sm font-medium uppercase tracking-[0.46px] py-3 rounded shadow-md font-roboto mt-8'>Back to Login</button>
        </div>
    </div>

    </>
  )
}

export default Recovery