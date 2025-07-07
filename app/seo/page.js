import React from 'react'
import RotationImage from '../component/RotationImage'
// import LinText from '../component/LineText'
import { GoMail } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import Image from 'next/image';
import Section from '../component/Section';
import Section22 from '../component/Section22';
import Section3 from '../component/Section3';
import Section4 from '../component/Section4';
import Section5 from '../component/Section5';


const page = () => {
  return (
    <>
      <div className='relative'>
  <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full 
                bg-gradient-to-b from-[#9c8af8] to-[#5f41f4] 
                shadow-xl  absolute left-[-35px] top-[90px] md:top-[150px]">
</div>

      <div className="flex justify-center">
        <p className='bg-[#ccccccc7] text-[12px] py-[5px] px-[10px] rounded-[20px] font-medium'>Top #1 SEO & Marketing Agency</p>
      </div>
   <RotationImage
   textclass="text-center lg:w-full"
 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead = "Local SEO Tactics To"
             Afterspan = " Your Market"
             lineheadspancolor="Dominate"
custom="pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8"

disableAnimation={true}
   
/>




   {/* <div className="next-section w-[60%] m-auto ">
<div className="flex justify-between flex-wrap border border-black py-4 px-3 rounded-[72px] relative">

<div className="absolute right-[-20%] top-[100%]">
  <Image
src="/micearrow.png"
width="130"
height="150"
alt="image"
/> 
</div>






<div className="absolute left-[-134px] top-[90%]">
  <Image
src="/downarrow.png"
width="130"
height="150"
alt="arrow"
/> 
</div>

<div className="absolute left-[-200px] top-[150%]">
  <Image
src="/number.png"
width="130"
height="150"
alt="image"
/> 
</div>


</div>




   </div> */}
    




    </div>



    <Section/>


    <Section22/>


    <Section3/>

    <Section4/>
    <Section5/>
    </>
  

// {/* <>

// <Section/>
// <Section22/>
// <Section3/>
// <Section4/>
// <Section5/>




// </> */}
  )
}

export default page