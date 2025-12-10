"use client";

import { ProjectCards } from "@/components/SectionOne/Projects";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { WorkList } from "@/components/SectionOne/WorkList";
import useIsMobile from "@/components/mobile";

const ProjExpSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 items-stretch gap-4 mt-12">
      <div className="flex flex-col items-center  justify-center gap-4">
        <FadeUpWord
          as="h2"
          className="max-w-xl text-3xl sm:text-4xl  font-medium leading-10 tracking-tight text-black dark:text-zinc-50 flex justify-center"
          delay={0.6}
        >
          Work Testimonials
        </FadeUpWord>
        {isMobile === true ? (
          <FadeUpWord
            as="h2"
            className="text-md font-medium leading-10 tracking-tight text-black dark:text-zinc-50 flex justify-center"
            delay={0.2}
          >
            Hold down a card to stop and read it.
          </FadeUpWord>
        ) : null}
        <WorkList />
      </div>
      <div className="flex mt-4 xl:mt-0 flex-col items-center justify-center gap-2">
        <FadeUpWord
          as="h2"
          className="max-w-xl text-3xl sm:text-4xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
          delay={0.3}
        >
          Some of my Projects
        </FadeUpWord>
        <ProjectCards />
      </div>
    </div>
  );
};

export default ProjExpSection;
