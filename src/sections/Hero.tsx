"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgYPosition = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY: bgYPosition,
      }}
      animate={{ backgroundPositionX: starsBg.width }}
      transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,.5)_15%,rgba(14,0,36,.5)_78%,transparent)]"></div>

      {/* Central Planet Background */}
      <div className="absolute md:h-96 md:w-96 h-64 w-64 bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0px_0px_50px_rgb(140,69,255)]"></div>

      {/* Ring One */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{ rotate: "360deg" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white/20 opacity-20"
      >
        {/* Left Dot */}
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        {/* Top Dot */}
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
        {/* Right Dot */}
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* Second Ring with Dashed Border */}
      <motion.div
        animate={{ rotate: "-360deg" }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="absolute w-[444px] h-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>

      {/* Third Ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{ rotate: "360deg" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full opacity-20"
      >
        {/* Left Dot */}
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        {/* Top Dot */}
        <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      </motion.div>

      {/* Text and Button */}
      <div className="container relative mt-16 mx-auto">
        <h1
          className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter 
          bg-white
          bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] text-transparent bg-clip-text text-center"
        >
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-6">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
