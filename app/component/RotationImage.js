"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const RotationImage = ({
  rotate_img,
  width_img,
  height_img,
  Rotateclass,
  linehead,
  lineheadspan,
  lineheadspancolor,
  textclass,
  linepara,
  linespan,
  Afterspan,
  custom,
  disableAnimation, 
}) => {
  const rotatingDivRef = useRef(null);
  const controls = useAnimation();
  const lastScroll = useRef(0);

  useEffect(() => {
    if (disableAnimation === true) return; 

    const handleScroll = () => {
      if (!rotatingDivRef.current) return;

      const rect = rotatingDivRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      const currentScroll = window.scrollY;

      if (inView) {
        const scrollingDown = currentScroll > lastScroll.current;

        controls.start({
          top: scrollingDown ? "200px" : "0px",
          rotateY: scrollingDown ? -180 : 0,
          opacity: scrollingDown ? 0 : 1,
          transition: { duration: 2 },
        });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, disableAnimation]);

  return (
    <>
      <div className="relative flex justify-end w-full bottom-20">
        <motion.div
          ref={rotatingDivRef}
          className={`absolute w-full rotating ${
            Rotateclass || "md:w-[65%] lg:w-[65%] flex items-center justify-center z-[-1]"
          }`}
          animate={disableAnimation === true ? {} : controls}
          initial={disableAnimation === true ? {} : { rotateY: 0, opacity: 1 }}
        >
          <Image
            src={rotate_img}
            alt="SVG"
            width={width_img}
            height={height_img}
            priority
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <div className={`text-section w-[85%] m-auto ${custom || "pt-5"}`}>
        <div className={`w-full ${textclass || "text-left"}`}>
         {(linehead || lineheadspan || lineheadspancolor || Afterspan) && (
  <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight">
    {linehead && <span>{linehead}</span>}

    {(lineheadspan || lineheadspancolor || Afterspan) && (
      <span className="block">
        {lineheadspan && <span>{lineheadspan}&nbsp;</span>}

        {lineheadspancolor && (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7163FD] via-[#4132D1] to-[#3C31A5]">
            {lineheadspancolor}&nbsp;
          </span>
        )}

        {Afterspan && <span>{Afterspan}</span>}
      </span>
    )}
  </h1>
)}
{/* text-[clamp(0.5rem,3vw,1.5rem)] */}
         {(linepara || linespan) && (
  <p
    className={`pt-[50px] text-[clamp(0.3rem,3vw,0.9rem)] w-full sm:w-full  ${textclass || "text-left"}`}
  >
    {linepara && <span  dangerouslySetInnerHTML={{ __html: linepara }} /> }
    {linespan && <span className="block" dangerouslySetInnerHTML={{ __html: linespan }} />}
  </p>
)}

        </div>
      </div>
    </>
  );
};

export default RotationImage;
