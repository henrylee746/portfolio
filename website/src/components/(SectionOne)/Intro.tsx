import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import Link from "next/link";

import { Github, FileText } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm">
      <BorderBeam lightColor="#FF2056" lightWidth={350} duration={8} />
      <div className="h-full w-screen p-8 md:px-10 lg:px-16 flex gap-4 justify-between items-center">
        <div>
          <FadeUpWord
            as="h1"
            className="max-w-md md:text-5xl lg:text-6xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50
                "
            delay={0.1}
          >
            This is Henry
          </FadeUpWord>
          <FadeUpWord
            as="h2"
            className="max-w-3xl md:text-2xl lg:text-3xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
            delay={0.1}
          >
            CS @ Carleton & Full-Stack Development
          </FadeUpWord>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/henrylee746">
            <ShimmerButton className="shadow-2xl flex gap-2 items-center">
              GitHub <Github />
            </ShimmerButton>
          </Link>
          <Link href="https://www.linkedin.com/in/hlee750/overlay/1764640946765/single-media-viewer/?profileId=ACoAAEED0voBXuSCrHDuOl2s_40ii8t6h5pOs6A">
            <ShimmerButton className="shadow-2xl flex gap-2 items-center">
              Resume <FileText />
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
