import React from "react";
import { HiOutlineCheck } from "react-icons/hi2";

const Pr_Section2 = () => {
  return (
    <>
      <div className="bg-[url('/Paper-Texture.svg.png')] bg-cover bg-center lg:mt-50 mt-20">
        <div className="bg-[#4F3DFE] text-white p-[4vw] flex gap-[40px] flex-col lg:flex-row relative bottom-10 lg:pt-40">
          <div className="lg:w-1/2 mt-20 w-full">
            <section>
              <p className="font-bold text-[1.3rem] text-[#FD853A] my-2">
                Our Mission
              </p>
              <p className="font-bold md:text-[3rem] text-[2rem] md:w-[28rem] w-[18rem] leading-[3.2rem]">
                Boost your with your business.
              </p>
              <p className="w-[18rem] md:w-[28rem] my-[2.5rem]">
                He moonlights difficult engrossed it, sportsmen. Interested has
                all Devonshire difficulty gay assistance joy.
              </p>
            </section>

            <section className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">
                    Moonlight newspaper up its enjoyment
                  </p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">She new course gets living.</p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">She new course gets living.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">Rooms oh fully taken by worse.</p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">Perceived end certainly day.</p>
                </div>
                <div className="flex justify-center gap-2 items-start">
                  <p className="bg-[#FD853A] flex justify-center items-center h-5 w-5 rounded-full mt-1">
                    <HiOutlineCheck />
                  </p>
                  <p className="w-[15rem]">
                    Preference any astonished unreserved Mrs.
                  </p>
                </div>
              </div>
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