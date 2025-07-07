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
const testimonials = [
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
      title: 'Custom E-Commerce Website Design',
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 1,
    },
    {
      title: 'Custom E-Commerce Website Design',
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 2,
    },
    {
      title: 'Custom E-Commerce Website Design',
      imageSrc: '/Rectangle.png',
      imageAlt: 'blog-image',
      id: 3,
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

 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead="Transforming Ideas Into" 
             lineheadspancolor="E-Commerce" 
             Afterspan="Masterpieces"
custom="pb-[clamp(3rem,6vw,2rem)] pt-0 md:pt-8"
linepara="Boost your online sales with Digital Whopper's cutting-edge Shopify "
linespan="website development solutions, designed to deliver seamless user experiences and drive business growth."
disableAnimation={true}

/>

      <div className="flex justify-center items-center gap-8 pt-[clamp(3rem,6vw,1rem)] pb-[clamp(3rem,6vw,2rem)]">
        <div className="w-[40%] md:w-[30%] lg:w-[15%]">
          <button className="relative z-[1] font-bold w-[100%] bg-transparent border border-2 border-black text-xs lg:text-base text-black font-medium p-4 rounded-3xl">
            Speak to us <span className='inline-flex items-center'><FaArrowRight /></span>
          </button>
        </div>
      </div>

<section className="bg-[url('/bglines.svg')] bg-cover bg-center ">

<div className="w-[85%] m-auto bg-white p-1 rounded-3xl mb-[150px]">
        <div className="py-8 w-2/3 m-auto">
          <p className='text-center text-[clamp(0.5rem,3vw,1rem)] text-black'>Our Services</p>
          <p className='text-[clamp(1rem,4vw,3rem)] font-normal text-center p-5'>Driving Innovation in E-Commerce</p>
        </div>

        <div className="flex  pb-9 flex-wrap justify-evenly gap-[50px]">
          {services.map(service => (
            <div className="Service" key={service.id}>
              <div className="image">
                <Image
                  className="rounded-[20px]"
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={300}
                  height={354}
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="content">
                <p className="text-left py-6">{service.title}</p>
                <button className="flex items-center gap-4 pb-1 border-b border-black">
                  Explore page <span><FiArrowRight /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
</div>
    <div className="flex justify-between w-[85%] m-auto">
 <div className="heading">
 <h2 className='text-black text-[clamp(1rem,4vw,3rem)]'>My 
  <span className='text-[#FD853A]'>Collection </span> </h2>
 </div>



 <div className="btn">
 <button className='bg-[#4F3DFE] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-full'>
    Browse
</button>
 </div>
</div>

<SwiperCards/>
<ProjectDiscuss/>

<div className="w-[85%] m-auto py-[150px]">
<h2 className='text-[clamp(0.5rem,3vw,1.5rem)]'>Findtrend helps you to increase 
  <span>your productivity and reduce your computer's 
  memory load,</span>  
  <span className='text-[#4F3DFE]'> an application that can 
  fulfill your daily browsing needs.</span></h2>
<div className="flex py-[80px] flex-wrap">
<h2 className='text-[clamp(0.5rem,3vw,1.5rem)] w-full sm:w-full md:w-1/2'>we connect our customers with the best and help them keep up and stay open</h2>
  <CustomAccordion/>
</div>
</div>

<div className="w-[85%] m-auto bg-white p-8 rounded-3xl mb-[150px]">
<h2 className='text-[clamp(0.5rem,3vw,1.5rem)]'>An enterprise template to ramp up your company website</h2>





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

<h2 className='text-[clamp(1.5rem,5vw,4rem)] pb-10'>Empowering Connections for Better Outcomes</h2>


<div className="container">

<div className="text">
  <p className='flex items-center mb-5'> <span className='mr-2'><FaCheckCircle className="text-[orange]" /></span> Partnering with the best to deliver excellence.</p>
  <p className='flex items-center mb-5'> <span className='mr-2'><FaCheckCircle className="text-[orange]" /></span> Partnering with the best to deliver excellence.</p>
  <p className='flex items-center mb-5'> <span className='mr-2'><FaCheckCircle className="text-[orange]" /></span> Partnering with the best to deliver excellence.</p>
{/* <button className='bg-gradient-to-r from-[#7163FD] via-[#4132D1] to-[#3C31A5] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-1/2'>
    Start Now
</button> */}


</div>
</div>

</div>

</div>

<div className="w-[85%] m-auto p-1 rounded-3xl mb-[150px] flex flex-wrap">
<div className="text w-full md:w-1/2 p-[50px]">

<h2 className='text-[35px] pb-10'>Building Trust, Driving Results</h2>


<div className="container">

<div className="text">
  <p className='flex items-center mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg'> <span className='mr-2'><PiLeafThin className="text-white" />
</span> Unlock the power of meaningful connections.</p>
  <p className='flex items-center mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg'> <span className='mr-2'><LuEye className="text-white"/>
</span> Partnering with the best to deliver excellence.</p>
  <p className='flex items-center mb-5 bg-[#4F3DFE] text-white p-5 rounded-lg'> <span className='mr-2'><GoSun className="text-white"/>
</span> Partnering with the best to deliver excellence.</p>
{/* <button className='bg-gradient-to-r from-[#7163FD] via-[#4132D1] to-[#3C31A5] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-1/2'>
    Start Now
</button> */}


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

    </div>
  );
}

export default Page;

