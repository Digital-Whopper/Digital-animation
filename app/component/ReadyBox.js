import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const ReadyBox = () => {
  return (
    <>
      <div className="flex justify-between w-[90%] items-center m-auto mt-25">
        <div>
          <h5 className="text-3xl font-bold">Ready to get started?</h5>
          <p className="text-[#1D2939] ">
            File storage and sharing on decentralized storage that suits any
            business size.
          </p>
        </div>
        <button className="bg-[#4F3DFE] text-white py-2 px-4 rounded-[10px] font-semibold">
          Create an account
        </button>
      </div>

      <div className="w-[90%] m-auto flex gap-2 my-[3%] md:flex-row flex-col">
        <div className="bg-[#4F3DFE] rounded-2xl p-7 text-white">
          <div className="bg-white rounded-full h-13 w-13 my-3 flex justify-center items-center">
            <img src="images\user-tie-hair 1.png" alt="" />
          </div>
          <h5 className="text-2xl font-semibold my-3">Are you individual?</h5>
          <p>
            Syncing, backing up, and sharing your photos, videos and documents
            in total privacy couldn’t be easier.
          </p>
          <div className="flex items-center my-2">
            <button>Start Now</button>
            <HiArrowNarrowRight />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 text-[#4F3DFE] flex items-center lg:w-auto md:w-[60%] w-full">
          <div>
            <div className="bg-[#4F3DFE] rounded-full h-13 w-13 my-3 flex justify-center items-center">
              <img src="images\Vector.......png" alt="" />
            </div>
            <h5 className="text-2xl font-semibold my-3">Are you business?</h5>
            <p>
              Work efficiently with teammates and clients, stay in sync on
              projects, and keep company data safe—all in one place on
              decentralized network.
            </p>
            <div className="flex items-center my-2">
              <button>See pricing</button>
              <HiArrowNarrowRight />
            </div>
          </div>

          <div className="w-[500px] mr-[5%]">
            <img className="" src="images\Frame....png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyBox;
