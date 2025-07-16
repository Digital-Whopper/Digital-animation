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
import FAQ from '../component/FAQ';
import TextSeo from '../component/TextSeo';

const features = [
  `<strong>Proven Results:</strong> 90% of our clients see a measurable boost in organic traffic within 90 days.`,
   `<strong>Transparent Reporting:</strong> No jargon. Just clear dashboards that show rankings, traffic, and ROI.`,
   `<strong>Google-Certified Team:</strong> Trained experts with deep technical and strategic SEO knowledge.`,
   `<strong>Custom Strategies:</strong> No copy-paste solutions. Every business is unique, and so is our approach.`,
   `<strong>Local SEO Focus:</strong> As a <strong>Jaipur-based SEO company</strong>, we understand your local market better than anyone.`
];

const faqs = [
  {
    question: '1. Why is Digital Whopper the best SEO agency in Jaipur?',
    answer: 'At Digital Whopper, we help businesses rank on Google with proven techniques that have worked for years for our clients and other businesses. We have an established record of putting Jaipur businesses at the top of Google rankings. We blend local knowledge with analytics-driven strategies to provide genuine, measurable outcomes.'
  },
  {
    question: '2. How soon can I start seeing results from SEO services?',
    answer: 'SEO is an investment for the long run. Most of our clients notice significant changes in rankings and traffic in 3 to 6 months, based on niche and competition.'
  },
  {
    question: '3. Do you have local SEO for Jaipur businesses?',
    answer: 'Absolutely! As the best SEO company in Jaipur, we help local businesses rank higher in their area by optimising their Google Business Profile, local listings, and optimised content.'
  },
  {
    question: '4. Does SEO actually generate more leads and sales?',
    answer: 'Yes absolutely. The reason why SEO is so effective is because it brings highly targeted customers much higher in the buyer funnel to your products or services. Hence, you get more conversions and don\'t have to spend anything on running ads or promotions.'
  },
  {
    question: '5. Should small businesses in Jaipur invest in SEO?',
    answer: 'Yes! SEO brings organic traffic to your website without having to pay a single Rupee for it. Our top-notch SEO services in Jaipur are designed to help small and local businesses compete on par with big brands.'
  }
];

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
             linehead = "Get More Customers to Visit Your Website with the"
            
             lineheadspancolor=" Company in Jaipur Best SEO"
   linepara={`You’ve built a stunning website. Your products are solid. Your content is strategy-driven. 
    But no one’s visiting. No clicks. No leads. No sales. If your business isn’t showing up on Google, you won’t be 
    able to scale or build a sustainable business, no matter what you do. You need your customers to notice you and 
    visit your website. And if you don’t show up when customers search for your product, then all your money and 
    efforts are in vain. That’s why you need help from the <strong>best SEO company in Jaipur.</strong>
  
  `}          
custom="pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8"

disableAnimation={true}
   
/>




    




    </div>



    <Section/>


    <Section22/>


    <Section3/>

    <Section4/>
     <TextSeo
  TextHead="Why Is Digital Whopper"
  Text1Head= " the Best SEO Company in Jaipur?"
  TextSub={`There are dozens of SEO companies in Jaipur. So why us? Because we don’t just promise rankings. We deliver leads, 
    conversions, and revenue. Here’s what makes us the <strong>best SEO company in Jaipur</strong>:`}


  textList={features}
  />
  <p className='mx-5'>When you partner with <strong>Digital Whopper</strong>, you’re choosing the <strong>best SEO 
    agency Jaipur</strong> businesses rely on for sustainable digital growth.</p>
    <Section5/>

    <FAQ faqs={faqs} />
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