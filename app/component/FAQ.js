'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[clamp(1rem,4vw,3rem)] text-center mb-10 font-semibold">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-md shadow-md transition-all">
            <div
              onClick={() => toggle(index)}
              className="flex justify-between  cursor-pointer p-6"
            >
              <h3 className="font-semibold text-sm md:text-lg">{faq.question}</h3>
              <div className="p-1">
                {openIndex === index ? (
                  <FiMinus className="h-5 w-5 text-black border border-black rounded-md " />
                ) : (
                  <FiPlus className="h-5 w-5 text-black border border-black rounded-md " />
                )}
              </div>
            </div>
            {openIndex === index && (
              <p className="mt-4 p-6 text-[clamp(0.3rem,3vw,0.9rem)] text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
