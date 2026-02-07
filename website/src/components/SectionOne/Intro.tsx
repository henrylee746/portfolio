import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import SocialLinksDock from "./SocialLinksDock";
import { HeroSection } from "./HeroSection";
import { ToggleTheme } from "@/components/ui/toggle-theme";

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
          <div className="flex flex-col gap-8 items-center sm:items-start">
            <FadeUpWord
              as="h2"
              className="max-w-3xl flex justify-center sm:justify-start text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-5 tracking-tight text-black dark:text-zinc-50"
              delay={0.1}
            >
              Henry Lee
            </FadeUpWord>
            <FadeUpWord
              as="h2"
              className="max-w-3xl flex justify-center sm:justify-start text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-5 tracking-tight text-black dark:text-zinc-50"
              delay={0.2}
            >
              CS @ Carleton | Full-Stack Development
            </FadeUpWord>{" "}

          </div>
          <div className="flex gap-2 items-center">
            <SocialLinksDock />
            <ToggleTheme animationType="shrink-grow" />
          </div>
        </div>
      </div>
      <HeroSection />
    </>
  );
};

export default Intro;
