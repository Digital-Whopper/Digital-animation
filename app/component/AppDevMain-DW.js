'use client';

import React, { createContext } from "react";
import { IoLogoAndroid } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdBiotech } from "react-icons/md";
import { FaTruckLoading } from "react-icons/fa";
import Image from "next/image";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import { SiGnuprivacyguard } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { FaTrophy } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import { FaCircleNodes } from "react-icons/fa6";
import { RiBillFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaUpload } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import RotationImage from './RotationImage';
import FAQ from "./FAQ";


const stats = [
  { value: 500, suffix: "+", label: "Campaigns" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 25, suffix: "+", label: "Country Reach" },
  { value: 15, suffix: "+", label: "Certified Experts" },
];


const faqs = [
  { question: '1: I’ve got an app idea but zero tech skills. Can you still help me?', 
    answer: 'Of course! You bring the idea, we bring the tech magic. From concept to code to launch, we handle it all!' },
  { question: '2: How long will it take to launch my app?', 
    answer: 'Most apps take 4 - 12 weeks, depending on features. If you want more integrations and features, then it could take longer.' },
  { question: '3: What if I only want an Android app for now?', 
    answer: 'Yes, that’s totally doable. As one of the top <strong>android application development companies in Jaipur</strong>, we specialise in building powerful, Android-only apps that crush it on Google Play.' },
  { question: '4: Do you offer post-launch support, or am I on my own after it’s live?', 
    answer: 'We’ve got your back, even after launch. Bug fixes, updates, new features; we’ll help you with everything.' },
  { question: '5: I’m based outside Jaipur. Can we still work together?', 
    answer: 'Yes! We work with clients across India (and even globally). We keep things smooth, real-time, and totally remote-friendly.' },
];

const appFirstContent={
    title:"File storage and sharing for remote teams that work together on ",
    titlePartTwo:"Web3",
    description: "Deupload is an online file manager on decentralized cloud storage and IPFS that allows you to store, share, collect files privately, and collaborate without subscription.",
     button1Text: "Get Started",
    button2Text: "Pricing",
    src:"/vectorimg.png"

}

const boxCard={
    title: "What Makes Us One of the Top Mobile Application Development Companies in Jaipur",
    description: `We're not just developers. We're a strategic business partner. We dream, design, and nurture mobile apps that look stunning, are efficient in results, and make your customers keep coming back. As one of the leading <strong>mobile application development company in Jaipur,</strong> here is what we provide:`,
    boxesDec:[
        {
            src:<IoLogoAndroid />  ,
        title:"Personalised Android Solutions",
        description:`As one of the leading Android <strong>application development companies in Jaipur </strong>, we develop apps purposefully designed for the Android market, because that's where most of your users are.`,
        // btnText:"Products features →",
        },
        {
            src:<FaCircleNodes />   ,
            title:"User-Centered Design",
            description:"Your users want a clean, intuitive interface. Our UI/UX designers make each swipe, tap, and scroll easy and delightful.",
            // btnText:"How it works →",
        },
        {
            src:<RiBillFill />   ,
            title:"Scalable Backend Infrastructure",
            description:"From enterprise applications to MVPs, we develop backend infrastructure that scales seamlessly as your business expands.",
            // btnText:"Metered billing →"
        },
        {
            src:<IoMdSettings />   ,
            title:"Bulletproof Testing",
            description:"All the apps we build go through strict quality tests: no crashes, no bugs, no worries.",
            // btnText:"Metered billing →"
        }
    ]

}

const ToggleDesc={
    title:"Try the App",
    description:"Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
    imgsrc:[
        {
            src:<IoLogoGooglePlaystore />  ,
        },
        {
            src:<FaApple />
        }
    ]
}

