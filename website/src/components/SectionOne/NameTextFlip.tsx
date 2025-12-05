"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function NameTextFlip() {
  return (
    <div>
      <motion.div className="relative py-6 flex flex-col sm:flex-row items-center sm:gap-4 gap-3 text-center">
        <LayoutTextFlip
          text="This is "
          words={[
            "Henry",
            "Henry's Portfolio",
            "Henry's Website",
            "Henry's Project",
          ]}
        />
      </motion.div>
    </div>
  );
}
