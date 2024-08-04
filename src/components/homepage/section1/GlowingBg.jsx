"use client";
import { cn } from "@/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    if (!currentTarget) return;

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-[20rem] flex items-center justify-center bg-c4 dark:bg-black w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-u3 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="absolute inset-0 pointer-events-none bg-dot-thick-u1 dark:bg-dot-thick-indigo-500 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};



export const Highlight = ({ children, className }) => {
    return (
      <motion.span
        initial={{ backgroundSize: "0% 100%" }}
        animate={{ backgroundSize: "100% 100%" }}
        transition={{ duration: 2, ease: "linear", delay: 0.5 }}
        style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left center", display: "inline-block" }}
        className={cn(
          "relative px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-300 to-u5 dark:from-u4 dark:to-u3 text-c5 shadow-md",
          className
        )}
      >
        {children}
      </motion.span>
    );
  };
