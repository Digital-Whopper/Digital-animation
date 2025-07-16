"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const CircleSection = () => {
 const rotatingDivRef = useRef(null);
  const controls = useAnimation();
  const sideControls = useAnimation();
  const leftControls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
const img_opacity = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      if (rotatingDivRef.current) {
        const rect = rotatingDivRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          if (scrollPosition > prevScrollY) {
           
            leftControls.start({
              opacity: 1,
              height: "auto",
              rotate: 0, marginTop: 0,
              transition: { duration: 2, ease: "easeInOut" },
            });

             img_opacity.start({
            opacity:1,
            height:"auto",
            display:"flex",
          });
           
          } 
          
          
          
          
          
          
          
          
          
          
          
          else if (scrollPosition < prevScrollY) {
            // Scrolling Up (Reverse)
           

            leftControls.start({
              height: "auto",
              opacity: 0,
              rotate: -88, marginTop: 50,
              transition: { duration: 2, ease: "easeInOut" },
            });



               img_opacity.start({
            opacity:0,
           
            display:"none",
          });
          }
        }
      }
      setPrevScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, sideControls, prevScrollY]);



  return (
    <div >
      {/* Left Column */}

<motion.div

  ref={rotatingDivRef}
  className=" flex flex-col md:flex-row justify-center items-center overflow-hidden"
   animate={img_opacity}
        initial={{opacity: 0, }}
>

    <section>
        <div className="flex">
          <div>

            <motion.div
             animate={leftControls}
          ref={rotatingDivRef}
          initial={{opacity: 0 , rotate: -88, marginTop: 50 }}
            
            >
                <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] rounded-3xl p-5 md:mb-20 mb-[22px] sm:w-[280px] ">
              <Image src="/fragment.png" alt="Web Development" width={40} height={50} />
              <h2 className="font-bold text-[20px] my-2">App & Shopify Development</h2>
              <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
           Improve your online reputation with us! Our Tech Gurus are experts in creating lasting digital experiences. They code with creativity to give your brand a transformation you’ll woah!!
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] rounded-3xl p-5 md:mb-20 mb-[22px] sm:w-[280px] ">
              <Image src="/fragment.png" alt="Content Writing" width={40} height={50} />
              <h2 className="font-bold text-[20px] my-2">SEO & SMO Optimisation</h2>
              <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
                If you’re not visible, you won’t stand online. Our SEO & SMO strategies will give your brand a voice resonating with your audience. Rank on top with our optimisation techniques. 
              </p>
            </div>
            </motion.div>
          
          </div>
        </div>
      </section>

      {/* Middle Section with Image and Circles */}
      <section >
        <div className=" absolute  flex justify-center left-0 w-full  z-[-1]">
          <Image src="/Macbook.png" alt="Center Image" width={500} height={500} className="border-10 border-zinc-700 w-auto" />
        </div>

        <div className="relative w-64 h-64  items-center justify-center z-[-2]">
          <span className="absolute w-32 h-32 rounded-full bg-indigo-300 animate-ping opacity-75 hidden"></span>
          <span className="absolute w-48 h-48 rounded-full bg-indigo-300 animate-ping opacity-50 delay-150 hidden"></span>
          <span className="absolute w-64 h-64 rounded-full bg-indigo-300 animate-ping opacity-30 delay-300 hidden"></span>
          <div className="w-16 h-16 bg-indigo-600 rounded-full z-10"></div>
        </div>

        {/* Center Button with Concentric Circles */}
        <div className="relative  items-center hidden justify-center -mt-[173px] ml-14 w-40 h-40">
          <div className="absolute w-36 h-36 rounded-full border border-blue-700 animate-ping hidden"></div>
          <div className="absolute w-28 h-28 rounded-full border border-blue-700 animate-ping delay-200 hidden"></div>
          <div className="absolute w-20 h-20 rounded-full border border-blue-700 animate-ping delay-500 hidden"></div>
{/* flex */}
          <button className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full hidden items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Right Column */}
      <section>
        <div>
          <motion.div
          
            animate={leftControls}
        
          initial={{opacity: 0 , rotate: -88, marginTop: 50 }}
          
          >





 <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] rounded-3xl p-5 md:mb-20 mb-[22px] sm:w-[280px] ">
            <Image src="/fragment.png" alt="UI/UX Design" width={40} height={50} />
            <h2 className="font-bold text-[20px] my-2">E-Commerce </h2>
            <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
             Turn traffic into sales! We create digital stores that encourage customers to make purchases at every visit. Our stores can be found on Amazon, Etsy, Flipkart and other platforms. 
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] rounded-3xl p-5 md:mb-20 mb-[22px] sm:w-[280px] ">
            <Image src="/fragment.png" alt="Branding" width={40} height={50} />
            <h2 className="font-bold text-[20px] my-2">Performance Marketing</h2>
            <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
              Our data-based strategies of online marketing including Google and Meta Ads give a boost to your ROI. Why? Because we don’t limit up to clicks! We drive conversions!
            </p>
          </div>
          </motion.div>
         
        </div>
       
      </section>


</motion.div>
  

 {/* <p className="text-base">BUILD YOUR OWN BRAND WHOPPER WITH US</p> */}









    
    </div>
  );
};

export default CircleSection;
