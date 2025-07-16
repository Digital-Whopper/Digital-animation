import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Section4 = () => {
  return (
    <>
      <div className="bg-[#D5D3E0] flex justify-center items-center py-2 px-3 w-[140px] rounded-[10px] m-auto my-[1vw]">
        <img src="Images\logo-icons3.svg.png" alt="" />
        <p className="text-[#4E2FDA] font-semibold">Our Service</p>
      </div>

      <p className="text-[3vw] font-semibold w-[40vw] text-center m-auto leading-13">
        Our Comprehensive Suite Of Digital Marketing
        <span className="text-[#4E2FDA]"> Services.</span>
      </p>

      <div className="my-[10%] flex flex-col gap-23 md:gap-0 w-[85%] m-auto">
        <div className="flex justify-center gap-[10%] flex-col md:flex-row">
          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%] my-4 md:my-0">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">01</p>
            </div>

            <h3 className="font-bold text-[1.5rem]">
              Keyword Research & Competitor Analysis
            </h3>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
             We find high-converting keywords your customers are actually searching for, and what your competitors are ranking for, so we can outrank them, fast.

            </p>

            {/* <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div> */}
          </div>

          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%]">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">02</p>
            </div>

            <h3 className="font-bold text-[1.5rem]">On-Page SEO</h3>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
             From meta tags to header structure, internal linking to content optimisation, we fine-tune every page on your site to be search engine and user-friendly.
            </p>

            {/* <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div> */}
          </div>
        </div>

        <div className="relative flex items-center justify-center w-[300px] h-[300px] mx-auto">
          {/* Animated Ripple Circles */}
          <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-[#C5BAE8] ripple-effect"></div>
          <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-[#D6CFF0] ripple-effect-delay"></div>

          {/* Static Inner Circle */}
          <div className="absolute w-[160px] h-[160px] rounded-full bg-[#E6E2F5] shadow-inner"></div>

          {/* Center Logo */}
          <img
            src="/whlogo.png"
            alt="Logo"
            className="relative z-10 w-[70px] opacity-90 hover:scale-110 transition-transform duration-300 drop-shadow-md"
          />
        </div>

        <div className="flex justify-center gap-[10%] flex-col md:flex-row">
          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl my-4 md:0 w-[96%] mx-[2%]">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">03</p>
            </div>

            <h3 className="font-bold text-[1.5rem]">Off-Page SEO & Link Building</h3>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
          We help build a strong digital presence for your site by securing high-authority backlinks and citations that boost your domain authority.
            </p>

            {/* <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div> */}
          </div>

          <div className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%]">
            <div className="flex items-center justify-between mb-[1.8vw]">
              <img src="/Background....png" alt="" />
              <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">04</p>
            </div>

            <h3 className="font-bold text-[1.5rem]">
             Technical SEO
            </h3>

            <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">
              We fix crawling errors, speed issues, and mobile usability problems that silently hurt your rankings. A clean, fast, and secure site is non-negotiable.
            </p>

            {/* <div className="flex items-center text-[1.2rem] font-semibold gap-1">
              <p>Learn More</p>
              <FaArrowRight />
            </div> */}
          </div>

          
        </div>
        <h3 className="font-medium">Content Strategy & SEO Copywriting</h3>
        <p className="text-[clamp(0.3rem,3vw,0.9rem)]">Google loves valuable, original content. So do your users. We craft SEO-rich blogs, landing pages, and product descriptions that convert.</p>
      
      <h3 className="font-medium">Local SEO for Jaipur-Based Businesses</h3>
        <p className="text-[clamp(0.3rem,3vw,0.9rem)]">If you're targeting Jaipur customers, we optimise your business for local searches with Google My Business, maps integration, and city-specific keyword targeting.</p>
      <p className="text-[clamp(0.3rem,3vw,0.9rem)]">

        No fluff. Just focused, results-driven SEO from the <strong>best SEO company in Jaipur</strong>.
      </p>
      </div>
 
      <div className="flex justify-center mt-[6vw]">
     
          <Link href="/Services">
           <button className="py-2 px-5 rounded-[25px] bg-[#4E2FDA] text-white font-semibold">
          View More Service
        </button>
        </Link>
      </div>


      <div className="mx-4">

<h2 className='text-[clamp(1rem,4vw,3rem)] font-medium text-center'>
  Who Are We?
</h2>
<p className='text-center'>
We're Digital Whopper, a passionate team of digital marketers, SEO experts, and creative minds with roots in Jaipur. 
We've assisted 150+ businesses in growing their online presence with the best <strong>SEO services in Jaipur.</strong> 
We have worked with local businesses, eCommerce websites, service businesses, and much more! Our mission? Simple 
and straightforward. Help businesses like yours dominate Google rankings, outshine the competition, and 
grow organically through search. No shortcuts or spammy techniques. Just real, intelligent, tried-and-tested SEO 
that works.

</p>

</div>
    </>
  );
};

export default Section4;