"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Slide data (easily add more)
const slides = [
  {
    name: "Nikita Roy",
    role: "Fashion Brand Owner",
    rating: 5.0,
    feedback:
      "The team is quite supportive. They patiently listen to every query and understand what is needed. They have significantly improved online visibility.  ",
   
  },
  {
    name: "Saurabh Sharma",
    role: "Founder Home Décor Business",
    rating: 4.8,
    feedback:
      "We were in search of a company which can help us rank on top in search results. That’s when we connected with the SEO team of Digital Whopper. Shortly after we started, we began to see positive results. The team is really professional and delivers impressive outputs.  ",
    
  },
  {
    name: "Dev Saxena ",
    role: "Small Business Owner",
    rating: 4.8,
    feedback:
      "I had an offline store but also wanted to run an e-commerce business. However, my attempts didn't deliver the desired results. After we worked with Digital Whopper, they provided solutions and ran campaigns that brought good ROI. Really happy to work with them!",
   
  },{
    name: "Shruti Yadav ",
    role: "Influencer",
    rating: 4.8,
    feedback:
      "Thanks to the Social media manager of Digital Whopper! Our social media reach has significantly improved in the past few months. We’ve achieved quite good growth. We’re really satisfied with their work.",
   
  },
];

// Reusable testimonial card component
const TestimonialCard = ({ slide }) => {
  return (
    <div className="w-full bg-white p-5 rounded-2xl my-5">
      <div className="flex justify-between">
        {/* Profile Section */}
        <div className="flex gap-4">
          {/* <Image
            src={slide.avatar}
            alt={slide.name}
            width={70}
            height={70}
            className="rounded-full"
          /> */}
          <div className="flex flex-col justify-center">
            <h4 className="font-bold">{slide.name}</h4>
            <p>{slide.role}</p>
            <div className="flex items-center gap-2 mt-2">
              <Image src="/Star.png" alt="Rating" width={100} height={15} />
              <span className="text-sm font-medium">{slide.rating}</span>
            </div>
          </div>
        </div>

        {/* Quote Icon */}
        <Image src="/quote.png" alt="Quote" width={40} height={40} />
      </div>

      {/* Feedback Text */}
      <p className="mt-4 text-[clamp(0.8rem,2vw,1rem)]">{slide.feedback}</p>
    </div>
  );
};

const IngredientCarousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
          1920: { slidesPerView: 2, spaceBetween: 30 },
          1028: { slidesPerView: 2, spaceBetween: 10 },
          990: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IngredientCarousel;
