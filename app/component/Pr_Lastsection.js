import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Pr_Lastsection = () => {
  return (
    <div className="flex m-auto w-[90%] gap-[8%] lg:flex-row flex-col">
      <div className="w-full lg:w-[50%]">
        <img className="w-full" src="/M3_integrations_all_integrations.png.png" alt="" />
      </div>

      <div className="flex justify-center items-start flex-col lg:w-[35%] mt-[8%] w-full">
        <h5 className="text-5xl font-bold leading-[3rem]">Connect your tools, close your tabs</h5>
        <p className="text-[#5D5A7C] text-[1.2rem] my-10">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <div className="flex justify-center gap-2 items-center text-blue-500 underline decoration-blue-500">
          <button >Learn More</button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Pr_Lastsection;