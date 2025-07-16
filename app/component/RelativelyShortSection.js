'use client';

import { useEffect, useState } from 'react';

export default function RelativelyShortSection() {
  const [showStep, setShowStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStep((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const timeline = [
    { year: 2020, label: 'Started our mission' },
    { year: 2021, label: 'Expansion' },
    { year: 2022, label: 'First Milestone' },
    { year: "2023-24", label: '100+ Projects' },
    { year: 2025, label: 'Second Milestone' }
  ];

  const paragraphs = [
    "We took the first step towards transforming the business landscape and opening avenues to thrive in the digital world.",
    "Started with the vision of our founder we’ve expanded our professional team and services offered.",
    "Having successfully built over 50 businesses, our turning point arrived with the project of Ekatra (our Shark Tank India Client).",
    "Counting on projects, we successfully built an online reputation of a century of brands this year, and many more to come.",
    "5 years since our digitalisation mission started, we are now praised by the Government of Rajasthan and are proud to be funded for expansion. This is not the END, many MORE MILESTONES are awaited.",
    
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 ">
      <div className="bg-white rounded-xl w-full max-w-6xl  flex  justify-between p-5 md:p-10 flex-wrap flex-col-reverse md:flex-row">
  {/* Paragraphs */}
          <div className="w-full md:w-[45%] space-y-4 text-sm text-black font-medium">
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className={`transition-opacity duration-700 ${
                  showStep === idx + 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {text}
              </p>
            ))}
          </div>
     

        {/* Main content with paragraph and timeline side by side */}
        <div className="flex justify-between items-center w-full md:w-1/2 gap-8 flex-col mb-3">
        
   {/* Heading */}
        <div className="text-left w-full ">
          <h2 className="text-[clamp(1rem,4vw,3rem)]  font-bold leading-tight text-gray-900">
            Driven by Passion at Every Stage, <br />
            Our Milestones Reflects <br />
          
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">
              How Far We’ve Come
            </span>
           
          </h2>
        </div>
          {/* Timeline */}
          <div className="flex-1">
            <div className="relative flex items-center justify-between border-t-2 border-blue-500 ">
              {timeline.map((item, idx) => (
                <div key={item.year} className="relative text-center w-1/5">
                  {/* Circle */}
                  <div
                    className={`w-4 h-4 rounded-full mx-auto border-4 ${
                      showStep === idx + 1 ? 'border-orange-500 bg-white scale-110' : 'border-gray-300 bg-white'
                    } transition-transform duration-500`}
                  />
                  {/* Year */}
                  <div
                    className={`mt-2 text-sm font-bold ${
                      showStep === idx + 1 ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    {item.year}
                  </div>
                  {/* Label */}
                  <div className="text-[10px] md:text-xs text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

