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
import Link from 'next/link';



const faqs = [

  {
    question: 'Which E-commerce platforms does Digital Whopper manage?',
    answer: 'Our e-commerce stores are operational on all major platforms. Our team is expert in managing Amazon, Flipkart, Myntra, Etsy, and Pepperfry. For your e-commerce store, you can completely rely on us. From setting up stores to promoting your products and driving conversions, we assure good results.'
  },
  {
    question: 'Does Digital Whopper also help with website design and UI/UX?',
    answer: 'Yes! We focus on creating immersive digital experiences. Our IT team creates websites that are user-friendly, visually appealing, and retain users. We guarantee that your website will reflect your brand\'s message and keep users engaged at every step.'
  },
  {
    question: 'Which industrial sectors does Digital Whopper work with?',
    answer: 'We proudly work with diverse industries. We make tailored strategies to meet the unique requirements of each sector. Education, healthcare, real estate & construction, hospitality, and food & beverage and many more… Whether you have an established business or trying to grow a start-up, our team is expert in managing every business and driving measurable growth.'
  },
  {
    question: 'Does Digital Whopper provide regular progress reports to clients?',
    answer: 'We believe in maintaining transparency between clients and the company. We provide detailed progress reports including campaign insights and performance metrics. We provide weekly and monthly reports to keep you updated about your business status.'
  },
  {
    question: 'What are the charges for digital marketing services at Digital Whopper?',
    answer: 'Our charges are variable depending on the type of services needed like social media management, SEO, or e-commerce store handling. However, while we have variable prices the cost is quite affordable. So even if you have a small business you can enjoy our expert services and achieve the highest returns from your investment.'
  }
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
 
<LineAnimation      lineheading="Our" spanhead="Strategy"

milestonesSet1={[
    { title: "The Spark", description: "Turning Vision to Reality" },
    { title: "Foundation", description: "Blending technology with human creativity" },
    { title: "Strategic Growth", description: "Scale with Vision" },
  ]}
  milestonesSet2={[
    { title: "Digital Excellence", description: "Passion, Precision, and Mastery" },
    { title: "Innovation Drive", description: "Pushing boundaries with unique strategies" },
    { title: "Client Expansion", description: "Building across diverse sectors " },
  ]}


/>

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

<section className="w-[84%] m-auto">

<div className="flex justify-between">
 <div className="heading">
 <h2 className='text-black text-[clamp(1rem,4vw,3rem)]'>Our Latest Blogs </h2>
 </div>



 <div className="btn">
    <Link href="/Blog">
              <button className='bg-[#4F3DFE] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-full'>
    Browse
</button>
                </Link>

 </div>
</div>
  <Articals/> 
</section>







<RelativelyShortSection/>
    <FAQ faqs={faqs} />
   



  
<Boot/>







    </div>

  );
}
