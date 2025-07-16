import React from 'react'
import { FaLink } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const Section = () => {
  return (
    <>
      <div className="border border-gray-400 p-4 flex items-center justify-between mx-[3vw] md:mx-[10vw] lg:mx-[20vw] my-[5rem] rounded-4xl flex-wrap gap-[1rem]">
        <div className="flex items-center justify-center gap-1 relative">
          <FaLink />
          <p>https://digitalwhopper.com/</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <MdOutlineEmail />
          digitalwhopperhelp@gmail.com
        </div>

        <div className="flex gap-1 items-center  bg-[#3E32BB] text-white py-2 px-4 rounded-2xl">
          <button>Start a Project</button>
          <MdArrowOutward />
        </div>

        {/* <img src="/micearrow.png" alt="" className="absolute top-[10%] left-[8%]" />
        <img src="/number.png" alt="" className="absolute top-[20%] left-[1%] " /> */}
      </div>

      <div className="flex justify-center mx-[5%]">
        <p className="w-[28rem] text-center text-[clamp(0.3rem,3vw,0.9rem)]">
         At Digital Whopper, we help your business rise through the ranks with the 
         <strong> best SEO services in Jaipur</strong>, 
         ensuring your brand gets seen by the right audience at the right time. If you're a local startup or an 
         established brand looking to scale, then our customised SEO solutions are designed specifically to help 
         you put your business on Google.

        </p>
      </div>


      <div className="flex justify-center gap-[1.2%] mt-[3%] flex-wrap">
        <div className="px-4 py-2 bg-[#E8FCDE] rounded-2xl inline-block font-semibold my-[1%]">#hiring process</div>
        <div className="px-4 py-2 bg-[#EEE3F4] rounded-2xl inline-block font-semibold my-[1%]">#human resource</div>
        <div className="px-4 py-2 bg-[#FFF4CE] rounded-2xl inline-block font-semibold my-[1%]">#best candidates</div>
        <div className="px-4 py-2 bg-[#C7D3FF] rounded-2xl inline-block font-semibold my-[1%]">#HR solution</div>
        <div className="px-4 py-2 bg-[#C4ECEE] rounded-2xl inline-block font-semibold my-[1%]">#human resource</div>
        <div className="px-4 py-2 bg-[#E8FCDE] rounded-2xl inline-block font-semibold my-[1%]">#hiring process</div>
      </div>
    </>
  )
}

export default Section
