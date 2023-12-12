"use client";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  RiArrowLeftSLine
} from "react-icons/ri";
import { filteredDatas, categories } from "@/constants";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Donate() {
  const router = useRouter();
  const [details, setDetails] = useState();


  useEffect(() => {
    const data = filteredDatas.find((item) => item.id == router.query.id);
    setDetails(data);
  }, [router.query.id]);
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
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div
        className={cn(
          `h-screen font-g8 lg:overflow-y-hidden tallXS:!h-full bodybg overflow-y-auto `
        )}
      >
        <NavBar />
        <div className=" lg:px-12 pb-3 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
          <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
           <Sidebar />
            <div className="h-full rounded-2xl w-full overflow-x-hidden lg:overflow-hidden px-6">
              <div className="w-full flex flex-col h-full  lg:pb-4 lg:mb-5">
                <div className="flex justify-start items-center flex-grow-0 max-h-full max-w-full gap-3 pb-2 ">
                  <div className="flex justify-start items-center flex-grow-0 max-w-full">
                    <RiArrowLeftSLine
                      className="text-[28px] text-white cursor-pointer"
                      onClick={() => router.push(`/organization/${router.query.id}`)}
                    />
                    <span className="text-[26px] font-bold uppercase text-white whitespace-nowrap">
                      Make a Donation
                    </span>
                  </div>
                  <hr className="bg-[#FFFFFF] my-3 h-[1px] w-full" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full bg-white rounded-[12px] flex-grow"
                >
                  {details && (
                    <>
                      <motion.div className="bg-white p-10 rounded-[12px] flex flex-col flex-grow h-full">
                        <p className="text-[#4D4D4D] text-[20px] lg:text-[22px] xl:text-[26px] leading-7 lg:leading-10 mb-2">
                          {details.name}
                        </p>

                        <hr className="bg-[#E9E9E9] my-5 h-[2px] w-full" />

                        <div className="grid  xl:grid-cols-3 gap-5 h-full">
                            <div >
                                dasdasdas
                            </div>
                            <div className="w-full border-[#EBEBEB] rounded-[11px] border-[2px] h-full p-5">
                    <div className="flex justify-start items-center gap-4">
                    <Image src="/donate/1-1.png" width={28} height={28} alt="/" unoptimized priority />
                                <p className="text-[#4D4D4D]">Select a currency</p>
                    </div>
                               
                            </div>
                            <div></div>
                        
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
