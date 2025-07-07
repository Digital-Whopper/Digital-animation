"use client"; 

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";


const images = [
  "/web-ss-1.webp",
  "/web-ss-3.webp",
  "/Marbleous.webp",
 "/web-ss-1.webp",

 "/web-ss-3.webp",

];
export default function SwiperCards() {
  return (
    <section className="flex justify-center items-center overflow-hidden py-10">
      <div className="w-[250px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[1200px] lg:h-[600px]">
        <Swiper
          effect="cards"
          grabCursor={true}
          initialSlide={2}
          speed={500}
          loop={true}
          mousewheel={{ invert: false }}
          modules={[EffectCards, Mousewheel]}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded-xl shadow-2xl overflow-hidden"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className={`absolute inset-0 w-full h-full md:object-cover ${
                  index % 2 !== 0 ? "object-[50%_0%]" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

















// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards, Mousewheel } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cards";

// const images = [
//   "/web-ss-1.webp",
  
//   "/web-ss-3.webp",
//  "/web-ss-1.webp",
// ];

// const PostersSlider = () => {
//   return (
//     <section className="w-full flex justify-center items-center py-10 overflow-hidden">
//       <Swiper
//         effect="cards"
//         grabCursor
//         loop = {true}
//         initialSlide={2}
//         speed={500}
//         modules={[EffectCards, Mousewheel]}
//         mousewheel={{ invert: false }}
//         cardsEffect={{ rotate: true }}
//         className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[1000px] lg:h-[600px]"
//       >
//         {images.map((src, index) => (
//           <SwiperSlide
//             key={index}
//             className="relative shadow-xl rounded-xl select-none overflow-hidden"
//           >
//             <Image
//               src={src}
//               alt={`Slide ${index + 1}`}
//               layout="fill"
              
//               priority={index === 0} // preload first image
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default PostersSlider;