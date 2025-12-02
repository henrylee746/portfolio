import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { ParliamentImageSplit } from "./ParliamentImageSplit";

const About = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm mt-8">
        <BorderBeam lightColor="#FAFAFA" lightWidth={350} duration={8} />
        <div className="h-full w-screen p-8 md:px-10 lg:px-16 flex gap-4 justify-between items-center">
          <div>
            <FadeUpWord
              as="h1"
              className="max-w-md md:text-5xl lg:text-6xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50
                "
              delay={0.1}
            >
              About Me
            </FadeUpWord>
          </div>
        </div>
      </div>
      <ParliamentImageSplit />
    </>
  );
};

export default About;
