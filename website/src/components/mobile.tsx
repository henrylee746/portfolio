"use client";

import { useEffect, useState } from "react";

//768 covers Ipads and below
export default function useIsMobile(breakpoint = 768): boolean | null {
  // Avoid hydration mismatch: null until mounted, then boolean
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    // set initial value on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
