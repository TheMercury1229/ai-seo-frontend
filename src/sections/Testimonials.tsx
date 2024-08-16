"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        <div className="overflow-hidden flex mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none pr-5  gap-5 -translate-x-1/2"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgba(149,69,255,0.3),black)] relative max-w-sm md:max-w-md md:p-10 flex-none"
              >
                {/* Before pseudo-element for border effect */}
                <div className="before:content-[''] before:inset-0 before:absolute before:border before:border-white/30 before:rounded-lg"></div>

                <p className="text-lg md:text-xl tracking-tight relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 mt-5 relative z-10">
                  <div className="relative h-11 w-11">
                    {/* Avatar with after pseudo-element */}
                    <Image
                      src={testimonial.avatarImg}
                      alt={testimonial.name}
                      className="h-full w-full rounded-lg grayscale object-cover"
                    />
                    <div
                      className="after:content-[''] after:inset-0 after:bg-[rgb(140,69,244)] after:absolute
                    after:rounded-lg after:mix-blend-soft-light"
                    ></div>
                  </div>
                  <div className="">
                    <h3 className="font-semibold ">{testimonial.name}</h3>
                    <span className="text-white/50 text-sm">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
