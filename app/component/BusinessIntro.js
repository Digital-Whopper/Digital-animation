"use client";

import React, { useState, useEffect } from "react";

const BusinessIntro = () => {
  const fullText =
    "Get your Digital Solutions with Digital Whopper – The Best Digital Marketing Company in Jaipur!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typeText = (i) => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.substring(0, i));
        setTimeout(() => typeText(i + 1), 70);
      }
    };

    typeText(1); // Start typing from first character
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Heading */}
        <div>
         <h1 className="text-[clamp(1.5rem,5vw,4rem)]  font-bold text-gray-900">
  Let&rsquo;s Whoop <br /> Your Business
</h1>

        </div>

        {/* Right - Content */}
        <div>
          <button className="bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Know us better!
          </button>

          {/* Animated Typing Text */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {displayedText}
          </h2>

          <p className="text-gray-700 mb-4 text-[clamp(0.5rem,3vw,1rem)]">
           We provide 3600 online marketing services. From SEO and social media campaigns to complete branding solutions, we work to make your brand dominate the digital market. Our expert team uses ethical tactics to give your brand exponential organic growth.
          Building a Start-up? Expanding an established business? We’ll help you build your brand online. 
          </p>
          <p className="text-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
            Still confused about which <strong>digital marketing agency in Jaipur</strong> will be best for you? Well then, explore our portfolio! We’ve scaled start-ups like Mani, Ekatra etc. and made them people favourite! 
We proudly say that we’re the <strong>best digital marketing company in Jaipur</strong> that offers comprehensive services essential for your brand to thrive in the digital world. 

          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntro;

