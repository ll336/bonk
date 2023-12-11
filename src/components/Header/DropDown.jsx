import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { links } from "@/constants";
import { FaCopy } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { Icons } from "../ui/icons";


const DropDown = ({ open, setOpen, code, counter }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={`absolute ${
        open
          ? "!opacity-100 pointer-events-auto z-50"
          : "!opacity-0 pointer-events-none"
      } flex flex-col z-50 justify-between items-center px-2 py-2 rounded-lg bg-white top-14 left-0 w-full h-auto transition-opacity ease-in-out duration-200`}
    >
      <div className="flex flex-col justify-between items-center w-full z-50">
        {router.pathname !== "/activation" && router.pathname !== "/holder"
        ?
<>
{links.map((link) => (
          <div
            key={link.name}
           
            className={`flex w-full justify-start items-center gap-3 px-2 text-black rounded-lg font-semibold text-sm font-montserrat py-4 ${
              router.pathname === link.path ? "bg-[#1FBCFF] text-white" : ""
            }`}
            onClick={() => {
              setOpen(false)
              if(link.path !== "/logout"){
                router.push(link.path)
              }else{
                localStorage.clear();
                signOut({ callbackUrl: "/login" }); 
              }
              
            }
            
            }
          >
            {router.pathname === link.path ? link.lightIcon : link.icon}
            {link.name}
          </div>
        ))}


</>



        :
        <>
      {links.map((link) =>{
        if(link.name == "Disconnect"){

          return(
            <div
            key={link.name}
           
            className={`flex w-full justify-start items-center gap-3 px-2 text-black rounded-lg font-semibold text-sm font-montserrat py-4 `}
            onClick={() => {
              setOpen(false)
                localStorage.clear();
                signOut({ callbackUrl: "/login" })
              }
              
            }
          >
            <Icons.disconnect />
            {link.name}
          </div>
          )
        }
     
         
         })}

            
        
        
        </>
        
        
        }
       
      </div>

     
      
      
     
     
    </div>
  );
};

export default DropDown;
