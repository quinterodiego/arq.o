import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { CTASection } from "@/components/ui/CTASection";

export default function ServicesPage() {
  return (
    <div className="border-t border-border bg-background">
      <section className="py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow="Servicios"
            title="Servicios"
            description="Acompañamos cada etapa del proyecto, desde el anteproyecto hasta la dirección de obra, con una mirada técnica y contemporánea."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-border bg-[#f9f9f9] p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-[0.22em]">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}

