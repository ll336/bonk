"use client";

import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import { Icons } from "@/components/ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { RiArrowDropDownLine, RiArrowDropUpLine  } from "react-icons/ri";

export default function Shop() {
  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [filteredData, setFilterData] = useState([]);
  const [shopData, setShopData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);
  const [dropDown, setDropDown] = useState(false)


  const filteredData1 = [
    {
      id: 99, // ID of organization
      name: "TGB Preproduction",
      logo: "https://static.tgb-preprod.com/organization_logo/04fdb90f-10e9-4fe7-a6f8-f0c6689735b1.jpeg",
      country: "USA",
      allowsAnon: true, // Are anonymous Donations allowed
      nonprofitTaxID: "01-0000000",
      areNotesEnabled: true, // Are Donation notes allowed
      isReceiptEnabled: true, // Indicates whether Donation
      // receipt email sending is forbidden by organization
      createdAt: "2022-05-09T12:02:29.603Z",
      state: "AL",
      city: "Washington",
      postcode: "20036",
      nonprofitAddress1: "1712 N St NW",
      nonprofitAddress2: "Suite 101",
      uuid: "b3d94d59-48a5-4bc1-acee-f4e88148357d",
      areFiatDonationsEnabled: true,
      areCryptoDonationsEnabled: true,
    },
    {
      id: 100, // ID of organization
      name: "TGB Preproduction",
      logo: "https://static.tgb-preprod.com/organization_logo/04fdb90f-10e9-4fe7-a6f8-f0c6689735b1.jpeg",
      country: "USA",
      allowsAnon: true, // Are anonymous Donations allowed
      nonprofitTaxID: "01-0000000",
      areNotesEnabled: true, // Are Donation notes allowed
      isReceiptEnabled: true, // Indicates whether Donation
      // receipt email sending is forbidden by organization
      createdAt: "2022-05-09T12:02:29.603Z",
      state: "AL",
      city: "Washington",
      postcode: "20036",
      nonprofitAddress1: "1712 N St NW",
      nonprofitAddress2: "Suite 101",
      uuid: "b3d94d59-48a5-4bc1-acee-f4e88148357d",
      areFiatDonationsEnabled: true,
      areCryptoDonationsEnabled: true,
    },
  ];

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    filterItems(inputValue, selectedType);
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    filterItems(searchTerm, type);
  };

  const filterItems = (term, type) => {
    let filtered = shopData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    if (type !== "all") {
      filtered = filtered.filter((item) => item.label === type);
    }

    setFilterData(filtered);
  };


  async function getToken(){
    try{
      console.log(process.env.NEXT_PUBLIC_LOGIN)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v1/login`,
        {
          method: "POST",
    
          body: JSON.stringify({ login: process.env.NEXT_PUBLIC_LOGIN, password: process.env.NEXT_PUBLIC_PASSWORD }),
    
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const result = await res.json()
      console.log(result)
    

    }catch(err){

      console.log(err)

    }
   

  }

  useEffect(() => {
    setFilterData(filteredData1);
    setShopData(filteredData1)
    getToken()
  }, []);

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
        )}>
        <NavBar />
        <div className=" lg:px-12 pb-12 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
          <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
            
            <div className="flex flex-col justify-between items-center">
              <div className="filterbg p-6 border-[#F0A724] rounded-[12px] w-[95%] overflow-x-hidden flex flex-col justify-between items-center flex-grow overflow-y-auto lg:max-w-[330px] 2xl:max-w-full">
                <div className="flex flex-col h-full w-full gap-4 lg:gap-0">
                  <div className="flex items-center justify-between whitespace-nowrap gap-[30px]  w-full ">
                    <Command className="lg:block rounded-lg border mb-4 bg-[#FFBD48] border-[#F0A724]">
                      <div
                        className="flex items-center px-5"
                        cmdk-input-wrapper="">
                        <Image
                          src="/filter/search.png"
                          width={20}
                          height={20}
                          alt="/"
                          unoptimized
                          priority
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
                        "h-full w-full tallXS:overflow-y-auto flex-none  rounded-2xl col-span-2 text-base lg:text-xl",
                        { block: openFilterMobile }
                      )}>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-white">Charity</span>
                        <Image
                          src="/filter/filter.png"
                          width={20}
                          height={20}
                          alt=""
                          unoptimized
                          priority
                        />
                      </div>
                      <Separator className=" my-3 lg:my-5 bg-[#E6E6E6]" />
                      {/* FILTERING OPTIONS */}

                      <div className="flex flex-col justify-between ">
                        {" "}
                        {/* Charity & Location */}
                        <ScrollArea className="">
                          <div className="flex items-center justify-between mb-10 gap-8">
                            <label
                              htmlFor="all"
                              className="flex items-center cursor-pointer w-full justify-between">
                              <input
                                id="all"
                                className="sr-only w-full h-full"
                                type="radio"
                                value="all"
                                checked={selectedType === "all"}
                                onChange={handleTypeChange}
                              />
                              <span className="whitespace-nowrap text-white text-sm font-semibold lg:text-[14px] lg:font-bold leading-none">
                                All
                              </span>
                              <div className="custom-checkbox">
                                <div
                                  className={`${
                                    selectedType === "all"
                                      ? "checkedmark"
                                      : "uncheckedmark"
                                  }`}></div>
                              </div>
                            </label>
                          </div>
                          {category && category.length > 1 && (
                            <>
                              {category.map((filter, index) => {
                                return (
                                <div key={index}></div>
                                );
                              })}
                            </>
                          )}
                        </ScrollArea>
                        <div className="w-full "> {/* Loaction dropdown */}
                          <p className="text-[18px] text-white">Location</p>
                          <div className="relative">

                
                          <button 
                          onClick={() => setDropDown(!dropDown)}
                          className=" mt-3 rounded-[12px] p-[12px] z-[99] w-full bg-[#FFBD48] border-[#F0A724] text-white flex items-center justify-between">
                            <span className="text-[14px] font-bold ">By Country </span>{dropDown ?<RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                            
                            </button>

                            {dropDown &&
                            <AnimatePresence>
                            <motion.div 
                            initial={{opacity:0,y:-5}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:0.3}}
                            className="absolute z-[0] w-full text-[13px] text-white top-[35px] bg-[#FFBD48] py-[14px] px-[12px] leading-10 rounded-[12px]">
                                <p>USA</p>
                                <p>Hong Kong</p>

                            </motion.div>
                            </AnimatePresence>
                            }
                                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-start items-center mt-8 lg:mt-0">
                  <Image
                    src="/heart.png"
                    width={70}
                    height={70}
                    unoptimized
                    priority
                    alt="/"
                  />
                  <p className="text-white text-[14px] font-bold mt-3">
                    Terms and condition
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src="/givingblock.png"
                  width={130}
                  height={33}
                  alt="/"
                  unoptimized
                  priority
                />
              </div>
            </div>
            <div className="h-full rounded-2xl flex flex-grow flex-col">
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
                        priority
                        unoptimized
                      />
                    </motion.div>
                  </div>
                </>
              ) : (
                <ScrollArea className="w-full lg:h-[calc(100vh-100px)]  pb-64 lg:pb-4 lg:mb-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="p-3 grid xs:grid-cols-1 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  3xl:grid-cols-5 gap-5">
                    {filteredData && filteredData.length > 0 && (
                      <>
                        {filteredData.map((item, index) => (
                          <motion.div
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
                            className="bg-white p-5 rounded-[12px] relative"
                            key={item.id}>
                            <div className="flex justify-center w-full">
                              <img
                                src={item.logo}
                                width={200}
                                height={200}
                                alt="/"
                                unoptimized
                                priority
                              />
                            </div>
                            <Separator className="my-3 bg-[#FFE6BF]" />
                            <p className="text-[#4D4D4D] text-[18px]">
                              {item.name}
                            </p>
                            <p
                              className={`text-[16px] font-normal text-[#AAA] ${
                                selected == item.id && "opacity-0"
                              }`}>
                              {item.city}
                            </p>
                            {selected == item.id && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute -bottom-[25px] left-[10px] cursor-pointer">
                                <div className="flex justify-between items-center rounded-[7px] bg-white border-[#FFD48E] border-[2px]">
                                  <Image
                                    src="/coin.png"
                                    width={60}
                                    height={60}
                                    alt="/"
                                    unoptimized
                                  />
                                  <p className="px-5 text-[20px] font-extrabold text-[#4C81FF]">
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
