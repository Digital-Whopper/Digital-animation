import React from 'react'
import Image from "next/image";
const Sit_Banner = () => {
  return (
    <div className='bg-[linear-gradient(90deg,_#7163FD_0%,_#4132D1_44%,_#3C31A5_100%)] w-[85%] m-auto rounded-2xl'>
      

<div className="flex item-center justify-center">
  <div className="w-1/2">
    <Image
  src="/sitting.png"
  alt="Icon"
  width={700}
  height={700}
  className="rounded-full"
/>
  
  
  </div>












  <div className="w-1/2 flex flex-col justify-center">
<h2 className='text-white font-semi-bold text-[clamp(0.5rem,3vw,2rem)]'>  What Makes Digital
Woopers Your</h2>


<h2 className=' text-[clamp(1rem,5vw,6rem)] font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFFFFF_7%,_#FD853A_100%)]'>  Perfect Marketing
Ally ?</h2>
  </div>
</div>



      
    </div>
  )
}

export default Sit_Banner
