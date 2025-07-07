"use client"
import { useState } from "react";
import Image from "next/image";
import RotationImage from "./RotationImage";

const buttonDetails=[
    {  name:"Show All", badge:"14"},
    {  name:"Design", badge:"6"},
    {  name:"Branding",  badge:"4" },
    {  name:"Illustration",  badge:"3" },
    {  name:"Motion",  badge:"1"  },
]


const baseImageClass="relative h-[250px] md:h-[450px] lg:h-[650px] w-full  bg-cover bg-center rounded-[20px]"
const gridImageClass="relative h-[180px] md:h-[320px] lg:h-[400px] w-[48%]   bg-cover bg-center rounded-[20px]"
const picture=[
    {
        mainImage: {
            class:`${baseImageClass} bg-[url('/Bitmap.png')]`,
            category: "Branding",
            title: "Keyboard",
        },
        gridImages: [
            {
                 classLeft:`${gridImageClass} bg-[url('/Sofa.png')]`,
                btnLeft:"Design",
                titleLeft:"SOFA",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Illustration.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Illustration",
                titleRight:"Work Media",
            },
            {
                classLeft:`${gridImageClass} bg-[url('/Motion.png')]`,
                 btnLeft:"Motion",
                titleLeft:"Done",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/HandP.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Branding",
                titleRight:"HandP",
            },
        ]
    },

    {
   mainImage: {
            class:`${baseImageClass} bg-[url('/Sofa.png')]`,
            category: "Branding",
            title: "Technology",
        },
    
        gridImages: [
            {
               classLeft:`${gridImageClass} bg-[url('/Illustration.png')]`,
                btnLeft:"Design",
                titleLeft:"SOFA",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Illustration.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Illustration",
                titleRight:"Work Media",
            },
            {
                classLeft:`${gridImageClass} bg-[url('/Illustration.png')]`,
                btnLeft:"Motion",
                titleLeft:"DDDone",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Illustration.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Branding",
                titleRight:"HandP",
            },

        ]
    },
    {
        mainImage: {
           class:`${baseImageClass} bg-[url('/Illustration.png')]`,
            category: "Branding",
            title: "Keyboard",
        },
        gridImages: [
            {
                 classLeft:`${gridImageClass} bg-[url('/Motion.png')]`,
                btnLeft:"Design",
                titleLeft:"SOFA",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Motion.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Illustration",
                titleRight:"Work Media",
            },
            {
                classLeft:`${gridImageClass} bg-[url('/Motion.png')]`,
                btnLeft:"Motion",
                titleLeft:"DDDone",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Motion.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Branding",
                titleRight:"HandP",
            },

        ]
        
    },
    {
        mainImage: {
            class:`${baseImageClass} bg-[url('/Motion.png')]`,
            category: "Branding",
            title: "Keyboard",
        },
        gridImages: [
            {
                classLeft:`${gridImageClass} bg-[url('/HandP.png')]`,
                btnLeft:"Design",
                titleLeft:"SOFA",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/HandP.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Illustration",
                titleRight:"Work Media",
            },
            {
                classLeft:`${gridImageClass} bg-[url('/HandP.png')]`,
                btnLeft:"Motion",
                titleLeft:"DDDone",
                classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/HandP.png')] bg-cover bg-center rounded-[20px]",
                btnRight:"Branding",
                titleRight:"HandP",
            },
        ]
    },
    {
        mainImage: {
            class:`${baseImageClass} bg-[url('/HandP.png')]`,
            category: "Branding",
            title: "Keyboard",
        },
        gridImages: [
{
    classLeft:`${gridImageClass} bg-[url('/Sofa.png')]`,
    btnLeft:"Design",
    titleLeft:"SOFA",
    classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Sofa.png')] bg-cover bg-center rounded-[20px]",
    btnRight:"Illustration",
    titleRight:"Work Media",
},
{
    classLeft:`${gridImageClass} bg-[url('/Sofa.png')]`,
     btnLeft:"Motion",
    titleLeft:"DDDone",
    classRight:"relative h-[180px] md:h-[320px]  lg:h-[400px] w-[48%] bg-[url('/Sofa.png')] bg-cover bg-center rounded-[20px]",
    btnRight:"Branding",
    titleRight:"HandP",
},
        ]
    }

]

const pagination =[1,2,3,4,5];

