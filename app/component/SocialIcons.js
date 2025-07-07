'use client';
import React from 'react';
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";

const SocialIcons = () => {
  const iconClasses = 'w-[25px] h-[25px] mb-[15px] cursor-pointer';

  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 bg-white p-[10px] pr-[5px] rounded-r-[15px] shadow-[2px_2px_10px_rgba(0,0,0,0.2)] z-[999] flex flex-col items-center">
      <a href="https://www.facebook.com/officialdigitalwhopper" target="_blank" rel="noopener noreferrer">
        <LiaFacebook className= {`${iconClasses} text-[#0d6efd]`} />
      </a>
      <a href="https://www.instagram.com/digital_whopper/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={`${iconClasses} text-[#C13584]`} />
      </a>
      <a href="https://www.linkedin.com/company/digitalwhopper/" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className={`${iconClasses} text-[#0d6efd]`} />
      </a>
     
      <a href="tel:6200379161" target="_blank" rel="noopener noreferrer">
        <TbPhoneCall className={`${iconClasses} text-black`} />
      </a>
    </div>
  );
};

export default SocialIcons;