const FileSection={
    heading:"Smart Android Apps",
    headingPartTwo:"For Every Need",
    filediv:[
        {
            fileClass:"bg-[#FFF7ED] ",
            title:"We Build Android Apps That Perform Every Time",
            desc:`As one of the best <strong>Android application development companies in Jaipur </strong>, we have a highly skilled team of developers who know how to:`,
            textList : [
    "Design instant, intuitive apps",
    "Optimise battery, memory, and performance",
    "Integrate payment gateways, GPS, push notifications, and more",
    "Catch up with Google's newest Android updates",
    "Create apps that scale with your business"
  ],
            lastdesc:`With more than one million Android users in India alone, it's our job to put your app in the right hands.`,
            
            src:"/leftfile.png",
        },
        {
            fileClass:"bg-[#e0f7fa] ",
            title:"What You Can Build with Digital Whopper",
            desc:"Our app development services cover a wide range of industries and functionalities:",
            textList : [
    `<strong>E-commerce apps </strong>with real-time inventory tracking`,
    `<strong>Booking platforms </strong>for salons, spas, and services`,
    `<strong>Healthcare apps </strong>with secure patient records`,
    `<strong>Educational apps </strong>with interactive content`,
    `<strong>Custom Android apps </strong>for any unique business model`
  ],
   lastdesc:`Whatever your industry, we have the experience to bring your mobile vision to life.`,
            src:"/rightfile.png",
        },

    ]
}

const info={
    
        title:"Why Businesses Choose",
        titlePartTwo:"Digital Whopper",
       
        button1Text:"Start Now",
        button2Text:"More features",
        src:"/Consulting.png"
}

const details={
    heading:"Real Businesses." ,
    headparttwo:"Real Results."   ,
    desc:`Wondering if we’re the <strong>mobile application development company in Jaipur</strong> worth your time?`,
    desc1:'Here’s what we’ve helped clients achieve:',
    icon:[
        {
            class:"bg-[#00e5ff] rounded-full p-3 text-xl text-white",
            btnClass:"text-xs md:text-sm mt-4 text-[#00e5ff] font-semibold",
            iname:<MdOutlineShoppingCart />,
            title:"E-commerce brand",
            para:"doubled monthly revenue with a seamless shopping app",
            // btnText:"Learn use cases →",
        },
        {
            class:"bg-[#34d399]  rounded-full p-3 text-xl text-white",
            btnClass:"text-xs md:text-sm mt-4 text-[#34d399] font-semibold",
            iname:<GiHealthNormal />,
            title:"Healthcare startup",
            para:"reached 50K downloads in 90 days",
            //  btnText:"Environment impact →"
        },
        {
            class:"bg-[#00e5ff]  rounded-full p-3 text-xl text-white",
            btnClass:"text-xs md:text-sm mt-4 text-[#34d399] font-semibold",
            iname:<MdBiotech />,
            title:"Edtech platform",
            para:"improved student engagement by 40% with our app features",
            //  btnText:"Environment impact →"
        },
        {
            class:"bg-[#34d399]  rounded-full p-3 text-xl text-white",
            btnClass:"text-xs md:text-sm mt-4 text-[#34d399] font-semibold",
            iname:<FaTruckLoading />,
            title:"Logistics company",
            para:"reduced manual tracking time by 70%",
            //  btnText:"Environment impact →"
        }
    ],

    cards:[
        {
            icon:<SiGnuprivacyguard /> ,
            head:"Private by design",
            desc:"We believe data privacy is a human right, which is why Deupload is built on a decentralized architecture that makes data breaches a thing of the past."
        },
        {
            icon:<IoShieldCheckmark />  ,
            head:"Distributed network",
            desc:"An object is never in one place. Data is split into 80 pieces, and distributed to uncorrelated Nodes. When you call for the data, it’s automatically reconstituted in an instant.",
        },
        {
            icon:<FaCode />  ,
             head:"Worldwide availability",
            desc:"Data is stored on Nodes that are selected by reputation and local latency. The fastest Nodes from this set are chosen to store pieces, ensuring quick access to your data.",
    }
    ]

}

