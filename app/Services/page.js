"use client"
import React, { useState,useEffect} from "react";
import Link from 'next/link';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RotationImage from "../component/RotationImage";
import OurServices from "../component/OurServices";
import FAQ from "../component/FAQ";
import TextSeo from "../component/TextSeo";
import ServiceContent from "../component/ServiceContent";
import ServiceText from "../component/ServiceText";



const faqs = [
  { question: '1. How quickly can Digital Whopper deliver results with digital marketing services in Jaipur?', 
    answer: 'Most clients start seeing measurable improvements in traffic and leads within the first 30 to 60 days of campaign launch.' },
  { question: '2. Can you help local Jaipur-based businesses attract global customers?', 
    answer: 'Absolutely. Our 360 digital marketing strategies are designed to take your brand from local streets to global screens.' },
  { question: '3. What’s the first step if I want to work with Digital Whopper?', 
    answer: 'Book a free strategy call where we audit your current presence and outline a growth plan according to your business and goals.' },
  { question: '4. Can I hire Digital Whopper just for SEO or do I need a full-service package?', 
    answer: 'Absolutely! You can opt for individual services like SEO, PPC, or social media, each customised to your specific business goals.' },
  { question: '5. How soon can I expect results after launching a campaign with you?', 
    answer: 'While SEO takes a few months to compound, paid campaigns like Google Ads and Meta Ads can show results in days.' },
];

const features = [
  "Transparent with reporting and results",
  "Obsessed with your ROI",
  "Agile in adapting to your needs",
  "Passionate about growing your brand"
];



const portfolio=[
  { src:"/Rectangle 834.jpg", name:"SEO That Gets You Ranked", discript:"Search Engine Optimisation that gets you found on page 1 where it matters. From local SEO for Jaipur businesses to global reach, we’ve got you covered."},
  {  src:"/Rectangle 835.jpg", name:"Social Media Marketing That Builds Brands", discript:"Be seen where your customers scroll. We create thumb-stopping content and ad campaigns that boost engagement and grow followers."},
  {src:"/Rectangle 834.jpg", name:"Paid Ads That Pay Off", discript:"Our PPC experts don’t just spend your budget, they multiply it. We run high-ROI ad campaigns on Google, Meta, LinkedIn, and more."},
 {  src:"/Rectangle 835.jpg", name:"Email & WhatsApp Marketing That Converts", discript:"Email and WhatsApp marketing are still the best tools for retention. We create automation flows, newsletters, and targeted messages that keep your customers coming back."},
  {  src:"/Rectangle 834.jpg",name:"Website Development That Works", discript:"Whether it’s landing pages or complete sites, we build SEO-optimised, fast, and conversion-focused websites."},
  {  src:"/Rectangle 835.jpg",name:"Analytics & Reporting That’s Crystal Clear", discript:"Data is power. Our custom dashboards help you track performance and make smarter decisions."},
 
] 

const testimonials = [
  {
    name: " — Amit K.",
    destination: "Fashion Retailer",
    image: "/Ellipse 57.png",
    desc: "Digital Whopper helped us triple our online sales in under 6 months. Their ecommerce development services and marketing strategies just work.",
  },
   {
    name: "– Nikita Jain",
    destination: "Co-founder, Jaipur Bloom",
    image: "/Ellipse 57.png",
    desc: "We’ve worked with other agencies before, but Digital Whopper truly transformed our online presence. Within 3 months, our leads tripled and our cost per acquisition dropped by 40%.",
  },
   {
    name: "– Rajat Mehta",
    destination: "Owner, Crafts of Rajasthan",
    image: "/Ellipse 57.png",
    desc: "We needed a local team who understood the Jaipur market. Digital Whopper understood all our requirements and delivered. From SEO to ads, they handled it all.",
  },
  {
    name: "— Sonal M.",
    destination: "Organic Skincare Brand",
    image: "/Ellipse 57.png",
    desc: "We moved from a basic Shopify store to a fully optimised platform with automation. Best ecommerce service provider in India, hands down.",
  },
 
 
];

