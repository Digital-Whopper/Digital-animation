// components/InfiniteSlider.js
"use client";

import { motion } from "framer-motion";

const InfiniteSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="inline-block"
        animate={{ x: ["1%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
    <span className="text-9xl font-bold">B</span>
    <span className="text-9xl font-bold">U</span>
    <span className="text-9xl font-bold">I</span>
    <span className="text-9xl font-bold">L</span>
    <span className="text-9xl font-bold">D</span>
    <span className="text-9xl font-bold">&nbsp;</span>
    <span className="text-9xl font-bold">Y</span>
    <span className="text-9xl font-bold">O</span>
    <span className="text-9xl font-bold">U</span>
    <span className="text-9xl font-bold">R</span>
    <span className="text-9xl font-bold">&nbsp;</span>
    <span className="text-9xl font-bold">O</span>
    <span className="text-9xl font-bold">W</span>
    <span className="text-9xl font-bold">N</span>
    <span className="text-9xl font-bold">&nbsp;</span>
    <span className="text-9xl font-bold">B</span>
    <span className="text-9xl font-bold">R</span>
    <span className="text-9xl font-bold">A</span>
    <span className="text-9xl font-bold">N</span>
    <span className="text-9xl font-bold">D</span>
    <span className="text-9xl font-bold">&nbsp;</span>
    <span className="text-9xl font-bold">W</span>
    <span className="text-9xl font-bold">H</span>
    <span className="text-9xl font-bold">O</span>
    <span className="text-9xl font-bold">P</span>
    <span className="text-9xl font-bold">P</span>
    <span className="text-9xl font-bold">E</span>
    <span className="text-9xl font-bold">R</span>
    <span className="text-9xl font-bold">&nbsp;</span>
    <span className="text-9xl font-bold">W</span>
    <span className="text-9xl font-bold">I</span>
    <span className="text-9xl font-bold">T</span>
    <span className="text-9xl font-bold">H</span>
    <span className="text-9xl font-bold">&nbsp;</span>
    <span className="text-9xl font-bold">U</span>
    <span className="text-9xl font-bold">S</span>
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
