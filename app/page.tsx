import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { CTASection } from "@/components/ui/CTASection";
import { ROUTES } from "@/lib/routes";
import { HOME_IMAGES } from "@/lib/images";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border bg-background py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
              Estudio de arquitectura
            </p>
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Arquitectura que trasciende el tiempo
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Diseñamos espacios contemporáneos con enfoque en funcionalidad,
              contexto y permanencia. Cada proyecto es una respuesta precisa al
              lugar, al programa y a las personas que lo habitan.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href={ROUTES.PROJECTS}>Ir a proyectos</Button>
              <Link
                href={ROUTES.STUDIO}
                className="text-xs uppercase tracking-[0.25em] text-muted transition-colors duration-200 hover:text-foreground"
              >
                Conocé el estudio
              </Link>
            </div>
          </div>

          <div className="relative h-[260px] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-[360px]">
            <Image
              src={HOME_IMAGES.hero}
              alt="Visual de proyecto arquitectónico del estudio ARQ.O"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </Container>
      </section>

      <FeaturedProjects />
      <CTASection />
    </div>
  );
}

