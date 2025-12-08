import TechStackDock from "@/components/SectionOne/TechStackDock";
import { TextAnimate } from "@/components/ui/text-animate";

export const HeroSection = () => {
  return (
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-8 pt-8 pb-12">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-xs sm:text-sm font-medium hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors">
            <span className="text-slate-600 dark:text-slate-300 inline">
              Happy Holidays!
            </span>
          </div>
        </div>

        <div className="text-center">
          <TextAnimate
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            animation="blurIn"
            as="h1"
          >
            Hi, I'm Henry👋
          </TextAnimate>

          <TextAnimate
            className="text-base sm:text-2xl text-slate-600 dark:text-slate-300 max-w-xl md:max-w-3xl mx-auto mb-4"
            as="p"
            animation="blurIn"
            duration={0.5}
          >
            I enjoy working with:
          </TextAnimate>
          <TechStackDock />
        </div>
      </div>
    </div>
  );
};
