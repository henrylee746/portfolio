import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RetroGridComponent } from "./card-components/RetroGrid";
import BentoBoxCards from "./BentoBoxCards";
import WorkExpTable from "./Table";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Highlighter } from "@/components/ui/highlighter";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm m-8">
        <BorderBeam lightColor="#FAFAFA" lightWidth={350} duration={8} />
        <div className="h-full w-screen mx-4  p-8 md:px-8 lg:px-10 flex gap-4 justify-between items-center">
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
      <div className="relative flex flex-col justify-center items-center gap-8">
        <TypingAnimation
          words={["📍Based in: Ottawa, Ontario, Canada"]}
          typeSpeed={60}
          cursorStyle="underscore"
          loop={false}
          className="text-4xl font-bold text-center"
        />
        <BlurReveal
          delay={0.3}
          className="flex gap-3 text-2xl font-semibold p-4 text-center"
        >
          🏫 Education: Honours Bachelor of Computer Science @ Carleton
          University (Sep. 2022 - June 2027 expt.)
        </BlurReveal>
        <Separator orientation="horizontal" className="w-[75%]" />

        <BlurReveal
          delay={0.6}
          className="flex gap-3 mb-6 text-2xl font-semibold p-4 text-center"
        >
          <Highlighter
            action="underline"
            color="#87CEFA"
            animationDuration={1750}
            isView={true}
            iterations={3}
          >
            Chronological Work Experience
          </Highlighter>{" "}
        </BlurReveal>
      </div>
      <WorkExpTable />
      <Link href="https://icy-morning-122.linkyhost.com">
        <ShinyButton className="my-6">
          <span className="font-semibold">Click to see Resume</span>
        </ShinyButton>
      </Link>
      <Separator orientation="horizontal" />

      <BentoBoxCards />
      <RetroGridComponent />
    </>
  );
};

export default About;
