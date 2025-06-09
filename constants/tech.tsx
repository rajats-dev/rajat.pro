import { Javascript } from "@/assets/logos/JavaScript";
import { Typescript } from "@/assets/logos/TypeScript";
import { Postgressql } from "@/assets/logos/Postgressql";
import { Next } from "@/assets/logos/Next";
import { React as ReactIcon } from "@/assets/logos/React";
import { Express } from "@/assets/logos/Express";
import { Redis } from "@/assets/logos/Redis";
import { Bash } from "@/assets/logos/Bash";
import { Git } from "@/assets/logos/Git";
// import { Python } from "@/assests/logos/python";
// import { Java } from "@/assests/logos/java";
// import { Aws } from "@/assests/logos/aws";
// import { Kubernetes } from "@/assests/logos/kubernetes";
// import { Azure } from "@/assests/logos/azure";
// import { Docker } from "@/assests/logos/docker";
// import { Git } from "@/assests/logos/git";
// import { Mongodb } from "@/assests/logos/mongodb";
// import { Linux } from "@/assests/logos/linux";
// import { Nodejs } from "@/assests/logos/nodejs";

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
];
// const cloud: skillType[] = [
//   {
//     name: "AWS",
//     logo: <Aws />,
//   },
//   {
//     name: "Kubernetes",
//     logo: <Kubernetes />,
//   },
//   {
//     name: "Azure",
//     logo: <Azure />,
//   },
//   {
//     name: "Docker",
//     logo: <Docker />,
//   },
// ];
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
];

export const databases: skillType[] = [
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