const smallCards={
    boxOne:[
        {
            icon:<SiAffinitydesigner />,
            head:"Free Consultation & Strategy Session",
            desc:"We begin with a deep dive into your goals. We listen first, then advise. No generic packages here; just solutions tailored to your business.",
        },
        {
            icon:<FaTrophy /> ,
            head:"Wireframing & UI/UX Design",
            desc:"Before writing a single line of code, we map out your app's structure and design. You’ll see exactly how your app will look and feel."
        }
    ],
    boxTwo:[
        {
            icon:<GrTechnology />  ,
            head:"Testing & Optimisation",
            desc:"We test the app across multiple devices and scenarios, ensuring peak performance.",  
        },
        {
            
                icon:<FiGlobe />   ,
                head:"Launch & Beyond",
                desc:"Once approved, we help you deploy the app to the Play Store, and stick around for post-launch support, updates, and maintenance."
            
        }
    ]
}

export default function AppDevMain() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 }); 

    return (
      <>
      {/* AppFirst */}
      <section className="AppFirst-sec max-w-full "> 
             <RotationImage
textclass="text-center lg:w-full"
 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
 linehead="Build Your Dream App with " 
  lineheadspan="Digital Whopper – The Leading Mobile Application Development Company in Jaipur"
custom="pt-0 md:pt-8"
linepara="You have a great mobile app idea that can shake up your industry, solve real customer issues, or take your business to new heights. You are thrilled, perhaps a little overwhelmed. But the issue is, you don’t know where to begin. You search for developers, get lost in technical terms, and what you find is either out of your price range or too generic. That is a common problem for a lot of companies and founders."
linespan={`So, what can you do about it? Team up with a trusted 
<strong>mobile application developmentcompany in Jaipur </strong>
that will understand your vision and bring it to life. 
<strong>Digital Whopper</strong> is one of the top <strong>mobile application developmentcompany in Jaipur </strong>that helps you turn your ideas into powerful, revenue-generating apps.`}
disableAnimation={true}

/>
                <div className="w-full flex justify-center items-center pt-10">
            <div className="AppFirst-div-main text-center max-w-xl lg:max-w-3xl">
       
            {/* <div className="btn-div flex mt-8 justify-center gap-x-4">
                <div>
                    
                    <button className="bg-[#4f3dfe] text-xs md:text-base text-white rounded-lg px-6 py-2 font-semibold border-2 border-[#4f3dfe]">
                    {appFirstContent.button1Text}</button>
                    </div>
                 <div>
                    
                    
                    <button className="border border-black rounded-lg px-10 py-2 text-xs md:text-base  font-semibold border-2	">{appFirstContent.button2Text}</button></div>
                </div> */}
                </div>
                </div>



                <div className="mt-4 w-full flex justify-center">
            <Image 
            src={appFirstContent.src}  
            alt="Example Image" 
            width={1000} 
            height={300} 
            quality={80}
            layout="responsive"
          />
            </div>
            </section>

<section className="w-[85%] m-auto">
  {/* Three box */}
            <section className="ThreeBox-sec max-w-full "> 
         <div className="w-full flex justify-center items-center pt-10 md:pt-28">
              <div className="ThreeBox-div-main text-center ">
              <div className="text-[clamp(1rem,4vw,3rem)] font-semibold"><h2>{boxCard.title} </h2></div>
              <div className="mt-4 px-4 text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E]">
                <p dangerouslySetInnerHTML={{ __html: boxCard.description }}/></div>
                </div>
        </div>
        
        <div className="boxes-div gap-x-4 mt-10 text-white flex  flex-wrap justify-center ">
        {boxCard.boxesDec.map((box, index) => (
        <div key={index}  className="box-card  bg-[#4f3dfe] w-[85%] md:w-[48%] lg:w-[23%] rounded-[20px] p-4 mt-5 lg:mt-0">
        <div className="flex  "><div className="bg-white rounded-full p-4 text-[#aea6fe] text-2xl">
                    {box.src}
                
            </div>
        </div>
        <div className="mt-6 text-base md:text-xl  font-medium min-h-[50px] md:min-h-[70px]"><h3>{box.title}</h3></div>
        <div className="mt-1 text-[clamp(0.3rem,3vw,0.9rem)]">
             <p dangerouslySetInnerHTML={{ __html: box.description }}/>
            </div>
        {/* <div className="mt-6 text-xs md:text-base font-semibold ">{box.btnText}</div> */}
        </div>
))}
        </div>

       </section>



{/* App Toggle */}
<section className='text-5xl'>
    {/* -------add toggle section here */}
</section>


 <section className="File-sec max-w-full bg-[#e1e1e1] "> 
    <div className="w-full pt-10 md:pt-28">
         <div className="File-div-main">
         <div className="text-[clamp(1rem,4vw,3rem)] font-semibold text-center">
    <h2>{FileSection.heading} <span className="text-[#4f3dfe] block">{FileSection.headingPartTwo}</span></h2></div>
         </div>
         </div>

    <div className="two-file-sec flex flex-wrap justify-between lg:gap-8 mt-4 md:mt-16">
    {FileSection.filediv.map((card,index)=>(
    <div key={index} className={`file-div-main w-[95%] lg:w-[40%] text-center rounded-[20px] mt-5 lg:mt-0 ${card.fileClass}`}>
         <h2 className="text-[#4f3dfe] text-base md:text-xl  font-medium mt-10">{card.title}</h2>
      
      <div className="px-6 mt-2 ">
 <p className="text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E]" dangerouslySetInnerHTML=
            {{ __html: card.desc }}/>
            <ul className="text-left text-[clamp(0.3rem,3vw,0.9rem)]">
               {card.textList.map((text, index) => (
        <li key={index} dangerouslySetInnerHTML=
            {{ __html: text }} />
      ))}
            </ul>
            <p className="text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E]" dangerouslySetInnerHTML=
            {{ __html: card.lastdesc }}/>
      </div>
           
           <div className="flex justify-center mt-4">
         <Image 
            src={card.src} 
             alt="Example Image" 
              width={400} 
           height={400} 
          quality={80}
        
         />
         </div>
    </div>
))}
    </div>
   </section>









 <section className="TextImgCard-sec max-w-full bg-[#e1e1e1]  pt-6"> 
    <div className="bg-[#ececfe] flex flex-wrap rounded-[20px] px-6 ">
       <div className="w-full md:w-[60%] py-10 md:py-14 lg:pt-28">
        <div className="TextImgCard-div-main  ">
        <div className="text-[clamp(1rem,4vw,3rem)] font-semibold">
            <h2>
                <span className="text-[#4f3dfe]">{info.title}</span> {info.titlePartTwo}</h2></div>

        <div className="mt-4 text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E]">
            <p>
We’ve earned our place among the best <strong>android application development companies 
in Jaipur</strong> because we focus on what matters most: <strong>delivering value and solving real problems.</strong>


            </p>
             <p>
Here’s why we are a<strong> trusted mobile application development company in jaipur:</strong> 
            </p>

            <ul className="text-[clamp(0.3rem,3vw,0.9rem)]">
                <li><strong>We speak your language.</strong> We don’t believe in tech jargon. Just clear, helpful communication.</li>
    <li><strong>We respect deadlines.</strong> Your app launches when we say it will.</li>
     <li><strong>We work transparently.</strong> You get updates at every stage of the project.</li>
      <li><strong>We deliver ROI.</strong> Every feature we build is designed to grow your business.</li>
            </ul>
            </div>
        
        {/* <div className="btn-div flex mt-8  gap-x-4">
            <div>
        <button className="bg-[#4f3dfe] text-xs md:text-base text-white rounded-lg px-6 py-2 font-semibold border-2 border-[#4f3dfe]">
            {info.button1Text}</button></div>
             <div>
                <button className="border border-black text-xs md:text-base rounded-lg px-2 md:px-10 py-2 font-semibold border-2">
                    {info.button2Text}</button></div>
            </div> */}
            </div>
            </div>
             <div className="mt-0 md:mt-4 w-full md:w-[40%] flex justify-center">
                    <Image 
                    src={info.src}  
                    alt="Example Image" 
                    width={450} 
                    height={450} 
                    quality={80}
                  />
                    </div>
                    </div>
    </section>




 {/* AppPrivacy */}
      <section className="AppPrivacy-sec max-w-full bg-[#e1e1e1] "> 
            <div className="AppPrivacy-div-main flex flex-wrap lg:justify-between pt-10 md:pt-28 ">
        <div className="left w-[98%] lg:w-[45%]  ">
            <div className="text-[clamp(1rem,4vw,3rem)] font-semibold">
                <h2>{details.heading} <span className="text-[#4f3dfe]">{details.headparttwo}</span></h2></div>
            <div className="mt-4 text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E] ">
              
               <p dangerouslySetInnerHTML={{ __html: details.desc }}/>

               <p dangerouslySetInnerHTML={{ __html: details.desc1 }}
               />
              </div>
     
            <div className="card-div-main flex flex-wrap mt-4 justify-between">
                {details.icon.map((data,index)=>(
                <div className="card-div w-[100%] md:w-[49%] mt-4" key={index} >
                <div className="flex"><div className={`${data.class}`}>{data.iname}</div></div>
                <div className="font-semibold mt-4 text-sm md:text-base"><h4>{data.title}</h4></div>
                <div className=" text-xs md:text-sm mt-1 text-[#5C5F6E]"><p>{data.para}</p></div>
                <div>
                    {/* <button className={`${data.btnClass}`}>{data.btnText}</button> */}
                    
                    </div>
                     
                </div>
                ))}
                
            </div>

            <p className="mt-4 text-[clamp(0.3rem,3vw,0.9rem)]">
                We're one of the few <strong>android application development companies in 
                Jaipur</strong> that backs performance with numbers.</p>
            </div>
    
    
        <div className="right w-[98%] lg:w-[45%] mt-16 md:mt-24 lg:mt-0">
              <div className="text-[clamp(1rem,4vw,3rem)] font-semibold">
                <h2>Who We Are - <span className="text-[#4f3dfe]">Digital Whopper</span></h2></div>
            <div className="mb-4 text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E] ">
              <p>Digital Whopper is a full-stack <strong>mobile application development company in Jaipur </strong>
                committed to helping brands like yours launch smart, scalable, and stunning apps. Whether you're a solo entrepreneur, a local business owner, or part of a growing company, we bring your mobile vision to life, on time and within budget.
 </p>
              </div>
        {details.cards.map((content,index)=>(
            <div className="card-box flex bg-white mb-6 rounded-[20px] p-6 md:p-10" key={index}>
            <div className="card-icon-div text-4xl "><div className="bg-[#ececfe] text-[#aea6fe] p-2 rounded-full"> {content.icon} </div> </div>
            <div className="card-desc px-4">
                <div className="font-semibold text-base md:text-xl"><h3>{content.head}</h3></div>
                <div className="text-xs md:text-sm text-[#5C5F6E] "><p>{content.desc}</p></div>
            </div>
              
            
        </div>
        
        ))}
      
        </div>
                </div>
    
      
        </section>

  {/* Account counting Section */}
  <section className="AccCounting-sec max-w-full bg-[#e1e1e1]"> 
    <div className="AccCounting-first pt-10 md:pt-28 text-center">
        <div className="text-[#fd853a] text-xs"><h4>100+ Apps We Developed</h4></div>
    <div className="text-[clamp(1rem,4vw,3rem)] font-semibold mt-4"><h2>Our 5-Step Mobile Application Development Process That Gets You 
        From Idea to App</h2> </div>
    <div className="text-[clamp(0.3rem,3vw,0.9rem)] "><p>We keep it simple, structured, and transparent. Here’s how we help your app idea come alive: </p> </div>
    </div>

    <div className="AccCounting-second flex flex-wrap mt-6  pb-10">
    <div className="left-acc w-[100%] lg:w-[25%] text-center lg:text-start">
    {smallCards.boxOne.map((item,index)=>(
    <div key={index} className="mt-10 md:mt-20 ">
         <div className="text-[#fd853a] text-3xl"><div className="flex justify-center lg:justify-start">
            {item.icon}</div></div>   
     <div className="mt-4 md:mt-6 font-semibold text-sm md:text-lg"><h4>{item.head}</h4> </div>   
     <div className="text-[clamp(0.3rem,3vw,0.9rem)]  text-[#5C5F6E]"><p>{item.desc}</p> </div> 
    </div>
    ))}
    </div>
    <div className="acc-img-div  w-[100%] lg:w-[50%] mt-20 lg:mt-0">
    <Image
    src="/appMob.png"  
    alt="Example Image" 
    width={1700} 
    height={1700} 
    quality={80}
    />

     <div className="mt-10 md:mt-20 ">
         <div className="text-[#fd853a] text-3xl"><div className="flex justify-center lg:justify-start">
           <CgWebsite /></div></div>   
     <div className="mt-4 md:mt-6 font-semibold text-sm md:text-lg"><h4>
        Development Phase</h4> </div>   
     <div className="text-[clamp(0.3rem,3vw,0.9rem)]  text-[#5C5F6E]"><p>Our experienced developers get to work using cutting-edge tech to build your Android app efficiently and securely.
        </p> </div> 
    </div>
    </div>
    <div className="right-acc text-center lg:text-end w-[100%] lg:w-[25%] ">
    {smallCards.boxTwo.map((item,index)=>(
    <div key={index} className="mt-10 md:mt-20  ">
     <div className="text-[#fd853a] text-3xl"><div className="flex justify-center lg:justify-end">{item.icon}</div> </div>   
     <div className="mt-4 md:mt-6 font-semibold text-sm md:text-lg"><h4>{item.head}</h4> </div>   
     <div className="text-xs md:text-base text-[#5C5F6E]"><p>{item.desc}</p> </div>   
    </div>
    ))}
    </div>
    </div>
    </section>
        {/* About us  */}
    <section className="Aboutus-sec max-w-full"> 
    <div className=" py-10 flex flex-wrap items-center">
    <div className="left-abt flex  flex-wrap-reverse md:flex-nowrap w-[100%] lg:w-[50%] relative">
        
     <div  ref={ref} className="num-box bg-[#e1e1e1] rounded-tr-[20px] rounded-br-[20px] w-full md:w-[70%] py-14 lg:py-20 text-center md:pr-24">

    <div className="grid grid-cols-2 md:block gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center mt-6">
            <div className="font-bold text-xl md:text-3xl">
              {inView && <CountUp start={0} end={stat.value} duration={3} separator="," suffix={stat.suffix} />}
            </div>
            <div className="mt-2 text-[clamp(0.3rem,3vw,0.9rem)] text-[#5C5F6E]">
              <p>{stat.label}</p>
            </div>
          </div>
      ))}
    </div>
  </div>

        <div className="flex justify-center items-center w-full md:w-auto">
        <div className="num-img  md:absolute md:left-[35%] ">

        <Image 
                    src="/about.png" 
                     alt="Example Image"  
                      width={450} 
                   height={450} 
                  quality={80}
                 
              />
                
        </div>
        </div>
    </div>
    <div className="right-abt  w-[100%] lg:w-[50%] px-6 lg:pr-10 mt-12">
        <div className="ftext w-full flex justify-center md:justify-start items-center"><div className="bg-[#4f3dfe] w-[35px] h-[2px]"></div>
        <div className="text-[#4f3dfe] font-semibold px-2"><h4>About Us</h4></div> 
        <div className="bg-[#4f3dfe] w-[35px] h-[2px]"></div></div>
        <div className="text-[clamp(1rem,4vw,3rem)] font-semibold text-center md:text-start  mt-4">
            <h2>Ready to Build the App That Grows Your Business?</h2> </div>
        <div className="mt-4 text-[clamp(0.3rem,3vw,0.9rem)]  text-justify  text-[#5C5F6E]">
            <p>You don’t need to be a tech expert. You don’t need to deal with delays. You just need a team that delivers. At Digital Whopper, we combine strategy, design, and tech into mobile apps that solve real problems and drive real results. Get in touch with our expert mobile app team and start your journey today! We’ll map out your vision, answer your questions, and show you exactly how your app can succeed in today’s market.</p> </div>
        {/* <div className="mt-4 flex md:justify-start justify-center">
            <button className="flex items-center gap-2 rounded-[50px] md:text-base text-xs text-white px-2 
            lg:px-4 py-2 bg-[#4f3dfe]">Discover More <span className="bg-white text-black p-2 rounded-full">
                <MdArrowOutward /></span></button></div> */}
    </div>
    </div>
    </section>


    {/* How it works */}
    <section className="Works-sec max-w-full bg-[#e1e1e1] px-6"> 
        <div className="py-10 md:py-28">
    <div className="text-center px-6 lg:px-40">
        <div className="text-[clamp(1rem,4vw,3rem)] font-semibold"><h2>How it works?
        </h2>        </div>
        <div className="mt-4  text-xs  md:text-sm text-[#5C5F6E]"><p>Deupload removes complexity and offers a simple interface that allows users to take advantage of the vast array of decentralized storage with better security, performance, and pricing. </p>  </div>
    </div>

