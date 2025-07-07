import React from 'react'

export default function Section5() {
  return (
   <section className="bg-[#F7F8FA] my-50 py-20 m-[2%] rounded-2xl">
        <div className="text-[#4E2FDA] flex items-center justify-center gap-2">
          <div className="bg-[#4E2FDA] w-[2rem] h-[2px]"></div>
          <p className="font-semibold">Work Process</p>
          <div className="bg-[#4E2FDA] w-[2rem] h-[2px]"></div>
        </div>
        <p className="font-semibold text-[3vw] text-center">
          Why Partner With SEOC Your Path <br />
          To
          <br />
          SEO & Digital Marketing Success
        </p>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <img
              className="w-full h-full p-[8%]"
              src="/Marketing-cuate 1.png"
              alt=""
            />
          </div>

          <div className="lg:w-1/2 w-full p-[8%]">
            <h5 className="font-semibold text-[1.3rem]">SEOC Work Process</h5>
            <div>
              <div className="my-[2vw] bg-white py-[10px] px-[45px] relative rounded-2xl">
                <h6 className="font-semibold text-[1.2rem] my-[0.5rem]">
                  Strategy Development
                </h6>
                <p className="text-[#3D4C5E] font-medium">
                  Based on our findings, we develop customized digital marketing
                  strategy tailored objective.
                </p>

                <div className="bg-[#E0EBFB] rounded-full w-[4rem] h-[4rem] flex items-center justify-center absolute top-[20%] left-[-8%]">
                  <p className="text-[#4E2FDA] font-semibold text-[1.5rem]">
                    01
                  </p>
                </div>
              </div>

              <div className="my-[2vw] bg-white py-[10px] px-[45px] relative lg:left-[-10%] rounded-2xl">
                <h6 className="font-semibold text-[1.2rem] my-[0.5rem]">
                  Monitoring & Optimization
                </h6>
                <p className="text-[#3D4C5E] font-medium">
                  We believe in the power of data-driven decision-making.
                  Throughout the campaign.
                </p>

                <div className="bg-[#E0EBFB] rounded-full w-[4rem] h-[4rem] flex items-center justify-center absolute top-[20%] left-[-8%]">
                  <p className="text-[#4E2FDA] font-semibold text-[1.5rem]">
                    02
                  </p>
                </div>
              </div>

              <div className="my-[2vw] bg-white py-[10px] px-[45px] relative rounded-2xl">
                <h6 className="font-semibold text-[1.2rem] my-[0.5rem]">
                  Continuous Improvement
                </h6>
                <p className="text-[#3D4C5E] font-medium">
                  Digital marketing is an ever-evolving field, and we're
                  committed to staying ahead of the curve.
                </p>

                <div className="bg-[#E0EBFB] rounded-full w-[4rem] h-[4rem] flex items-center justify-center absolute top-[20%] left-[-8%]">
                  <p className="text-[#4E2FDA] font-semibold text-[1.5rem]">
                    03
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}