import Image from 'next/image'
import React from 'react'

const Boot = () => {
  return (
    <div>
   <div className="relative flex justify-end w-full bottom-0 bg-[url('/lastline.svg')] bg-no-repeat bg-cover bg-center">
      


<div className="w-[85%] m-auto flex flex-wrap flex-col-reverse md:flex-row">
 <div className="text-section w-full md:w-[50%]">
        <div className="w-full">
    
  <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight">
 <span>Hey there! Looking for a service? </span>
 <span>Whoppy is here to help you! Give me a ping!</span> 
  </h2>


  <p
    className="pt-[50px] text-[clamp(0.3rem,3vw,0.9rem)] w-full sm:w-full"
  >
   Tell me what you want. Increase ROI? Develop an app? Or any other service? Let’s Chat! 
  </p>


        </div>
      </div>


      <div className="text-section w-full md:w-[50%] ">
        <div className="w-full">
  <Image
  className='ml-auto'
    src="/Robot.png"
    width={400}
    height={400}
    alt="robot"
    priority
    />


        </div>
      </div>
</div>

       
      </div>

      




    </div>
  )
}

export default Boot