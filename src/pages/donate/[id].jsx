"use client";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { cn, useWindowSize } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { RiArrowLeftSLine } from "react-icons/ri";
import { filteredDatas, categories } from "@/constants";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Donate() {
  const router = useRouter();
  const [details, setDetails] = useState();
  const [amount, setAmount] = useState(0);
  const [inputDisable, setInputDisable] = useState(false);
  const [loading, setLoading] = useState(false)
  const [debouncedAmount, setDebouncedAmount] = useState(amount);
  const [rate, setRate] = useState(0)
  const windowSize = useWindowSize()

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [amount]);

  const handleChange = async (event) => {
    const newValue = event.target.value;
    if (!newValue || newValue.match(/^\d+$/)) {
      setAmount(newValue);
   
    }
  };

  useEffect(() => {
    if (debouncedAmount && debouncedAmount !== 0) {
      setInputDisable(true);
      setLoading(true)

      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd`
          );
          const data = await res.json();
          if(data){
            setRate(Number(data?.solana?.usd))
            setLoading(false)
            setInputDisable(false)
          }
        } catch (err) {
          console.log(err);
          setLoading(false)
          setInputDisable(false)
        }
      };

      fetchData();
    }
  }, [debouncedAmount]);

  
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={cn(
          `lg:h-screen font-g8 bodybg`
        )}>
        <NavBar />
        <div className={`lg:px-12 pb-3 pt-4 w-full ${(windowSize.width > 1024 && windowSize.height <= 650) ? "lg:h-full" : "lg:h-[calc(100vh-112px)]"} flex flex-col relative`}>
          <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
            <Sidebar />
            <div className={`h-full rounded-2xl w-full overflow-x-hidden lg:overflow-hidden px-6 ${(windowSize.width > 1024 && windowSize.height <= 650) && "min-h-[650px]"}`}>
              <div className="w-full flex flex-col h-full  lg:pb-4 lg:mb-5">
                <div className="flex justify-start items-center flex-grow-0 max-h-full max-w-full gap-3 pb-2 ">
                  <div className="flex justify-start items-center flex-grow-0 max-w-full">
                    <RiArrowLeftSLine
                      className="text-[28px] text-white cursor-pointer"
                      onClick={() =>
                        router.push(`/organization/${router.query.id}`)
                      }
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
                      <motion.div className="bg-white p-10 py-7 rounded-[12px] flex flex-col flex-grow h-full">
                        <p className="text-[#4D4D4D] text-[20px] lg:text-[22px] xl:text-[26px] leading-7 lg:leading-10 mb-2">
                          {details.name}
                        </p>

                        <hr className="bg-[#E9E9E9] my-2 h-[2px] w-full" />

                        <div className="grid  grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 h-full">
                          <div className="flex flex-col gap-5 lg:gap-10">
                            <div className="flex justify-start gap-4 pt-10">
                              <Image
                                src="/donate/1-1.png"
                                width={24}
                                height={24}
                                alt="/"
                                unoptimized
                              />
                              <p className="text-[#4D4D4D]">
                                Select a currency
                              </p>
                            </div>
                            <div className="flex justify-start gap-4">
                              <Image
                                src="/donate/2.png"
                                width={24}
                                height={24}
                                alt="/"
                                unoptimized
                              />
                              <p className="text-[#B8B8B8]">Personal Info</p>
                            </div>
                            <div className="flex justify-start gap-4">
                              <Image
                                src="/donate/3.png"
                                width={24}
                                height={24}
                                alt="/"
                                unoptimized
                              />
                              <p className="text-[#B8B8B8]">Start Over</p>
                            </div>
                          </div>
                          <div className="w-full border-[#EBEBEB] rounded-[11px] border-[2px] h-full p-5">
                            <div className="flex justify-start items-center gap-4">
                              <Image
                                src="/donate/1-1.png"
                                width={28}
                                height={28}
                                alt="/"
                                unoptimized
                                priority
                              />
                              <p className="text-[#4D4D4D]">
                                Select a currency
                              </p>
                            </div>
                            <div className="bg-[#FFFFFF] mt-4 rounded-[11px] p-2  w-full flex justify-center items-center border-[#F7F7F7] border-[3px] max-h-[46px]">
                              <Image
                                src="/solana.png"
                                width={32}
                                height={32}
                                alt="/"
                                unoptimized
                                priority
                              />
                              <p className="text-[#4C81FF] text-[14px] font-bold">
                                Solana
                              </p>
                            </div>

                            <div className="relative mt-4 ">
                              <input
                                disabled={inputDisable}
                                type="text"
                                className="w-full py-4 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[14px] bg-[#F7F7F7] placeholder:text-[#4D4D4D]"
                                value={amount}
                                onChange={(e) => handleChange(e)}
                              />

                                {rate !== 0
                                &&
                                <motion.p 
                                initial={{opacity:0}}
                                animate={{opacity:1 }}
                                transition={{duration: 0.5}}
                                className="absolute right-4 top-1/2 py-4 mb-0 -translate-y-[50%] text-[#B8B8B8] font-[500] text-[14px] ">
                                ≈ ${(debouncedAmount * rate).toFixed(2)}
                                </motion.p>
                                
                                }
                             
                            </div>
                          </div>
                          <div className="lg:hidden flex"></div>
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
