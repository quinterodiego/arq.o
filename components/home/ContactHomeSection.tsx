import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactIcon({ type }: { type: "mail" | "phone" | "pin" }) {
  switch (type) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M6.5 3.5h3l1.2 4-2 1.5c1.5 3 4.2 5.7 7.2 7.2l1.5-2 4 1.2v3c0 1.1-.9 2-2 2-9.4 0-17-7.6-17-17 0-1.1.9-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M12 22s7-4.5 7-12a7 7 0 0 0-14 0c0 7.5 7 12 7 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ContactHomeSection() {
  return (
    <section id="contacto" className="scroll-mt-24 border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-lg col-span-1">
            <SectionHeader
              eyebrow="Contacto"
              title="Contacto"
              description="¿Tenés  un proyecto en mente? Contanos tu idea y evaluaremos juntos la mejor manera de llevarla a cabo."
            />
            <hr />
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Buenos Aires, Argentina</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@arq-o.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +54 9 11 0000 0000</p>
          </div>
          <ContactForm />
        </section>
      </Container>
    </section>
  );
}

