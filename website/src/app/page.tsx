import Image from "next/image";
import TechStackDock from "@/components/TechStackDock";
import { ProjectCards } from "@/components/Projects";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { WorkList } from "@/components/WorkList";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="flex  min-h-screen py-8 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-6 text-center">
          <Intro />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I enjoy working with:
            </p>
            <TechStackDock />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col items-center gap-4">
            <FadeUpWord
              as="h2"
              className="max-w-2xl md:text-2xl lg:text-3xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
              delay={0.3}
            >
              Projects
            </FadeUpWord>
            <ProjectCards />
          </div>
          <div className="flex flex-col items-center gap-4">
            <FadeUpWord
              as="h2"
              className="max-w-2xl md:text-2xl lg:text-3xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
              delay={0.3}
            >
              Work Experience + Testimonials
            </FadeUpWord>
            <WorkList />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
