"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./GlowingBg";
import RevealLinks from "@/components/extras/framercomp/RevealLinks"
export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.div
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
        className="flex flex-col justify-around  px-4 md:text-4xl lg:text-5xl font-bold  max-w-4xl leading-relaxed lg:leading-snug mx-auto"
      >
        <h1 className="text-5xl md:text-6xl text-u2 lg:text-7xl mb-4">REVMEDSYNC</h1>
        <h1>
          <Highlight className="text-u2 text-xl md:text-2xl lg:text-3xl">
            Comprehensive Medical Billing Services.
          </Highlight>
        </h1>
      </motion.div>
    </HeroHighlight>
  );
}
