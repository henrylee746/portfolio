"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function ResumeLinkPreview() {
  return (
    <div className="flex justify-center items-center h-[100px] mt-4 flex-col px-4">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex items-center gap-3 text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Or Visit{" "}
          <Highlight className="text-black dark:text-white">
            <LinkPreview
              url="https://pdfhost.io/v/e95pPJ5RDn_Henry_Lee__CS_Resume__40_"
              imageSrc="/resume.png"
              isStatic={true}
              className="font-bold"
            >
              My Resume Here
            </LinkPreview>
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
