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


const features = [
  "Engaging, user-friendly designs that convert visitors into loyal customers.",
  "Seamless integrations and customizations to elevate your e-commerce experience.",
  "SEO-optimized Shopify stores for enhanced search engine visibility."
];
const stats = [
    { value: 120, suffix: "M+", label: "Monthly Reach Through Marketing Campaigns" },
    { value: 10000, suffix: "+", label: "Projects Successfully Delivered" },
    { value: 240, suffix: "+", label: "Clients Growing With Us Globally" },
  ];

  const serviceDetails = [
  {
    title: "Shopify Store Development",
    desc:
      "Craft visually stunning and user-friendly eCommerce stores that captivate audiences and drive conversions with Shopify store development services.",
  },
  {
    title: "Shopify Theme Development",
    desc:
      "Stand out in the competitive eCommerce landscape with responsive and functional Shopify themes developed using HTML, CSS, and Liquid.",
  },
  {
    title: "Shopify App Development",
    desc:
      "Build custom business applications for Shopify stores to streamline processes, optimize sales conversions, and improve customer engagement.",
  },
  {
    title: "Shopify Maintenance and Support",
    desc:
      "Ensure the smooth operation of Shopify stores with Shopify maintenance and resolving technical issues.",
  },
  {
    title: "Shopify Migration",
    desc:
      "Seamlessly migrate your eCommerce store to Shopify with minimal disruption and maximum benefits.",
  },
  {
    title: "Third-party Integration",
    desc:
      "Expand Shopify store capabilities with third-party app integrations. From payment gateways to marketing, inventory, and CRM solutions.",
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
        head:"We are commited.",
        desc:"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."
    },
    {
        src:"/walk_img.png",
        head:"We are responsible.",
        desc:"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."
    },
    {
        src:"/shakehand.png",
        head:"We aim for progress.",
        desc:"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."
    }
    
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
             linehead="E-commerce Website Development" 
custom="pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8"
linepara="Boost your online sales with Digital Whopper's cutting-edge Shopify "
linespan="website development solutions, designed to deliver seamless user experiences and drive business growth."
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
  TextHead="About"
  Text1Head= "Shopify Development Meets E-commerce Excellence"
  TextSub="We specialize in building high-performing Shopify e-commerce platforms tailored to your business needs. 
  From custom website design to seamless functionality, we ensure your store is primed for success."
  TextList="SEO-optimized Shopify stores for enhanced search engine visibility."
  textList={features}
  />
      </div>

      <SwiperCards/>
    </section>



{/* Sec 3 Pending  -- same as collection in shopify page -- */}
<section className="text-3xl">
  {/* ----------------Collection Section Add here -------------------------------- */}
</section>


{/* Sec 4  numbers */}
<section className="Ecommerce-sec-fourth max-w-full bg-[#e1e1e1] pt-10 md:pt-28">
    <div className="relative bg-[#4F3DFE] w-full p-28 sm:p-[8rem] md:p-[17rem] flex justify-center">
    <div className="bg-[url('/blue_bg.png')] bg-cover bg-center absolute left-1/2  -translate-x-1/2 -top-[20px] md:-top-[50px] -bottom-[20px] md:-bottom-[50px] w-[80%] text-white flex items-center justify-center">
    <div className="text-center">
    <div className="text-xs md:text-lg"><h4>Statistics </h4> </div>
    <div className="text-sm md:text-3xl lg:text-4xl mt-2 md:mt-6"><h2>Results That Speak for Themselves</h2> </div>


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

{/* Sec 6 - Services */}
<section className="Ecommerce-sec-service w-[85%] m-auto pt-10 md:pt-28 px-4 md:px-14">
<ServiceText 
service_head="My"
service_span="Services"
service_para="Explore a range of tailored solutions designed to elevate your brand and achieve your business goals with precision and creativity."

/>

<ServiceContent

services={serviceDetails}

/>

</section>

{/* sec 7 Our Values */}

<section className="Ecommerce-sec-values max-w-full bg-[#e1e1e1] py-10 md:py-28 px-4  md:px-28 lg:px-64">
<div className="main text-[#302E2E]">
<div className="text-base md:text-lg"><p>Our values</p></div>
<div className="text-2xl md:text-4xl mt-4"><h2>Things in we believe </h2></div>
<div className="mt-4 text-sm md:text-lg "><p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p></div>
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
                <div className="text-md md:text-xl lg:text-2xl mt-2"><h3>{data.head}</h3> </div>
                <div className="text-xs md:text-lg lg:text-lg mt-1 md:mt-3  "><p>{data.desc}</p> </div>
             </div>
    </div>
    ))}
</div>
<div>
</div>  
</section>
    </>
)
}
export default Ecommerce

// ---------------------------------------------------------------------
// -----------------(TeamMember.js)

