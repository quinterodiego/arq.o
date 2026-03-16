import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceList } from "@/components/studio/ExperienceList";
import { CTASection } from "@/components/ui/CTASection";
import { STUDIO_IMAGES } from "@/lib/images";

export default function StudioPage() {
  return (
    <div className="border-t border-border bg-background">
      <section className="py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow="Estudio"
            title="Estudio"
            description="Estudio de Arq.O es una oficina profesional dedicada al desarrollo integral de proyectos de arquitectura, urbanismo y dirección de obras, orientada a brindar soluciones técnicas, funcionales y estéticas acordes a las necesidades específicas de cada comitente."
          />

          <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                El estudio se especializa en la planificación, diseño,
                documentación técnica y ejecución de obras, abordando cada
                proyecto mediante un proceso de trabajo que integra criterios de
                eficiencia constructiva, optimización de recursos, calidad
                espacial y cumplimiento de las normativas vigentes.
              </p>
              <p>
                Nuestra metodología se basa en un análisis exhaustivo de cada
                requerimiento, contemplando tanto las condiciones del entorno
                como los aspectos técnicos, económicos y funcionales que
                intervienen en el desarrollo de la obra.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-64">
              <Image
                src={STUDIO_IMAGES.enfoque}
                alt="Equipo del estudio ARQ.O trabajando en planos"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </section>

          <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-sm font-medium uppercase tracking-[0.24em]">
                Metodología de trabajo
              </h2>
              <p>
                A partir del análisis de cada proyecto se elaboran propuestas
                arquitectónicas que buscan equilibrar innovación, viabilidad
                constructiva y calidad de diseño.
              </p>
              <p>
                Cada etapa del proceso se desarrolla con una planificación
                técnica rigurosa que permite optimizar recursos, prever
                soluciones constructivas adecuadas y garantizar la correcta
                ejecución de la obra.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-64">
              <Image
                src={STUDIO_IMAGES.metodologia}
                alt="Detalle de maqueta arquitectónica"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </section>

          <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-sm font-medium uppercase tracking-[0.24em]">
                Experiencia
              </h2>
              <p>
                El estudio cuenta con experiencia en el desarrollo de proyectos
                de diversa escala y tipología, incluyendo obras
                institucionales, educativas, comerciales, residenciales y
                espacios públicos.
              </p>
              <ExperienceList />
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-sm font-medium uppercase tracking-[0.24em]">
                Nuestro objetivo
              </h2>
              <p>
                Nuestro objetivo es garantizar soluciones arquitectónicas
                integrales, asegurando el adecuado control técnico y la correcta
                materialización de cada proyecto.
              </p>
              <p>
                La práctica profesional del estudio se basa en la
                responsabilidad técnica, la precisión en el desarrollo de cada
                etapa del proyecto y el compromiso con la calidad de la obra
                construida.
              </p>
            </div>
          </section>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}

