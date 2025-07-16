"use client";
import React, { useState,useEffect} from "react";
import { PiLeafThin } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { GoSun } from "react-icons/go";

import LineText from '../component/LineText'
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import PortfolioSlider from '../component/PortfolioSlider';
import ProjectDiscuss from '../component/ProjectDiscuss';
import CustomAccordion from '../component/CustomAccordion';
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogSection from '../component/BlogSection';
import RotationImage from '../component/RotationImage';
import SwiperCards from '../component/SwiperCards';
import FAQ from "../component/FAQ";

const accordionItems = [
  {
    id: 1,
    title: "Local Roots, Global Standards:",
    body: "We're a Jaipur-based team delivering websites that compete on a global level.",
  },
  {
    id: 2,
    title: "Experienced Developers + Creative Designers:",
    body: "Our hybrid team ensures your website is both functional and beautiful.",
  },
  {
    id: 3,
    title: "End-to-End Project Management:",
    body: "From ideation to launch, we handle everything so you don’t have to lift a finger.",
  },
  {
    id: 4,
    title: "Data-Driven Development:",
    body: "Every feature is backed by insights and focused on ROI.",
  },
  {
    id: 5,
    title: "Transparent Pricing. No Hidden Costs:",
    body: "You know what you're paying for, and it’s worth every rupee.",
  },
];

const faqs = [
  { question: '1. How long does it take to build a custom website with Digital Whopper?', 
    answer: 'Most custom websites take 3–6 weeks, depending on features and complexity. But don’t worry; we’ll give you a clear timeline after our initial consultation.' },
  { question: '2. Can you redesign my existing website without losing SEO rankings?', 
    answer: 'Absolutely. Our team ensures your site’s structure, redirects, and content are optimised to retain (and often improve) your SEO performance.' },
  { question: '3. Do you offer eCommerce integration with payment gateways and shipping options?', 
    answer: 'Yes we have full integration of payment gateways like Razorpay, Stripe and shipping partners like Shiprocket into our ecommerce development services.' },
  { question: '4. Will I be able to update the website myself after it’s launched?', 
    answer: 'We design easy to use CMS based sites that let you manage content, products and post updates yourself without any coding knowledge.' },
  { question: '5. What industries do you specialise in for web development?', 
    answer: 'We’ve built websites for fashion retailers, service providers, manufacturers, educational platforms, and more, tailored to industry-specific needs.' },
];


const testimonials = [
  {
    name: "– Ritika Shah,",
    destination: "Founder of XYZ Company",
    image: "/Ellipse 57.png",
    desc: "Digital Whopper completely transformed our website. We went from a clunky, slow platform to a sleek, high-performing site that actually brought in leads. Their team understood exactly what we needed.",
  },
  {
    name: "– Ankit Mehra",
    destination: "Founder of XYZ Company",
    image: "/Ellipse 57.png",
    desc: "Our ecommerce sales doubled within months of launching the new site. They developed an amazing website and created a growth machine.",
  },
  {
    name: "Angel Rose",
    destination: "Creative Manager",
    image: "/Ellipse 57.png",
    desc: "There are many variations passages of Lorem Ipsum majority some by words which don't look.",
  },
  {
    name: "Angel Rose",
    destination: "Creative Manager",
    image: "/Ellipse 57.png",
    desc: "There are many variations passages of Lorem Ipsum majority some by words which don't look.",
  },
 
];

