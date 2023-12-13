"use client";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { cn, useWindowSize } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  RiArrowLeftSLine
} from "react-icons/ri";
import { filteredDatas, categories } from "@/constants";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Organization() {
  const router = useRouter();
  const [details, setDetails] = useState();
  const windowSize = useWindowSize()

  useEffect(() => {
    const data = filteredDatas.find((item) => item.id == router.query.id);
    setDetails(data);
  }, [router.query.id]);
  return (
    <>
      <Head>
      <title>The Giving Bonk</title>
        <meta name="description" content="Create a fun way to utilize bonk while giving back" />
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
          `lg:h-screen font-g8 bodybg`
        )}>
        <NavBar />
        <div className={`lg:px-12 pb-[38px] lg:pb-3 pt-4 w-full ${(windowSize.width > 1024 && windowSize.height <= 730) ? "lg:h-full" : "lg:h-[calc(100vh-112px)]"} flex flex-col relative`}>
          <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
           <Sidebar />
            <div className={`h-full rounded-2xl w-full overflow-x-hidden overflow-hidden px-6 ${(windowSize.width > 1024 && windowSize.height <= 730) && "min-h-[730px]"}`}>
              <div className="w-full flex flex-col h-full  lg:pb-4 lg:mb-5 ">
                <div className="flex justify-start items-center flex-grow-0 max-h-full max-w-full gap-3 pb-2 ">
                  <div className="flex justify-start items-center flex-grow-0 max-w-full">
                    <RiArrowLeftSLine
                      className="text-[28px] text-white cursor-pointer"
                      onClick={() => router.push("/")}
                    />
                    <span className="text-[26px] font-bold uppercase text-white">
                      Detail
                    </span>
                  </div>
                  <hr className="bg-[#FFFFFF] my-3 h-[1px] w-full" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full bg-white rounded-[12px] flex-grow h-full"
                >
                  {details && (
                    <>
                      <motion.div className="bg-white p-10 rounded-[12px] flex flex-col flex-grow h-full ">
                        <p className="text-[#4D4D4D] text-[20px] lg:text-[22px] xl:text-[26px] leading-7 lg:leading-10 mb-2">
                          {details.name}
                        </p>

                        <hr className="bg-[#E9E9E9] my-5 h-[2px] w-full" />

                        <div className="flex lg:flex-row flex-col justify-between items-start gap-5 xl:gap-20">
                          <div className="flex-grow">
                            <p
                              className={`text-[13px] 2xl:text-[16px] font-normal text-[#AAA] mb-3`}
                            >
                              {details.description}
                            </p>


                            <div className="border-[#E9E9E9] border-[2px]  rounded-[10px] w-full px-5 py-4 max-w-full lg:max-w-[450px] mt-4">
                              <p className="text-[#757575] font-bold text-[13px] mb-2">Learn More</p>
                              <p className="text-[#757575] font-normal text-[13px] mb-1">Website:</p>
                              <a href={details.website} target="_blank">
                              <p className="text-[#0D99FF] font-normal text-[13px]">{details.website}</p>

                              </a>
                            </div>
                          </div>

                          <div className="flex-grow-0 flex-shrink-0 max-h-full justify-center lg:w-fit w-full">
                            <div className="border-[#E9E9E9] border-[2px] rounded-[12px]  py-7 px-5 w-full xl:min-w-[350px] flex flex-col justify-center items-center">
                              <img
                                src={details.logo}
                                width={200}
                                height={200}
                                alt="/"
                              />

                              <hr className="bg-[#E9E9E9] my-3 h-[2px] w-full" />

                              <p className="text-center text-[15px] 2xl:text-[18px] font-[500] text-[#4D4D4D]">
                                Country:{" "}
                                <span className="uppercase font-bold">
                                  {details.country}
                                </span>
                              </p>

                              <button 
                              onClick={() => router.push(`/donate/${router.query.id}`)}
                              className="w-full bg-[#4C81FF] rounded-[10px] gap-3 py-3 my-4 text-white font-[500] flex justify-center items-center">
                                <Image
                                  src="/donatecoin.png"
                                  width={28}
                                  height={28}
                                  alt="/"
                                  unoptimized
                                  priority
                                />
                                <span>Donate Now</span>
                              </button>
                            </div>
                          </div>
                        
                        </div>
                 
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
