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
              <h1 className="font-bold text-[20px] my-2">Web Development</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] rounded-3xl p-5 md:mb-20 mb-[22px] sm:w-[280px] ">
              <Image src="/fragment.png" alt="Content Writing" width={40} height={50} />
              <h1 className="font-bold text-[20px] my-2">Content Writing</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>
            </motion.div>
          
          </div>
        </div>
      </section>

      {/* Middle Section with Image and Circles */}
      <section>
        <div className=" absolute  flex justify-center left-0 w-full  z-[-1]">
          <Image src="/Macbook.png" alt="Center Image" width={500} height={500} className="border-10 border-zinc-700 w-auto" />
        </div>

        <div className="relative w-64 h-64 flex items-center justify-center z-[-2]">
          <span className="absolute w-32 h-32 rounded-full bg-indigo-300 animate-ping opacity-75"></span>
          <span className="absolute w-48 h-48 rounded-full bg-indigo-300 animate-ping opacity-50 delay-150"></span>
          <span className="absolute w-64 h-64 rounded-full bg-indigo-300 animate-ping opacity-30 delay-300"></span>
          <div className="w-16 h-16 bg-indigo-600 rounded-full z-10"></div>
        </div>

        {/* Center Button with Concentric Circles */}
        <div className="relative flex items-center justify-center -mt-[173px] ml-14 w-40 h-40">
          <div className="absolute w-36 h-36 rounded-full border border-blue-700 animate-ping"></div>
          <div className="absolute w-28 h-28 rounded-full border border-blue-700 animate-ping delay-200"></div>
          <div className="absolute w-20 h-20 rounded-full border border-blue-700 animate-ping delay-500"></div>

          <button className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
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
            <h1 className="font-bold text-[20px] my-2">UI/UX Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] rounded-3xl p-5 md:mb-20 mb-[22px] sm:w-[280px] ">
            <Image src="/fragment.png" alt="Branding" width={40} height={50} />
            <h1 className="font-bold text-[20px] my-2">Branding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          </motion.div>
         
        </div>
      </section>


</motion.div>
  











    
    </div>
  );
};

export default CircleSection;
