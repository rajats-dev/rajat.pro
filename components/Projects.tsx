"use client";
import { SectionWrapper } from "./SectionWrapper";
import { Tip } from "./Tooltip";
import Projects from "@/constants/projectsData";
import { ProjectCard } from "./ProjectsCard";

export const Project = () => {
  return (
    <SectionWrapper>
      <div className='flex justify-center items-center flex-col' id='projects'>
        <Tip tip='Some of the works, I did' className='self-center'>
          <h1 className='font-jetbrain text-center text-5xl max-md:text-4xl mb-16'>
            <span className=' text-cyan-300'>Project</span>
          </h1>
        </Tip>
        <div className='flex flex-col justify-center items-center gap-14 h-fit'>
          {Projects.map((proj, index) => {
            return <ProjectCard key={index} {...proj} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
