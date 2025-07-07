"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const Pf_Slider = () => {
  const slides = [
    { id: 1, title: "Goodee.Com", image: "/web-ss-1.webp" },
    { id: 2, title: "Slide Two", image: "/web-ss-1.webp" },
    { id: 3, title: "Slide Three", image: "/web-ss-1.webp" },
    { id: 4, title: "Slide Four", image: "/web-ss-1.webp" },
  ];

  return (
    <div className="w-full py-10 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-[1200px] px-4">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          className="overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="w-[250px] sm:w-[300px] md:w-[340px] h-[480px] relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute bottom-0 left-0 right-0 text-white text-center py-4 text-lg font-semibold bg-gradient-to-t from-black/80 to-transparent z-20">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Pf_Slider;
