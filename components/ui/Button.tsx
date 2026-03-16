import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

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
  const {
    variant = "primary",
    children,
    className,
    href,
    ...rest
  } = props as ButtonAsButton & ButtonAsLink;

  const baseClasses =
    "inline-flex items-center justify-center rounded-full border text-sm uppercase tracking-[0.2em] transition-colors duration-200 px-6 py-3";

  const variantClasses =
    variant === "primary"
      ? "border-foreground bg-foreground text-background hover:bg-background hover:text-foreground"
      : "border-border text-foreground hover:bg-foreground hover:text-background";

  const classes = `${baseClasses} ${variantClasses} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}

