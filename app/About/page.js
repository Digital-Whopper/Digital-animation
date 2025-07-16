// components/AboutUs.js
"use client";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[500px] md:h-[500px]">
          <Image
            src="/company.jpeg" 
            alt="About Us"
            fill
            className="rounded-xl"
            priority
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-[clamp(1rem,4vw,3rem)] font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At Digital Whopper, we are not here as another digital marketing agency. We are your creative growth partner. Our objective is really simple: to help you grow your business online with smart, powerful and best possible digital strategies. Whether you are a small startup dreaming of waking or a large business looking to scale higher, we have got your back.

          </p>
          {/* <ul className="space-y-2 text-gray-800">
            <li>✅ 10+ Years of Industry Experience</li>
            <li>✅ 100+ Projects Successfully Delivered</li>
            <li>✅ Global Clientele</li>
          </ul> */}
     
        </div>
      </div>
    </section>
 
  );
};

export default page;
