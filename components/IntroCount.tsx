"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Email } from "@/assets/logos/Email";
import { Github } from "@/assets/logos/Github";
import { Twitter } from "@/assets/logos/Twitter";
import { useState } from "react";

type IntroContProps = {
  // name: string;
  des: string[];
};

const mailtoLink = `mailto:vineetagarwal.now@gmail.com`;
const icons = [
  {
    name: "github",
    icon: <Github />,
    handler: () => {
      window.open("https://github.com/vineeTagarwaL-code");
    },
  },
  {
    name: "email",
    icon: <Email />,
    handler: () => {
      window.open(mailtoLink, "_blank");
    },
  },
  {
    name: "Twitter",
    icon: <Twitter />,
    handler: () => {
      window.open("https://x.com/vineetwts");
    },
  },
];
export const IntroCont = ({ des }: IntroContProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // const { toast } = useToast();
  return (
    <div>
      <h1 className="md:w-[40rem] text-center text-sky-200/95 text-3xl md:text-6xl font-bold font-grotesk md:before:content-['</>'] before:h-[300px] before:text-[100px] before:text-gray-500/50 before:font-[700] before:-z-10 before:select-none before:translate-x-[-170%] before:translate-y-[-20%] before:-rotate-12 webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute text-[65px] md:text-[96px] text-text_primary relative">
        HI &lt;/&gt; I&apos;M <br /> RAJAT &empty; SUNDRIYAL
      </h1>
      <div className='flex flex-col text-center gap-4 mt-5 md:px-3 '>
        {des.map((line, index) => {
          return (
            <React.Fragment key={index}>
              <h3 className='font-jetbrain text-xl md:text-2xl'>{line}</h3>
            </React.Fragment>
          );
        })}
        <h3 className='font-jetbrain text-xl md:text-2xl'>
          Crafting <span className='text-green-200'>Digital Excellence</span>{" "}
          with <span className='text-green-200'>code</span> !
        </h3>
      </div>
      <div className='flex justify-center md:gap-8 md:mt-8 mb-6 md:mb-6'>
        {icons.map((icon, index) => {
          return (
            <div
              key={index}
              className='relative group'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    zIndex: 1000,
                    whiteSpace: "nowrap",
                  }}
                  className='flex justify-center items-center'
                >
                  <div className='border-solid border-2 shadow-2xl border-red-300 flex justify-center items-center px-4 absolute top-[-60px] z-[10] bg-[#ffbe6f] rounded-xl ml-[1px]'>
                    <span className='text-stone-800 font-grotesk text-base'>
                      {icon.name}
                    </span>
                    <div className='w-0 h-0 absolute top-[30px] left-1/2 transform -translate-x-1/2 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#ffbe6f] border-r-[10px] border-r-transparent'></div>
                  </div>
                </motion.div>
              )}
              <motion.div
                className='cursor-pointer z-[9]'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => icon?.handler()}
              >
                {icon.icon}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
