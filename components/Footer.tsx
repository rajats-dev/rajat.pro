import { SectionWrapper } from "./SectionWrapper";
import { Github } from "@/assets/logos/Github";
import { Email } from "@/assets/logos/Email";
import { Tip } from "./Tooltip";
import Link from "next/link";
import { Twitter } from "@/assets/logos/Twitter";
import { Braces, Heart } from "lucide-react";
import { React } from "@/assets/logos/React";

const FooterLink = [
  {
    icon: <Email />,
    link: "",
    tip: "Contact me",
  },
  {
    icon: <Twitter />,
    link: "",
    tip: "@SundriyalRajat",
  },
  {
    icon: <Github />,
    link: "",
    tip: "Checkout my latest project",
  },
];

export const Footer = () => {
  return (
    <SectionWrapper>
      <footer className='text-white flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t-[2px] pt-6 mt-12 border-cyan-200/10 border-solid rounded-md'>
        <div className='flex justify-center items-center gap-9'>
          {FooterLink.map((link, index) => {
            return (
              <Tip tip={link.tip} key={index}>
                <Link href={link.link}>{link.icon}</Link>
              </Tip>
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-2'>
          <Braces size={20} />
          <p>with</p>
          <Heart size={20} />
          <p>by</p>
          <span className='rounded-[5px] bg-white p-1 text-xs text-black'>
            Rajat Sundriyal
          </span>
          <p>using</p>
          <React className='h-6' />
        </div>
      </footer>
    </SectionWrapper>
  );
};
