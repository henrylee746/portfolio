import { BorderBeam } from "@/components/ui/border-beam";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import Link from "next/link";

{
  /*Icons*/
}
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TaskIcon from "@mui/icons-material/Task";

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
              <GitHubIcon />
            </ShimmerButton>
          </Link>
          <Link href="https://github.com/henrylee746">
            <ShimmerButton className="shadow-2xl">
              <TaskIcon />
            </ShimmerButton>
          </Link>
          <Link href="https://www.linkedin.com/in/hlee750/">
            <ShimmerButton className="shadow-2xl">
              <LinkedInIcon />
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
