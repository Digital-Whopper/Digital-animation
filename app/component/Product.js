import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";

const Product = () => {
  return (
    <>
      {" "}
      <div className="text-center mt-[8rem]">
        <p className="border-2 border-black rounded-lg py-2 px-4 font-semibold inline-block ">
          Product Features
        </p>
        <h5 className="text-5xl font-bold leading-13 my-4">
          Streamline tasks with <br />
          optimized workflows
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Vivamus non enim lacus.
        </p>
      </div>
      <div className="flex gap-[10vw] md:gap-[2vw] justify-center py-[5vh] flex-col lg:flex-row items-center">
        <div className="bg-white text-center w-[90%] lg:w-[30%] rounded-3xl py-[5vh]">
          <h5 className="text-[2rem] font-semibold">
            Keep on top of project <br />
            management.
          </h5>
          <p className="font-semibold my-5">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
          <button className="border-1 border-zinc-500 rounded-lg py-[1vh] px-[9vw] font-semibold">
            Leran More
          </button>

          <div className="bg-[#F4F3F8] rounded-3xl mx-[1vw] py-[4rem] mt-[5vh]">
            <p className="bg-black text-white rounded-[8px] inline-block py-[1vh] px-[2.5vw] my-[5vh] text-[1.2rem]">
              Today
            </p>

            <div className="flex bg-white rounded-2xl mx-[2vw] px-[1vw] font-semibold gap-[1vw] items-center py-[1.2vh] text-start">
              <div className="bg-black w-11 h-11 rounded-full">
                <img
                  src="https://i.pinimg.com/736x/fc/eb/4a/fceb4a7b354fb890b61be5f95494141c.jpg"
                  alt=""
                  className="w-full h-full overflow-hidden rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-[0.9rem]">
                  John just ✌️ marked a task overdue.
                </p>
                <p className="text-[0.8rem] text-gray-500">3 minute ago</p>
              </div>
            </div>

            <div className="flex  bg-white rounded-2xl mx-[2vw] px-[1vw] font-semibold gap-[1vw] items-center py-[1.2vh] my-[2vh] text-start">
              <div className="bg-black w-11 h-11 rounded-full">
                <img
                  src="https://i.pinimg.com/736x/fc/eb/4a/fceb4a7b354fb890b61be5f95494141c.jpg"
                  alt=""
                  className="w-full h-full overflow-hidden rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-[0.9rem]">Anna just completed ✌️ a task.</p>
                <p className="text-[0.8rem] text-gray-500">3 minute ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-center w-[90%] lg:w-[30%] rounded-3xl py-[5vh]">
          <h5 className="text-[2rem] font-semibold">
            Analyze your business <br />
            results in one place.
          </h5>
          <p className="font-semibold my-5">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
          <button className="border-1 border-zinc-500 rounded-lg py-[1vh] px-[9vw] font-semibold">
            Leran More
          </button>

          <div className="bg-[#F4F3F8] rounded-3xl mx-[1vw]  mt-[5vh]">
            <div className="flex items-center justify-center gap-[6vw] py-[4rem]">
              <div>
                <p className="font-bold text-[1.5rem]">Sales Report</p>
                <p className="font-semibold text-[1.1rem]">Last 7 Days</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-[1.4rem] font-semibold ">+3,2%</p>
                <BsArrowUpRightCircleFill className="text-[2rem]" />
              </div>
            </div>

            <div className="flex justify-evenly mx-[1rem] items-end">
              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[5rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[8rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[4rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[8rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-black rounded-[5px] h-[12rem] inline-block w-[2rem] relative">
                  <div className="bg-white w-[1.6rem] h-[1.6rem] absolute top-[.5rem] rounded-[5px] mx-[.1rem] right-[.1rem] flex justify-center items-center">
                    <GoDotFill />
                  </div>
                  <div className="bg-black text-white absolute left-[-1.3rem] top-[-3rem] py-[.3rem] px-[.7rem] rounded-lg">
                    $8,82.21
                  </div>
                </div>
                <div className="bg-black w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[7rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[3rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="bg-[#C8C6D3] rounded-[5px] h-[8rem] inline-block w-[2rem]"></div>
                <div className="bg-[#C8C6D3] w-[2rem] h-[0.3rem] rounded-[2px] inline-block"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-center w-[90%] lg:w-[30%] rounded-3xl py-[5vh]">
          <h5 className="text-[2rem] font-semibold">
            Keep track of sales and <br />
            shipping progress.
          </h5>
          <p className="font-semibold my-5">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
          <button className="border-1 border-zinc-500 rounded-lg py-[1vh] px-[9vw] font-semibold">
            Leran More
          </button>

          <div className="bg-[#F4F3F8] rounded-3xl mx-[1vw] py-[2vh] mt-[5vh]">
            <div className="flex items-center justify-center gap-[7vw] lg:text-[1.4vw] text-[1.5rem] font-bold my-[5vw]">
              <p>Today's transaction</p>
              <BsThreeDotsVertical />
            </div>

            <div className="bg-white rounded-2xl w-[80%] m-auto px-[1vw] py-[1vw] flex flex-col gap-[2vw] ">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <p className="font-bold lg:text-[2vw] text-[2rem]">
                    32
                    <span className="lg:text-[1.2vw] text-[1.2rem] text-[#878493] font-semibold">
                      /48
                    </span>
                  </p>
                  <p className="text-[#878493] lg:text[1.2vw] text-[1.2rem] font-semibold">
                    Order completed
                  </p>
                </div>
                <div className="bg-green-300 h-[4vw] w-[4vw] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <p className="font-bold lg:text-[2vw] text-[2rem]">
                  17
                    <span className="lg:text-[1.2vw] text-[1.2rem] text-[#878493] font-semibold">
                      /24
                    </span>
                  </p>
                  <p className="text-[#878493] lg:text[1.2vw] text-[1.2rem] font-semibold">
                    On shipping
                  </p>
                </div>
                <div className="bg-green-300 h-[4vw] w-[4vw] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;