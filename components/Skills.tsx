"use client";
import React from "react";
import { Tip } from "./Tooltip";
import { SectionWrapper } from "./SectionWrapper";
import { SkillCard } from "./SkillsTile";
import {
  databases,
  frameworks,
  languages,
  library,
  tools,
} from "@/constants/tech";

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
            {library.map((skill: skillType) => {
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
        </div>
      </div>
    </SectionWrapper>
  );
};
