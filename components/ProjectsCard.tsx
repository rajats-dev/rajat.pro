"use client";
import { Project } from "@/lib/types";
import { Link as LinkIcon } from "@/assets/logos/Link";
import Link from "next/link";
import { Github } from "@/assets/logos/Github";
import { Git } from "@/assets/logos/Git";
import { motion } from "framer-motion";
import { Tip } from "./Tooltip";
import { LoaderCircle } from "lucide-react";

export const ProjectCard = (project: Project) => {
  return (
    <motion.div
      whileHover={{ translateY: -2, scale: 1.02 }}
      whileTap={{
        translateX: -5,
        translateY: -5,
        boxShadow: "none",
        transition: { duration: 0.05 },
      }}
      className='shadow-[-5px_-5px_0px_1px_#34c07c] border-2 border-foreground md:w-[700px] cursor-pointer flex flex-col px-4 py-6 justify-between bg-stone-800/20 '
    >
      <div className='flex justify-between items-center h-[10%] w-full mb-2'>
        <div className='flex justify-between w-full items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <h1 className='text-xl md:text-2xl font-grotesk mb-2'>
              <Tip tip={project?.tip || ""}>{project.title}</Tip>
            </h1>
            {project?.github && (
              <Link href={project.github} target='_blank'>
                <Git />
              </Link>
            )}
          </div>
          {project?.link && (
            <Link href={project.link} target='_blank'>
              <LinkIcon />
            </Link>
          )}
          {project?.onProgress && (
            <Tip tip='working'>
              <LoaderCircle
                color='#ffbe6f'
                className='animate-[spin_2s_linear_infinite]'
              />
            </Tip>
          )}
        </div>
      </div>
      <div className='mb-2'>
        <div className=''>
          {project.description.map((desc, index) => {
            return (
              <p key={index} className='text-white text-sm font-jetbrain mt-2'>
                • {desc}
              </p>
            );
          })}
        </div>
      </div>
      <div className='flex  gap-2 mt-5 justify-start items-center flex-wrap'>
        <div>
          {project.lang.map((lang, index) => {
            return (
              <span key={index} className='text-sm font-grotesk text-green-300'>
                {lang}
                {index == project.lang.length - 1 ? "" : ","}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
