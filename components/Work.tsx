"use client";
import { Experience as experienceType } from "@/lib/types";
import { Tip } from "./Tooltip";
import { motion } from "framer-motion";

export const Work = (work: experienceType) => {
  return (
    <motion.div
      whileTap={{
        translateX: -5,
        translateY: -5,
        boxShadow: "none",
        transition: { duration: 0.05 },
      }}
      whileInView={{ scale: 1.02, opacity: 1 }}
      className='bg-stone-800/20 shadow-[-5px_-5px_0px_1px_#34c07c] border-foreground border-4 p-4 select-none cursor-pointer md:w-[800px] w-fit flex flex-col mb-[60px]'
    >
      <div className='flex justify-between items-center gap-3 mb-10 w-full'>
        <div className='flex justify-start items-center'>
          <h1 className='text-3xl font-grotesk'>
            <Tip tip={work.tip}>{work.company}</Tip>
          </h1>
        </div>
        <div className='flex justify-start items-end sm:items-center gap-1 md:gap-3 flex-col sm:flex-row '>
          <h4 className='font-jetbrain text-xs md:text-base text-cyan-300 text-right '>
            {work.location}
          </h4>
          <span className='sm:flex justify-center items-center hidden'> •</span>
          <h4 className='font-jetbrain text-base md:text-base  text-green-300'>
            {work.startDate}
          </h4>
          <span className='hidden md:inline-block justify-center items-center'>
            {" "}
            -
          </span>
          <h4 className='font-jetbrain hidden md:inline-block md:text-base  text-green-300'>
            {work.endDate}
          </h4>
        </div>
      </div>
      <div className='w-full'>
        <h2 className='text-2xl font-grotesk'>{work.title}</h2>
        <div className='mt-4'>
          {work.description.map((desc, index) => {
            return (
              <p key={index} className='text-white text-sm font-jetbrain mt-2'>
                • {desc}
              </p>
            );
          })}
        </div>

        <div className='flex  gap-2 mt-5 justify-start items-center flex-wrap'>
          <>
            {work.lang.map((lang, index) => {
              return (
                <Tip key={index} tip={lang}>
                  <span
                    key={index}
                    className=' text-sm font-jetbrain  rounded-md text-[#ffc21a]'
                  >
                    {lang}
                    {index == work.lang.length - 1 ? "" : ","}
                  </span>
                </Tip>
              );
            })}
          </>
        </div>
      </div>
    </motion.div>
  );
};
