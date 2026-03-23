import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { faBarsStaggered, faHandshake, faCalculator, faFileLines, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "anteproyecto":
      return (
        <FontAwesomeIcon icon={faBarsStaggered} />
      );
    case "proyecto-ejecutivo":
      return (
        <FontAwesomeIcon icon={faHandshake} />
      );
    case "computo-presupuesto":
      return (
        <FontAwesomeIcon icon={faCalculator} />
      );
    case "documentacion-tecnica":
      return (
        <FontAwesomeIcon icon={faFileLines} />
      );
    case "direccion-obra":
      return (
        <FontAwesomeIcon icon={faBuilding} />
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

export function ServicesHomeSection() {
  return (
    <section id="servicios" className="scroll-mt-24 border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Servicios"
          title="Servicios"
          description="Acompañamos cada etapa del proyecto, desde el anteproyecto hasta la dirección de obra, con una mirada técnica y contemporánea."
        />

        <div className="grid gap-10 md:grid-cols-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="space-y-3 text-sm leading-relaxed"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[#f9f9f9] text-foreground">
                  <ServiceIcon id={service.id} />
                </span>
              </div>
              <h3 className="text-xs font-medium uppercase tracking-[0.22em]">
                {service.title}
              </h3>
              <p className="text-xs text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

