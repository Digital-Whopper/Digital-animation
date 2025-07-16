import React from 'react';
import Image from 'next/image';


const Testimoniols = () => {
  return (
    <div >
        <div className="relative w-full md:w-[50%]  m-auto">
            
         <h2 className="text-[#344054] text-center mt-20 text-[clamp(1rem,4vw,3rem)] font-semibold">

Testimonials That <br/>Speak <span className="text-[#FD853A]">to My Results</span>
</h2>
             <Image src="/Vector1.svg" alt="Logo" width={34} height={34} 
          priority className='absolute top-[-20%] right-[20%]'/> 
            </div>
      
      <p className="text-[#344054] w-full md:w-[50%] m-auto text-center mt-5 text-[clamp(0.5rem,3vw,1 rem)] ">
        We’re not merely boasting of our achievements. Our clients have observed an actual transformation. Have a look at their words that reflect the results we delivered!
      </p>

   
    </div>
  );
};

export default Testimoniols;
