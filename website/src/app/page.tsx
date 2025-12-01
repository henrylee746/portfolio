import Image from "next/image";
import Ribbons from "@/components/Ribbons";
import { DockDemo } from "@/components/Dock";
import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";

export default function Home() {
  return (
    <div className="flex min-h-screen py-12 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-full w-full flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative overflow-hidden rounded-lg shadow-sm ">
            <BorderBeam lightColor="#FF2056" lightWidth={350} duration={8} />
            <div className="h-full w-full p-8">
              <FadeUpWord
                as="h1"
                className="max-w-md text-5xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50"
              >
                This is Henry
              </FadeUpWord>
              <FadeUpWord
                as="h1"
                className="max-w-2xl text-2xl font-medium leading-10 tracking-tight text-black dark:text-zinc-50"
              >
                CS @ Carleton & Full-Stack Development
              </FadeUpWord>
            </div>
          </div>
          <DockDemo />
          <Ribbons />
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
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
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