const Page = () => {





  const services = [
    {
      title: 'Custom Website Developmen',
      description:"Stand out from the crowd with a tailor-made website that reflects your brand’s identity. Built from the ground up for your goals and audience.",
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 1,
    },
    {
      title: 'Responsive Web Design',
      description:"We ensure your site looks flawless and functions smoothly on every screen size, from smartphones to desktops.",
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 2,
    },
    {
      title: 'eCommerce Development Services',
      description: `Launch, grow, or optimize your online store with our powerful <strong>ecommerce development services</strong>. Whether it’s Shopify, WooCommerce, Magento, or a custom cart, we’ve got you covered.`,
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 3,
    },
     {
      title: 'CMS-Based Websites',
      description: `Get complete control over your content with dynamic websites built on WordPress, Joomla, or Drupal.`,
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 4,
    },
      {
      title: 'Web App Development',
      description: `Need something more complex? We build robust, secure, and scalable web applications that solve real business problems.`,
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 5,
    },
    {
      title: 'Website Maintenance & Support',
      description: `We don’t disappear after launch. From updates to security patches, we offer ongoing support to keep your website healthy.`,
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 6,
    },
  ];


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
          slidesToShow: 2 , 
        },
      },
    ],
  };

  const testimonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1, 
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

  return (
    <div>
      {/* <LineText 
        linehead="Transforming Ideas Into" 
        lineheadspancolor="E-commerce"
        lineheadafter="Masterpieces"
        linepara="Digital Woopers transforms ideas into e-commerce masterpieces"
        linespan="through expert design, development, and maintenance."
      /> */}
<RotationImage
textclass="lg:w-full"
 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead="Build Websites That Work, Convert & " 
             lineheadspancolor="Grow with the " 
             Afterspan="Best Web Development Company in Jaipur"
custom="pb-[clamp(3rem,6vw,2rem)] pt-0 md:pt-8"
linepara={`Have you ever clicked on a website and instantly hit the back button? Maybe it was slow, cluttered, or just very confusing. Now imagine if that were your site. Wouldn’t it turn away customers before they even see what you offer? Your website is your business card, storefront, and sales team all rolled into one. And if you don’t have a well-performing, strategically designed website, then you’ll be losing a lot of money on the table. 
  That’s why you need the right <strong>web development company in Jaipur</strong> to help you.`}
linespan={`<strong>Digital Whopper</strong> is one of the best <strong>web development companies in Jaipur</strong> that can actually make a difference in your online marketing. We don’t just build websites; we create digital experiences that work hard for your brand.`}
disableAnimation={true}

/>

      <div className="flex justify-center items-center gap-8 pt-[clamp(3rem,6vw,1rem)] pb-[clamp(3rem,6vw,2rem)]">
        <div className="w-[40%] md:w-[30%] lg:w-[15%]">
          <button className="relative z-[1] font-bold w-[100%] bg-transparent border border-2 
          border-black text-xs lg:text-base text-black font-medium p-4 rounded-3xl flex gap-[10px] justify-center">
          <span>Speak to us</span>   <span className='inline-flex items-center'><FaArrowRight /></span>
          </button>
        </div>
      </div>

<section className="bg-[url('/bglines.svg')] bg-cover bg-center ">

<div className="w-full md:w-[85%] m-auto bg-white p-3 rounded-3xl mb-[150px]">
        <div className="py-8 w-full md:w-2/3 m-auto">
          <p className='text-center text-base md:text-xl font-semibold text-black'>Our Services</p>
          <h2 className='text-[clamp(1rem,4vw,3rem)] font-medium text-center p-5'>Driving Innovation in E-Commerce</h2>
       <p className="text-[clamp(0.3rem,3vw,0.9rem)]">At Digital Whopper, we offer <strong>end-to-end website development services in Jaipur</strong> for brands ready 
        to dominate the online space. Whether you're a startup, an SME, or a well-established brand, your website must speak your story clearly, quickly, and beautifully. That’s where our team comes in.
</p>
        </div>

        <div className="flex  pb-9 flex-wrap justify-evenly gap-[50px]">
          {services.map(service => (
            <div className="Service w-full md:w-[30%]" key={service.id}>
              <div className="image">
             <div className="relative w-full max-w-xs aspect-[300/354] rounded-[20px] overflow-hidden">
  <Image
    src={service.imageSrc}
    alt={service.imageAlt}
    fill
    className="object-cover rounded-[20px]"
    quality={80}
    loading="lazy"
  />
</div>

              </div>
              <div className="content">
                <h4 className="text-left text-base md:text-xl font-semibold py-3">{service.title}</h4>
             <p className="text-[clamp(0.3rem,3vw,0.9rem)] " dangerouslySetInnerHTML={{ __html: service.description }}/>
                {/* <button className="flex items-center gap-4 pb-1 border-b border-black">
                  Explore page <span><FiArrowRight /></span>
                </button> */}
              </div>
            </div>
          ))}

          
        </div>
 <p className="text-[clamp(0.3rem,3vw,0.9rem)] text-center">Working with a reliable <strong>web development company in Jaipur</strong> means you get all of this in 
  one place, under one roof, from a team that gets it.</p>
       
</div>
    <div className="flex justify-between w-[85%] m-auto">
 <div className="heading">
 <h2 className='text-black text-[clamp(1rem,4vw,3rem)]'>My 
  <span className='text-[#FD853A]'> Collection </span> </h2>
 </div>



 <div className="btn">
 <button className='bg-[#4F3DFE] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-full'>
    Browse
</button>
 </div>
</div>

<SwiperCards/>
<ProjectDiscuss/>

<div className="w-[85%] m-auto py-5">
<p className='text-[clamp(0.3rem,3vw,0.9rem)]'>You’ve probably searched for 
  <strong> web development services in Jaipur</strong> before. So what makes 
  <strong> Digital Whopper</strong> different? We blend design, tech, and strategy to craft websites that don’t 
  just look good; they perform brilliantly. We’re not just another<strong> web development company in Jaipur</strong>. 
  We’re your strategic growth partner.
</p>
<div className="flex py-[80px] flex-wrap">
<p className='text-[clamp(0.3rem,3vw,0.9rem)] w-full sm:w-full md:w-1/2'>
Here’s what makes us different:</p>
  <CustomAccordion items={accordionItems}/>
  <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
    Looking for <strong>ecommerce development services</strong> that actually boost sales? 
    We’ve built online stores that have increased conversions by up to 60% for our clients.
  </p>
</div>
</div>

<div className="w-[85%] m-auto bg-white p-8 rounded-3xl mb-[150px]">
<h2 className='text-[clamp(1rem,4vw,3rem)] font-semibold"'>Real Results and Satisfied Clients</h2>


 


 <Slider {...testimonialsettings} className="mt-6">
        {testimonials.map((testi, index) => (
          <div key={index} className="px-4 lg:px-10 pt-10 pb-20 bg-[#68686826] rounded-[20px] shadow-lg !w-[98%] md:!w-[90%]">
        <div className="py-7 text-sm md:text-base"><p className="text-dark ">{testi.desc}</p>
            </div>
        <div className="flex items-center justify-center">
        <div className=" rounded-full overflow-hidden">
                <Image src={testi.image} width={60} height={60} alt={testi.name} />
              </div>
              <div className="mt-1 px-2 md:px-6">
              <h3 className="text-sm md:text-lg text-dark font-semibold ">{testi.name}</h3>
              <p className="text-[8px] md:text-xs text-dark ">{testi.destination}</p>
              </div>
              </div>
              
          </div>
        ))}
      </Slider>
<p className="text-[clamp(0.3rem,3vw,0.9rem)] mt-3">Want to see what we’ve built for others? Let’s talk.
</p>


</div>


<div className="w-[85%] m-auto p-1 rounded-3xl mb-[150px] flex flex-wrap">
<div className="images w-full md:w-1/2 rounded-lg relative">
<img className='rounded-lg w-[500px] h-[500px]' src="/shopimage.jpg" alt="" />

<div className="h-[365px] w-[250px] bg-[white] rounded-lg p-8 absolute right-[24px] top-[240px]">
<img src="/Group 208.svg" alt="" />
<h2 className='text-[#0A2640] text-[24px] font-bold'>30%</h2>
<p className='text-[#0A2640]'>More income in June</p>
</div>
</div>

<div className="text w-full md:w-1/2 p-[50px]">

<h2 className='text-[clamp(1rem,4vw,3rem)] font-semibold pb-10'>Who We Are: Jaipur’s Leading Website Development Company</h2>


<div className="container">

<div className="text">
  <p className='flex items-center mb-5'> <span className='mr-2'>
    <FaCheckCircle className="text-[orange]" /></span> <span>Digital Whopper is not your average <strong>website development company in Jaipur</strong>.</span></p>
  <p className='flex items-center mb-5'> <span className='mr-2'>
    <FaCheckCircle className="text-[orange]" /></span> <span>We are a full-service digital marketing agency with a huge focus on <strong>web development in Jaipur.</strong></span></p>
  <p className='flex items-center mb-5'> <span className='mr-2'>
    <FaCheckCircle className="text-[orange]" /></span> Our team consists of highly skilled and vetted coders, designers, strategists and digital marketers that work day in and day out to bring you the results that you want. We’ve deal and solved the issues that most businesses face online, and we have helped many across many industries to stand out. </p>
{/* <button className='bg-gradient-to-r from-[#7163FD] via-[#4132D1] to-[#3C31A5] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-1/2'>
    Start Now
</button> */}


</div>
</div>

</div>

</div>

<div className="w-[85%] m-auto p-1 rounded-3xl mb-[150px] flex flex-wrap items-center">
<div className="text w-full md:w-1/2 p-[50px]">

<h2 className='text-[clamp(1rem,4vw,3rem)] font-semibold '>Our 4-Step Website Development Strategy</h2>
<p className="text-[clamp(0.3rem,3vw,0.9rem)] pb-4">We believe in doing things the smart way, not just the fast way. That’s why our website development process is as streamlined as it is effective.</p>

<div className="container">

<div className="text">
  <div className='mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg '> 
    <div className="flex items-center">
<span className='mr-2'><PiLeafThin className="text-white" />
</span> <h3 className="text-base md:text-xl font-semibold">1. Discovery & Strategy</h3>
    </div>
     
<p className="text-[clamp(0.3rem,3vw,0.9rem)]">We start by understanding your goals, audience, and industry. What do you want the site to do? Let’s map it out.
  </p></div>


<div className='mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg '> 
    <div className="flex items-center">
<span className='mr-2'><PiLeafThin className="text-white" />
</span> <h3 className="text-base md:text-xl font-semibold">2. Design & Prototyping</h3>
    </div>
     
<p className="text-[clamp(0.3rem,3vw,0.9rem)]">Next, our designers create wireframes and mockups, visual blueprints that balance beauty and usability.
  </p></div>
<div className='mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg '> 
    <div className="flex items-center">
<span className='mr-2'><PiLeafThin className="text-white" />
</span> <h3 className="text-base md:text-xl font-semibold">3. Development & Testing</h3>
    </div>
     
<p className="text-[clamp(0.3rem,3vw,0.9rem)]">Our developers bring the designs to life using clean, scalable code. Then we test for speed, responsiveness, and bugs.</p></div>

<div className='mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg '> 
    <div className="flex items-center">
<span className='mr-2'><PiLeafThin className="text-white" />
</span> <h3 className="text-base md:text-xl font-semibold">4. Launch & Optimisation</h3>
    </div>
     
<p className="text-[clamp(0.3rem,3vw,0.9rem)]">Once live, we monitor your site’s performance, make improvements, and ensure everything runs like clockwork.
</p>

<p className="text-[clamp(0.3rem,3vw,0.9rem)]">It’s not just about launching a site, it’s about launching a successful one.
</p>
</div>



</div>
</div>

</div>





<div className="images w-full md:w-1/2 rounded-lg relative">
<img className='rounded-lg w-[500px] h-[500px] object-cover' src="/center_image.jpg" alt="" />

<div className="h-auto w-[250px] bg-[white] rounded-lg p-8 absolute right-[24px] top-[240px]">
<img src="/Pie Graph.png" alt="" />

<p className='text-[#0A2640]'>35% -  Agile Development</p>
<p className='text-[#0A2640]'>30% -  Investor bandwidth</p>
<p className='text-[#0A2640]'>35% -  A/B testing </p>
</div>
</div>



</div>


</section>
<BlogSection/>
<div className="w-[85%] m-auto">
  <h2 className="text-center text-[clamp(1rem,4vw,3rem)] font-semibold ">Your Dream Website Is One Click Away!
</h2>
<p className="text-[clamp(0.3rem,3vw,0.9rem)]">
  Still wondering if now is the right time to upgrade your website? 70% of users judge a business’s credibility based on its website. That first impression? It matters a lot. So, if you need a slick new ecommerce platform, a custom business site, or just a much-needed website redesign, 
</p>
<p className="text-[clamp(0.3rem,3vw,0.9rem)]">
 Digital Whopper is the <strong>website development company in Jaipur</strong> that delivers beyond expectations. With our comprehensive 
 <strong>website development services in Jaipur</strong>, your business will have the tools it needs to attract, engage, and convert visitors, day in, day out. Contact our expert team and get a website that scales with your business today! </p>
</div>

<div className="w-[85%] bg-contain  bg-center m-auto p-16 rounded-lg bg-[url('/bottom-design.svg')]">

<h2 className='text-white text-[clamp(1.5rem,5vw,4rem)] text-center'>An enterprise template to ramp up your company website</h2>
<div className="flex flex-wrap justify-center my-6 gap-4 ">

<div className="input-clas w-1/5 ">
<input 
    id="email"
    type="email" 
 placeholder='Enter The Email'
    className="input rounded-[30px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
<div className="bg-[#fd853a] text-lg text-white font-medium	p-2 rounded-[30px] w-1/5 text-center">
<button className='button'>
   Load More
    </button>
</div>


 

</div>

</div>
<FAQ faqs={faqs}/>
    </div>
  );
}

export default Page;

