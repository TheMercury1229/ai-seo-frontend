"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Button from "@/components/Button";
import starsbg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (
  to: RefObject<HTMLElement>
): [MotionValue<number>, MotionValue<number>] => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const rect = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDiv);
  const imgMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  const bgPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDiv}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundPositionY: bgPositionY as unknown as string,
            backgroundImage: `url(${starsbg.src})`,
          }}
          animate={{
            backgroundPositionX: starsbg.width,
          }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay group-hover:opacity-0 opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage:
                "radial-gradient(50% 50% at 50% 35%, black, transparent)",
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              WebkitMaskImage: imgMask,
              maskImage: imgMask,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl md:max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl md:max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve your SEO goals with our cutting-edge AI tools.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
