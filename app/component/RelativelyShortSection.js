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
    { year: 2019, label: 'Started our mission' },
    { year: 2020, label: 'Launched first product' },
    { year: 2021, label: 'Scaled our operations' },
    { year: 2022, label: '1M+ Users milestone' },
    { year: 2023, label: 'Global expansion' },
  ];

  const paragraphs = [
    "Our experience has helped thousands of clients improve their trading skills and become successful traders.",
    "We have been devoted to full-time trading since 2011, gaining lots of experience, which we decided to offer to a wider number of people.",
    "Our Clients Has The Potential To Become A Profitable Trader. We started trading on financial markets more than 15 years ago.",
    "We have been devoted to full-time trading since 2011, gaining lots of experience, which we decided to offer to a wider number of people.",
    "In 2015 we began offering clients training courses. Thousands of satisfied clients have already passed our courses And we continue to innovate in 2023 to reach more aspiring traders.",
    
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
            Our Clients have the Potential to <br />
            Become Profitable Trader in a <br />
          
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">
              Relatively Short Time
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

