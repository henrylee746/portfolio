import About from "@/components/SectionTwo/About";
import Intro from "@/components/SectionOne/Intro";
import Contact from "@/components/SectionThree/Contact";
import ProjExpSection from "@/components/SectionOne/ProjExpSection";

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
