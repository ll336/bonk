import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DropDown } from "@/components";
import { links } from "@/constants";
import { cleanPathname } from "@/lib/utils";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import {
  BsChevronDown,
  BsChevronUp,
  BsCircleFill,
} from "react-icons/bs";
import { useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @component Header
 * @description Represents a header component with a logo, navigation, and menu toggles.
 * @param {boolean} open - Indicates whether the menu is open.
 * @param {function} setOpen - The function to toggle the menu open state.
 */

const Header = ({ open, setOpen, hidden, counter, code, notConnected }) => {
  
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data: session} = useSession({})


  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdownOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }



  const handleClose = () => {
    setShowModal(false);
  };


  useOutsideAlerter(wrapperRef)

  return (
    <div
      className={`flex w-full relative justify-between
      items-center z-50 ${
        router.pathname === "/leaderboard" &&
        "py-6 px-6 bg-transparent sm:bg-[#51caff]"
      }`}
    >
      
      
      {(router.pathname === "/" ||

        router.pathname === "/dashboard") && (
          <div
          className="block md:hidden cursor-pointer"
          onClick={() => router.push('/dashboard')}
          >
          {/* <Image
            src="/logo.png"
            width={80}
            height={28}
            alt="logo"
            priority
            unoptimized
          /> */}
          </div>
        )}
          <div
           className="hidden md:block cursor-pointer"
          onClick={() => router.push('/dashboard')}
          >
      <Image
        src={
          (router.pathname === "/dashboard" || router.pathname === "/leaderboard")
            ? "/logo.png"
            : "/vector_logo.png"
        }
        width={
          (router.pathname === "/dashboard" || router.pathname === "/leaderboard")
            ? 200
            : 70
        }
        height={70}
        alt="logo"
        priority
        unoptimized
      />
      </div>

      <div
           className={`${
            (router.pathname === "/dashboard" || router.pathname === "/leaderboard")  && "-ml-10" 
          } block md:hidden cursor-pointer`}
          onClick={() => router.push('/dashboard')}
          >
      <Image
        src="/vector_logo.png"
        width={32}
        height={32}
        alt="logo"
        priority
        unoptimized
      />
     </div>
     {(router.pathname !== "/" && router.pathname != "/login") && (
        <>
          <RxHamburgerMenu
            className={`${open && "!hidden"}  md:hidden text-white text-[30px] cursor-pointer`}
            onClick={() => {
              setOpen(true);
            }}
          />
          <RxCross2
            className={`${
              !open && "!hidden"
            } md:hidden text-white text-[30px] cursor-pointer`}
            onClick={() => {
              setOpen(false);
            }}
          />
        </>
      )}

      {!hidden && (
        <div
          className={`${"hidden md:flex pb-8"} justify-center items-center gap-2.5 `}
        >
          <div className="flex justify-center items-center w-auto h-auto relative">

          <div className="flex justify-content items-center gap-10 mr-5">
            <div className="flex justify-center items-center gap-4">
                <a href="https://twitter.com/ClearCollectNFT" target="_blank">
              <Image src="/icons2/twitter_white.png" width={20} height={20} alt="/" unoptimized priority/>
                </a>
                <Image src="/icons2/rectangle.png" width={2} height={17} alt="/" unoptimized priority />
                <a href="https://discord.gg/clearcollectibles" target="_blank">
              <Image src="/icons2/discord_white.png" width={20} height={20} alt="/" unoptimized priority />
                </a>
                <Image src="/icons2/rectangle.png" width={2} height={17} alt="/" unoptimized priority />
                <a href="https://matrica.io/settings" target="_blank">
              <Image src="/icons2/matrica_white.png" width={20} height={20} alt="/" unoptimized priority />
                </a>

 
            </div>
          
          
          
       


          </div>
        

              <AnimatePresence>
                {notConnected &&

                <>
                 {router.pathname === "/dashboard" && (
                <>
                  <BsCircleFill className="text-[#fcaa0c] absolute top-0 right-0 w-3 h-3 border border-[#ecf4ee] rounded-full" />
               
                </>
              )}
                
                </>
                
                }
             
            </AnimatePresence>


            
            
          </div>
          <div
            className="flex justify-between items-center bg-white rounded-xl w-[218px] h-[48px] px-4 relative z-50 cursor-pointer"
            ref={wrapperRef}
          >
            <div className="flex justify-between items-center gap-2.5 w-full"
             onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
            >
              <div className="flex items-start gap-3">

               {(router.pathname !== "/activation" && router.pathname !== "/holder")
               ?
               <>   {links.filter((link) => link.path === router.pathname)[0].icon}
               <span className="text-[#1fbcff] text-sm sm:text-base font-semibold font-montserrat capitalize">
                 {cleanPathname(router.pathname)}
               </span></>
               : router.pathname == "/activation"?
               <> 
               <span className="text-black text-sm sm:text-base font-semibold font-montserrat capitalize">
                 Connect Socials
               </span></>
               : router.pathname == "/holder"
               &&
               <> 
               <span className="text-black text-sm sm:text-base font-semibold font-montserrat capitalize">
                 No CC Found
               </span></>
               }
           
            </div>
            {dropdownOpen ? (
              <BsChevronUp className="text-black w-5 h-5" />
            ) : (
              <BsChevronDown className="text-black w-5 h-5" />
            )}
            </div>
           <DropDown open={dropdownOpen} setOpen={setDropdownOpen} />
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Header;
