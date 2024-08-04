"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  return (
    <div
      className={cn(
        "relative h-[20rem] flex items-center justify-center bg-y22 dark:bg-black w-full",
        containerClassName
      )}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none bg-dot-thick-u1 dark:bg-dot-thick-indigo-500 opacity-100"
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
          backgroundSize: '200% 100%',
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{ backgroundPositionX: "0%" }}
      animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
      transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
        backgroundSize: '200% 100%',
        display: 'inline-block',
      }}
      className={cn(
        "relative px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-300 to-u5 dark:from-u4 dark:to-u3 text-c5 shadow-md",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
