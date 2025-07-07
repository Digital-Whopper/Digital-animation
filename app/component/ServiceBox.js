import React from 'react'
import Image from "next/image";
const ServiceBox = () => {
  return (
   <div className="bg-gradient-to-b from-[#f5f5fb] to-[#d8c8fa] p-8 w-[30%] rounded-xl	">
   <div className="inline-block">
   <Image
                           src="/fragment.png"
                           alt="Logo"
                           width={50}
                           height={50}
                           quality={100}
                         />
                         <h2 className='font-bold text-[24px] py-2'>Web Development</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
   </div>
   
   </div>
  )
}

export default ServiceBox
