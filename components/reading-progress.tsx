"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="bg-primary fixed top-16 right-0 left-0 z-40 h-1 origin-left"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : smoothedProgress,
      }}
    />
  );
}
