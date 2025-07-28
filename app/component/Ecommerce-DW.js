// --------------------------------------------------
"use client"
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SwiperCards from "./SwiperCards";
import TeamMember from "./TeamMember";
import RotationImage from "./RotationImage";
import TextSeo from "./TextSeo";
import ServiceText from "./ServiceText";
import ServiceContent from "./ServiceContent";
import FAQ from "./FAQ";


const faqs = [
  { question: '1. Can you help migrate my existing ecommerce store from Shopify to WooCommerce (or vice versa)?', 
    answer: 'We sure can! We do specialised platform-to-platform transitions that leave your data and SEO in great shape' },
  { question: '2. I already have a website, do I still need ecommerce marketing services?', 
    answer: 'Yes, if your site is not converting well or is missing key ecommerce elements, then our ecommerce marketing services can help you see an increase in sales.' },
  { question: '3. How long does it take to launch a fully functional ecommerce store with Digital Whopper?', 
    answer: 'It depends on what you need but most projects go live within 3–6 weeks with our team of experts.' },
  { question: '4.  Will your ecommerce digital marketing services include running ads and managing my social media too?', 
    answer: 'Yes! Our marketing packages include ad campaign set up, management and content plan for social media.' },
  { question: '5. Do you provide ongoing support after the store is launched?', 
    answer: 'Definitely! We provide continuous performance monitoring, updates and marketing support to make sure your store grows.' },
];

const features = [
  `<strong>Custom Ecommerce Website Design:</strong> Built for performance, speed, and conversions.`,
   `<strong>Mobile Optimisation:</strong> We help you choose and optimize the right platform.`,
   `<strong>Custom Ecommerce Website Design:</strong> 74% of ecommerce traffic comes from mobile. We make sure you’re ready.`,
`<strong>Mobile Optimisation:</strong> We help you choose and optimize the right platform.`,
`<strong>Secure Payment Gateway Integration:</strong> Seamless checkout experiences = more sales.`,
`<strong>User Experience (UX) Design:</strong> Keep users engaged and move them closer to the "Buy" button.`,
`<strong>Search Engine Optimisation (SEO):</strong> Dominate Google and get found for the products you sell.`,
`<strong>Pay-Per-Click Advertising (PPC):</strong> Get instant traffic that converts.`,
`<strong>Conversion Rate Optimisation (CRO):</strong> Turn your existing traffic into paying customers.`,
  ];
const stats = [
    { value: 120, suffix: "M+", label: "Monthly Reach Through Marketing Campaigns" },
    { value: 10000, suffix: "+", label: "Projects Successfully Delivered" },
    { value: 240, suffix: "+", label: "Clients Growing With Us Globally" },
  ];

  const serviceDetails = [
  {
    title: "One-stop solution:",
    desc:
      "From development to marketing to support, we handle it all so you don’t have to juggle multiple vendors.",
  },
  {
    title: "Transparent pricing & reporting:",
    desc:
      "No jargon, no fluff, just clear metrics and results.",
  },
  {
    title: "Fast turnaround:",
    desc:
      "Your time is money. We deliver projects on schedule, always.",
  },
  {
    title: "Proven Track Record:",
    desc:
      "We've helped over 150+ brands scale their ecommerce stores with a measurable ROI. Our clients have scaled 2x–5x in less than a year.",
  },
  {
    title: "Based in Jaipur, Trusted Across India:",
    desc:
      "As a leading ecommerce service provider in Jaipur, we work with brands across India and beyond.",
  },
 
];


  const teamMembers = [
    {
        src: "/Member3.png",
        name:"Michael Scott",
        designation :"Head of Development Team"
    },
    {
        src: "/Member2.png",
        name:"Dwight Schrute",
        designation :"SEO Specialist"
    },
    {
        src: "/Member3.png",
        name:"Pam Beetsley",
        designation :"Social Media Manager"
    },

]




const valueDetails=[
    {
        src:"/peoplevector.png",
        head:"Discover & Diagnose",
        desc:"We dive deep into your business model, audience, and goals. We perform a full audit of your current setup and identify gaps."
    },
    {
        src:"/walk_img.png",
        head:"Develop & Design",
        desc:"Using insights from the discovery phase, we create a high-performing ecommerce website that reflects your brand and maximises user experience."
    },
    {
        src:"/shakehand.png",
        head:"Market & Amplify",
        desc:`We launch targeted <strong>ecommerce marketing services</strong> that bring in traffic, boost engagement, and drive conversions.`
    },
    {
        src:"/shakehand.png",
        head:"Optimise & Grow",
        desc:"Our job doesn’t end at launch. We monitor performance, tweak campaigns, and suggest improvements to help you grow consistently."
    },
    
]

