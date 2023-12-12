"use client";

import { Command } from "@/components/ui/command";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn, useWindowSize } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { RiArrowDropDownLine, RiArrowDropUpLine  } from "react-icons/ri";
import { filteredDatas, categories } from "@/constants";

export default function Home() {
  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [filteredData, setFilterData] = useState(filteredDatas);
  const [shopData, setShopData] = useState(filteredDatas);
  const [category, setCategory] = useState(categories);
  const [selectedType, setSelectedTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);
  const [dropDown, setDropDown] = useState(false)

  const windowSize = useWindowSize()
  const shouldApplyScroll = windowSize.height <= 900


  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    filterItems(inputValue, selectedType);
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) => {
  
      if (!prevTypes.includes(type)) {
        return [...prevTypes, type];
      }
      return prevTypes;
    });


  };
  

  const removeTypeChange = (type) => {
    setSelectedTypes((prevTypes) => prevTypes.filter(t => t !== type));
  
  };
  

  const filterItems = (term, types) => {
    let filtered = shopData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    if (types.length > 0) {
      filtered = filtered.filter((item) => 
        types.some(type => item.categories == type)
      );
    }
  
    setFilterData(filtered);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)

  }, [])

  useEffect(() => {
    if(selectedType.length > 0 || searchTerm){
      filterItems(searchTerm, selectedType);
    }else{
      setFilterData(filteredDatas)
    }
    
  }, [selectedType, searchTerm]);

  return (
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div
        className={cn(
          `lg:h-screen font-g8 h-full bodybg`
        )}>
        <NavBar />
        <div className={` lg:px-12 pb-3 pt-4 w-full ${(windowSize.width > 1024 && windowSize.height <= 650) ? "lg:h-full" :  "lg:h-[calc(100vh-112px)]"}  flex flex-col relative`}>
          <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
            
            <div className={`flex flex-col justify-between items-center ${(windowSize.width > 1024 && windowSize.height <= 650) ? "lg:h-full" : " lg:h-[calc(100vh-162px)]"}`}>
              <div className="filterbg py-6 border-[#F0A724] rounded-[12px] w-[95%] overflow-hidden flex flex-col justify-between items-center h-full lg:w-[300px] 2xl:w-full">
                <div className="flex flex-col h-full max-h-full min-h-[300px] lg:overflow-y-auto w-full gap-4 lg:gap-0 flex-grow-0  mb-3 px-6">
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
                          value={searchTerm}
                          placeholder="Search"
                          onChange={(e) => {
                            handleSearchChange(e);
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
                        <span className="text-[16px] text-white">Charity</span>
                        <Image
                          src="/filter/filter.png"
                          width={20}
                          height={20}
                          alt=""
                          unoptimized="true"
                          priority="true"
                        />
                      </div>
                      <Separator className=" my-3 lg:my-3 bg-[#E6E6E6]" />
                      {/* FILTERING OPTIONS */}

                      <div className="flex flex-col justify-between ">
                        {" "}
                        {/* Charity & Location */}
                        <div className="h-full">
                          
                          {category && category.length > 1 && (
                            <>
                              {category.map((item, index) => {
                                return (
                                  <div className="flex items-center justify-between mb-5" key={index} onClick={() => {if(!selectedType.includes(item.value)){
                                  handleTypeChange(item.value)
                                  }else{
                                    removeTypeChange(item.value)
                                  }}}>
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
                                      <Image src="/filter/check.png" width={18} height={18} alt="/" />
                                  :
                                  
                                  <Image src="/filter/uncheck.png" width={18} height={18} alt="/" />
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

                <div className={`flex flex-col justify-between items-center mt-8 lg:mt-0 w-full flex-grow ${shouldApplyScroll ? "gap-5" : "gap-20"}`}>
                <div className="w-full flex flex-col px-6"> {/* Loaction dropdown */}
                          <p className="text-[16px] text-white">Location</p>
                          <div className="relative">

                
                          <button 
                          onClick={() => setDropDown(!dropDown)}
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
                    width={40}
                    height={40}
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
              <div className="mt-4 mb-5 lg:mb-0">
                <a href="https://thegivingblock.com/" target="_blank">
                <Image
                  src="/givingblock.png"
                  width={130}
                  height={33}
                  alt="/"
                  unoptimized="true"
                  priority="true"
                />
                </a>
              </div>
            </div>
            <div className="h-screen rounded-2xl flex flex-grow flex-col w-full">
              {loading ? (
                <>
                  <div className="flex justify-center items-center h-full w-full  my-20 lg:mt-0">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}>
                      <Image
                        src="/loading.png"
                        width={60}
                        height={60}
                        alt="loading"
                        priority="true"
                        unoptimized="true"
                      />
                    </motion.div>
                  </div>
                </>
              ) : (
                <ScrollArea className="w-full h-full lg:h-[calc(100vh-100px)]  lg:pb-4 lg:mb-5">
                  <div className="flex justify-start items-center gap-3 px-6 pb-2">
                  <span className="text-[26px] font-bold uppercase text-white">Charity</span>
                  <hr className="bg-[#FFFFFF] my-3 h-[1px] w-full" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="py-3 px-6 grid grid-cols-1  sm:grid-cols-3 xl:grid-cols-3  3xl:grid-cols-4 gap-5 gap-y-6 pb-[30px]">
                    {filteredData && filteredData.length > 0 && (
                      <>
                        {filteredData.map((item, index) => (
                          <motion.div
                          onClick={() => router.push(`/organization/${item.id}`)}
                            whileHover={{
                              y: -5.5,
                              transition: { duration: 0.2 },
                            }}
                            onHoverStart={() => {
                              setSelected(item.id);
                            }}
                            onHoverEnd={() => {
                              setSelected(null);
                            }}
                            className="bg-white p-5 rounded-[12px] relative cursor-pointer"
                            key={item.id}>
                            <div className="flex justify-center w-full">
                              <img
                                src={item.logo}
                                width={200}
                                height={200}
                                alt="/"
                                unoptimized="true"
                                priority="true"
                              />
                            </div>
                            <Separator className="my-3 bg-[#FFE6BF]" />
                            <p className="text-[#4D4D4D] text-[18px] leading-5 mb-2">
                              {item.name}
                            </p>
                            <p
                              className={`text-[16px] font-normal text-[#AAA]`}>
                              {item.shortDescription}
                            </p>
                            {selected == item.id && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => router.push(`/organization/${item.id}`)}
                                className="absolute -bottom-[20px] left-[10px] cursor-pointer z-[9999]">
                                <div className="flex justify-between items-center rounded-[7px] bg-white border-[#FFD48E] border-[2px]">
                                  <Image
                                    src="/coin.png"
                                    width={60}
                                    height={60}
                                    alt="/"
                                    unoptimized="true"
                                  />
                                  <p className="px-5 text-[17px] font-extrabold text-[#4C81FF]">
                                    Donate
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </>
                    )}
                  </motion.div>
                </ScrollArea>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
