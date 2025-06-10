import { Javascript } from "@/assets/logos/JavaScript";
import { Typescript } from "@/assets/logos/TypeScript";
import { Postgressql } from "@/assets/logos/Postgressql";
import { Next } from "@/assets/logos/Next";
import { React as ReactIcon } from "@/assets/logos/React";
import { Express } from "@/assets/logos/Express";
import { Redis } from "@/assets/logos/Redis";
import { Bash } from "@/assets/logos/Bash";
import { Git } from "@/assets/logos/Git";
import Socket from "@/assets/logos/Socket";
import { NextAuth } from "@/assets/logos/NextAuth";
import Wagmi from "@/assets/logos/Wagmi";
import RadixUi from "@/assets/logos/RadixUi";
import Tailwind from "@/assets/logos/Tailwind";
import Zustand from "@/assets/logos/Zustand";
import Prisma from "@/assets/logos/Prisma";
import ReactQuery from "@/assets/logos/ReactQuery";

type skillType = {
  name: string;
  logo: React.ReactNode;
};
export const languages: skillType[] = [
  {
    name: "Javascript",
    logo: <Javascript />,
  },
  {
    name: "Typescript",
    logo: <Typescript />,
  },
  {
    name: "Tailwind CSS",
    logo: <Tailwind />,
  },
];
export const frameworks: skillType[] = [
  {
    name: "React",
    logo: <ReactIcon />,
  },
  {
    name: "NextJs",
    logo: <Next />,
  },
  {
    name: "Express",
    logo: <Express />,
  },
  {
    name: "Socket.io",
    logo: <Socket />,
  },
  {
    name: "Tanstack Query",
    logo: <ReactQuery />,
  },
];

export const library: skillType[] = [
  {
    name: "Zustand",
    logo: <Zustand />,
  },
  {
    name: "Radix UI",
    logo: <RadixUi />,
  },
  {
    name: "NextAuth.js",
    logo: <NextAuth />,
  },
  {
    name: "Wagmi.sh",
    logo: <Wagmi />,
  },
];

export const databases: skillType[] = [
  {
    name: "Prisma",
    logo: <Prisma />,
  },
  // {
  //   name: "MongoDB",
  //   logo: <Mongodb />,
  // },
  {
    name: "Postgres",
    logo: <Postgressql />,
  },
  {
    name: "Redis",
    logo: <Redis />,
  },
];

export const tools: skillType[] = [
  {
    name: "Bash",
    logo: <Bash />,
  },
  {
    name: "Git",
    logo: <Git />,
  },
];
