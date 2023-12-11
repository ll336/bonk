import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react"

const Card = () => {
  //leon
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className="flex w-full justify-between items-center px-4">
        <h1 className="text-white font-montserrat font-black text-[20px] lg:text-[24px] xl:text-[28px] capitalize">
          Welcome to Clear Collectibles
        </h1>
        <Image
          src="/vector_logo.png"
          width={60}
          height={60}
          alt="logo"
          className="hidden lg:block"
          priority
          unoptimized
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-5">
        <h1 className="text-white font-montserrat font-[800] text-[22px] xl:text-[22px] 2xl:text-[30px] text-center mb-7">
        Login with your matrica account to get started
        </h1>
        {/* leon */}
        <button
            onClick={() => 
              {
                localStorage.clear();
                setLoading(true)
                signIn('matrica', {callbackUrl: "/dashboard"})
              }
              }
              disabled={loading}
          className={`flex justify-center items-center bg-white rounded-full w-full max-w-[320px] lg:w-[267px] h-[48px] lg:h-[70px] gap-3 ${loading && "opacity-80"}`}
        >
          <Image
            src="/matrica.png"
            width={18}
            height={18}
            alt="matrica"
            priority
            unoptimized
          />
            {loading 
        
        ?   

        <span className={`font-montserrat text-[#1FBCFF] text-base font-bold uppercase `}>Connecting</span>


        :
      
        <span className="font-montserrat text-[#1FBCFF] text-base font-bold uppercase">
            Login with Matrica
          </span>
      }  
          
        </button>
        <a href="https://interlace.app" target="_blank">
        <div className="flex justify-center items-center gap-2 mt-3">
      <p className="text-white font-montserrat font-normal text-[13px] sm:text-[15px] mb-0">Powered by: </p>
      <Image src="/Group 1362789562.png" width={130} height={21} alt="/" />
      </div>
      </a>
      </div>
     
      <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-end items-center gap-3 lg:gap-0">
        <Image
          src="/vector_logo.png"
          width={30}
          height={30}
          alt="logo"
          className="lg:hidden"
          priority
          unoptimized
        />
        <Image className="flex lg:hidden" src="/trademark.png" width={200} height={70} alt="logo" unoptimized />
      </div>
    </>
  );
};

export default Card;
