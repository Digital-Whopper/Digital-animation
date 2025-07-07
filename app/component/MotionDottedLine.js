"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

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

const MotionDottedLine = ({ lineheading, spanhead }) => {
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

  const sectionRef = useRef(null);
  const topBoxControls = useAnimation();
  const centerBoxControls = useAnimation();
  const bottomBoxControls = useAnimation();
  const lineControls = [useAnimation(), useAnimation()];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        topBoxControls.start({ backgroundColor: "#FD853A", borderRadius: "20px", transition: { duration: 0.5 } });
        lineControls[0].start({ height: "100px", transition: { duration: 1.5, ease: "easeOut" } });
        centerBoxControls.start({ backgroundColor: "black", borderRadius: "20px", transition: { duration: 0.5 } });
        lineControls[1].start({ height: "100px", transition: { duration: 1.5, ease: "easeOut" } });
        bottomBoxControls.start({ backgroundColor: "#FD853A", borderRadius: "20px", transition: { duration: 0.5 } });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef}>
      <section>
        <h2 className="text-[#344054] text-center m-0 mt-20 text-5xl font-semibold">
          {lineheading} <span className="text-[#FD853A]">{spanhead}</span>
        </h2>

        <div className="w-[85%] m-auto flex justify-center mt-10">
          <Greeting milestones={milestonesSet1} />

          <div className="flex flex-col items-center w-[33.33%]">
            {/* Top Box */}
            <motion.div className="border-2 border-dotted border-black rounded-[20px] p-2"
              animate={topBoxControls}>
              <div className="p-2"></div>
            </motion.div>

            {/* First Dotted Line */}
            <motion.div className="h-[110px]">
              <motion.div className="w-[4px] bg-transparent border-dotted border-l-4 border-gray-600 my-2"
                initial={{ height: "0px" }}
                animate={lineControls[0]}></motion.div>
            </motion.div>

            {/* Center Box */}
            <motion.div className="border-2 border-dotted border-black rounded-[20px] p-2"
              animate={centerBoxControls}>
              <div className="p-2"></div>
            </motion.div>

            {/* Second Dotted Line */}
            <motion.div className="h-[110px]">
              <motion.div className="w-[4px] bg-transparent border-dotted border-l-4 border-gray-600 my-2"
                initial={{ height: "0px" }}
                animate={lineControls[1]}></motion.div>
            </motion.div>

            {/* Bottom Box */}
            <motion.div className="border-2 border-dotted border-black rounded-[20px] p-2"
              animate={bottomBoxControls}>
              <div className="p-2"></div>
            </motion.div>
          </div>

          <Greeting milestones={milestonesSet2} />
        </div>
      </section>
    </div>
  );
};

export default MotionDottedLine;
