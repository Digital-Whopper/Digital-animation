"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const MilestoneItem = ({ title, description }) => (
  <div className="text">
    <h3 className="text-[#344054] text-3xl font-semibold mb-3">{title}</h3>
    <p className="text-[#98A2B3] text-lg">{description}</p>
  </div>
);
const Greeting = ({ milestones }) => {
  return (
    <div className="w-auto text-left flex flex-col gap-20">
      {milestones.map((milestone, index) => (
        <MilestoneItem key={index} title={milestone.title} description={milestone.description} />
      ))}
    </div>
  );
};

const GSAPDottedLine = ({lineheading,spanhead}) => {

  const milestonesSet1 = [
    { title: "The Inception", description: "Turning Ideas into Ambitions" },
    { title: "Building the Core", description: "Establishing Expertise" },
    { title: "Expanding Horizons", description: "Serving Diverse Industries" }
  ];

  const milestonesSet2 = [
    { title: "Innovation Stage", description: "Pushing Boundaries" },
    { title: "Market Growth", description: "Expanding Our Reach" },
    { title: "Future Vision", description: "Shaping Tomorrow" }
  ];


  const sectionRef = useRef(null); // Reference to the section
  const topHelloRef = useRef(null);
  const centerRef = useRef(null);
  const bottomHelloRef = useRef(null);
  const lineRefs = useRef([]); // Stores both line refs

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Adjust when the animation should start
        end: "bottom 50%",
        toggleActions: "play none none none", // Plays once when in view
      },
    });

    tl.to(topHelloRef.current, {
      backgroundColor: "#FD853A", // First box BG change
      duration: 0.5,
      border: "5px solid white",
      color: "white",
      borderRadius: "20px",
    })
      .to(lineRefs.current[0], {
        height: "100px", // Expand first dotted line (increase height)
        duration: 1.5,
        ease: "power1.out",
      })
      .to(centerRef.current, {
        backgroundColor: "black", // Center box BG change
        duration: 0.5,
        border: "5px solid white",
        color: "white",
        borderRadius: "20px",
      })
      .to(lineRefs.current[1], {
        height: "100px", // Expand second dotted line
        duration: 1.5,
        ease: "power1.out",
      })
      .to(bottomHelloRef.current, {
        backgroundColor: "#FD853A", // Last box BG change
        duration: 0.5,
        border: "5px solid white",
        color: "white",
        borderRadius: "20px",
      });
  }, []);

  return ( 
    <div ref={sectionRef}>
      <section>
        <h2 className="text-[#344054] text-center m-0 mt-20 text-5xl font-semibold">
          {lineheading} <span className="text-[#FD853A]">{spanhead}</span>
        </h2>
        
        <div className="w-[85%] m-auto flex justify-center  mt-10">
      
        <Greeting milestones={milestonesSet1} />

         <div className="flex flex-col items-center w-[33.33%]">
           {/* Top Box */}
           <div className="border-2 border-dotted border-black rounded-[20px] p-2">
            <div ref={topHelloRef} className="bg-1 p-2"></div>
          </div>

          {/* First Dotted Line (Hidden Initially) */}
          <div className="h-[110px]">
          <div
            className="w-[4px] bg-transparent border-dotted border-l-4 border-gray-600 my-2 overflow-hidden"
            style={{ height: "0px", minHeight: "0px", maxHeight: "100px" }}
            ref={(el) => (lineRefs.current[0] = el)}
          ></div>
          </div>
         

          {/* Center Box */}
          <div className="border-2 border-dotted border-black rounded-[20px] p-2">
            <div ref={centerRef} className="center-div p-2"></div>
          </div>

          {/* Second Dotted Line (Hidden Initially) */}
          <div className="h-[110px]">
          <div
            className="w-[4px] bg-transparent border-dotted border-l-4 border-gray-600 my-2 overflow-hidden"
            style={{ height: "0px", minHeight: "0px", maxHeight: "100px" }}
            ref={(el) => (lineRefs.current[1] = el)}
          ></div>
          </div>
         

          {/* Bottom Box */}
          <div className="border-2 border-dotted border-black rounded-[20px] p-2">
            <div ref={bottomHelloRef} className="bg-1 p-2"></div>
          </div>
         </div>


         <Greeting milestones={milestonesSet2} />
        </div>
      </section>
    </div>
  );
};

export default GSAPDottedLine;