const serviceDetails = [
  {
    title: "Local Expertise with Global Standards",
    desc:
      "We're based in Jaipur, but we think global. That means understanding local markets while delivering world-class strategies.",
  },
  {
    title: "Performance-Driven, Always",
    desc:
      "Every campaign is tracked, tested, and optimised. We obsess over your ROI so you don’t have to.",
  },
  {
    title: "Dedicated Account Managers",
    desc:
      "You’ll never feel lost. Each client gets a single point of contact who understands your business inside and out.",
  },
  {
    title: "End-to-End Digital Solutions",
    desc:
      `From strategy to execution, we’re a true 360 digital marketing company in Jaipur. One team, all your digital needs.`,
  },

];
const serviceDetails1 = [
  {
    title: "1. Discover",
    desc:
      "We start with a deep dive into your business, goals, and audience. What makes you tick, and what makes them click?",
  },
  {
    title: "2. Strategise",
    desc:
      "Custom, ROI-focused digital marketing plans tailored for your business and your market.",
  },
  {
    title: "3. Execute",
    desc:
      "From SEO to social media and paid ads, we deploy high-impact campaigns with precision.",
  },
  {
    title: "4. Optimise",
    desc:
      `We track everything. We tweak. We improve. Because good isn't good enough when great is possible.`,
  },

];