const Ecommerce=()=>{
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });  
return(
    <>
<RotationImage
textclass="text-center lg:w-full"
 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead="Power Up Your Online Store With" 
             lineheadspancolor=" Digital Whopper’s Ecommerce Marketing Services"
custom="pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8"
linepara="You’ve poured time, effort, and money into your online store. You’ve got great products, a decent-looking website, and maybe even a few sales. But somehow, your ecommerce business just isn’t taking off. You’re lost in a sea of competitors. Website traffic is flat. Conversions? Disappointing. And you’re clueless about marketing. If this sounds like you, then you’re not the only one."
linespan={`There are hundreds and thousands of businesses that are facing these ecommerce struggles every day. 
  However, <strong>Digital Whopper</strong> can solve all your problems. At Digital Whopper, we help you <strong> build, market, and scale</strong> 
  your ecommerce business with a complete suite of <strong>ecommerce marketing services</strong> tailored to your business goals.
`}

disableAnimation={true}

/>
    {/* Sec 2 - img - abt  */}
   <section className="Ecommerce-sec-second max-w-full  pt-5 px-2 md:px-14 text-[#302E2E]">

    <div className=" below-images-div bg-white rounded-lg md:rounded-[20px] pb-10 mt-4 md:mt-20">
    <div className="relative bottom-[25px] md:bottom-[60px] flex justify-center w-full">
    <div className=" images-div-ecom grid grid-cols-3 gap-x-2 md:gap-x-4 gap-y-4 w-[90%] place-items-center">  
 
      <div className=" img-row-one flex flex-col space-y-2 md:space-y-4 lg:space-y-5 w-full  lg:h-[600px] ">
        <div className="w-full h-auto lg:h-[48%]">
          <Image
          src="/Call.jpg"
          width={200}
          height={200}
         quality={80}
         alt="image" 
         className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="w-full h-auto lg:h-[48%]">
          <Image
          src="/peoplevector.png"
          width={200}
          height={200}
         quality={80}
         alt="image" 
         className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>

      <div className="img-row-two flex justify-center items-center w-full lg:h-[600px]">
        <div className="w-full h-auto lg:h-[100%] ">
          <Image
          src="/center_image.jpg"
          width={200}
          height={200}
         quality={80}
         alt="image" 
         className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>

      <div className="img-row-three flex flex-col space-y-2 md:space-y-4 lg:space-y-5 w-full lg:h-[600px]">
        <div className="w-full h-auto lg:h-[48%]">
          <Image
          src="/walk_img.png"
          width={200}
          height={200}
         quality={80}
         alt="image" 
         className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="w-full h-auto lg:h-[48%]">
          <Image
          src="/sitting_img.jpg"
          width={200}
          height={200}
         quality={80}
         alt="image" 
         className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>

    </div>
  </div>

  <TextSeo
  TextHead="Offer"
  Text1Head= "What We Offer: End-to-End Ecommerce Development Services"
  TextSub={`If you think just having an online store is enough to get you sales, 
    then you’ll be out of business sooner than you can think. You need a strategic blend of design, functionality, 
    marketing, and optimization to stay ahead. That’s where you need help from a reliable <strong>ecommerce 
    service provider in Jaipur</strong> like Digital Whopper. <strong>Here’s what our Ecommerce development services include:</strong>`}
 
  textList={features}
  />
  <p className="px-4  text-[clamp(0.3rem,3vw,0.9rem)] ">As one of the best <strong>ecommerce service providers in India</strong>, 
    we go beyond just design;
     we focus on <strong>business growth.</strong></p>
      </div>

      <SwiperCards/>
    </section>



{/* Sec 3 Pending  -- same as collection in shopify page -- */}
<section className="text-3xl">
  {/* ----------------Collection Section Add here -------------------------------- */}
</section>


{/* Sec 6 - Services */}
<section className="Ecommerce-sec-service w-[85%] m-auto pt-10 md:pt-28 px-4 md:px-14">
<ServiceText 
service_head="Why Should You Choose Digital Whopper as Your"
service_span=" Ecommerce Service Provider in Jaipur?"
service_para={`There are dozens of agencies promising results. So why should you choose us? Based in the heart of Jaipur, Digital Whopper brings a fresh, local understanding with global capabilities. Our team combines creative storytelling with smart technology to bring you a complete ecommerce solution. Here’s <strong>why you should choose us:</strong>`}
/>


<ServiceContent

services={serviceDetails}

/>
<p className="text-[clamp(0.3rem,3vw,0.9rem)] text-center mt-4">
  We’re not just another <strong>ecommerce service provider in India</strong>. We’re your <strong>growth partner.</strong>
</p>
</section>

{/* Sec 4  numbers */}
<section className="Ecommerce-sec-fourth max-w-full bg-[#e1e1e1] pt-10 md:pt-28">
    <div className="relative bg-[#4F3DFE] w-full sm:p-[8rem] md:p-[17rem] flex justify-center">
    <div className="bg-[url('/blue_bg.png')] bg-cover bg-center md:absolute left-1/2  md:-translate-x-1/2 -top-[20px] md:-top-[50px] -bottom-[20px] md:-bottom-[50px] w-[80%] text-white flex items-center justify-center">
    <div className="text-center">
    <div className="text-xs md:text-lg"><h4>Statistics </h4> </div>
    <div className="text-sm md:text-3xl lg:text-4xl mt-2 md:mt-6">
      <h2>Who Are We?</h2> 
      </div>
<p className="mt-4">Digital Whopper is one of the best <strong>ecommerce service providers</strong> in Jaipur. Digital Whopper’s 
  ecommerce marketing services make sure that you get results and maximise your profitability. As an experienced 
  <strong> ecommerce service provider in India</strong>, we help you do more than just sell—we help you scale.</p>

<div ref={ref}  className="flex flex-wrap justify-evenly text-center md:text-start mt-2 md:mt-14 px-6">
      {stats.map((stat, index) => (
        <div key={index} className="w-[100%] md:w-[25%] mt-2 md:mt-0">
          <div className="text-md md:text-4xl lg:text-5xl">
          {inView && <CountUp start={0} end={stat.value} duration={3} separator="," suffix={stat.suffix} />}
          </div>
          <div className="text-xs md:text-sm lg:text-base">
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>

    </div>

</div> 
</div> 
</section>




{/* sec 5 -Team */}
<section className="Ecommerce-sec-team max-w-full bg-[#e1e1e1] pt-10 md:pt-28 px-4 md:px-14">
<div className="team-main bg-[#e5e5e5] rounded-[20px] py-10 md:py-16 ">
    <div className="team-head-sec px-4 md:px-24 lg:px-44">
    <div className="text-sm md:text-lg text-[#777777]"><h4>Leadership Team </h4></div>
    <div className="text-2xl md:text-4xl mt-4 text-[#302E2E]"><h2>Meet the Digital Marketing Experts</h2> </div>
    <div className="text-sm md:text-lg mt-6 text-[#302E2E]"><p>Our team of digital marketers, designers, and strategists works together to deliver exceptional</p></div>
    </div>


<TeamMember  
teamMembers={teamMembers }
/>

</div>
</section>



{/* sec 7 Our Values */}

<section className="Ecommerce-sec-values max-w-full bg-[#e1e1e1] py-10 md:py-28 px-4  md:px-28 lg:px-64">
<div className="main text-[#302E2E]">
<div className="text-base md:text-lg"><p>Our values</p></div>
<div className="text-[clamp(1rem,4vw,3rem)] mt-4">
  <h2>Our 4-Step Strategy to Ecommerce Success
</h2></div>
<div className="mt-4 text-sm md:text-lg ">
  <p>
 You can’t grow if your target customers can’t find you. That’s why our <strong>ecommerce digital marketing 
 services</strong> are laser-focused on visibility, traffic, and conversions. Wondering how we make it all work? Here’s a 
 simple breakdown of our proven process: </p></div>
</div>
<div className="valuecard-main">
    {valueDetails.map((data,index)=>(
    <div className="card-div flex flex-wrap items-center mt-10 md:mt-20" key={index}>
          <div className="w-[35%] md:w-[25%]">
             <Image 
                        src={data.src}  
                         alt="Example Image" 
                          width={270} 
                         height={270} 
                        quality={80}
                     />
          </div>
             <div className="px-2 md:px-6 text-[#302E2E] w-[65%] md:w-[75%]">
                <div className="text-base md:text-xl mt-2"><h3>{data.head}</h3> </div>
                <div className="text-xs md:text-lg lg:text-lg mt-1 md:mt-3  ">
                  <p>{data.desc}</p> 
                
                </div>
             </div>
    </div>
    ))}


</div>


<div>
 
</div>   

<h2 className="text-[clamp(1rem,4vw,3rem)] mt-4">You’re One Click Away from Growing Your Ecommerce Business</h2>

<p className="mt-4 text-sm md:text-lg ">

  If you are fed up with low conversions, slow growth, or unqualified traffic, it’s time to take it to the 
  next level. At Digital Whopper, we are passionate about seeing your business succeed as we do with ours. 
  No matter if you are in need of full-scale ecommerce development or high-impact digital marketing, we have 
  the skills and resources to get you there. Don’t let your potential sit idle. Get in touch with our experts 
  today and see how we can help you scale your ecommerce business!
</p>
</section>
<FAQ faqs={faqs} />

    </>
)
}
export default Ecommerce

// ---------------------------------------------------------------------
// -----------------(TeamMember.js)

