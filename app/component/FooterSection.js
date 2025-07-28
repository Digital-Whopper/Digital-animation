"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FooterSection = () => {
  const sections = [
    {
      title: "Pages",
      items: ["Home", "Services", "Portfolio", "Contact"],
      link: ["/", "/Services", "/Portfolio", "/Contact"],
    },
    {
      title: "Our Services",
      items: ["Ecommerce","App Development", "Web Development",  "PerformanceMarketing"],
      link: ["/ecommerce-marketing-services","/mobile-application-development-company-in-jaipur", 
        "/web-development-company-in-jaipur",  "/performance-marketing-agency"],
    },
    {
      title: "Quick Links",
      items: ["Blog","Privacy Policy", "Company Policy", ],
      link: ["/Blog","/PrivacyPolicy", "/CompanyPolicy"],
    },
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="border-t border-white">
      <footer className="w-[85%] mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map(({ title, items, link }) => (
            <div key={title} className="w-full">
              {/* Toggle button (visible only on small screens) */}
              <div
                className="flex justify-between items-center sm:block cursor-pointer"
                onClick={() => toggleSection(title)}
              >
                <h3 className="text-[#4F3DFE] font-bold text-lg sm:mb-4">
                  {title}
                </h3>
                <span className="text-[#4F3DFE] sm:hidden text-xl">
                  {openSection === title ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </div>

              {/* Dropdown List */}
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden sm:block ${
                  openSection === title ? "max-h-60" : "max-h-0 sm:max-h-full"
                }`}
              >
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#302E2E] mt-2 sm:mt-4 hover:underline cursor-pointer"
                  >
                    <Link className="block w-full" href={link?.[index] || "/"}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo and Social */}
          <div className="text-center sm:text-center md:text-left ">
            <Image
              className="m-auto sm:m-auto md:m-0"
              src="/blacklogo.png"
              width={100}
              height={70}
              alt="Logo"
              priority
            />
            <p className="text-[#302E2E] text-sm mt-4">
              3rd Floor, 4/11, Vidyut Abhiyanta Colony, Sector 4, Malviya Nagar,
              Jaipur, Rajasthan 302017
            </p>

            <div className="flex gap-4 mt-4 text-2xl text-[#302E2E] justify-center sm:justify-center md:justify-start">
              <a href="https://www.facebook.com/officialdigitalwhopper" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://wa.me/916200379161" target="_blank" rel="noopener noreferrer">
                <FaWhatsappSquare />
              </a>
              <a href="https://www.instagram.com/digital_whopper/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare />
              </a>
              {/* <a href="#"><FaYoutube /></a> */}
            </div>

            <p className="text-[#302E2E] text-sm mt-4">
              digitalwhopperhelp@gmail.com
            </p>
          </div>
        </div>

        <p className="text-center text-[#302E2E] text-sm mt-10">
          © 2025 Digital Wooper. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default FooterSection;
