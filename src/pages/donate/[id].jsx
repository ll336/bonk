"use client";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/navbar";
import { cn, useWindowSize } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { RiArrowLeftSLine } from "react-icons/ri";
import { filteredDatas, categories } from "@/constants";
import Sidebar from "@/components/sidebar/Sidebar";
import { encodeURL, createQR } from '@solana/pay';
import { IoCopy } from "react-icons/io5";
import { PublicKey } from '@solana/web3.js';

export default function Donate() {
  const recipient = new PublicKey('9UejRas4nfxCdhF7c6h7zSPZo8pK8TuE7V2pN2A2qBsL');

  const ref = useRef(null);
  const router = useRouter();
  const [threshold, setThreshold] = useState(0.04)
  const [url, setUrl] = useState(null)
  const [details, setDetails] = useState();
  const [amount, setAmount] = useState(0);
  const [inputDisable, setInputDisable] = useState(false);
  const [debouncedAmount, setDebouncedAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [bonk, setBonk] = useState(0)
  const [bonkMatch, setBonkMatch] = useState(0)
  const windowSize = useWindowSize();
  const [copy, setCopy] = useState(false)
  const [tab, setTab] = useState(1)
  const [anonymous, setAnonymous] = useState(false)
  const [errorBorder, setErrorBorder] = useState([])
  const [form, setForm] = useState({
    name: null,
    lastname:null,
    email:"",
    address:"",
    country: null,
    state:null,
    city:null
  })

  useEffect(() => {
    if (ref.current && url) {
    const qrCode = createQR(url, 150);
      qrCode.append(ref.current)
    }
  }, [url]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [amount]);

  const validateForm = () => {
    const errors = {};
    const check = []
  
    if (!form.name) {
      errors.name = "Name is required";
      check.push("name")
    }
  
    if (!form.lastname) {
      errors.lastname = "Last name is required";
      check.push("lastname")
    }
  
   if (!/\S+@\S+\.\S+/.test(form.email) && form.email && form.email !== null) {
      errors.email = "Email is invalid";
      check.push("email")
    }
  
    if (!form.country) {
      errors.country = "Country is required";
      check.push("country")
    }
  
    if (!form.state) {
      errors.state = "State is required";
      check.push("state")
    }
  
    if (!form.city) {
      errors.city = "City is required";
      check.push("city")
    }

    setErrorBorder(check)
  
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!anonymous){

        const errors = validateForm();
        
  
        if (Object.keys(errors).length === 0) {
     
          const encodeUrl = encodeURL({ recipient })
          setUrl(encodeUrl)
          setTab(3)
        } 
    }else{
    
            if (!/\S+@\S+\.\S+/.test(form.email) && form.email !== null && form.email) {
                setErrorBorder(["email"])
              }else{
                  
          const encodeUrl = encodeURL({ recipient })
          setUrl(encodeUrl)
               setTab(3)
              }
        
       
    }
    
  }

  const handleChange = async (event) => {
    const newValue = event.target.value;
    if (!newValue || newValue.match(/^\d*\.?\d*$/)) {
      setAmount(newValue);
    }
  };

  useEffect(() => {
    if (debouncedAmount && debouncedAmount !== 0) {
      setInputDisable(true);
      
      const fetchBonk = async () => {
        try {
            const res = await fetch(
                `https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=${debouncedAmount*1000000000}`
              );
              const data = await res.json();
              if (data) {
                setRate(Number(data?.outAmount) / 1000000);

                setInputDisable(false);


                const url = `https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263&amount=${debouncedAmount*1000000000}`

                const res1 = await fetch(
                    url
                  );
                  const data1 = await res1.json();
                  if (data1) {
                    const result = data1.outAmount / 100000 * 0.01
                    setBonk(result)
                    setBonkMatch(result / 0.01)
                  }
              }
        
         
        } catch (err) {
          console.log(err);
        }
      };

   
        fetchBonk()
      
    }
  }, [debouncedAmount]);

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
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={cn(
          `lg:h-screen font-g8 bodybg`
        )}>
        <NavBar />
        <div
          className={`lg:px-12 pb-3 pt-4 w-full ${
            (windowSize.width > 1024 && windowSize.height <= 730)
              ? "lg:h-full"
              : "lg:h-[calc(100vh-112px)]"
          } flex flex-col relative`}
        >
          <div className="h-full w-full py-2 flex justify-between lg:flex-row flex-col">
            <Sidebar />
            <div
              className={`h-full rounded-2xl w-full overflow-x-hidden overflow-hidden px-6 ${
                (windowSize.width > 1024 && windowSize.height <= 730)? "min-h-[730px]": ""}`}
            >
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
                      <motion.div className="bg-white p-4 lg:p-5 py-7 rounded-[12px] flex flex-col flex-grow">
                        <p className="text-[#4D4D4D] text-[18px] lg:text-[16px] xl:text-[16px] leading-7 lg:leading-10">
                          {details.name}
                        </p>

                        <hr className="bg-[#E9E9E9] my-2 h-[2px] w-full" />

                        <div className="grid  grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5 lg:h-full">
                          <div className="flex flex-col gap-5 lg:gap-10">
                            <div className="flex justify-start gap-4 pt-3 lg:pt-10">
                            {(tab == 1 || tab == 2 || tab == 3) ?
                            <Image
                            src="/donate/1-1.png"
                            width={24}
                            height={24}
                            alt="/"
                            unoptimized
                          />

                          :

                          <Image
                                src="/donate/1.png"
                                width={24}
                                height={24}
                                alt="/"
                                unoptimized
                              />
                        
                        
                        }
                              
                              <p className={`${(tab == 1 || tab == 2 || tab == 3) ? "text-[#4D4D4D]" : "text-[#B8B8B8]"}`}>
                                Select a Currency
                              </p>
                            </div>
                            <div className="flex justify-start gap-4">
                            {(tab == 2 || tab == 3) ?
                            <Image
                            src="/donate/2-2.png"
                            width={24}
                            height={24}
                            alt="/"
                            unoptimized
                          />

                          :

                          <Image
                                src="/donate/2.png"
                                width={24}
                                height={24}
                                alt="/"
                                unoptimized
                              />
                        
                        
                        }
                              <p className={`${(tab == 2 || tab == 3) ? "text-[#4D4D4D]" : "text-[#B8B8B8]"}`}>Personal Information</p>
                            </div>
                            <div className="flex justify-start gap-4">
                            {tab == 3 ?
                            <Image
                            src="/donate/3-3.png"
                            width={24}
                            height={24}
                            alt="/"
                            unoptimized
                          />

                          :

                          <Image
                                src="/donate/3.png"
                                width={24}
                                height={24}
                                alt="/"
                                unoptimized
                              />
                        
                        
                        }
                              <p className={`${tab == 3 ? "text-[#4D4D4D]" : "text-[#B8B8B8]"}`}>Donation</p>
                            </div>
                          </div>
                        
                        {tab === 1
                        &&

                        <div className="w-full border-[#EBEBEB] rounded-[11px] border-[2px] h-full px-2 py-3 lg:px-5 lg:py-3  flex flex-col justify-start ">
                            
                            <div className="bg-[#FFFFFF] rounded-[11px] p-2  w-full flex justify-center gap-2 items-center border-[#F7F7F7] border-[3px] max-h-[46px]">
                              <Image
                                src="/solana.png"
                                width={25}
                                height={25}
                                alt="/"
                                unoptimized
                                priority
                              />
                              <p className="text-[#4C81FF] text-[13px] font-bold">
                                Solana
                              </p>
                            </div>

                            <div className="relative mt-4 ">
                              <input
                                disabled={inputDisable}
                                type="text"
                                className="w-full py-2 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[14px] bg-[#F7F7F7] placeholder:text-[#4D4D4D]"
                                value={amount}
                                onChange={(e) => handleChange(e)}
                              />

                              {rate !== 0 && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.5 }}
                                  className="absolute right-4 top-1/2 py-4 mb-0 -translate-y-[50%] text-[#B8B8B8] font-[500] text-[14px] "
                                >
                                  ≈ ${(rate).toFixed(2)}
                                </motion.p>
                              )}
                            </div>

                            <div className="bg-[#F7F7F7] mt-4 rounded-[11px] p-3  w-full flex justify-start items-center border-[#F7F7F7] border-[3px]">
                              <div className="flex flex-col gap-3 w-full">
                                <p className="text-[#4D4D4D] text-[12px] lg:text-[12px] font-bold whitespace-nowrap">
                                  Donation Summary
                                </p>

                                <div className="flex justify-between items-center w-full">
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-medium">
                                    Donation Amount
                                  </p>
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-medium">
                                    {debouncedAmount} SOL
                                  </p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-medium">
                                    Burn &#40;1%&#41;
                                  </p>
                                  <p className="text-[#FE0B37]  text-[12px] lg:text-[12px] font-medium">
                                  ≈ -{bonk.toFixed(2)} BONK
                                  </p>
                                </div>
                                {Number(debouncedAmount) >= Number(threshold) && Number(debouncedAmount) !== 0
                                &&
                                <>
                                <div className="flex justify-between items-center w-full">
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-medium">
                                    BONK Match
                                  </p>
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-medium">
                                  ≈ {bonkMatch.toFixed(2)} BONK
                                  </p>
                                </div>
                                </>
                            
                                
                                
                                }
                                <hr className="h-[2px] my-1 bg-[#EBEBEB] text-[#EBEBEB]"/>
                                <div className="flex justify-between items-center w-full">
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-bold">
                                  Charity Recieving
                                  </p>
                                  <p className="text-[#4D4D4D]  text-[12px] lg:text-[12px] font-medium">
                                    {debouncedAmount} SOL
                                  </p>
                                </div>

                            
                                
                              </div>
                            </div>
                            <div className="w-full py-5">
                                    <p className="text-[#B8B8B8] text-[9px] font-normal">The smart contract will burn 1% of the value of the user&#39;s donation from the BONK pool to support token deflation.</p>
                                    <p className="text-[#B8B8B8] text-[9px] font-normal  mt-1">If a donor contributes $10 or more, the smart contract matches it in BONK, converting BONK to USDC/USDT on ERC20 or SOL on SPL.</p>

                                    
                                </div>

                                <div className="flex justify-center">
                                <button 
                                disabled={debouncedAmount == 0 }
                              onClick={() => {if(debouncedAmount > 0){setTab(2)}}}
                              className={`${debouncedAmount == 0 && "opacity-50"} w-full bg-[#4C81FF] rounded-[10px] gap-3 py-3 text-white font-[500] flex justify-center items-center max-w-[300px]`}>
                               
                                <span className="text-[11px]">Next</span>
                              </button>
                                </div>
                               
                          </div>
                        
                        }

                        {tab == 2
                        &&
                        <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        className="w-full border-[#EBEBEB] rounded-[11px] border-[2px] h-full px-2 py-3 lg:px-5 lg:py-3  flex flex-col justify-start ">
                            
                        <button 
                        onClick={()=> setAnonymous(!anonymous)}
                        className={`bg-[#FFFFFF] rounded-[11px] p-2  w-full flex justify-center gap-2 items-center ${anonymous ? "border-[#FFBD47]": "border-[#F7F7F7]"}  border-[1px] max-h-[46px]`}>
                            {anonymous ?

                            <Image src="/donate/antick.png" width={20} height={20} alt="/" unoptimized />
                                :
                                <Image src="/donate/unantick.png" width={20} height={20} alt="/" unoptimized />
                            }

                          <p className="text-[#4D4D4D] text-[13px] font-bold">
                          Make donation anonymous
                          </p>
                        </button>

                            {!anonymous
                            &&
                            <>
                              <div className=" mt-4 flex justify-center gap-4">
                          <input
                            disabled={anonymous}
                            type="text"
                            placeholder="First name*"
                            className={`${errorBorder.includes("name") && "border-[#FE0B37] border-[1px]"} w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]`}
                            value={form.name}
                            onChange={(e) => {setForm({...form, name: e.target.value})}}
                          />
                            <input
                            disabled={anonymous}
                            type="text"
                            placeholder="Last name*"
                            className={`${errorBorder.includes("lastname") && "border-[#FE0B37] border-[1px]"} w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]`}
                            value={form.lastname}
                            onChange={(e) => {setForm({...form, lastname: e.target.value})}}
                          />
                        
                        </div>


                        <div className=" mt-4 flex justify-center gap-4">
                          <input
                            disabled={anonymous}
                            type="text"
                            placeholder="Address"
                            className="w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]"
                            value={form.address}
                            onChange={(e) => {setForm({...form, address: e.target.value})}}
                          />
                        
                        </div>

                        <div className=" mt-4 flex justify-center gap-4">
                          <input
                            disabled={anonymous}
                            type="text"
                            placeholder="Country*"
                            className={`${errorBorder.includes("country") && "border-[#FE0B37] border-[1px]"} w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]`}
                            value={form.country}
                            onChange={(e) => {setForm({...form, country: e.target.value})}}
                          />
                            <input
                            disabled={anonymous}
                            type="text"
                            placeholder="State/Provin...*"
                            className={`${errorBorder.includes("state") && "border-[#FE0B37] border-[1px]"} w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]`}
                            value={form.state}
                            onChange={(e) => {setForm({...form, state: e.target.value})}}
                          />
                        
                        </div>

                        <div className=" mt-4 flex justify-center gap-4">
                          <input
                            disabled={anonymous}
                            type="text"
                            placeholder="City*"
                            className={`${errorBorder.includes("city") && "border-[#FE0B37] border-[1px]"} w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]`}
                            value={form.city}
                            onChange={(e) => {setForm({...form, city: e.target.value})}}
                          />
                        
                        </div>
                            </>
                            
                            
                            }
                      

                        
                        <div className=" mt-4 ">
                            <p className="text-[#4D4D4D] text-[13px] font-bold my-2">Want a tax receipt?</p>
                          <input
                        
                            type="text"
                            placeholder="Email"
                            className={`${errorBorder.includes("email") && "border-[#FE0B37] border-[1px]"} w-full py-3 rounded-[11px] px-3 focus:outline-none text-[#4D4D4D] text-[12px] bg-[#F7F7F7] placeholder:text-[#B8B8B8]`}
                            value={form.email}
                            onChange={(e) => {setForm({...form, email: e.target.value})}}
                          />
                        
                        </div>

                     

                            <div className="flex justify-center mt-5">
                            <button 
                          onClick={(e) => {handleSubmit(e)}}
                          className="w-full bg-[#4C81FF] rounded-[10px] gap-3 py-3 my-1 text-white font-[500] flex justify-center items-center max-w-[300px]">
                           
                            <span className="text-[13px]">Next</span>
                          </button>
                            </div>
                           
                      </motion.div>
                    


                        }

                        {tab == 3
                        &&

                        <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        className="w-full border-[#EBEBEB] rounded-[11px] border-[2px] h-full px-2 py-3 lg:px-5 lg:py-3 gap-3 flex flex-col justify-center items-center">
                        <p className="text-[20px] font-bold text-[#4C81FF]">{debouncedAmount} SOL</p>
                        <p className="text-[14px] font-normal text-[#585858] text-center">Use the address below to make donation from your wallet</p>
                        
                        <div ref={ref}></div>
                            <div className="bg-[#F7F7F7] rounded-[11px] px-2 py-3 flex justify-between items-center w-full gap-2" >
                            <p className="text-[12px] text-[#4D4D4D] break-all">{!copy ? <>9UejRas4nfxCdhF7c6h7zSPZo8pK8TuE7V2pN2A2qBsL</> : <>Copied</>}</p>
                            <IoCopy className="text-[#4D4D4D] text-[23px] lg:flex hidden" onClick={() => {
                                setCopy(true)
                                navigator.clipboard.writeText("9UejRas4nfxCdhF7c6h7zSPZo8pK8TuE7V2pN2A2qBsL")
                                setTimeout(() => {
                                    setCopy(false)
                                }, 800)
                            }}/>
                            </div>

                            
                            <p className="text-[12px] font-normal text-[#B8B8B8] text-center">Send only {debouncedAmount} SOL to this address. Sending other unsupported tokens or NFTs to this address may result in the loss of your donation. <br />An email will be sent on Txn Receipt</p>
                            <button 
                              onClick={() => {router.push(`/organization/${router.query.id}`)}}
                              className={`w-full bg-[#4C81FF] rounded-[10px] gap-3 py-3 text-white font-[500] flex justify-center items-center max-w-[300px]`}>
                               
                                <span className="text-[11px]">Start over</span>
                              </button>
                        
                        </motion.div>
                        
                        
                        
                        }

                          
                          
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
