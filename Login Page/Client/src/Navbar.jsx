import React from 'react';

const Navbar = () => {
  return (
    <div className='flex p-4 mt-4 justify-between'>
      <div className='flex ml-24 font-montserrat text-2xl font-bold tracking-wide'>
        DHWANI
      </div>

      <button className='flex mr-40 bg-[#FF685B] py-2.5 px-5 items-center rounded-md tracking-wide font-bold font-montserrat text-white text-sm not-italic space-x-2.5'>
        <span>Login</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
