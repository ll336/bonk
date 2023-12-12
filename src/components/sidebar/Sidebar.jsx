import { Command } from "@/components/ui/command";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
    RiArrowDropDownLine,
    RiArrowDropUpLine
  } from "react-icons/ri";
import { cn, useWindowSize } from "@/lib/utils";
import { categories } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
    const windowSize = useWindowSize()
    const shouldApplyScroll = windowSize.height <= 900
    const [openFilterMobile, setOpenFilterMobile] = useState(false);
    const [category, setCategory] = useState(categories);
    const [selectedType, setSelectedTypes] = useState([]);
    const [dropDown, setDropDown] = useState(false);

    return(
        <div className={`flex-col justify-between items-center ${(windowSize.width > 1024 && windowSize.height <= 730) ? "lg:h-full lg:min-h-[730px]" : "lg:h-[calc(100vh-162px)]"} xl:flex hidden`}>
        <div className="filterbg py-6 border-[#F0A724] rounded-[12px]  w-[95%] overflow-hidden flex flex-col justify-between items-center h-full lg:w-[300px] 2xl:w-full ">
          <div className="flex flex-col h-full max-h-full overflow-y-auto w-full gap-4 lg:gap-0 flex-grow-0 opacity-50 mb-3 px-6 ">
            <div className=" flex items-center justify-between whitespace-nowrap gap-[30px]  w-full ">
              <Command className="lg:block rounded-lg border mb-4 bg-[#FFBD48] border-[#F0A724] ">
                <div
                  className="flex items-center px-5"
                  cmdk-input-wrapper=""
                >
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
                    onChange={(e) => {}}
                  />
                </div>
              </Command>
            </div>
            <div className="h-full relative flex w-full flex-col lg:flex-row gap-7">
              <div
                className={cn(
                  "h-full w-full flex-none  rounded-2xl col-span-2 text-base lg:text-xl",
                  { block: openFilterMobile }
                )}
              >
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
                            <div
                              className="flex items-center justify-between mb-5"
                              key={index}
                            >
                              <label
                                htmlFor={item.value}
                                className="flex items-center cursor-pointer w-full justify-between"
                              >
                                <div className="flex gap-3 items-center">
                                  <Image
                                    src={item.icons}
                                    width={20}
                                    height={20}
                                    alt={item.value}
                                    unoptimized="true"
                                    priority="true"
                                  />
                                  <span className="whitespace-nowrap text-white text-sm font-semibold lg:text-[14px] lg:font-bold leading-none">
                                    {item.name}
                                  </span>
                                </div>
                                <div className="custom-checkbox">
                                  {selectedType.includes(item.value) ? (
                                    <Image
                                      src="/filter/check.png"
                                      width={18}
                                      height={18}
                                      alt="/"
                                    />
                                  ) : (
                                    <Image
                                      src="/filter/uncheck.png"
                                      width={18}
                                      height={18}
                                      alt="/"
                                    />
                                  )}
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

            <div className="w-full flex flex-col px-6 opacity-50">
              {" "}
              {/* Loaction dropdown */}
              <p className="text-[16px] text-white">Location</p>
              <div className="relative">
                <button className=" mt-3 rounded-[12px] p-[12px] z-[99999] w-full bg-[#FFBD48] border-[#F0A724] text-white flex items-center justify-between">
                  <span className="text-[14px] font-bold ">
                    By Country
                  </span>
                  {dropDown ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </button>

                {dropDown && (
                  <AnimatePresence>
                    <motion.div
                      key="location"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-[99999]  w-full text-[13px] text-white top-[45px] bg-[#FFBD48] py-[15px] pb-[10px] px-[12px] leading-10 rounded-[12px]"
                    >
                      <p className="cursor-pointer">USA</p>
                      <p className="cursor-pointer">Hong Kong</p>
                    </motion.div>
                  </AnimatePresence>
                )}
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
    )
}