import React from 'react'
import Image from "next/image";
import ServiceBox from './ServiceBox';
const TestSection = () => {
 
      
  return (
    <div>
        <div className="container">
<div className="flex gap-[20px] justify-around">
<ServiceBox/>
    
<ServiceBox/>
</div>

        <Image
                        src="/Macbook.png"
                        alt="Logo"
                        width={1000}
                        height={1300}
                        priority
                        className="pt-[28px]"
                      />



                      
        </div>
       
    </div>
  )
}

export default TestSection
