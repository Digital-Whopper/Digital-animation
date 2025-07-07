import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";

const Pr_OurTeam = () => {
  return (<>
     <div>
      <h1 className='text-[2.8rem] font-bold text-center mb-10'>Our team</h1>
 </div>
   <div className="flex justify-evenly flex-col md:flex-row gap-10 items-center text-center">
     <div className="w-[18rem]">
      <div className="relative ">
        <img src="/Rectangle 31...png" alt="" />
        <div className="flex gap-3 absolute top-[1rem] right-[1rem]">
  
          <FiFacebook />
          <FaInstagram />
          <TbBrandLinkedin />
        </div>
      </div>
      <p className="font-bold text-[1.4rem]">Esther Howards</p>
      <p>Founder & CEO</p>
    </div>

     <div className="w-[18rem]">
      <div className="relative ">
        <img src="/Rectangle 30....png" alt="" />
        <div className="flex gap-3 absolute top-[1rem] right-[1rem]">
          {" "}
          <FiFacebook />
          <FaInstagram />
          <TbBrandLinkedin />
        </div>
      </div>
      <p className="font-bold text-[1.4rem]">Cameron Williamson</p>
      <p>Marketing Head</p>
    </div>


     <div className="w-[18rem]">
      <div className="relative ">
        <img src="/Rectangle 31...png" alt="" />
        <div className="flex gap-3 absolute top-[1rem] right-[1rem]">
          {" "}
          <FiFacebook />
          <FaInstagram />
          <TbBrandLinkedin />
        </div>
      </div>
      <p className="font-bold text-[1.4rem]">Liam Cooper</p>
      <p>Marketing Head</p>
    </div>
   </div>
   </>
  );
};

export default Pr_OurTeam;