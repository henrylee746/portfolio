import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import TechStackDock from "@/components/SectionOne/TechStackDock";
import { NameTextFlip } from "@/components/SectionOne/NameTextFlip";
import { TextGenerateEffectDock } from "./TextGenerate";
import SocialLinksDock from "./SocialLinksDock";

const Intro = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm">
        <BorderBeam
          lightColor="#FF2056"
          borderWidth={2}
          lightWidth={350}
          duration={8}
        />
        <div className="h-full w-screen mx-4 p-6 md:px-8 lg:px-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col items-center sm:items-start">
            <NameTextFlip />
            <FadeUpWord
              as="h2"
              className="max-w-3xl flex justify-center sm:justify-start text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-5 tracking-tight text-black dark:text-zinc-50"
              delay={0.1}
            >
              CS @ Carleton | Full-Stack Development
            </FadeUpWord>{" "}
          </div>
          <SocialLinksDock />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <TextGenerateEffectDock />
        <TechStackDock />
      </div>
    </>
  );
};

export default Intro;
