"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion";
import ServiceBox from "./ServiceBox";
import RotationImage from "./RotationImage";
import CircleSection from "./CircleSection";
import LineText from "./LineText";

const RotationSection = () => {
  const rotatingDivRef = useRef(null);
  const controls = useAnimation();
  const sideControls = useAnimation();
  const leftControls = useAnimation();
  const img_opacity = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      if (rotatingDivRef.current) {
        const rect = rotatingDivRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          if (scrollPosition > prevScrollY) {
            // Scrolling Down
            controls.start({
              top: "200px",
              rotateY: -180,
              opacity: 0,
              transition: { duration: 3 },
            });

            sideControls.start({
              x: 256, // Move 16rem right
              y: -256, // Move -16rem up
              opacity: 0,
              transition: { duration: 2, ease: "easeInOut" },
              display:"none",
            
            });
            leftControls.start({
              opacity: 0,
              height: "0px",
              transition: { duration: 2, ease: "easeInOut" },
              display:"none",
            });

             img_opacity.start({
            opacity:0,
            height:"0px",
            display:"none",
          });
          } 
          
         
          
          
          
          
          
          
          
          
          
          else if (scrollPosition < prevScrollY) {
            // Scrolling Up (Reverse)
            controls.start({
              top: "0px",
              rotateY: 0,
              opacity: 1,
              transition: { duration: 3 },
            });

            sideControls.start({
              x: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 2, ease: "easeInOut" },
             display:"flex",
            });

            leftControls.start({
              height: "auto",
              opacity: 1,
              transition: { duration: 2, ease: "easeInOut" },
              display:"block",
            });
              img_opacity.start({
            opacity:1,
            height:"auto",
            display:"block",
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
    <div className="mx-auto w-full">
                  <motion.div
            animate={leftControls}
            initial={{opacity: 1, height: "auto" }}
            className="rotate-section relative flex flex-col justify-center items-center"
          >
          <RotationImage
          
          rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead="Grow your brand online with the " 

lineheadspancolor="best digital marketing company in Jaipur"
linepara={`<span class="block">Welcome to Digital Whopper! Your only destination to achieve integrated digital growth!</span>
  <span class="block">Boost your brand's visibility, generate leads and drive conversions!</span>
  We combine human creativity with the latest technologies to provide the best results. 
  With AI ruling the digital world, we recreate brand identity to be more customer-centric. 
  We develop unique data-driven marketing strategies for your brand that connect with your ideal audience. 
  We've helped over 50 brands boost visibility, generate leads and increase ROI. No matter your business size, 
  we are the <strong>best digital marketing company in Jaipur</strong> you can find to grow your brand. 
  Your success is our mission! 
  
  `}


          />
 


        <div className="flex flex-wrap justify-center item-center gap-8 py-[clamp(3rem,6vw,6rem)] w-full">
          <div className="relative w-[65%] md:w-[30%] lg:w-[15%]">
            <Image
              src="/Group.svg"
              alt="Logo"
              width={34}
              height={34}
              priority
              className="absolute top-[-18%] left-[-18%] rotating"
            />
              <Link href="/Contact">
            <button className="bg-black text-xs lg:text-base text-white font-medium p-4 rounded-[30px] w-[100%] font-bold">
              Enquire now!
            </button>
              </Link>
          </div>
          <div className="w-[80%] md:w-[30%] lg:w-[15%]">
             <Link href="/Contact">
      <button className="font-bold w-full bg-transparent border-2 border-black text-xs lg:text-base text-black font-medium p-4 rounded-[30px]">
        Contact
      </button>
    </Link>
          </div>
        </div>
     
      </motion.div>
      {/* Animated Second Section */}
      <section className="flex-wrap second-section h-auto flex items-center justify-center relative">

      <motion.div
          className="video w-auto h-auto flex items-center justify-center text-white text-lg absolute 
          top-[-68px] left-[15%] "
          animate={leftControls}
          ref={rotatingDivRef}
          initial={{opacity: 1 }}
        >
        <div className="text-class">

          <div className="curve-arrow">
            <div className="flex gap-3">
            <i> <p className="text-black Feature font-[cursive] text-[clamp(0.5rem,3vw,1rem)]">Awsome
            <span className="block text-[clamp(0.5rem,3vw,1rem)]"> Feature</span> </p></i> 
        
         <div className="relative h-[85px] w-[52px] md:w-[85px] ">
  <Image
    src="/bottom.svg"
    alt="Logo"
    fill
    priority
    className="object-contain"
  />
</div>


            </div>
      
         


          </div>
        </div>


         
        </motion.div>
        
       

        <motion.div
          className="video w-auto h-auto flex items-center justify-center text-white text-lg absolute 
          top-[30px] bottom-[0px] md:bottom-[50%] right-[12%]"
          animate={sideControls}
          initial={{ x: 0, y: 0, opacity: 1 }}
        >
        <div className="text-class">

          <div className="curve-arrow">
            <div className="flex gap-3">
       
   <div className="relative h-[85px] w-[52px] md:w-[85px] ">
  <Image
    src="/curve-bottom.svg"
    alt="Logo"
    fill
    priority
    className="object-contain"
  />
</div>
        <i> <p className="text-black Feature font-[cursive] text-[clamp(0.5rem,3vw,1rem)]">Awsome Product 
        <span className="block text-[clamp(0.5rem,3vw,1rem)]"> Feature</span> </p></i> 
            </div>
           <div className="mt-[20px] transparent bg-[#ffffffad] w-[80px] h-[100px] md:w-[200px] md:h-[250px] border-2 border-white rounded-[10px]">

           </div>
         


          </div>
        </div>


         
        </motion.div>
      </section>






       <motion.div
        animate={img_opacity}
        initial={{opacity: 1, }} >

  <div className="image w-full ">
          
        <Image
              src="/Macbook.png"
              alt="Logo"
              width={1000}
              height={1300}
              priority
              className="m-auto"
            />
         


         
        </div>
        </motion.div>
      
      <CircleSection/>
    </div>
  );
};

export default RotationSection;
