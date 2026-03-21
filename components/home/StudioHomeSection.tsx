import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { STUDIO_IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

export function StudioHomeSection() {
  return (
    <section className="border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Estudio"
          title="Estudio"
          description="Estudio de Arq.O es una oficina profesional dedicada al desarrollo integral de proyectos de arquitectura, urbanismo y dirección de obras."
        />

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6 text-sm leading-relaxed text-muted">
            <p>
              Trabajamos cada encargo integrando criterios de eficiencia
              constructiva, calidad espacial y cumplimiento de normativas
              vigentes.
            </p>
            <p>
              Nuestro proceso acompaña desde el análisis inicial hasta la
              materialización de la obra, con precisión técnica y atención al
              detalle.
            </p>

            <div className="pt-2">
              <Button
                href={ROUTES.STUDIO}
                variant="primary"
                className="rounded-none px-4 py-2 text-[10px]"
              >
                Conoce el estudio
              </Button>
            </div>
          </div>

          <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-72">
            <Image
              src={STUDIO_IMAGES.hero}
              alt="Estudio de arquitectura ARQ.O"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

