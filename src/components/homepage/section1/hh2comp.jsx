"use client";
import { motion } from "framer-motion";
import { Highlight } from "./hh2noanim";
import RevealLinks from "@/components/extras/framercomp/RevealLinks"
export function HeroHighlightDemo() {
  return (
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
        className="flex bg-m2 rounded-br-[80px]  flex-col justify-around  px-4 md:text-4xl lg:text-5xl font-bold  max-w-4xl leading-relaxed lg:leading-snug mx-auto"
      >
        <div>
        <Highlight className="text-y11 text-xl md:text-2xl lg:text-3xl">
          Revolutionizing Healthcare Revenue Management
        </Highlight>
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-y4"><span>RevMedSync, Distinguished medical billing </span>  
            <span className="underline text-y2">strategists</span> 
            <span> and </span> 
            <span className="underline text-u4">RCM experts</span> 
            <span> transforming healthcare. Our mission is to </span> 
            <span className="underline text-y33">streamline billing</span> 
            <span>, </span>
            <span className="underline text-y3">optimize revenue</span> 
            <span>, and </span> 
            <span className="underline text-y2">enhance financial performance</span>. Join us for innovative solutions and exceptional service.</h2>
        
        
        
        </div>
        
        </div>
      </motion.div>
  );
}
