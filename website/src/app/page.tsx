import About from "@/components/SectionTwo/About";
import TechStackDock from "@/components/SectionOne/TechStackDock";
import { ProjectCards } from "@/components/SectionOne/Projects";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { WorkList } from "@/components/SectionOne/WorkList";
import { Highlighter } from "@/components/ui/highlighter";
import Intro from "@/components/SectionOne/Intro";
import Contact from "@/components/SectionThree/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen py-8 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center ">
        <div className="flex flex-col items-center gap-6 text-center">
          <Intro />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <Highlighter action="underline" color="#FF9800">
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I enjoy working with:
              </p>
            </Highlighter>{" "}
            <TechStackDock />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 mt-6">
          <div className="flex flex-col items-center gap-4">
            <FadeUpWord
              as="h2"
              className="max-w-2xl md:text-2xl lg:text-3xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
              delay={0.3}
            >
              Projects
            </FadeUpWord>
            <ProjectCards />
          </div>
          <div className="flex flex-col items-center gap-4">
            <FadeUpWord
              as="h2"
              className="max-w-2xl md:text-2xl lg:text-3xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50 flex justify-center"
              delay={0.3}
            >
              Work Experience + Testimonials
            </FadeUpWord>
            <WorkList />
          </div>
        </div>
        <About />
        <Contact />
      </main>
    </div>
  );
}
