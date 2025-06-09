import { Tip } from "./Tooltip";
import { SectionWrapper } from "./SectionWrapper";
import { experience } from "@/constants/experienceData";
import { Work } from "./Work";

export const Experience = () => {
  return (
    <SectionWrapper>
      <div
        className='mt-8 flex justify-center items-center flex-col'
        id='experience'
      >
        <div className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk md:before:content-['<>'] before:h-[300px] before:text-[250px] before:text-gray-500/50 before:font-[700] before:-z-10  before:select-none before:translate-x-[-280%] before:translate-y-[-10%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute text-[65px] md:text-[96px] text-text_primary relative" />
        <div className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk 2xl:before:content-['?:'] before:h-[300px] before:text-[250px] before:text-gray-500/50 before:font-[700] before:-z-10  before:select-none before:translate-x-[380%] before:translate-y-[-10%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute text-[65px] md:text-[96px] text-text_primary absolute" />

        <Tip tip='work i have done.' className='self-center'>
          <h1 className='font-jetbrain text-center text-5xl mb-16'>
            <span className=' text-cyan-300'>Experience</span>
          </h1>
        </Tip>
        <div className='w-full flex justify-center items-center flex-col'>
          <>
            {experience.map((exp, index) => {
              return <Work key={index} {...exp} />;
            })}
          </>
        </div>
      </div>
    </SectionWrapper>
  );
};
