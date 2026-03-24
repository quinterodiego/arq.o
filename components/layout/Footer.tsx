"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { mainNavigation } from "@/data/navigation";
import {
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_DEFAULT
} from "@/lib/motion/presets";

export function Footer() {
  const year = new Date().getFullYear();
  const sections = mainNavigation.filter((item) => item.href !== "/");
  const reduced = useReducedMotion();

  return (
    <footer className="bg-foreground text-background">
      <div className="border-t border-border" />

      <Container className="py-14">
        <motion.div
          className="grid gap-10 md:grid-cols-3 md:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={staggerContainerVariants(Boolean(reduced))}
        >
          <motion.div
            className="space-y-4"
            variants={staggerItemVariants(Boolean(reduced))}
          >
            <div className="flex items-center">
              <span className="relative h-24 w-24 shrink-0">
                <Image
                  src="/images/brand/logo-blanco.png"
                  alt="Logo ARQ.O blanco"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative h-28 w-36 shrink-0 md:h-28 md:w-44">
                <Image
                  src="/images/brand/brand-blanco.png"
                  alt="Brand ARQ.O blanco"
                  fill
                  className="object-contain"
                />
              </span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-background/70">
              Estudio de arquitectura contemporánea orientado al desarrollo
              integral de proyectos que buscan trascender el tiempo.
            </p>
          </motion.div>

          <motion.div
            className="md:border-l md:border-border md:pl-10"
            variants={staggerItemVariants(Boolean(reduced))}
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-background/90">
              Secciones
            </div>
            <ul className="space-y-2 text-sm">
              {sections.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-block text-background/80 transition-colors duration-300 ease-out hover:text-background"
                  >
                    <span>{item.label}</span>
                    <span
                      className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-current opacity-50 transition-[width] duration-300 ease-out group-hover:w-full"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="md:border-l md:border-border md:pl-10"
            variants={staggerItemVariants(Boolean(reduced))}
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-background/90">
              Contacto
            </div>

            <div className="space-y-2 text-sm text-background/80">
              <p>info@arq-o.com</p>
              <p>+54 9 11 0000 0000</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-border pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={staggerItemVariants(Boolean(reduced))}
        >
          <p className="text-center text-xs text-background/60">
            © {year} | ARQ.O
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
