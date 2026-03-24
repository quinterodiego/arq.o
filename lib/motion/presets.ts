import type { Transition, Variants } from "framer-motion";

export const VIEWPORT_DEFAULT = {
  once: true,
  amount: 0.2 as const
};

export function revealTransition(delay = 0, reduced?: boolean): Transition {
  if (reduced) {
    return { duration: 0 };
  }
  return {
    duration: 0.7,
    ease: "easeOut",
    delay
  };
}

export function revealVariants(delay = 0, reduced?: boolean): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition(delay, reduced)
    }
  };
}

type StaggerOptions = {
  staggerChildren?: number;
  delayChildren?: number;
};

/** Stagger entre ítems: por defecto ~0.1 s; se puede afinar por sección */
export function staggerContainerVariants(
  reduced?: boolean,
  options?: StaggerOptions
): Variants {
  const stagger = options?.staggerChildren ?? 0.1;
  const delayChild = options?.delayChildren ?? 0.04;
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delayChild
      }
    }
  };
}

export function staggerItemVariants(reduced?: boolean): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.55, ease: "easeOut" }
    }
  };
}
