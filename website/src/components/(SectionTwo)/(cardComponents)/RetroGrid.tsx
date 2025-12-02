"use client";
import { RetroGrid } from "@/components/ui/retro-grid";

export function RetroGridComponent() {
  return (
    <div className="bg-background relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent">
        i’m not really tryna kick it in the new year,
        <br />
        i’m really tryna kick it in a new gear
        <br />
        <br />- Shai Gilgeous-Alexander
      </span>
      <RetroGrid />
    </div>
  );
}
