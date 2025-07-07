"use client";

import React, { useState, useEffect } from "react";

const BusinessIntro = () => {
  const fullText =
    "Empower Your Business with AI-Driven Marketing, Web & App Solutions!";
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
            What is Digital Woopers?
          </button>

          {/* Animated Typing Text */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {displayedText}
          </h2>

          <p className="text-gray-700 mb-4 text-[clamp(0.5rem,3vw,1rem)]">
            We offer cutting-edge digital marketing, web development, and app
            development services designed to accelerate your business growth.
            Our AI-powered strategies and expert-driven solutions help you scale
            your online presence, generate leads, and boost sales—without
            unnecessary risks.
          </p>
          <p className="text-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
            Choose from a wide range of tailored services, including SEO, social
            media marketing, custom website design, and app development.
            Whether you're a startup, an expanding brand, or an established
            enterprise, we have the perfect strategy to drive your success in
            the digital world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntro;

