"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavigation } from "@/data/navigation";
import { Container } from "./Container";

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

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-6 text-[18px] md:flex font-medium">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-muted"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/"
            aria-label="Contacto por WhatsApp"
            className="text-xs transition-colors duration-200 hover:text-muted text-[18px] font-medium"
          >
            Wa
          </a>
        </nav>

        {/* Botón menú mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-[10px] uppercase tracking-[0.2em] md:hidden"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </Container>

      {/* Menú mobile desplegable */}
      {open && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <Container className="flex flex-col gap-3 py-4 text-xs uppercase tracking-[0.24em]">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 transition-colors duration-200 hover:text-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/"
              aria-label="Contacto por WhatsApp"
              className="py-1 text-[11px] transition-colors duration-200 hover:text-muted"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

