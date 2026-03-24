"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion(Link);

type ButtonVariant = "primary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<ButtonHTMLAttributes<HTMLAnchorElement>, "type">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", children, className } = props;
  const reduced = useReducedMotion();

  const baseClasses =
    "group inline-flex items-center justify-center gap-1.5 border text-sm uppercase tracking-[0.2em] px-6 py-3 transition-[color,background-color,border-color,box-shadow] duration-300 ease-out";

  const variantClasses =
    variant === "primary"
      ? "border-foreground bg-foreground text-background hover:border-foreground hover:bg-background hover:text-foreground hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] active:border-foreground"
      : "border-border text-foreground hover:border-foreground/40 hover:bg-foreground hover:text-background hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]";

  const classes = `${baseClasses} ${variantClasses} ${className ?? ""}`;

  const motionHover = reduced
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { y: 0 },
        transition: { duration: 0.28, ease: "easeOut" as const }
      };

  if ("href" in props && props.href) {
    return (
      <MotionLink href={props.href} className={classes} {...motionHover}>
        <span className="inline-flex items-center transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          {children}
        </span>
      </MotionLink>
    );
  }

  const { variant: _v, children: _c, className: _cn, ...rest } =
    props as ButtonAsButton;

  return (
    <button type="button" className={classes} {...rest}>
      <span className="inline-flex items-center transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {children}
      </span>
    </button>
  );
}
