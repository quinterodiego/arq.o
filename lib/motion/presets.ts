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

/** Stagger entre ítems: 0.08–0.12 s (valor medio 0.1) */
export function staggerContainerVariants(reduced?: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.1,
        delayChildren: reduced ? 0 : 0.04
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
