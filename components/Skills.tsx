"use client";
import React from "react";
import { Tip } from "./Tooltip";
import { SectionWrapper } from "./SectionWrapper";
import { SkillCard } from "./SkillsTile";
import { databases, frameworks, languages, tools } from "@/constants/tech";

type skillType = {
  name: string;
  logo: React.ReactNode;
};

export const Skills = () => {
  return (
    <SectionWrapper>
      <div className='flex justify-center items-center flex-col md:py-8'>
        <Tip tip="there's more trust me" className='self-center'>
          <h1 className='font-jetbrain text-center text-5xl mb-16'>
            {/* <span className=' text-green-300'>Code</span> */}
            {/* <span className='text-foreground'>=</span> */}
            <span className=' text-cyan-300'>{`Skills`}</span>
          </h1>
        </Tip>
        <div className='flex flex-nowrap flex-col gap-8 justify-center items-center '>
          <div className='flex-wrap flex gap-8 justify-center items-center'>
            {languages.map((skill: skillType) => {
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  logo={skill.logo}
                  contClass='min-w-[135px] md:min-w-[180px]'
                />
              );
            })}
          </div>
          <div className='flex-wrap flex gap-6 justify-center items-center'>
            {frameworks.map((skill: skillType) => {
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  logo={skill.logo}
                  contClass='min-w-[150px] md:min-w-[180px]'
                />
              );
            })}
          </div>
          <div className='flex-wrap flex gap-6 justify-center items-center'>
            {databases.map((skill: skillType) => {
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  logo={skill.logo}
                  contClass='max-w-[150px] min-w-[150px] '
                />
              );
            })}
          </div>
          <div className='flex-wrap flex gap-6 justify-center items-center'>
            {tools.map((skill: skillType) => {
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  logo={skill.logo}
                  contClass='max-w-[150px] min-w-[150px] '
                />
              );
            })}
          </div>
          {/* <div className='flex-wrap flex gap-6 justify-center items-center'>
            <SkillCard
              key={"more"}
              skill={"More"}
              logo={"&"}
              contClass='shadow-[2px_2px_15px_2px_#dc8070] max-w-[150px] min-w-[150px] '
            />
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
};
