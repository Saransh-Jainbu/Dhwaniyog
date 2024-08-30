import React, { useState } from 'react';
import img from './assets/login.png';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase/authentication"


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (!email || !password) {
            console.log("Email or password cannot be empty.");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully!");
            navigate("/studentdashboard");
        } catch (error) {
            console.log("Error occured", error);   
        }
    }

    return (
        <>
        <div className="flex flex-row h-screen ml-[310px]">
            <div className="flex-1 h-full bg-white flex flex-col items-center justify-center">
                <button onClick={()=> navigate("/")} className="absolute left-24 top-8 text-[#252b42] font-bold text-2xl leading-8 tracking-[0.1px] font-montserrat">
                DHWANIयोग
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="text-[#ff685b] text-3xl font-montserrat self-start mb-8 font-extrabold">
                        Sign in
                    </h2>
                        <input
                            type="email"
                            className="rounded border w-[400px] p-4 mb-6 border-gray-300 pl-4"
                            placeholder="Email Address *"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="rounded border w-[400px] p-4 mb-6 border-gray-300 pl-4"
                            placeholder="Password *"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        

                        <div className="flex items-center mb-6 ">
                            <button onClick={handleSubmit} className="flex items-center gap-3 bg-[#ff685b] text-white text-lg font-medium py-3 px-6 rounded">
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                    <g clipPath="url(#clip0_2105_8409)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z" fill="white"/>
                                    </g>
                                    <defs>
                                        
                                    </defs>
                                </svg>
                            </button>
                        
                            <button onClick={() => navigate("/forgotpassword")} className='text-[#000000DE] text-xl font-bold font-roboto ml-20'>
                                Forgot your password?
                            </button>
                        </div>
                        <button onClick ={()=>navigate("/therapistlogin")} className="w-[400px] flex justify-center items-center bg-black text-white text-sm font-medium uppercase tracking-[0.46px] py-3 rounded shadow-md font-roboto">
                            Switch to Supervisor Login
                        </button>
                    
                </div>
            </div>
            <div className="w-1/2 p-8 flex items-center justify-center mr-[110px]">
          <img
            src={img} draggable="false"
            alt="Login Illustration"
            className="w-[450px] h-[450px] "/>
            </div>
            
        </div>
        
        </>
    );
}

export default Login;
