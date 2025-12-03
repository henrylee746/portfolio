import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const Intro = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm">
      <BorderBeam lightColor="#FF2056" lightWidth={350} duration={8} />
      <div className="h-full w-screen p-8 md:px-10 lg:px-16 flex gap-4 justify-between items-center">
        <div>
          <FadeUpWord
            as="h1"
            className="max-w-md md:text-5xl mb-8 lg:text-6xl font-semibold leading-5 tracking-tight text-black dark:text-zinc-50
                "
            delay={0.1}
          >
            This is Henry
          </FadeUpWord>
          <FadeUpWord
            as="h2"
            className="max-w-3xl md:text-2xl lg:text-3xl font-medium leading-5 tracking-tight text-black dark:text-zinc-50"
            delay={0.1}
          >
            CS @ Carleton & Full-Stack Development
          </FadeUpWord>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="https://github.com/henrylee746">
            <ShimmerButton className="shadow-2xl flex gap-2 items-center">
              GitHub <FaGithub />
            </ShimmerButton>
          </Link>
          <Link href="https://bitter-sunset-340.linkyhost.com/">
            <ShimmerButton className="shadow-2xl flex gap-2 items-center">
              Resume <IoIosPaper />
            </ShimmerButton>
          </Link>
          <Link href="https://www.linkedin.com/in/hlee750/">
            <ShimmerButton className="shadow-2xl flex gap-2 items-center">
              LinkedIn <FaLinkedin />
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
