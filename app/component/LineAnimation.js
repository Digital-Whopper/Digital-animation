"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const MilestoneItem = ({ title, description }) => (
  <div className="text">
    <h3 className="text-[#344054] text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">{title}</h3>
    <p className="text-[#98A2B3] text-lg">{description}</p>
  </div>
);

const Greeting = ({ milestones }) => (
  <div className="w-full sm:w-auto text-left flex flex-col gap-5 md:gap-20">
    {milestones.map((milestone, index) => (
      <MilestoneItem key={index} title={milestone.title} description={milestone.description} />
    ))}
  </div>
);

const boxVariants = (color) => ({
  hidden: { backgroundColor: "#fff", color: "#000", borderRadius: 20 },
  visible: {
    backgroundColor: color,
    color: "#fff",
    border: "2px solid white",
    transition: { duration: 0.6 },
  },
});

const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "110px",
    transition: { duration: 0.8 },
  },
};

const LineAnimation = ({ lineheading, spanhead }) => {
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const box1Controls = useAnimation();
  const line1Controls = useAnimation();
  const box2Controls = useAnimation();
  const line2Controls = useAnimation();
  const box3Controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      box1Controls.start("visible").then(() => {
        line1Controls.start("visible").then(() => {
          box2Controls.start("visible").then(() => {
            line2Controls.start("visible").then(() => {
              box3Controls.start("visible");
            });
          });
        });
      });
    }
  }, [isInView]);

  const milestonesSet1 = [
    { title: "The Inception", description: "Turning Ideas into Ambitions" },
    { title: "Building the Core", description: "Establishing Expertise" },
    { title: "Expanding Horizons", description: "Serving Diverse Industries" },
  ];

  const milestonesSet2 = [
    { title: "Innovation Stage", description: "Pushing Boundaries" },
    { title: "Market Growth", description: "Expanding Our Reach" },
    { title: "Future Vision", description: "Shaping Tomorrow" },
  ];

  return (
    <section ref={sectionRef}>
      <h2 className="text-[#344054] text-center m-0 text-[clamp(1rem,4vw,3rem)] font-semibold">
        {lineheading} <span className="text-[#FD853A]">{spanhead}</span>
      </h2>

      <div className="w-[85%] m-auto flex justify-center mt-10 flex-wrap">
        <Greeting milestones={milestonesSet1} />

        <div className="flex flex-col items-center w-[full] md:w-[33.33%] ">
          {/* Box 1 */}
          <div className="border-2 border-dashed border-black rounded-[20px]">
            <motion.div
              className="p-4 w-10 h-10 rounded-[20px]"
              variants={boxVariants("#FD853A")}
              initial="hidden"
              animate={box1Controls}
            />
          </div>

          {/* Line 1 */}
          <div className="h-[110px]">
            <motion.div
              className="w-[4px] border-dashed border-l-[3px] border-gray-600"
              style={{ backgroundColor: "transparent" }}
              variants={lineVariants}
              initial="hidden"
              animate={line1Controls}
            />
          </div>

          {/* Box 2 */}
          <div className="border-2 border-dashed border-black rounded-[20px]">
            <motion.div
              className="p-4 w-10 h-10 rounded-[20px]"
              variants={boxVariants("#000")}
              initial="hidden"
              animate={box2Controls}
            />
          </div>

          {/* Line 2 */}
          <div className="h-[110px]">
            <motion.div
              className="w-[4px] border-dashed border-l-[3px] border-gray-600"
              style={{ backgroundColor: "transparent" }}
              variants={lineVariants}
              initial="hidden"
              animate={line2Controls}
            />
          </div>

          {/* Box 3 */}
          <div className="border-2 border-dashed border-black rounded-[20px]">
            <motion.div
              className="p-4 w-10 h-10 rounded-[20px]"
              variants={boxVariants("#FD853A")}
              initial="hidden"
              animate={box3Controls}
            />
          </div>
        </div>

        <Greeting milestones={milestonesSet2} />
      </div>
    </section>
  );
};

export default LineAnimation;