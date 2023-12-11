"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles

// import required modules
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

export default function ImageSlider() {
  // COIN IMAGE BASED ON SWIPER INDEX SLIDE
  const [coin, setCoin] = useState(1);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        onActiveIndexChange={(swiper) => {
          setCoin(
            swiper.activeIndex === 0 ? 2 : swiper.activeIndex === 1 ? 1 : 3
          );
        }}
        coverflowEffect={{
          rotate: 0,
          depth: 470,
          slideShadows: false,
          stretch: 0,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide className="p-[2px] 2xl:p-[2.5px] bg-gradient-to-b from-[#F9F9F9] to-[#87898A] rounded-[32px]">
          <div className="p-[2px] 2xl:p-[2.5px] bg-gradient-to-b from-[#D6D6D6 ] to-[#D0D0D0] rounded-[32px]">
            <div className="p-[3.6px] 2xl:p-[4.6px] bg-gradient-to-b from-[#C2C4C6] to-[#A7A9AB] rounded-[32px]">
              <Image
                src={"/images/leaderboard-nft.png"}
                alt="Rank #1"
                width={1024}
                height={1024}
                className="rounded-[32px] bg-[#DFDFDF]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-[2px] 2xl:p-[2.5px] bg-gradient-to-b from-[#FFE6C9] to-[#D67717] rounded-[32px]">
          <div className="p-[2px] 2xl:p-[2.5px] bg-gradient-to-b from-[#FFBA57] to-[#FFCA7D] rounded-[32px]">
            <div className="p-[3.6px] 2xl:p-[4.6px] bg-gradient-to-b from-[#FFAB05] to-[#F1B10E] rounded-[32px]">
              <Image
                src={"/images/leaderboard-nft.png"}
                width={1024}
                height={1024}
                alt="Rank #1"
                className="rounded-[32px] bg-[#EEEAC8]"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="p-[2px] 2xl:p-[2.5px] bg-gradient-to-b from-[#F9E9E1] to-[#E57F3B] rounded-[32px]">
          <div className="p-[2px] 2xl:p-[2.5px] bg-gradient-to-b from-[#FFBB8F] to-[#FFDEC3] rounded-[32px]">
            <div className="p-[3.6px] 2xl:p-[4.6px] bg-gradient-to-b from-[#FFA96D] to-[#FCB88D] rounded-[32px]">
              <Image
                src={"/images/leaderboard-nft.png"}
                width={1024}
                height={1024}
                alt="Rank #1"
                className="rounded-[32px] bg-[#FEF4EA]"
              />
            </div>
          </div>
        </SwiperSlide>
        <div className="flex flex-col 2xl:flex-row w-full p-5 pt-10 2xl:py-4 2xl:px-11 gap-3 2xl:gap-12 justify-center 2xl:justify-between items-center bg-white/50 -translate-y-2 md:-translate-y-7 2xl:-translate-y-10 relative">
          <Image
            src={"/images/bg-bubble.svg"}
            width={98}
            height={104}
            alt="bubble background image"
            className="absolute -translate-y-[330px] translate-x-[500px]"
          />

          <div className="hidden 2xl:block text-2xl font-black text-foreground/10 uppercase relative">
            <Image
              src={"/images/bg-bubble.svg"}
              width={140}
              height={140}
              alt="bubble background image"
              className="absolute -z-50 -translate-y-44 translate-x-10"
            />
            leaderboard
          </div>
          <div className="flex justify-between items-center max-w-md md:max-w-2xl 2xl:max-w-none w-full">
            <div className="flex gap-5 items-center">
              <SwiperButton nextSlide={false} />
              <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-2">
                {/* COIN RANK FOR DESKTOP IMAGE GOES HERE */}

                <Image
                  src={`/images/icons/coin-${coin}.svg`}
                  alt="Rank #2"
                  width={40}
                  height={40}
                  className="bg-[#FEF4EA] mb-1"
                  unoptimized
                />
                <p className="text-2xl font-bold uppercase">Champion</p>
              </div>
            </div>
            {/* COIN RANK FOR MOBILE IMAGE GOES HERE */}
            <div className="2xl:hidden flex items-center gap-2">
              <Image
                src={`/images/icons/coin-${coin}.svg`}
                alt="Rank #2"
                width={30}
                height={30}
                className="bg-[#FEF4EA] 2xl:hidden"
                unoptimized
              />
              <p className="text-lg font-bold uppercase">Champion</p>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="hidden 2xl:flex gap-5">
                <div className="text-base font-bold text-center uppercase">
                  <span className="text-foreground/50">Name</span> <br />{" "}
                  Supersimon
                </div>
                <div className="text-base font-bold text-center uppercase">
                  <span className="text-foreground/50">Points</span> <br />{" "}
                  10,921
                </div>
              </div>
              <SwiperButton nextSlide={true} />
            </div>
          </div>
          <div className="flex 2xl:hidden justify-between  max-w-md md:max-w-2xl 2xl:max-w-none w-full">
            <div className="text-base font-bold text-center uppercase">
              <span className="text-foreground/50">Name</span> <br /> Supersimon
            </div>
            <div className="text-base font-bold text-center uppercase">
              <span className="text-foreground/50">Points</span> <br /> 10,921
            </div>
          </div>
          <div className="hidden 2xl:block text-2xl font-black text-foreground/10 uppercase relative">
            <Image
              src={"/images/bg-bubble.svg"}
              width={94}
              height={94}
              alt="bubble background image"
              className="absolute -z-50 -translate-y-24 -translate-x-20 "
            />
            <Image
              src={"/images/bg-bubble.svg"}
              width={140}
              height={148}
              alt="bubble background image"
              className="absolute -z-50 -translate-y-80 translate-x-10"
            />
            leaderboard
          </div>
        </div>
      </Swiper>
    </>
  );
}

function SwiperButton({ nextSlide }) {
  const swiperInst = useSwiper();
  var content = <div></div>;

  if (nextSlide) {
    content = (
      <button
        className={`bg-[#EEEAC8] rounded-full px-5 py-1`}
        onClick={() => swiperInst.slideNext()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3905 22.276C12.8712 22.7566 13.6275 22.7936 14.1505 22.3869L14.2761 22.276L19.6095 16.9426C20.0901 16.462 20.1271 15.7057 19.7204 15.1826L19.6095 15.057L14.2761 9.72369C13.7554 9.203 12.9112 9.203 12.3905 9.72369C11.9099 10.2043 11.8729 10.9606 12.2796 11.4837L12.3905 11.6093L16.78 15.9998L12.3905 20.3904C11.9099 20.871 11.8729 21.6273 12.2796 22.1504L12.3905 22.276Z"
            fill="black"
          />
        </svg>
      </button>
    );
  } else {
    content = (
      <button
        className={`bg-[#EEEAC8] rounded-full px-5 py-1`}
        onClick={() => swiperInst.slidePrev()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6095 22.276C19.1288 22.7566 18.3725 22.7936 17.8495 22.3869L17.7239 22.276L12.3905 16.9426C11.9099 16.462 11.8729 15.7057 12.2796 15.1826L12.3905 15.057L17.7239 9.72369C18.2446 9.203 19.0888 9.203 19.6095 9.72369C20.0901 10.2043 20.1271 10.9606 19.7204 11.4837L19.6095 11.6093L15.22 15.9998L19.6095 20.3904C20.0901 20.871 20.1271 21.6273 19.7204 22.1504L19.6095 22.276Z"
            fill="black"
          />
        </svg>
      </button>
    );
  }
  return content;
}
