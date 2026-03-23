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
            description=""
          />

          <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-xl font-medium text-black">Nuetro enfoque</h2>
              <p>
                <b>Estudio de Arq.O</b> es una oficina profesional dedicada al desarrollo integral de proyectos de arquitectura, urbanismo y dirección de obras, orientada a brindar soluciones técnicas, funcionales y estéticas acordes a las necesidades específicas de cada comitente.
              </p>
              <p>
                El estudio se especializa en la <b>planificación, diseño, documentación técnica y ejecución de obras</b>, abordando cada proyecto mediante un proceso de trabajo que integra criterios de eficiencia constructiva, optimización de recursos, calidad espacial y cumplimiento de las normativas vigentes.
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
            <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-64">
              <Image
                src={STUDIO_IMAGES.metodologia}
                alt="Detalle de maqueta arquitectónica"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-xl font-medium text-black">
                Metodología de trabajo
              </h2>
              <p>
                Nuestra metodología se basa en un <b>análisis exhaustivo de cada requerimiento</b>, contemplando tanto las condiciones del entorno como los aspectos técnicos, económicos y funcionales que intervienen en el desarrollo de la obra. A partir de ello se elaboran propuestas arquitectónicas que buscan equilibrar innovación, viabilidad constructiva y calidad de diseño.
              </p>
            </div>
          </section>

          <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-xl font-medium text-black">
                Experiencia
              </h2>
              <p>
                El estudio cuenta con experiencia en el desarrollo de proyectos de diversa escala y tipología, incluyendo obras institucionales, educativas, comerciales, residenciales y espacios públicos, participando en las distintas etapas del proceso constructivo:
              </p>
              <ExperienceList />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-64">
              <Image
                src={STUDIO_IMAGES.experiencia}
                alt="Experiencia del estudio ARQ.O"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </section>

          <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-64">
              <Image
                src={STUDIO_IMAGES.objetivo}
                alt="Objetivo del estudio ARQ.O"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <h2 className="text-xl font-medium text-black">
                Nuestro objetivo
              </h2>
              <p>
                Nuestro objetivo es <b>garantizar soluciones arquitectónicas integrales</b>, asegurando el adecuado control técnico y la correcta materialización de cada proyecto, mediante una práctica profesional responsable, precisa y comprometida con la calidad de la obra construida.
              </p>
            </div>
          </section>

        </Container>
      </section>

      <CTASection />
    </div>
  );
}