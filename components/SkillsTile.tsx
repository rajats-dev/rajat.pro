import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type skillType = {
  skill: string;
  logo: React.ReactNode;
  contClass?: string;
};

export const SkillCard = ({ skill, logo, contClass }: skillType) => {
  return (
    <motion.div
      whileHover={{
        // scale: 0.9,
        transition: { duration: 0.1 },
      }}
      whileTap={{
        translateX: -5,
        translateY: -5,
        boxShadow: "none",
        transition: { duration: 0.05 },
      }}
      className='relative cursor-pointer shadow-[-4px_-4px_0px_1px_#34c07c] rounded-[5px]'
    >
      <div
        className={cn(
          "flex relative z-[100] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 min-w-[180px] border-[1px] border-gray-700 border-solid rounded-[5px]",
          contClass
        )}
      >
        <div>{logo}</div>
        <p className='font-grotesk text-gray-200 text-sm md:text-base'>
          {skill}
        </p>
      </div>
    </motion.div>
  );
};
// shadow-[6px_6px_0px_1px_#8646d7]
