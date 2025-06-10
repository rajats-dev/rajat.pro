"use client";

import React from "react";
import { motion } from "framer-motion";
import { Email } from "@/assets/logos/Email";
import { Github } from "@/assets/logos/Github";
import { Twitter } from "@/assets/logos/Twitter";

type IntroContProps = {
  des: string[];
};

const mailtoLink = `mailto:rajatsundriyal1@gmail.com`;
const icons = [
  {
    name: "github",
    icon: <Github />,
    handler: () => {
      window.open("https://github.com/rajats-dev");
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
      window.open("https://twitter.com/SundriyalRajat");
    },
  },
];
export const IntroCont = ({ des }: IntroContProps) => {
  return (
    <div>
      <h1 className="md:w-[40rem] text-center text-sky-200/95 md:text-6xl font-bold font-grotesk md:before:content-['<>'] before:h-[300px] before:text-[100px] before:text-gray-500/50 before:font-[700] before:-z-10 before:select-none before:translate-x-[-250%] before:translate-y-[-20%] before:-rotate-12 webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute text-text_primary relative">
        HI &lt;&gt; I&apos;M <br /> RAJAT &empty; SUNDRIYAL
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
            <div key={index} className='relative group'>
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
