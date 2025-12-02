"use client";

import { useRef } from "react";
import { HTMLMotionProps, motion, useInView } from "motion/react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface FadeUpWordProps
  extends Omit<HTMLMotionProps<HeadingLevel>, "children"> {
  children: string;
  as?: HeadingLevel;
  delay: number;
  className?: string;
}

export function FadeUpWord({
  children,
  as = "h2",
  className,
  delay,
  ...props
}: FadeUpWordProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={cn(
        "flex flex-wrap gap-[0.5rem] text-4xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: i * delay,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-500">
            {word}{" "}
          </span>
        </motion.span>
      ))}
    </Component>
  );
}
