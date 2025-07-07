import React from 'react'

const ServiceText = ({ service_head,
  service_span,
  serveclass,
service_para} ) => {
  return (
    <div>
       <div className="flex items-center justify-between py-16 flex-wrap">
        <h2 className="font-medium	text-black text-[clamp(1rem,4vw,3rem)] text-center md:text-justify w-full md:w-[60%]">
         {service_head} <span  className={`text-[#FD853A] ${serveclass || "st"}`}> {service_span}</span>
        </h2>
        <p className="text-[clamp(0.3rem,3vw,0.9rem)] text-center md:text-justify w-full md:w-[40%]"
        dangerouslySetInnerHTML={{ __html: service_para }} />
    
      </div>
    </div>
  )
}

export default ServiceText
