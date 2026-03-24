"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Reveal } from "@/components/motion/Reveal";

export function ContactHomeSection() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-border bg-background py-16 md:py-24"
    >
      <Container className="space-y-12">
        <section className="grid gap-10 md:grid-cols-2">
          <Reveal className="col-span-1 space-y-4 text-lg">
            <SectionHeader
              eyebrow="Contacto"
              title="Contacto"
              description="¿Tenés  un proyecto en mente? Contanos tu idea y evaluaremos juntos la mejor manera de llevarla a cabo."
            />
            <hr />
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Buenos Aires, Argentina
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@arq-o.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +54 9 11 0000 0000
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </section>
      </Container>
    </section>
  );
}
