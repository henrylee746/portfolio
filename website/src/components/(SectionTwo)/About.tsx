import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextAnimate } from "@/components/ui/text-animate";
import { RetroGridComponent } from "./(cardComponents)/RetroGrid";
import BentoBoxCards from "./BentoBoxCards";

const About = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm m-8">
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
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-16">
        <NumberTicker
          value={100}
          className="text-5xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
        />
        <TypingAnimation
          words={["📍Based in: Ottawa, Ontario, Canada"]}
          typeSpeed={60}
          cursorStyle="underscore"
          loop={false}
          className="text-4xl font-bold"
        />

        <TextAnimate
          className="text-2xl font-semibold p-4 text-center"
          animation="blurInUp"
          by="character"
          delay={0.5}
        >
          Currently Pursuing: Carleton University Honours Bachelor of Computer
          Science
        </TextAnimate>
      </div>

      <BentoBoxCards />
      <RetroGridComponent />
    </>
  );
};

export default About;
