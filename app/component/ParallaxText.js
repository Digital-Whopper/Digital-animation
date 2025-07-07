"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxText = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  // Map scroll progress to vertical movement
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="h-[200vh] flex flex-col justify-center items-center bg-gray-100 relative overflow-hidden">
      <motion.h1
        style={{ y: yText }}
        className="text-6xl font-bold text-black"
      >
        Parallax Scrolling Text
      </motion.h1>
    </section>
  );
};

export default ParallaxText;
