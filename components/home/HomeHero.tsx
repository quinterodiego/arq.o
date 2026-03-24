"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ROUTES } from "@/lib/routes";
import { HOME_IMAGES } from "@/lib/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [parallaxOk, setParallaxOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setParallaxOk(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const enableParallax = parallaxOk && !reduced;
  const imageParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? [12, -12] : [0, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <Container className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-8">
          <Reveal delay={0}>
            <p className="text-[12px] uppercase tracking-[0.3em] text-gray-500">
              ESTUDIO DE ARQUITECTURA
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-3xl font-bold leading-[1.5] tracking-tight md:text-[56px] lg:text-[56px]">
              Arquitectura que trasciende el tiempo
            </h1>
          </Reveal>
          <Reveal delay={0.14} className="flex flex-wrap items-center gap-4">
            <Button
              href={ROUTES.PROJECTS}
              variant="primary"
              className="rounded-none px-4 py-2 text-[14px] uppercase tracking-[0.22em]"
            >
              EXPLORAR PROYECTOS <span className="ml-2"><FontAwesomeIcon icon={faChevronRight} /></span>
            </Button>
          </Reveal>
        </div>

        <motion.div
          className="relative h-[260px] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-[70vh] md:max-h-[700px]"
          initial={reduced ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            reduced ? { duration: 0 } : { duration: 0.9, ease: "easeOut" }
          }
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: imageParallaxY }}
          >
            <Image
              src={HOME_IMAGES.hero}
              alt="Visual de proyecto arquitectónico del estudio ARQ.O"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
              priority
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
