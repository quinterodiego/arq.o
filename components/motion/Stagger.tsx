"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants
} from "@/lib/motion/presets";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  /** `amount` del viewport; por defecto 0.15 para grids largos */
  amount?: number;
  /** Segundos entre cada hijo (p. ej. servicios: ~0.12–0.14 para lectura “de a uno”) */
  staggerChildren?: number;
  delayChildren?: number;
};

export function StaggerContainer({
  children,
  className,
  amount = 0.15,
  staggerChildren,
  delayChildren
}: StaggerContainerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainerVariants(Boolean(reduced), {
        staggerChildren,
        delayChildren
      })}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

/** Usar `className="contents"` cuando el padre sea CSS Grid y no se quiera una celda extra. */
export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={staggerItemVariants(Boolean(reduced))}
    >
      {children}
    </motion.div>
  );
}
