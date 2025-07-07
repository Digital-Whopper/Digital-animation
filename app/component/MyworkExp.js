import React from "react";

const MyworkExp = () => {
  return (
    <div className="mt-40">
      <h2 className="text-4xl md:text-6xl font-semibold text-center text-[#344054]">
        My <span className="text-[#FD853A]">work Experince</span>
      </h2>

      <div className="flex lg:flex-row justify-evenly items-center mt-20 flex-col gap-15 mx-8">
        <div className="flex flex-col gap-10">
          <div>
            <h5 className="md:text-3xl text-[1.5rem] font-bold text-[#344054]">
              Coghnizant Mumbai
            </h5>
            <p className="text-[#344054] md:text-[18px] font-semibold my-2">
              Sep 2016- july 2020
            </p>
          </div>

          <div>
            <h5 className="md:text-3xl text-[1.5rem] font-bold text-[#344054]">
              Sugee Pvt limited, Mumbai
            </h5>
            <p className="text-[#344054] md:text-[18px] font-semibold my-2">
              Sep 2020- July 2023
            </p>
          </div>

          <div>
            <h5 className="md:text-3xl text-[1.5rem] font-bold text-[#344054]">
              Cinetstox, Mumbai
            </h5>
            <p className="text-[#344054] md:text-[18px] font-semibold my-2">
              Sep 2023
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="h-13 w-13 rounded-full bg-[#FD853A]  border-3 border-black border-dashed "></div>

          <div className="h-13 w-13 rounded-full bg-[#1D2939]  border-3 border-black border-dashed "></div>

          <div className="h-13 w-13 rounded-full bg-[#FD853A]  border-3 border-black border-dashed "></div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h5 className="md:text-3xl text-[1.5rem] font-bold text-[#344054]">
              Experince Designer
            </h5>
            <p className="text-[#344054] md:text-[18px] font-semibold my-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Duis lacus nunc, posuere in justo vulputate, <br /> bibendum
              sodales
            </p>
          </div>

          <div>
            <h5 className="md:text-3xl  text-[1.5rem] font-bold text-[#344054]">
              UI/UX Designer
            </h5>
            <p className="text-[#344054] md:text-[18px] font-semibold my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Duis lacus nunc, posuere in justo vulputate, <br /> bibendum
              sodales
            </p>
          </div>

          <div>
            <h5 className="md:text-3xl text-[1.5rem] font-bold text-[#344054]">
              Lead UX Designer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyworkExp;
