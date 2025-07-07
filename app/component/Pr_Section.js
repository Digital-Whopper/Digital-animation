import React from "react";
import { CiStar } from "react-icons/ci";

const Pr_Section = () => {
  return (
    <div >
      <div className="bg-[#CFCFCF] min-h-screen flex flex-col-reverse md:flex-row items-center md:p-0 p- mx-[3%] rounded-2xl">
        <div className="md:w-1/2 m-20 w-full px-5">
          <p>Pleasure and so read the was hope.</p>
          <h4 className="font-bold text-5xl leading-14 my-5">
            Ready to take <br />
            <span className="text-[#FD853A]">your business </span> <br />
            to the next level?
          </h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra my-5gravida libero cursus nulla leo
            pulvinar.
          </p>

          <div className="flex items-center ">
            <div className="flex flex-col">
              <img
                src="/d4e01d96bc838f08c10c2fb6560948d3881ebdec.png"
                alt=""
                className="rounded-full w-[30px] h-[30px]"
              />
            </div>
            <div className="ml-3">
              <p className="text-[22px] font-semibold text-[#302E2E]">
                Rated 4.9/5 stars
              </p>
              <div className="flex">
                <CiStar className="" />
                <CiStar className="" />
                <CiStar className="" />
                <CiStar className="" />
                <CiStar className="" />
              </div>
            </div>
          </div>
        </div>

      <div className="relative md:w-1/2 w-[95%] h-[75vh] top-[35px]">
        <img src="/Rectangle 28 (1).png" alt="" className="absolute w-[80%] "/>
        <img src="/Rectangle 28.png" alt=""  className="absolute  w-[80%] top-[5%] left-[5%]" />
        <img src="/Rectangle 29.png" alt="" className="absolute w-[80%] top-[10%] left-[10%]"/>
     </div>
      </div>
    
      <section className="flex flex-col md:flex-row justify-center gap-[8%] items-center lg:mt-30">
        <div className="md:w-70 mt-10 text-center">
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="font-bold text-1xl my-3">We’re a family</p>
          <p>
            Speedily say has suitable disposal add boy. On fourth doubt miles of
            child. Exercise joy man children rejoiced.
          </p>
        </div>

        <div className="md:w-70 mt-10 text-center">
          <h2 className="text-3xl font-bold">99%</h2>
          <p className="font-bold text-1xl my-3">Graphic Design </p>
          <p>
            Perceived end knowledge certainly day sweetness why cordially. Ask a
            quick six seven offer see among.
          </p>
        </div>

        <div className="md:w-70 mt-10 text-center">
          <h2 className="text-3xl font-bold"> 1.5M+</h2>
          <p className="font-bold text-1xl my-3">Digital Marketing </p>
          <p>
            Rooms oh fully taken by worse do. Points afraid but may end law
            lasted. Was out laughter raptures returned outweigh.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pr_Section;
