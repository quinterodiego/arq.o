"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "./Button";
import { ROUTES } from "@/lib/routes";
import { Reveal } from "@/components/motion/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function CTASection() {
  return (
    <section className="border-t border-border bg-[url('/images/studio/proyecto.png')] bg-cover bg-center py-16 md:py-24">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white">
            Próximo proyecto
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-200">
            Trabajamos cada encargo desde un enfoque integral, acompañando el
            proceso desde la idea inicial hasta la materialización de la obra.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Button href={ROUTES.CONTACT} variant="primary" className="rounded-none px-4 py-2 text-[10px]">
            Contáctanos <span className="ml-2"><FontAwesomeIcon icon={faChevronRight} /></span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
