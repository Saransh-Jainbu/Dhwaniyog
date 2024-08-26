import React from 'react'
import { useNavigate } from 'react-router-dom'

const Heading = () => {
const navigate = useNavigate();
    return (
    <>
    <div className='flex p-4 mt-4 justify-between'>
      <button onClick={()=> navigate("/")} className='flex ml-24 font-montserrat text-2xl font-bold tracking-wide'>
        DHWANIयोग
      </button>
    </div>
    </>
  )
}

export default Heading