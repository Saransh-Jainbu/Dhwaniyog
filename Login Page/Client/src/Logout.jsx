import React from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from './Heading';
import bg2 from './assets/bg2.jpg'


const Logout = () => {
    const navigate = useNavigate();
  return (
    <>
    <Heading /> 
    <div className='flex justify-center h-screen items-center -mt-16 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bg2})` }}>
        
      <div className='font-semibold font-garmond text-3xl flex flex-col '>
        LOG OUT SUCCESSFUL

      <button onClick={()=> navigate("/studentlogin")} className='text-xl mt-6 bg-[#FF685B] text-white rounded-l p-2'>
        Back to Login
      </button>

      <button onClick={()=> navigate("/")} className='text-xl mt-6 bg-[#FF685B] text-white rounded-l p-2'>
        Back to Home Page
      </button>

      </div>

      

    </div>
    </>
  )
}

export default Logout