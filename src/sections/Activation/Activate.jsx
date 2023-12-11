import React, { useState } from "react";
import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {useRouter} from 'next/router'
import {AiFillCheckCircle} from 'react-icons/ai'

const Activate = ({discord, twitter}) => {
  const router = useRouter();


  return (
    <div className="bg-[#15B7FF]/[0.15] px-9 py-10 rounded-2xl">
      <div className="flex w-full justify-start items-center">
        <h1 className="text-white font-montserrat font-black text-[20px] 2xl:text-[25px] capitalize">
        Please complete the following steps to enter
        </h1>
      </div>
      <div className="flex flex-col w-full justify-start items-center mt-5">
        <div className="flex flex-col w-full justify-start items-center gap-10 relative">
        
          {/* step 1 */}
          <div className="flex w-full justify-start items-start gap-3  mt-6">
          <Image
              src="/vector_logo.png"
              width={50}
              height={50}
              alt="logo"
              className="hidden sm:block z-10 opacity-70"
              priority
              unoptimized
            />
            <div className="flex flex-col  w-full justify-start items-start">
             
              <div className="flex flex-col lg:flex-row w-full justify-between items-start  gap-2 ">
                <div className="flex justify-center items-center gap-4 opacity-70">
                
                 <div >
                 <h3 className="text-white font-montserrat font-black text-[18px] min-[1920px]:text-[22px] max-w-sm">
                1. Matrica
              </h3>
              <p className="text-white font-montserrat font-[400] text-[16px] min-[1920px]:text-[18px]">
              Login with your Matrica account
                </p>

                  </div> 
               
                </div>
                
                <button
                  disabled
                  className="flex justify-center items-center border-solid border-2 border-[#BEECFF] bg-[#64CFFF] rounded-full w-full min-[400px]:w-[300px] lg:w-[160px] xl:w-[130px] min-[1660px]:w-[190px] h-[48px] sm:h-[70px] gap-2"
                >
                  <AiFillCheckCircle className="text-[#BEECFF] w-5 h-5" />

                  <span className="font-montserrat text-[#BEECFF]  text-xs min-[1920px]:text-sm font-bold uppercase">
                    Connected
                  </span>
                </button>
              </div>
            </div>
          </div>
        
          <div className="flex w-full justify-start items-start gap-4 mt-6 ">
            <Image
              src="/vector_logo.png"
              width={50}
              height={50}
              alt="logo"
              className={`hidden sm:block z-10 ${(discord !== null && twitter !== null) ? 'opacity-70' : ''}`}
              priority
              unoptimized
            />
            <div className="flex flex-col w-full justify-start items-start">
              <div className="flex flex-col md:items-start xl:flex-row w-full justify-between items-start gap-2">
                <div
                className={`${(discord !== null && twitter !== null) ? 'opacity-70' : ''}`}
                >
                <h3 className="text-white font-montserrat font-black text-[18px] min-[1920px]:text-[22px] max-w-sm">
                2. Connect <span className="text-[#FFEC43]">Discord</span> and <span className="text-[#FFEC43]">Twitter</span>
                </h3>
                  <p className="text-white font-montserrat font-[400] text-[16px] min-[1920px]:text-[18px] max-w-sm md:max-w-max lg:max-w-sm md:mt-2 lg:mt-0">
                  Link your Discord and Twitter to your Matrica account, this is done to make sure we can correctly give you bubbles for your task!
                </p>
                </div>
               
                <div className="flex gap-3 lg:flex-row flex-col w-full lg:w-auto">
                <a href="https://matrica.io/settings" target="_blank">
                <div className="relative flex w-full">
               
               {discord == null
               
               &&
               <span
               className="absolute inline-flex !w-full min-[400px]:!w-[300px] lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px]
               bg-[#BEECFF] rounded-full animate-custom opacity-85 lg:!scale-x-[1.05] !scale-y-[1.18] !scale-x-[1.04] lg:!scale-y-[1.1] z-[0]"
             ></span>
               }
              
                <button
                disabled={discord !== null ? true : false}
                className={`flex relative justify-center items-center rounded-full !w-full min-[400px]:!w-[300px] ${discord !== null ? 'border-solid border-2 border-[#BEECFF] bg-[#64CFFF]' : 'bg-white'}
                lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px] gap-2`}>
                  {discord !== null
                  ?
                  <AiFillCheckCircle className="text-[#BEECFF] w-5 h-5" />
                  :
                  <BsDiscord className="text-[#1FBCFF] w-5 h-5" />

                  }
                  
                  <span className={`font-montserrat ${discord !== null ? 'text-[#BEECFF]' : 'text-[#1FBCFF]'} text-xs min-[1920px]:text-sm font-bold uppercase `}>
                  Discord
                  </span>
                </button>
                </div>
                </a>
                <a href="https://matrica.io/settings" target="_blank">
                <div className="relative flex w-full">
               
               {twitter == null
               
               &&
               <span
               className="absolute inline-flex !w-full min-[400px]:!w-[300px] lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px]
               bg-[#BEECFF] rounded-full animate-custom opacity-85 lg:!scale-x-[1.05] !scale-y-[1.18] !scale-x-[1.04] lg:!scale-y-[1.1] z-[0]"
             ></span>
               }
                <button 
                disabled={twitter !== null ? true : false}
                className={`flex justify-center z-[1] items-center  rounded-full !w-full min-[400px]:!w-[300px] ${twitter !== null ? 'border-solid border-2 border-[#BEECFF] bg-[#64CFFF]' : 'bg-white'}
                lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px] gap-2 md:mb-1 xl:mb-0 `}>
                  
                  {twitter !== null ?
                  <AiFillCheckCircle className="text-[#BEECFF] w-5 h-5" />
                  : 
                  <BsTwitter className="text-[#1FBCFF] w-5 h-5" />

                }
                  <span className={`font-montserrat ${twitter !== null ? 'text-[#BEECFF]' : 'text-[#1FBCFF]'}   text-xs min-[1920px]:text-sm font-bold uppercase`}>
                   Twitter

                  </span>
                </button>
                </div>
                </a>
                </div>
             
              </div>
        
       
            </div>
          </div>
         
          
        </div>
        
      </div>
    </div>
  );
};

export default Activate;
