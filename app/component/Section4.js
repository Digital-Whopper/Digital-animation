import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <>
      <div className="bg-[#D5D3E0] flex justify-center items-center py-2 px-3 w-[140px] rounded-[10px] m-auto my-[1vw]">
        <img src="Images\logo-icons3.svg.png" alt="" />
        <p className="text-[#4E2FDA] font-semibold">Our Service</p>
      </div>

      <p className="text-[3vw] font-semibold w-[40vw] text-center m-auto leading-13">
        Our Comprehensive Suite Of Digital Marketing
        <span className="text-[#4E2FDA]">Services.</span>
      </p>

      <div className="my-[10%] flex flex-col gap-23 md:gap-0">
        <div className="flex justify-center gap-[10%] flex-col md:flex-row">
          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%] my-4 md:my-0">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">01</p>
            </div>

            <p className="font-bold text-[1.5rem]">
              Keyword Research and Strategy
            </p>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
              Discover profitable keywords and craft tailored strategies to
              boost your search engine rankings effectively.
            </p>

            <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div>
          </div>

          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%]">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">02</p>
            </div>

            <p className="font-bold text-[1.5rem]">On-Page SEO Optimization</p>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
              Enhance website performance by improving metadata, content
              structure, and internal linking for better user engagement.
            </p>

            <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-[300px] h-[300px] mx-auto">
          {/* Animated Ripple Circles */}
          <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-[#C5BAE8] ripple-effect"></div>
          <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-[#D6CFF0] ripple-effect-delay"></div>

          {/* Static Inner Circle */}
          <div className="absolute w-[160px] h-[160px] rounded-full bg-[#E6E2F5] shadow-inner"></div>

          {/* Center Logo */}
          <img
            src="/whlogo.png"
            alt="Logo"
            className="relative z-10 w-[70px] opacity-90 hover:scale-110 transition-transform duration-300 drop-shadow-md"
          />
        </div>

        <div className="flex justify-center gap-[10%] flex-col md:flex-row">
          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl my-4 md:0 w-[96%] mx-[2%]">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">03</p>
            </div>

            <p className="font-bold text-[1.5rem]">Technical SEO Audits</p>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
              Identify and resolve backend issues like crawl errors, site speed,
              and mobile-friendliness for optimal search performance.
            </p>

            <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div>
          </div>

          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%]">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">04</p>
            </div>

            <p className="font-bold text-[1.5rem]">
              Content Creation and Link Building
            </p>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
              Create high-quality content and build authoritative backlinks to
              increase credibility and organic traffic growth.
            </p>

            <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[6vw]">
        <button className="py-2 px-5 rounded-[25px] bg-[#4E2FDA] text-white font-semibold">
          View More Service
        </button>
      </div>
    </>
  );
};

export default Section4;