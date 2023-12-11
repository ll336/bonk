"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icons } from "../ui/icons";

function ShopItem({
  index,
  nfts,
  selected,
  setSelected,
  image,
  unreleased,
  unreleasedTimer,
  setSelectedItem,
  limited,
  name,
  price,
  item,
  process1
}) {


  const [time, setTime] = useState(
    unreleasedTimer && unreleasedTimer.getTime()
  );

   const formattedNumber = (value) => {
    const number = Number(value).toLocaleString();
    return number
    
   }
  useEffect(() => {
    unreleasedTimer &&
      setInterval(() => {
        var now = new Date().getTime();
        var timeleft = time - now;

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }, 1000);
  }, []);


  return (
    <div
      className={cn(
        "relative col-span-1 bg-white rounded-2xl  max-w-fit mx-auto p-3 cursor-pointer hover:scale-95 transition-all ease-in-out",
        {
          "ring ring-offset-4 lg:ring-offset-8 ring-ring ring-offset-white/50 hover:scale-100":
            selected === index,
        }
      )}
      onClick={() => {
        if(!process1){

          setSelected(index);
          setSelectedItem(item)
        }

      }}
    >
      <div className={`relative `}>
      <Image
          src={image}
          alt="Clock Icon"
          height={176}
          width={176}
          className={`rounded-2xl w-full h-full lg:w-[176px] lg:h-[176px] aspect-square object-cover ${!nfts.some((nft)=> Number(nft.level) >= Number(item.requirement)) && "blur-[1px]"}`}
          priority
        />
        {item.remain !== 0 
          ?
          <>
          {unreleased && (
          <div className="bg-foreground/50 backdrop-blur-md absolute left-0 top-0 rounded-xl lg:rounded-2xl w-full h-full text-white flex flex-col gap-1 items-center justify-center z-30">
            <Icons.hourglass />
            <p className="text-xs lg:text-sm font-bold uppercase">
              {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
            </p>
          </div>
        )}

        {(Number(limited) > 0) && (
          <div className="absolute left-0  top-0 w-full h-full text-white flex items-center justify-center">
            <div className="absolute w-full h-8 py-3 flex items-center justify-center gap-1 top-auto bottom-0 left-0 bg-[#03B1FF] rounded-sm">
          
              <p className="lg:block hidden lg:whitespace-nowrap px-1 uppercase text-xs font-[400] text-white">
                Limit {limited} per person
              </p>
              <p className="block lg:hidden lg:whitespace-nowrap px-1 uppercase text-xs font-[400] text-white">
              {limited} per person
              </p>
            </div>
          </div>
        )}


        {!nfts.some((nft)=> Number(nft.level) >= Number(item.requirement))
          &&
          <div className="bg-[#000000]/30 w-full h-full rounded-bl-none rounded-br-none rounded-2xl aspect-square object-cover absolute top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2">
            <Image src='/lock.png' width={40} height={52} alt="/" />
              <div className="bg-primary px-3 text-white rounded-lg text-xl font-normal">Lv. {item.requirement}</div>
            </div>
            
          </div>
        
        
        
        }
          </>
        :

        <>
        <div className="bg-[#000000]/30 w-full h-full rounded-2xl aspect-square object-cover absolute top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2">
            <Image src='/soldout.png' width={126} height={126} alt="/" />
            </div>
            
          </div>
        
        
        </>
        
        }
       
      </div>
      <p className="text-xs font-bold uppercase mt-2.5 lg:text-left text-center">{name}</p>
      <div className="flex lg:flex-row flex-col justify-between items-center">
      <p className="text-xl uppercase">{formattedNumber(price)}</p>
      <p className={`text-sm ${item.remain == 0 && 'hidden'} font-[400] text-[#999999]`}><span className="font-[500]">{formattedNumber(item.remain)}</span>/{formattedNumber(Number(item.stock))}</p>

      </div>
    </div>
  );
}

export default ShopItem;
