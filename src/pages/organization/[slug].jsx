"use client";
import { useRouter } from 'next/router'
import { Command } from "@/components/ui/command";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { RiArrowDropDownLine, RiArrowDropUpLine  } from "react-icons/ri";
import { filteredDatas, categories } from "@/constants";

export default function Organization() {
  const router = useRouter()
  const id = router.query.slug
  const [details, setDetails] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [shopData, setShopData] = useState(filteredDatas);
  const [category, setCategory] = useState(categories);
  const [selectedType, setSelectedTypes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dropDown, setDropDown] = useState(false)

  useEffect(() => {
    const data = filteredDatas.find(item => item.id == id)
    console.log(data)
    setDetails(data)
  }, [])
  return(
  <>
  <Head>
    <title>Bonk</title>
    <meta name="description" content="Bonk" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <meta name="msapplication-TileColor" content="#6cd2ff" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
  <div
    className={cn(
      `h-screen font-g8 lg:overflow-y-hidden tallXS:!h-full bodybg overflow-y-auto `
    )}>
    <NavBar />
    <div className=" lg:px-12 pb-3 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
      <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
        
        <div className="flex flex-col justify-between items-center lg:h-[calc(100vh-162px)]">
          <div className="filterbg py-6 border-[#F0A724] rounded-[12px]  w-[95%] overflow-hidden flex flex-col justify-between items-center h-full lg:w-[330px] 2xl:w-full">
            <div className="flex flex-col h-full max-h-full overflow-y-auto w-full gap-4 lg:gap-0 flex-grow-0 opacity-50 mb-3 px-6">
              <div className=" flex items-center justify-between whitespace-nowrap gap-[30px]  w-full ">
                <Command className="lg:block rounded-lg border mb-4 bg-[#FFBD48] border-[#F0A724]">
                  <div
                    className="flex items-center px-5"
                    cmdk-input-wrapper="">
                    <Image
                      src="/filter/search.png"
                      width={20}
                      height={20}
                      alt="/"
                      unoptimized="true"
                      priority="true"
                      className="mr-3"
                    />

                    <input
                      type="text"
                      className={cn(
                        "flex w-full rounded-md bg-transparent py-3.5 h-[48px] text-white  text-sm md:text-xl outline-none font-extrabold placeholder:text-white placeholder:text-[14px] disabled:cursor-not-allowed disabled:opacity-50"
                      )}
                      
                      placeholder="Search"
                      onChange={(e) => {
                       
                      }}
                    />
                  </div>
                </Command>
              </div>
              <div className="h-full relative flex w-full flex-col lg:flex-row gap-7">
                <div
                  className={cn(
                    "h-full w-full flex-none  rounded-2xl col-span-2 text-base lg:text-xl",
                    { block: openFilterMobile }
                  )}>
                  <div className="flex justify-between items-center">
                    <span className="text-[18px] text-white">Charity</span>
                    <Image
                      src="/filter/filter.png"
                      width={20}
                      height={20}
                      alt=""
                      unoptimized="true"
                      priority="true"
                    />
                  </div>
                  <Separator className=" my-3 lg:my-5 bg-[#E6E6E6]" />
                  {/* FILTERING OPTIONS */}

                  <div className="flex flex-col justify-between ">
                    {" "}
                    {/* Charity & Location */}
                    <div className="h-full">
                      
                      {category && category.length > 1 && (
                        <>
                          {category.map((item, index) => {
                            return (
                              <div className="flex items-center justify-between mb-5" key={index} >
                              <label
                                htmlFor={item.value}
                                className="flex items-center cursor-pointer w-full justify-between">
                                
                                <div className="flex gap-3 items-center">
                                <Image src={item.icons} width={20} height={20} alt={item.value} unoptimized="true" priority="true"/>
                                <span className="whitespace-nowrap text-white text-sm font-semibold lg:text-[14px] lg:font-bold leading-none">
                                {item.name}
                                </span>
                                </div>
                                <div className="custom-checkbox"  >
                                  {selectedType.includes(item.value)
                                  ?
                                  <Image src="/filter/check.png" width={25} height={25} alt="/" />
                                  :
                                  
                                  <Image src="/filter/uncheck.png" width={25} height={25} alt="/" />
                                  }
                                  
                                </div>
                              </label>
                            </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center mt-8 lg:mt-0 w-full flex-grow gap-14">
            <div className="w-full flex flex-col px-6 opacity-50"> {/* Loaction dropdown */}
                      <p className="text-[18px] text-white">Location</p>
                      <div className="relative">

            
                      <button 
                      
                      className=" mt-3 rounded-[12px] p-[12px] z-[99999] w-full bg-[#FFBD48] border-[#F0A724] text-white flex items-center justify-between">
                        <span className="text-[14px] font-bold ">By Country</span>{dropDown ?<RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                        </button>

                        {dropDown &&
                        <AnimatePresence >
                        <motion.div 
                        key="location"
                        initial={{opacity:0,y:-5}}
                        animate={{opacity:1,y:0}}
                        exit={{opacity:0,y:-5}}
                        transition={{duration:0.3}}
                        className="absolute z-[99999]  w-full text-[13px] text-white top-[45px] bg-[#FFBD48] py-[15px] pb-[10px] px-[12px] leading-10 rounded-[12px]">
                            <p className="cursor-pointer">USA</p>
                            <p className="cursor-pointer">Hong Kong</p>

                        </motion.div>
                        </AnimatePresence>
                        }
                                  </div>
                    </div>
              <div className="flex flex-col justify-center items-center">
              <Image
                src="/heart.png"
                width={60}
                height={60}
                unoptimized="true"
                priority="true"
                alt="/"
              />
              <p className="text-white text-[14px] font-bold mt-3">
                Terms and condition
              </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Image
              src="/givingblock.png"
              width={130}
              height={33}
              alt="/"
              unoptimized="true"
              priority="true"
            />
          </div>
        </div>
        <div className="h-screen rounded-2xl flex flex-grow flex-col w-full">
            <ScrollArea className="w-full lg:h-[calc(100vh-100px)]  pb-64 lg:pb-4 lg:mb-5 px-6">
              <div className="flex justify-start items-center gap-3 pb-2 ">
              <span className="text-[26px] font-bold uppercase text-white">Detail</span>
              <Separator className=" bg-[#FFFFFF] my-3" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full bg-white rounded-[12px]">
                {details && (
                  <>
                    
                      <motion.div
                        
                        
                        className="bg-white p-10 rounded-[12px]  "
                        >
                        <div className="flex justify-center w-full">
                         
                        </div>
                       
                        <p className="text-[#4D4D4D] text-[18px] leading-5 mb-2">
                          {details.name}
                        </p>
                        <p
                          className={`text-[16px] font-normal text-[#AAA]`}>
                          {details.shortDescription}
                        </p>
                        
                      </motion.div>
                   
                  </>
                )}
              </motion.div>
            </ScrollArea>
       
        </div>
      </div>
    </div>
  </div>
</>

  )

}