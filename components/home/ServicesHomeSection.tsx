import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "anteproyecto":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M7 3h10l2 2v16H7V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 9h6M9 13h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "proyecto-ejecutivo":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M7 3h8l2 2v16H7V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 11h6M9 15h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 3v4h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "computo-presupuesto":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 8h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15h.01M12 15h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "documentacion-tecnica":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M4 7a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 13h8M8 16h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "direccion-obra":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M3 21h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 21V10l6-6 6 6v11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 21v-7h4v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
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
    <section className="border-t border-border bg-background py-16 md:py-24">
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

