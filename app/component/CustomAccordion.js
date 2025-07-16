"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Icon Component
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } transition-transform bg-[#FD853A] text-white rounded-full w-[25px] h-[25px]`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// CustomAccordion Component
const CustomAccordion = ({ items }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-md mx-auto p-4 flex flex-wrap">
      {items.map(({ id, title, body }) => (
        <div key={id} className="block py-1 border-b border-black w-full">
          <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(id)} className="pt-0">
              <p className="text-[clamp(0.3rem,3vw,0.9rem)]">{title}</p>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[clamp(0.3rem,3vw,0.9rem)]">{body}</p>
            </AccordionBody>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
