// components/AboutUs.js
"use client";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/seooffice.jpg" 
            alt="About Us"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We’re a team of passionate creatives and developers dedicated to building
            exceptional digital experiences. With a focus on innovation and excellence,
            we bring ideas to life through design, code, and strategy.
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>✅ 10+ Years of Industry Experience</li>
            <li>✅ 100+ Projects Successfully Delivered</li>
            <li>✅ Global Clientele</li>
          </ul>
     
        </div>
      </div>
    </section>
 
  );
};

export default page;
