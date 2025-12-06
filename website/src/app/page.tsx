import dynamic from "next/dynamic";
import Intro from "@/components/SectionOne/Intro"; // Keep eager - above the fold!

// Lazy load below-the-fold sections
const ProjExpSection = dynamic(
  () => import("@/components/SectionOne/ProjExpSection")
);
const About = dynamic(() => import("@/components/SectionTwo/About"));
const Contact = dynamic(() => import("@/components/SectionThree/Contact"));

export default function Home() {
  return (
    <div className="flex min-h-screen py-8 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center ">
        <div className="flex flex-col items-center gap-6 text-center">
          <Intro />
        </div>
        <ProjExpSection />
        <About />
        <Contact />
      </main>
    </div>
  );
}
