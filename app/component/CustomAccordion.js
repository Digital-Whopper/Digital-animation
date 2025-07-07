"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} transition-transform bg-[#FD853A] text-white rounded-full w-[25px] h-[25px]`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const CustomAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-md mx-auto pt-0 p-4 flex flex-wrap">
      <div className="block py-1 border-b border-black">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="pt-0">
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          Material Tailwind is a UI library that combines Tailwind CSS with Material Design styles.
        </AccordionBody>
      </Accordion>
      
    
      </div>
     
      <div className="block py-1  border-b border-black">
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="pt-0">
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          Install it via npm/yarn, import components, and use them just like regular Tailwind elements.
        </AccordionBody>
      </Accordion>
      </div>


   
    </div>
  );
};

export default CustomAccordion;
