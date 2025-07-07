import React from 'react'

const ServiceContent = ({ services }) => {
  return (
   <div>
      <div className="flex flex-wrap justify-center gap-4 text-[#302E2E]">
        {services.map((item, index) => (
          <div className="md:w-[48%] lg:w-[32%] mt-10 md:mt-5 flex flex-col" key={index}>
            <div className="bg-[#c9c9c9] min-h-[70px] md:min-h-[110px] pr-12 rounded-tr-[20px] rounded-tl-[20px] pt-8 text-base md:text-xl  font-medium pl-8 pb-4">
              <h3>{item.title}</h3>
            </div>
            <div className="bg-[#c9c9c9] mt-[1px] rounded-br-[20px] rounded-bl-[20px] text-[clamp(0.3rem,3vw,0.9rem)] pt-6 pl-8 pb-10 md:pb-16 flex-grow flex pr-4 lg:pr-12">
              <p dangerouslySetInnerHTML={{ __html: item.desc }} />
               
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceContent
