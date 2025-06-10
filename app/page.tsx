import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Introduction } from "@/components/Introduction";
import { Navbar } from "@/components/Navbar";
import ParticlesComponents from "@/components/ParticlesComponents";
import { Project } from "@/components/Projects";
import { ResumeButton } from "@/components/ResumeButton";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className='scroll-smooth select-none z-20'>
        <ResumeButton />
        <Navbar />
        <Introduction />
        <Skills />
        <Experience />
        <Project />
        <Footer />
        <ParticlesComponents />
      </main>
    </>
  );
}
