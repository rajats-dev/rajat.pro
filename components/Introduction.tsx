"use client";
import { SectionWrapper } from "./SectionWrapper";
import { IntroCont } from "@/components/IntroCount";
import myImage from "../assets/images/image8.png";
// import { Tip } from "@/components/Tooltip";
// import Image from "next/image";
// import Link from "next/link";
// import { CardContainer, CardItem } from "./3d-card";
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
              //   overlayContent={<p className=''>Rajat</p>}
            />
          </div>
          <IntroCont des={["A Full Stack Developer."]} />
        </div>
        <div className='flex justify-between items-center w-full flex-col md:flex-row gap-8'>
          <div className='md:w-[50%]' id='bio'>
            <p className='font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden'>
              bio
            </p>
            {/* <div className="font-grotesk  text-md md:text-xl md:ml-6 select-none flex-nowrap relative leading-[1.75rem] before:font-jetbrain after:font-jetbrain before:text-gray-500/50  after:text-gray-500/50 2xl:before:content-['vin'] before:h-[300px] before:text-[150px] before:font-[700] before:-z-10 before:select-none before:translate-x-[140%] before:translate-y-[1%] webkit_text_stroke before:opacity-[0.22] before:absolute 2xl:after:content-['eet'] after:h-[300px] after:text-[150px] after:font-[600] after:-z-10 after:select-none after:translate-x-[130%] after:translate-y-[-15%] webkit_text_stroke_after after:opacity-[0.22] after:absolute ">
              Hey, I{`'`}m Rajat I{`'`}m a{" "}
              <Tip name='25' tip='yes thats correct' /> year old full stack
              developer and freelancer based in India, I{`'`}ve been coding
              since 2019 and have been freelancing and working since 2022. I
              also <Tip name='love' tip='<3' /> contributing to open source to
              give back to the community.
            </div> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
