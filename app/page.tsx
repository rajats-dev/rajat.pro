import { Experience } from "@/components/Experience";
import { Introduction } from "@/components/Introduction";
import { Navbar } from "@/components/Navbar";
import { ResumeButton } from "@/components/ResumeButton";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className='min-h-screen relative scroll-smooth select-none'>
      <ResumeButton />
      <Navbar />
      <Introduction />
      <Skills />
      <Experience />
    </main>
  );
}
