"use client";

import Articals from "./component/Articals";
import Testimoniols from "./component/Testimoniols";
import RotationSection from "./component/RotationSection";
import { motion, useAnimation } from "framer-motion";
import Boot from "./component/Boot";
import LineAnimation from "./component/LineAnimation";
import IngredientCarousel from "./component/Ingredient__Carousel";
import Sit_Banner from "./component/Sit_Banner";
import InfiniteSlider from "./component/InfiniteSlider";
import FAQ from "./component/FAQ";
import RelativelyShortSection from "./component/RelativelyShortSection";
import BusinessIntro from "./component/BusinessIntro";
import RotationImage from "./component/RotationImage";
import OurServices from "./component/OurServices";




const faqs = [
  { question: 'What is your return policy?', answer: 'We offer a 30-day return policy.' },
  { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide.' },
  { question: 'How can I track my order?', answer: 'You will receive a tracking link via email.' },
  { question: 'Can I cancel my order?', answer: 'You can cancel within 24 hours of placing it.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards and UPI.' },
];
export default function Home() {



  return (
    <div >


{/* <motion.div>
adding text
</motion.div> */}




<RotationSection/>

<div className="relative  w-full">
      <RotationImage
 
 rotate_img="/lines2.svg"
          width_img="500"
          height_img="100"
            Rotateclass="w-full z-[-1]"
              disableAnimation={true}
   />
 
<LineAnimation      lineheading="Our" spanhead="Journey"/>

    <Testimoniols/> 


    <IngredientCarousel/>



 {/* <RotationImage
          
          rotate_img="/lines.webp"
          width_img="500"
          height_img="100"
          Rotateclass="h-full top-0 left-0"

          disableAnimation={false}
          /> */}




</div>
 

    <Sit_Banner/>

 
<OurServices

title="UI/ UX Design"
image="Sevice1.jpg"
/>
          


    <InfiniteSlider/>


  
     






     <BusinessIntro/>


  <Articals/> 






<RelativelyShortSection/>
    <FAQ faqs={faqs} />
   



  
<Boot/>







    </div>

  );
}
