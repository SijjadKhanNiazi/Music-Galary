"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {meteors.map((_, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500",
            "shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px]",
            "before:-translate-y-1/2 before:bg-gradient-to-r",
            "before:from-[#64748b] before:to-transparent",
            "before:content-['']",
            className,
          )}
          style={{
            top: "-40px",
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.floor(Math.random() * 5 + 5)}s`,
          }}
        />
      ))}
    </motion.div>
  );
};
