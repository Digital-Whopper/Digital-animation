import React from "react";
import { HiOutlineCheck } from "react-icons/hi2";

const Pr_Section2 = () => {
  return (
    <>
     <div className="w-[85%] m-auto">


         <h2 className="text-[clamp(1rem,4vw,3rem)] font-medium text-[#FD853A] my-2 text-center">
                What We Offer:
              </h2>
              <h2 className="text-[clamp(1rem,4vw,3rem)] font-medium leading-[3.2rem] text-center">
                Targeted, High-Converting Performance Marketing Services

              </h2>
              <p className=" my-[2.5rem] text-center">
              At <strong>Digital Whopper</strong>, we don’t just run ads, <strong>we engineer results</strong>. Our performance marketing 
              services combine creativity, data, and advanced targeting to help your business grow faster and 
              smarter.

              </p>
              <p className="text-center">Here’s what we bring to the table:</p>
     </div>
      <div className="bg-[url('/Paper-Texture.svg.png')] bg-cover bg-center lg:mt-50 mt-20 ">
       
        <div className="bg-[#4F3DFE] text-white p-[4vw] flex gap-[40px] flex-col lg:flex-row relative bottom-10 lg:pt-40">
       
          <div className="lg:w-1/2 mt-20 w-full">
            <section>
           
              <h2 className="font-bold md:text-[3rem] text-[2rem] md:w-[28rem] w-[18rem] leading-[3.2rem]">
                Facebook Ad Services That Sell

              </h2>
              <p className="w-[18rem] md:w-[28rem] my-[2.5rem]">
           We’re a top-rated <strong>Facebook ad agency</strong> that helps brands create scroll-stopping creatives and 
           razor-sharp targeting. Our <strong>Facebook ad services</strong> include:

              </p>
             
            </section>

            <section className="flex flex-col sm:flex-row gap-5 flex-wrap">
              <div className="flex flex-col gap-3">
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">
                    Audience research and segmentation

                  </p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">Campaign setup and pixel integration</p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">A/B testing for creatives and headlines
</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">Retargeting campaigns to recover lost customers
</p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">Performance tracking and weekly reports</p>
                </div>
               
              </div>

                <p className="w-full my-[2.5rem]">
          Whether you're looking to increase sales, drive leads, or build brand awareness, our <strong>
            facebook ad 
          agency
            </strong> team ensures every rupee spent delivers impact.


              </p>
            </section>
          </div>

          <div className="lg:w-1/2 w-full">
            <section>
              <div className="relative">
                <div>
                  <img
                    src="/Rectangle 32.png"
                    alt=""
                    className=""
                  />
                </div>
                <img
                  src="/Frame 219.png"
                  alt=""
                  className="absolute top-[1.2rem] sm:left-[15rem] left-[6.5rem]"
                />
              </div>

              <div className="flex justify-center gap-3 flex-col sm:flex-row">
                <div className="flex justif-center gap-[2rem] items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-bold text-[2.5rem] my-2">10k</p>
                    <p className="w-[10rem]">Great conversations per month</p>
                  </div>

                  <div className="h-[7rem] w-[1px] bg-white mt-[30px]"></div>

                  <div className="flex flex-col text-center mt-[8vw] ">
                    <p className="font-bold text-[2.5rem] my-2">95+</p>
                    <p className="w-[5rem]">Project Complete </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <img src="/Rectangle 34.png" alt="" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pr_Section2;