"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  direction = "left",
  repeat = 4,
  duration = 60,
  className,
  ...props
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  repeat?: number;
  duration?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [isPageFocused, setIsPageFocused] = useState(true);

  // Track page visibility (tab focus)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageFocused(!document.hidden);
    };

    // Check initial state
    setIsPageFocused(!document.hidden);

    // Listen for visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden [--gap:1rem]",
        className
      )}
      style={{ "--duration": `${duration}s` } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee-left": direction === "left",
              "animate-marquee-right": direction === "right",
              "group-hover:[animation-play-state:paused]": true,
              "[animation-play-state:paused]": !isPageFocused,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