const Portfolio=()=>{
    const [currentPage, setCurrentPage] = useState(0);

    return(
        <>
    {/* sec 1 */}
    <RotationImage
textclass="text-center lg:w-full"
 rotate_img="/lines.svg"
          width_img="500"
          height_img="80"
             linehead="Portfolio" 
custom="pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8"
linepara="Agency provides a full service range including technical skills, design,"
linespan=" business understanding."
disableAnimation={true}

/>
    <section className="Portfolio-sec-two max-w-full text-[#302E2E]">
    <div className="flex justify-center gap-x-3 md:gap-x-6 pt-6 md:pt-14">
    {buttonDetails.map((data, index) => (
                       <div className="relative inline-block" key={index}> 
                       <span className="absolute -top-2 -right-2 text-[10px]  md:text-xs">
                       {data.badge}</span>
                       <button className="text-[10px] md:text-base">{data.name}</button>
                       </div>
                    ))}
        
    </div>

   <div className="images-main mt-10 md:mt-16 px-4 md:px-14 lg:px-24 rounded-[20px]">
   <div className={picture[currentPage]?.mainImage.class}>
   <div className="absolute bottom-5 lg:bottom-14 left-5 lg:left-14">
   <div className="text-xs md:text-base"><button className="bg-[#302E2E] text-white px-3 py-1 md:py-2 rounded-[20px]  ">{picture[currentPage]?.mainImage.category}</button></div>
   <div><h2 className="text-[#302E2E] text-2xl md:text-4xl lg:text-5xl font-extrabold mt-2 lg:mt-4"> {picture[currentPage]?.mainImage.title}</h2></div>
   </div>
   </div>
   </div>


   {picture[currentPage]?.gridImages?.map((data, index) => (
   <div key={index}  className="flex flex-wrap mt-3 md:mt-10 justify-between px-4 md:px-14 lg:px-24">
<div className={` ${data.classLeft}`}>
<div className="absolute bottom-5 lg:bottom-14 left-2 md:left-5 lg:left-14">
   <div className=" ">
    <button className="text-[10px] md:text-xs lg:text-base bg-[#302E2E] text-white px-3 py-1 md:py-2 rounded-[20px]">{data.btnLeft}</button></div>
   <div><h2 className="text-[#302E2E] text-md md:text-2xl lg:text-4xl font-extrabold mt-1 md:mt-4">{data.titleLeft}</h2></div>
   </div>
</div>

   <div className={`${data.classRight}`}>
   <div className="absolute bottom-5 lg:bottom-14 left-2 md:left-5 lg:left-14">
   <div className=""><button className="text-[10px] md:text-xs lg:text-base  bg-[#302E2E] text-white px-3 py-1 md:py-2 rounded-[20px]">{data.btnRight}</button></div>
   <div><h2 className="text-[#302E2E] text-md md:text-2xl lg:text-4xl font-extrabold mt-1 md:mt-4">{data.titleRight}</h2></div>
   </div>
   </div>

   </div>
    ))}
 
 {/* pagination */}
 <div className="flex justify-center gap-x-2 md:gap-x-2 mt-10 md:mt-20">
        {pagination.map((_,index)=>(
         <button key={index} className={`md:py-3 py-2 px-3 md:px-4 rounded text-xs font-semibold ${currentPage  === index ? 'bg-[#4F3DFE] text-[#302E2E]' : 'bg-[#302E2E] text-white'}`} onClick={() => setCurrentPage(index)}>
         {index+1}
     </button>
        ))}
    </div>
    </section>



{/* sec 3 */}
<section className="Portfolio-sec-three max-w-full bg-[#e1e1e1] py-10 md:py-24 px-4 md:px-14 lg:px-24 text-white ">
<div className="relative">
<div className="absolute bg-[url('/Paper-Texture.webp')] bg-cover bg-center  w-full -top-[0px] md:-top-[0px] -bottom-[30px] md:-bottom-[20px] z-[0]">
</div>
<div className="relative bg-[#4F3DFE] w-full flex flex-wrap justify-between rounded-t-lg p-5 md:p-10 lg:p-24">
<div className="left w-[100%] md:w-[50%] md:px-4">
    <div className=""><h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">Help To Build Your Dream Project</h2></div>
    <div className="my-4 md:my-8"><p className="text-xs md:text-sm lg:text-base">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p></div>
    <div><button className="bg-[#302E2E] text-xs font-semibold py-2 md:py-3 px-3 md:px-6 rounded">CONTACT NOW</button></div>
    </div>
<div className="right md:w-[42%] mt-4 md:mt-0">
    <Image
    src="/pic.png"
    alt="pic"
    width={200}
    height={200}
    quality={80}
    className="w-full"
    />
</div>
</div>
</div>
</section>
   </>
    )
}

export default Portfolio