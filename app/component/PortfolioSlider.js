'use client';

import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';

const PostersSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        effect: 'creative',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        touchRatio: 1,
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['500%', 0, 0],
          },
          next: {
            translate: ['-14%', 0, -1],
          },
        },
      });
    }
  }, []);

  const images = [
    '/web-ss-1.webp',
    '/web-ss-2.webp',
    '/web-ss-3.webp',
    
    
    
  ];

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 overflow-hidden ">
      <div className="swiper swiper-creative w-full" ref={swiperRef}>
        <div className="swiper-wrapper ">
          {images.map((src, index) => (
            <div className="swiper-slide rounded-lg" key={index}>
              <img
                src={src}
                alt={`Poster ${index + 1}`}
                
                className="w-full h-auto object-cover rounded-lg"
              />
             
            </div>
          ))}
          
        </div>
         
      </div>

     
    </div>
  );
};

export default PostersSlider;






 