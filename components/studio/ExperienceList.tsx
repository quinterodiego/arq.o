"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_DEFAULT
} from "@/lib/motion/presets";

const items = [
  "Anteproyecto",
  "Proyecto ejecutivo",
  "Cómputo y presupuesto",
  "Documentación técnica",
  "Dirección de obra"
];

export function ExperienceList() {
  const reduced = useReducedMotion();

  return (
    <motion.ul
      className="grid gap-2 text-sm md:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULT}
      variants={staggerContainerVariants(Boolean(reduced))}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={staggerItemVariants(Boolean(reduced))}
          className="flex items-center justify-between border-b border-border py-2 text-gray-500 tracking-tight md:text-base"
        >
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
