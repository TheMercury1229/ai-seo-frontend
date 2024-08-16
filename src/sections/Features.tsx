"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import { animate, motion, ValueAnimationTransition } from "framer-motion";
import productImage from "@/assets/product-image.png";
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;
  useEffect(() => {
    if (tabRef.current === null || !props.selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width + 2 * height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      duration: 4,
      times,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);
  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };
  return (
    <div
      onMouseEnter={handleTabHover}
      ref={tabRef}
      onClick={props.onClick}
      className="border border-white/15 flex items-center p-2.5 rounded-xl gap-2.5 lg:flex-1 relative"
    >
      {props.selected && (
        <motion.div
          className="absolute inset-0 border border-[#A369FE] -m-px rounded-xl"
          style={{
            maskImage: maskImage,
          }}
        ></motion.div>
      )}
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotlottieRef}
          src={props.icon}
          className="w-5 h-5"
          autoplay
        />
      </div>
      <h3 className="font-medium">{props.title}</h3>
      {props.isNew && (
        <span className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          New
        </span>
      )}
    </div>
  );
};
export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const animateImageOptions: ValueAnimationTransition = {
    duration: 1.5,
    ease: "easeInOut",
  };
  // Animating the image change on feature tab click
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateImageOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateImageOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateImageOptions
    );
  };
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl  font-medium text-center tracking-tighter">
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 md:text-xl md:max-w-2xl md:mx-auto text-light text-center mt-5">
          From small startyos to large enterprises, our AI-driven tool has
          revolutionized the way business approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tab.title}
              {...tab}
              onClick={() => handleSelectedTab(tabIndex)}
              selected={selectedTab === tabIndex}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
