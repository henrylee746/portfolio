import { ProjectCards } from "@/components/SectionOne/Projects";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { WorkList } from "@/components/SectionOne/WorkList";

const ProjExpSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-4 mt-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <FadeUpWord
          as="h2"
          className="max-w-xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
          delay={0.3}
        >
          Projects
        </FadeUpWord>
        <ProjectCards />
      </div>
      <div className="flex flex-col items-center  justify-center gap-4">
        <FadeUpWord
          as="h2"
          className="max-w-xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50 flex justify-center"
          delay={0.3}
        >
          Testimonials
        </FadeUpWord>
        <WorkList />
      </div>
    </div>
  );
};

export default ProjExpSection;
