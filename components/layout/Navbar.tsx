"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavigation } from "@/data/navigation";
import { Container } from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavTextLink({
  href,
  children,
  onClick,
  className = ""
}: {
  href: string;
  children: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex py-1 text-inherit outline-none transition-colors duration-300 ease-out hover:text-muted ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-current opacity-35 transition-[width,opacity] duration-300 ease-out group-hover:w-full group-hover:opacity-100"
          aria-hidden
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center text-[24px] font-semibold uppercase"
          aria-label="Ir al inicio ARQ.O"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-8 w-8 md:h-10 md:w-10">
            <Image
              src="/images/brand/logo-negro.png"
              alt="Logo ARQ.O"
              fill
              sizes="(min-width: 768px) 40px, 32px"
              className="object-contain"
            />
          </span>
          <span className="relative h-24 w-24 md:h-24 md:w-24">
            <Image
              src="/images/brand/brand-negro.png"
              alt="Logo ARQ.O"
              fill
              className="object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[14px] font-medium tracking-[0.2em] md:flex">
          {mainNavigation.map((item) => (
            <NavTextLink key={item.href} href={item.href}>
              {item.label}
            </NavTextLink>
          ))}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacto por WhatsApp"
            className="group relative inline-flex py-1 text-[10px] tracking-[0.2em] text-inherit transition-colors duration-300 ease-out hover:text-[#28a71a]"
          >
            <span className="relative">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              <span
                className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#28a71a] opacity-60 transition-[width] duration-300 ease-out group-hover:w-full"
                aria-hidden
              />
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-[10px] uppercase tracking-[0.2em] md:hidden"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          )}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <Container className="flex flex-col gap-3 py-4 text-xs uppercase tracking-[0.24em]">
            {mainNavigation.map((item) => (
              <NavTextLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavTextLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
