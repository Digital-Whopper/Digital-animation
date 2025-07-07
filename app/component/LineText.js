import React from 'react'
import Image from 'next/image';

const LineText = ({linehead, 
  lineheadspan, 
  lineheadspancolor,

  textclass,
  linepara,
  linespan,
  }) => {
  return (
    <div>
<section>
<div className="relative flex justify-end w-full bottom-20">
    {/* <motion.div
            
            className="absolute w-full   lg:w-[65%]  rotating flex items-center justify-center z-[-1]"
            animate={controls}
            initial={{ rotate: 0, opacity: 1 }}
          >
            <Image
              src="/lines.svg"
              alt="Line SVG"
              width={500}
              height={80}
              priority
              className="w-full"
            />
          </motion.div> */}
   
</div>

    <div className={`text-section w-[85%] m-auto ${custom ||"pt-5"}`}>
   
    <div className={`w-full ${textclass||"text-left"}`}>
    <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold leading-tight">
    {linehead || ""}
    <span className="inline-block">
    
    {lineheadspan || ""} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7163FD] via-[#4132D1] to-[#3C31A5]">
    {lineheadspancolor || ""}&nbsp;</span> 
    
    
    </span>
   
  </h1>    
  
  <p className='pt-[50px] text-[clamp(0.5rem,3vw,1.5rem)] w-[85%]'>
    {linepara || ""}
    <span className="block">{linespan||""}</span></p>
    

        
    </div>
    </div>

        
    
</section>


    </div>
  )
}

export default LineText