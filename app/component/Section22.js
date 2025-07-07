import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Section22() {
  return (
    <div className="bg-[#FFFFFF] flex mx-[2%] px-[3%] py-[5%] rounded-2xl justify-between items-center md:flex-row flex-col gap-[20vw] md:gap-[0px] my-[8vw]">
      <div className="md:w-[30%]">
        <img src="/Figure.png" alt="" />
        <img
          src="/star1.png"
          alt=""
          className="relative right-[3vw] mt-[4vw]"
        />
      </div>

      <div className="md:w-[35%]">
        <img src="/roundtext.png" alt="" />
        <p className="bg-[#F1EEFC] py-2 px-3 rounded-[10px] inline-block my-[3vw]">
          About SEO
        </p>

        <h4 className="md:text-[3.2vw] text-[8vw] leading-[10vw] font-semibold md:leading-[3.4vw]">
          Comprehensive SEO &{" "}
          <span className="text-[#3E32BB]">Digital Marketing</span> Solutions.
        </h4>
        <p className="my-[1vw]">
          Welcome to SEOC your trusted partner for comprehensive SEO and digital
          marketing solutions. With our proven expertise and innovative
          strategies the digital landscape.
        </p>
        <div className="flex gap-1 items-center my-[2vw] bg-[#3E32BB] text-white py-2 px-4 rounded-2xl w-[140px] text-center">
          <button>Learn More</button>
          <MdArrowOutward />
        </div>
      </div>

      <div className="flex flex-col gap-[5vw] md:w-[23%]">
        <img
          className="relative left-[2vw]"
          src="/satarn.png"
          alt=""
        />
        <img src="/Figure2.png" alt="" />
      </div>
    </div>
  );
}