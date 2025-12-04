import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import TechStackDock from "@/components/SectionOne/TechStackDock";
import { NameTextFlip } from "@/components/SectionOne/NameTextFlip";

import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const Intro = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm">
        <BorderBeam lightColor="#FF2056" lightWidth={350} duration={8} />
        <div className="h-full w-screen mx-4 p-6 md:px-8 lg:px-10 flex gap-4 justify-between items-center">
          <div>
            <NameTextFlip />
            <FadeUpWord
              as="h2"
              className="max-w-3xl text-xl sm:text-xl md:text-3xl lg:text-4xl font-medium leading-5 tracking-tight text-black dark:text-zinc-50"
              delay={0.1}
            >
              CS @ Carleton & Full-Stack Development
            </FadeUpWord>
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-4">
            <Link href="https://github.com/henrylee746">
              <ShimmerButton className="shadow-2xl flex gap-1.5 items-center">
                <FaGithub />
              </ShimmerButton>
            </Link>
            <Link href="https://icy-morning-122.linkyhost.com">
              <ShimmerButton className="shadow-2xl flex gap-1.5 items-center">
                <IoIosPaper />
              </ShimmerButton>
            </Link>
            <Link href="https://www.linkedin.com/in/hlee750/">
              <ShimmerButton className="shadow-2xl flex gap-1.5 items-center">
                <FaLinkedin />
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <AnimatedGradientText
          speed={1}
          colorFrom="#91a3b0"
          colorTo="#4e4eff"
          className="max-w-lg text-lg leading-8 font-bold"
        >
          I enjoy working with:
        </AnimatedGradientText>
        <TechStackDock />
      </div>
    </>
  );
};

export default Intro;
