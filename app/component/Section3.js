import Link from "next/link";
import React from "react";

const Section3 = () => {
  return (
    <>
      <div className="bg-[#D5D3E0] flex justify-center items-center py-2 px-3 w-[140px] rounded-[10px] m-auto my-[1vw]">
        <img src="/logo-icons3.svg.png" alt="" />
        <p className="text-[#4E2FDA] font-semibold">Case Study</p>
      </div>

      <div>
        <p className="font-semibold md:text-[3vw] text-[5vw] md:w-[40%] w-[60%] text-center m-auto">
          What we Do
          <span className="text-[#4F3DFE]"> Our Work</span>
        </p>
      </div>

      <div className="mt-[5%] flex justify-center w-full flex-col md:flex-row">
        <div className="md:w-[42%] w-[98%] mx-[1%] relative">
          <img className="w-full h-full" src="/Link.png" alt="" />
          <div className="absolute bottom-0 text-white p-[1.1vw]">
            <p className="md:text-[1.4vw] font-bold">
              Website Design & Development
            </p>
            <p className="font-semibold md:text-[1.1vw]">
              Digital Art. Illustrations
            </p>
          </div>
        </div>
        <div className="flex gap-3 md:w-[52%] w-[98%] mx-[1%] mt-[1vw] md:mt-0">
          <div className="relative w-[33%] flex justify-center items-center ">
            <img className="w-full h-full" src="/Link (1).png" alt="" />
            <div className="absolute bottom-[2vw] left-[7vw] text-white">
              <p className="md:text-[1.4vw] text-[3.5vw] font-bold rotate-270">
                SEO
              </p>
            </div>
          </div>

          <div className="relative w-[33%]">
            <img className="w-full h-full" src="/Link (2).png" alt="" />
            <div className="absolute md:bottom-[5vw] bottom-[13vw] left-[4vw] text-white">
              <p className="md:text-[1.4vw] text-[3.5vw] font-bold rotate-270">
                PPC Advertising
              </p>
            </div>
          </div>

          <div className="relative w-[33%]">
            <img className="w-full h-full" src="/Link (3).png" alt="" />
            <div className="absolute md:bottom-[5vw] bottom-[10vw] left-[4vw] text-white">
              <p className="md:text-[1.4vw] text-[3.5vw] font-bold rotate-270">
                Social Media Marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-11 flex justify-center ">
        <Link href="/Services">
          <p className="text-[12px] md:text-[1.2vw] text-[#4F3DFE] font-semibold border-t-2 border-t-[#4F3DFE] p-2 inline-block border-b-2 border-b-[#4F3DFE]">
          VIEW MORE CASE STUDAY
        </p>
        </Link>
      
      </div>
    </>
  );
};

export default Section3;