<div className="iconBox flex lg:justify-center flex-wrap mt-10 lg:mt-20">
    <div className="box1 text-center p-6 w-[100%] lg:w-[30%]">
    <div className="flex justify-center"><div className="bg-[#4f3dfe] rounded-full p-2 md:p-4 text-2xl lg:text-4xl text-white"><MdAccountCircle /></div>
    </div>
    <div className="font-bold text-md md:text-xl mt-2 md:mt-6"><h4>Create an account</h4> </div>
    <div className="text-xs md:text-base lg:text-sm mt-2 lg:mt-4 text-[#5C5F6E]"><p>Create an Deupload account and start uploading your files to Decentralized Storage.</p></div>
    </div>
    <div className="box2 text-center p-6 w-[100%]  lg:w-[30%]">
        
    <div className="flex justify-center"><div className="bg-[#4f3dfe] rounded-full p-2 md:p-4 text-2xl lg:text-4xl text-white"><FaUpload />
    </div> </div>
    <div className="font-bold text-md md:text-xl mt-2 md:mt-6"><h4>Upload your files</h4></div>
    <div className="text-xs md:text-base lg:text-sm mt-2 lg:mt-4 text-[#5C5F6E]"><p>Your file is encrypted and split into pieces then distributed to the nodes around the world.</p> </div>
    </div>

    <div className="box3 text-center p-6 w-[100%]  lg:w-[30%]">
    <div className="flex justify-center"><div className="bg-[#4f3dfe] rounded-full p-2 md:p-4 text-2xl lg:text-4xl text-white"><FaFingerprint />
    </div> </div>
    <div className="font-bold text-md md:text-xl mt-2 md:mt-6"><h4>Share file instantly</h4>  </div>
    <div className="text-xs md:text-base lg:text-sm mt-2 lg:mt-4 text-[#5C5F6E]"><p>Send your file via email or shareable link with password protect and expiration time.</p></div>
    </div>
