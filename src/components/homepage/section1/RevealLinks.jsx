"use client";
import React from "react";
import { motion } from "framer-motion";

// Main component to reveal links
const RevealLinks = () => {
  return (
    <div className="w-full flex">
      <FlipLink href="#">REVMEDSYNC</FlipLink>
    </div>
  );
};

// Component for flip link animation
const FlipLink = ({ children, href }) => {
  // Animation variants for initial and hovered states
  const animationVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  // Transition settings for animation
  const transitionSettings = (index) => ({
    delay: 0.1 * index,
  });

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block uppercase whitespace-nowrap"
      style={{ minWidth: 'fit-content' }}
    >
      <div className="relative overflow-hidden border-dashed border-4 border-y2">
        <AnimatedText text={children} animationVariants={animationVariants} transitionSettings={transitionSettings} />
      </div>
    </motion.a>
  );
};

// Component to handle animated text rendering
const AnimatedText = ({ text, animationVariants, transitionSettings }) => {
  const chars = text.split("");

  return (
    <>
      <motion.div className="relative z-10" style={{ display: 'flex' }}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={animationVariants}
            transition={transitionSettings(index)}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="absolute inset-0" style={{ display: 'flex' }}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={{ ...animationVariants, initial: { y: "100%" } }}
            transition={transitionSettings(index + 1)}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default RevealLinks;
