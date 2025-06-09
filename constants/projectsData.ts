import { Project } from "@/lib/types";

const Projects: Project[] = [
  {
    title: "Beatpoll",
    tip: "Collaborative Music Streaming Web App",
    description: [
      "Developed a platform where creators can login and add streams (music) to share with their followers",
      "Enabled real-time collaborative music selection where both creators and followers can add streams",
      "Implemented a voting mechanism using Socket.io where the highest upvoted stream plays automatically",
    ],
    lang: [
      "Next.js, Zustand, Tailwind CSS, Radix UI, Lucide React, NextAuth.js (Google OAuth), Socket.io-client",
      "Express.js, PostgreSQL (Prisma ORM), Zod, youtube-search-api, jsonwebtoken, WebSockets (Socket.io)",
    ],
    github: "https://github.com/rajats-dev/BeatPoll",
    link: "https://beatpoll.onrender.com/",
  },
  {
    title: "Tapp",
    tip: "Messaging and Group Chat Web App",
    description: [
      "Built a chat application where users can sign up, chat privately, create/delete groups, and invite users.",
      "Implemented redis-streams-adapter for handling pub-sub messaging across multiple socket servers",
      "Utilized Redis to cache socket IDs and optimize message delivery, reducing database queries by 60%.",
    ],
    lang: [
      "Next.js, TanStack Query, React Hook Form, Zustand, Tailwind CSS, Radix UI, Lucide React, NextAuth.js (Google OAuth), Socket.io-client.",
      "Express.js, PostgreSQL (Prisma ORM), Redis, jsonwebtoken, WebSockets (Socket.io), @socket.io/redis-streams-adapter.",
    ],
    github: "https://github.com/rajats-dev/Tapp/tree/development",
    link: "https://tapp-rkpl.onrender.com/",
  },
];

export default Projects;
