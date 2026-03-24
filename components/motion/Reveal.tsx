"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealVariants, VIEWPORT_DEFAULT } from "@/lib/motion/presets";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULT}
      variants={revealVariants(delay, Boolean(reduced))}
    >
      {children}
    </motion.div>
  );
}
