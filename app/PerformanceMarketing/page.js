import React from 'react'
import PerformanceSection from '../component/PerformanceSection'
import Section2 from '../component/Section2'
import ReadyBox from '../component/ReadyBox'
import Product from '../component/Product'
import OurTeam from '../component/OurTeam'
import MyworkExp from '../component/MyworkExp'
import Lastsection from '../component/Lastsection'
import Pr_Section from '../component/Pr_Section'
import Pr_Product from '../component/Pr_Product'
import Pr_Section2 from '../component/Pr_Section2'
import Pr_ReadyBox from '../component/Pr_ReadyBox'
import Pr_OurTeam from '../component/Pr_OurTeam'
import Pr_MyworkExp from '../component/Pr_MyworkExp'
import Pr_Lastsection from '../component/Pr_Lastsection'
import LineAnimation from '../component/LineAnimation'
import FAQ from "../component/FAQ";


const faqs = [
  {
    question: '1. How is a performance marketing agency different from a regular digital marketing agency?',
    answer: 'Performance marketing agencies focus strictly on measurable results like sales, leads, or ROI, and not just reach or impressions.'
  },
  {
    question: '2. Can your Facebook ad services help if I already run ads but get poor conversions?',
    answer: 'Absolutely. We audit existing campaigns, fix targeting gaps, and optimise creatives to improve your conversion rates.'
  },
  {
    question: '3. I\'m a local Jaipur-based business. Is Google Ads still worth it for me?',
    answer: 'Yes! As a Google Ads agency in Jaipur, we specialise in local targeting that drives high-intent traffic to your store or service.'
  },
  {
    question: '4. What kind of budget do I need to start with your performance marketing services?',
    answer: 'We offer flexible plans depending on your goals, platforms, and ad spend.'
  },
  {
    question: '5. How soon can I expect to see results from your Facebook and Google ad campaigns?',
    answer: 'Most clients start seeing meaningful traction within the first 2-4 weeks as we optimise your campaigns for performance.'
  }
];

const page = () => {
  return (
    <div >
     {/* <PerformanceSection/>
     <Section2/>
     <ReadyBox/>
     <Product/>
     <OurTeam/>
     <MyworkExp/>
     <Lastsection/> */}
     <Pr_Section/>
     <Pr_Section2/>

     
    
      <Pr_OurTeam/>
     
      <Pr_Product/>

  
    
    {/* <Pr_MyworkExp/> */}

<LineAnimation   lineheading="Our 4-Step Performance" spanhead=" Marketing Game Plan"

milestonesSet1={[
    { title: " Audit & Research", description: "We analyse your existing marketing performance, study competitors, and understand your audience deeply." },
    { title: "Foundation", description: "Blending technology with human creativity" },
    { title: "Strategic Growth", description: "Scale with Vision" },
  ]}
  milestonesSet2={[
    { title: "Digital Excellence", description: "Passion, Precision, and Mastery" },
    { title: "Innovation Drive", description: "Pushing boundaries with unique strategies" },
    { title: "Client Expansion", description: "Building across diverse sectors " },
  ]}
/>


       <Pr_ReadyBox/>

       <Pr_Lastsection/>

<FAQ faqs={faqs} />

    </div>
  )
}

export default page
