"use client";
import { SectionWrapper } from "./SectionWrapper";
import { IntroCont } from "@/components/IntroCount";
import myImage from "../assets/images/image8.png";
import TiltedCard from "./TiltedCard/TiltedCard";

export const Introduction = () => {
  return (
    <SectionWrapper>
      <div className='flex flex-col' id='top'>
        <div className='flex flex-col w-full justify-between items-center'>
          <div className='relative cursor-pointer animate-float hidden md:block mb-5'>
            <TiltedCard
              imageSrc={myImage.src}
              altText='Rajat'
              captionText='Rajat'
              containerHeight='200px'
              containerWidth='200px'
              imageHeight='200px'
              imageWidth='200px'
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <IntroCont des={["A Full Stack Developer."]} />
        </div>
      </div>
    </SectionWrapper>
  );
};
