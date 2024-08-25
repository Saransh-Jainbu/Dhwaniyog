import React from 'react';
import heroImage from './assets/Hero.png';
import backgroundImage from './assets/bg_img.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
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

        <button onClick={() => navigate("/login")} className="mt-8 bg-[#FF685B] py-3 px-6 rounded-md tracking-wide font-bold font-montserrat text-white text-sm w-[300px]">
          Login
        </button>
      </div>

      
      <div className="relative flex-shrink-0 w-[500px] h-auto">
        <img draggable="false"
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <img draggable="false"
          src={heroImage}
          alt="Hero"
          className="relative z-10 w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
