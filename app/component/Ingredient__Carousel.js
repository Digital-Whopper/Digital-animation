"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const slides = [
  {
    desktop: "/italy.jpg",
    mobile: "/italy.jpg",
  },
  {
    desktop: "/italy.jpg",
    mobile: "/italy.jpg",
  },
  {
    desktop: "/italy.jpg",
    mobile: "/italy.jpg",
  },
  {
    desktop: "/italy.jpg",
    mobile: "/italy.jpg",
  },
];

const IngredientCarousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[ Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          1920: { slidesPerView: 2, spaceBetween: 30 },
          1028: { slidesPerView: 2, spaceBetween: 10 },
          990: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
{/*           
            <img
              src={slide.desktop}
              alt={`Slide ${index + 1}`}
              className="hidden md:block w-full h-auto object-cover rounded-xl"
            />
        
            <img
              src={slide.mobile}
              alt={`Slide ${index + 1} Mobile`}
              className="block md:hidden w-full h-auto object-cover rounded-xl"
            /> */}





            <div className="w-full bg-white p-5 rounded-2xl my-5">

<div className="profile flex">
<div className="w-1/2">
<div className="flex gap-[15px]">
  <Image
  src="/user.png"
  alt="Icon"
  width={70}
  height={70}
  className="rounded-full"
/>

<div className="flex flex-col">
  <h4 className="font-bold" >Fawzi Sayed</h4>

<p >Ui Ux Designer</p>
</div>

</div>

<div className="flex my-2 gap-[5px]">
  <Image
  src="/Star.png"
  alt="Icon"
  width={100}
  height={15}
  
/>
  <h4 >5.0</h4>
</div>

</div>

<div className="w-1/2 flex justify-end">
<Image
  src="/quote.png"
  alt="Icon"
  width={100}
  height={50}
  
/>
</div>

</div>

<div className="text">
  <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
    consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
  </p>
</div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IngredientCarousel;
