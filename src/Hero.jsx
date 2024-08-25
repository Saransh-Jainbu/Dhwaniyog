// import React from 'react'
// import heroImage from './assets/Hero.png'

// const Hero = () => {
//   return (
//     <div className=''>
//         <div className='text-[#FF685B] font-montserrat text-l font-bold mt-20 ml-[115px] '>
//             Track it!
//         </div>

//         <div className='mt-20 ml-[115px] font-roboto font-bold text-5xl tracking-wide'>
//             A GREAT PLACE TO <span className='block mt-3'>CONNECT</span> 
//         </div>

//         <div className='mt-8 ml-[115px] text-slate-400 font-medium text-[18px]'>
//             Medical recover is most focused in helping you <span className='block'>discover your most beautiful smile</span>
//         </div>

//         <button className='mt-6 ml-[115px] bg-[#FF685B] py-2.5 px-5 items-center rounded-md tracking-wide font-bold font-montserrat text-white text-sm not-italic space-x-2.5 w-[300px]'>
//             LOGIN
//         </button>

//         <img src={heroImage} alt="hero" className='w-[562px] h-[444px]'/>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import heroImage from './assets/Hero.png';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-28 py-20 bg-white">
      
      <div>
        <div className="text-[#FF685B] font-montserrat text-l font-bold">
          Track it!
        </div>

        <div className="mt-6 font-roboto font-bold text-5xl tracking-wide text-[#2C2E35]">
          A GREAT PLACE TO <span className="block mt-3">CONNECT</span>
        </div>

        <div className="mt-8 text-slate-400 font-medium text-[18px] max-w-md">
          Medical recovery is most focused in helping you
          <span className="block">discover your most beautiful smile</span>
        </div>

        <button className="mt-8 bg-[#FF685B] py-3 px-6 rounded-md tracking-wide font-bold font-montserrat text-white text-sm w-[300px]">
          Login
        </button>
      </div>

      
      <Link to = "/Login" className="flex-shrink-0">
        <img src={heroImage} alt="hero" className="w-[500px] h-auto" />
      </Link>
    </div>
  );
}

export default Hero;