</div>
</div>
        </section>  





<FAQ faqs={faqs} /> 

</section>

          



{/* 
<section className="AppToggle-sec max-w-full bg-[#e1e1e1] "> 

    <div className="pt-10 md:pt-28 flex justify-center">
      <div className="bg-[#fd853a] rounded-tl-[20px] rounded-bl-[20px] p-1"><button className="bg-white text-black rounded-[20px] p-2 ">Application</button></div>
      <div className="bg-[#fd853a] rounded-tr-[20px] rounded-br-[20px] p-1"><button className="bg-white text-black rounded-[20px] py-2 px-4">Websites</button></div>
      </div>
    <div className="w-full flex justify-center items-center mt-12">
         <div className="AppToggle-div-main text-center max-w-sm ">
         <div className="text-xl md:text-3xl lg:text-4xl font-bold"><h2>{ToggleDesc.title}</h2></div>
         <div className="mt-4 text-xs md:text-base"><p>{ToggleDesc.description}</p></div>
           
          <div className="icon-main-div flex justify-center mt-4 gap-x-2">
            {ToggleDesc.imgsrc.map((img,index)=>(
            <div key={index} className="bg-[#302e2e] rounded-full p-3 text-xl text-white"> {img.src}  
                           
                    </div>
                ))}
                </div>
                </div>
          
   </div>

   <div className="flex justify-center mt-14 p-6 md:p-0">
    <Image
    src="/phone.png"
    alt="Phone Image" 
    width={400} 
    height={350} 
    quality={80}
    />
   </div>
    </section> */}

   
{/* File */}




   


  
          </>
    );
  }
  