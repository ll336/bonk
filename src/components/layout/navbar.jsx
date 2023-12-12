"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useRouter } from "next/router";
import {motion} from 'framer-motion'


export default function NavBar({ page }) {
  const router = useRouter()





  return (
    <>
    {router.pathname == "/"
    ?
    <motion.div 
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration:0.5}}
    className="w-full flex justify-between items-center pt-8 pb-2 px-4 lg:px-12">
     <Image src="/bonk.png" width={154} height={60} alt="/" unoptimized priority className="mobilesmall:hidden block cursor-pointer" onClick={() => router.push('/')}/>
     <Image src="/loading.png" width={60} height={60} alt="/" unoptimized priority className="mobilesmall:block hidden cursor-pointer" onClick={() => router.push('/')}/>
     <div className="bg-white rounded-2xl py-[3px] px-4 flex justify-between items-center gap-5">
       <Image src="/bonk-avatar.png" width={37} height={52} alt="/" unoptimized priority />
 
       <div className="leading-1">
         <h5 className="text-[#4C81FF] text-[13px] sm:text-[16px] font-extrabold mb-0 leading-5">Burned</h5>
         <h5 className="text-[#FFA400] text-[17px] sm:text-[20px] font-extrabold leading-5">150.3 Bonk</h5>
       </div>
     </div>
    </motion.div>
    :

    <motion.div 
    className="w-full flex justify-between items-center pt-8 pb-2 px-4 lg:px-12">
     <Image src="/bonk.png" width={154} height={60} alt="/" unoptimized priority className="mobilesmall:hidden block cursor-pointer" onClick={() => router.push('/')}/>
     <Image src="/loading.png" width={60} height={60} alt="/" unoptimized priority className="mobilesmall:block hidden cursor-pointer" onClick={() => router.push('/')}/>
     <div className="bg-white rounded-2xl py-[3px] px-4 flex justify-between items-center gap-5">
       <Image src="/bonk-avatar.png" width={37} height={52} alt="/" unoptimized priority />
 
       <div className="leading-1">
       <h5 className="text-[#4C81FF] text-[13px] sm:text-[16px] font-extrabold mb-0 leading-5">Burned</h5>
         <h5 className="text-[#FFA400] text-[17px] sm:text-[20px] font-extrabold leading-5">150.3 Bonk</h5>
       </div>
     </div>
    </motion.div>
    
    
    }
     
    </>
 
  );
}
