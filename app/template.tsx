"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.32, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