const Services=()=>{
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true, 
    centerPadding: "0px", 
    
       responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1 , 
        },
      },
    ],
  };

  const testimonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true, 
    centerPadding: "30px", 
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
return(
    
    <>
    {/* start */}
   <section className="Services-sec-first max-w-full  text-[#302E2E] relative ">
   <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full 
                bg-gradient-to-b from-[#9c8af8] to-[#5f41f4] 
                shadow-xl shadow-[#acacac]/100 absolute left-[-35px] top-[90px] md:top-[150px]">
</div> 
   <div className="w-[15px] h-[25px]  rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl
                bg-gradient-to-b from-[#fe7f7f] to-[#f94848] 
                
                shadow-xl shadow-[#acacac]/100 absolute right-[0px] top-[60px] md:top-[90px]">
</div> 
   <div className="w-[17px] h-[17px] md:w-[25px] md:h-[25px] rounded-full 
                bg-gradient-to-b from-[#7163FD] to-[#3C31A5] 
                
                shadow-xl shadow-[#acacac]/100 absolute right-[20px] md:right-[40px] lg:right-[160px] top-[300px] md:top-[350px]">
</div> 
    <RotationImage
textclass="text-center lg:w-full"
 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead="Take Your Business Online With the Best" 
             Afterspan=""
             lineheadspan="Digital Marketing Agency in Jaipur"
custom="pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8"
linepara={`You&rsquo;ve got a great product or service. You&rsquo;ve put in endless hours to make it better and perfect it. 
  You&rsquo;ve spent a lot of money already on your business. And now you want the world to find it. 
  But despite all your hard work, your customers can't find you online. Your competitors just keep ranking first, and your business remains invisible on the internet. With so much competition these days, even the best of businesses fail to get discovered without a good strategy. That's why you require a <strong>digital marketing agency</strong> to guide you through the competition and achieve actual results online `}
linespan={`Digital Whopper is the best digital marketing agency in Jaipur that helps businesses just like yours get seen, get clicks, and get results.`}
disableAnimation={true}

/>

    </section>

<section className="w-[85%] m-auto">

 
      

      

<div  className="serv-img-main relative my-14">
<div className="absolute top-[-10px] lg:top-[-14px] left-[30%] md:left-[200px] lg:left-[420px]">
<Image alt="img"
    src="/Group 2140.png"
    width={80}
    height={80}
    quality={80}
    className="w-[50px] lg:w-[80px]"
    >
        
    </Image> 
</div>

<div className="great-pj-main bg-white absolute p-1 md:p-3 rounded-lg left-[9%] md:left-[5%] lg:left-[18%] z-[100] top-[3%] md:top-[5%]">
    <div className="flex items-center"><span><FaStar className="text-[#f8bd38] text-[8px] md:text-sm"/>
     </span><p className="text-[#9b9b9b] text-[5px] md:text-[10px] font-semibold px-1 pt-1">GREAT PROJECT</p></div> 
    <div className="text-[#1D1D1D] md:mt-2 text-[8px] md:text-base"><p><span className="font-semibold">800+</span> Done</p></div>
</div>
<div className="w-[17px] h-[17px] md:w-[25px] md:h-[25px]  rounded-full 
                bg-gradient-to-b from-[#fe7f7f] to-[#f94848] 
                
                shadow-xl shadow-[#acacac]/100 absolute left-[7%] md:left-[10%] lg:left-[20%] top-[60px] md:top-[170px]">
</div> 
<div className="relative serv-img flex justify-center z-[40]">
    <Image alt="img"
    src="/service_img.webp"
    width={650}
    height={650}
    quality={80}
    className="w-[70%] lg:w-[50%] rounded-3xl"
    >
        
    </Image>
</div>
<div className="absolute bottom-[-10px]  lg:bottom-[-14px] left-[30%] md:left-[200px] lg:left-[460px]">
<Image alt="img"
    src="/Group 2140.png"
    width={80}
    height={80}
    quality={80}
    className="w-[50px] lg:w-[80px] "
    >
        
    </Image> 
</div>
<div className="rev-box-main bg-white absolute px-4 py-2 md:py-6 w-[22%] rounded-[10px] right-[10%] md:left-[70%] z-[100] bottom-[-10%] md:bottom-[-2%]">
    <div className="flex flex-wrap item-center">
        <div>
        <Image alt="img"
    src="/ceo.webp"
    width={40}
    height={40}
    quality={80}

    className="rounded-full object-cover"

    />    
  
        </div>
        <div className="px-2">
            <p className="text-[7px] md:text-xs">Bill Adams</p>
            <p className="text-[4px] md:text-[6px]">CEO UpTech </p>
        </div>
    </div>

    <div className="text-[6px] md:text-[10px] mt-2">
   <p> “This team is really the best in its field,I don't regret working with them, and will come back again thanks “</p>
    </div>
</div>
</div>


{/* Portfolio */}

<div className="Services-portfolio max-w-full text-[#302E2E] relative">
<div className="absolute top-[36%] md:top-[24%] lg:top-[30%] right-[2%] lg:right-[12%] ">
<Image alt="img"
    src="/Group 2171.png"
    width={80}
    height={80}
    quality={80}
    className="w-[40px] md:w-[60px] lg:w-[80px]"
    >
        
    </Image> 
</div>
<div className="absolute top-[55%] lg:top-[50%] left-[47%] md:left-[31%] lg:left-[36%] ">
<Image alt="img"
    src="/Group 2171.png"
    width={85}
    height={85}
    quality={80}
    className="w-[50px] md:w-[85px]"
    >
        
    </Image> 
</div>
<div className="text-center py-6 md:py-10 flex justify-center  ">
<div className="w-full">   
<div><h4 className="text-[#4F3DFE] text-base md:text-xl font-semibold">Our Portfolio</h4></div>
<div className="ecom-heading mt-4">
  <h2 className="text-[clamp(1rem,4vw,3rem)] font-medium">What Do Our Digital Marketing Services in Jaipur Cover?</h2>
    </div>
    <div className="service-para mt-4 lg:mt-10 px-10 md:px-14 text-[#464646]"> 
      <p className="text-[#464646] text-[clamp(0.3rem,3vw,0.9rem)]">At Digital Whopper, we do more than just "run ads." We craft a digital presence that speaks to your audience, delivers value, and converts. Here's what our digital marketing services in Jaipur include:
        </p>
        </div>
    </div>
</div>

<div className="w-full max-w-5xl mx-auto">
      <Slider {...settings}>
       
            {portfolio.map((data, index) => {
              return (
            <div key={index} className="relative px-[1px]">
              
          <Image alt="img" 
          src={data.src}
          width={350}
          height={350}
          quality={80}
          className="rounded-2xl"
          />
          <div className="absolute rounded-2xl h-full flex flex-col justify-start p-[18px] bg-[#000000a3] top-[0%]  z-[100] text-white px-6">
            <h4 className="text-center min-h-[50px] text-base md:text-xl font-semibold">{data.name}</h4>
            <p className="text-center text-[clamp(0.3rem,3vw,0.9rem)]">{data.discript}</p>
            </div>
        </div>
          );
})}    
      </Slider>
         <p className="text-center text-[clamp(0.3rem,3vw,0.9rem)] mt-6">

  Whatever your need, our <strong>digital marketing services in Jaipur</strong> are tailored for startups, SMEs, and enterprises 
  looking to win online.

</p>
    </div>
    <div className="mt-6 flex justify-center">
    <Link href="/Portfolio">
  <button className="border-[1px] border-[#4F3DFE] text-[#4F3DFE] px-10 py-2 font-semibold rounded-[20px] shadow-lg text-xs md:text-base ">
    See All Project
  </button>
  </Link>
</div>

</div>




<ServiceText 
service_head="Why Digital Whopper is the Best "
service_span="Digital Marketing Agency in Jaipur"
serveclass="block"
service_para={`Not all agencies are created equal. Here’s why hundreds 
of businesses choose Digital Whopper as their <strong>digital marketing agency in Jaipur.</strong>
`}

/>

<ServiceContent 
services={serviceDetails}
/>



{/* Testimonial */}
<section className="Services-Testimonial  max-w-full bg-[#e1e1e1] text-[#302E2E] relative py-10 lg:py-28">
<div className="absolute left-[5%] lg:left-[15%]  ">
<Image alt="img"
    src="/Group 2172.png"
    width={80}
    height={80}
    quality={80}
    className="w-[40px] md:w-[80px] "
    >
        
    </Image> 
</div>
<div className="absolute right-[8%] lg:right-[11%] bottom-[5%] md:bottom-[2%] lg:bottom-[10%] ">
<Image alt="img"
    src="/Group 2172.png"
    width={80}
    height={80}
    quality={80}
    className="w-[40px] md:w-[80px] "

    >
        
    </Image> 
</div>
<div className="text-center py-6 md:py-10 flex justify-center  ">
<div className="w-full">   
<div><h4 className="text-[#4F3DFE] text-base md:text-xl font-semibold">Don&rsquo;t just take our word for it, see what our clients have to say.</h4></div>
<div className="heading mt-4">
  <h2 className="font-medium text-[clamp(1rem,4vw,3rem)]">Here&rsquo;s what some of our clients have to say:</h2>
    </div>
    
    </div>
    </div>

    <div className="w-full  mx-auto ">
    <Slider {...testimonialsettings} className="px-8 lg:px-24 mt-6 ">
        {testimonials.map((testi, index) => (
          <div key={index} className="px-4 lg:px-10 pt-10 pb-20 bg-white rounded-[20px] shadow-lg !w-[98%] md:!w-[90%]">
        <div className="flex items-center">
        <div className=" rounded-full overflow-hidden">
                <Image src={testi.image} width={60} height={60} alt={testi.name} />
              </div>
              <div className="mt-1 px-2 md:px-6">
              <h3 className="text-sm md:text-lg text-[#4F3DFE] ">{testi.name}</h3>
              <p className="text-[8px] md:text-xs text-gray-400 ">{testi.destination}</p>
              </div>
              </div>
              <div className="pt-7 font-medium text-[clamp(0.3rem,3vw,0.9rem)]">
                <p className="text-gray-500 ">{testi.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
<p className="text-center text-[clamp(0.3rem,3vw,0.9rem)] mt-6">
  We pride ourselves on being a <strong>digital marketing agency in Jaipur</strong> that creates real impact. No fluff, just results.</p>      
      
      
      </div>
  

</section>



 <TextSeo
  TextHead="Who We Are:"
  Text1Head= "Jaipur’s Digital Growth Partner"
  TextSub={`"Digital Whopper is not just another <strong>digital marketing agency in Jaipur</strong> . 
  We are strategists, creatives, analysts, and marketers who are passionate about what we do and do it with 
  excellence. Born in Jaipur, raised for the world, we know the specific pain points of Rajasthan businesses 
  and beyond. If you're a startup or an emerging business, we offer customised strategies that deliver. 
  <span className="block">When you partner with <strong>Digital Whopper</strong> , you get a team that’s:</span>"`}


  textList={features}
  />

<ServiceText 
service_head="Our 4-Step Recipe to"
service_span="Digital Success"
serveclass="block"
service_para="We don’t believe in guesswork. Every campaign is built on a proven framework that’s helped dozens of Jaipur-based brands dominate online."

/>

<ServiceContent 
services={serviceDetails1}
/>
<p className="text-center text-[clamp(0.3rem,3vw,0.9rem)] mt-6">
That’s what makes us a true  
 <strong> 360 digital marketing company in Jaipur.</strong> </p>
{/* Collabration */}
<section className="Services-Collabration max-w-full  text-[#302E2E] relative py-10 md:py-28">
<div className="collab-main flex flex-wrap-reverse items-center">

<div className="collab-left w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
<div className="text-[clamp(1rem,4vw,3rem)] font-medium">
<h2 className="text-center sm:text-center md:text-left">
  Your Competitors Are Already Online. Are You?
</h2>
</div>
<div className="mt-6 text-[clamp(0.3rem,3vw,0.9rem)] text-[#464646]">
<p className="text-center sm:text-center md:text-left" >
If you're still wondering if digital marketing is worth it or not, then you should keep seeing your 
competitors grow in scale and revenue. They are gaining leads, developing their brands, and making revenue. 
Don’t you want that too? With Digital Whopper, you're just one strategy away from maximising your online presence. 
If you need more traffic, better leads, or a stronger brand, we'll help you achieve that.

</p>
<p className="text-center sm:text-center md:text-left">
Get in touch with our team to learn how we can bring the much-needed and lacking experience and expertise to grow your business today! No commitments, no fake promises. 
Just direct, honest advice from the most trustworthy <strong>digital marketing agency in Jaipur.</strong>


</p>
</div>
<div className="mt-6 text-center sm:text-center md:text-left">
  <button className="bg-[#4F3DFE] text-white px-6 md:px-10 py-2 rounded-[20px] shadow-lg drop-shadow-[0_4px_8px_rgba(55,125,255,0.5)] text-xs md:text-base">
    Get Started</button>
    
    </div>
</div>


<div className="collab-right w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] relative py-6 md:py-0 px-4 pl-10 md:pl-20 lg:px-6">
<div className="absolute z-[2] top-[40px] ">
<Image alt="img"
    src="/Group 2137.png"
    width={80}
    height={80}
    quality={80}
    className="w-[30px] md:w-[80px]"
    >
        
    </Image> 
    
</div>

<div className="flex md:py-10 py-0">
<div className="relative mt-7 px-3 z-[20]">
  <Image alt="img"
  src="/Rectangle 839 .jpg"
  width={380}
  height={380}
  quality={80}
  className="w-[380px] rounded-2xl"
  />
</div>

<div className="relative   px-3 z-[10] left-[-9%]  md:bottom-[40px] lg:bottom-[60px]">
  <Image alt="img"
  src="/Rectangle 840.jpg"
  width={350}
  height={350}
  quality={80}
  className="w-[350px] rounded-2xl"
  />
  <div className="absolute z-[2] bottom-[%] md:bottom-[-10%] lg:bottom-[-12%] xl:bottom-[-14%] left-[12%] md:right-[30%]">
<Image alt="img"
    src="/collab.png"
    width={200}
    height={200}
    quality={80}
    className="w-[70px] md:w-[200px]"
    >     
    </Image> 
    
</div>
</div>


</div>
</div>





</div>  


<FAQ faqs={faqs} />






  

</section>


</section>












    </>
)
}
export default Services
