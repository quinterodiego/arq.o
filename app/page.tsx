import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { ROUTES } from "@/lib/routes";
import { HOME_IMAGES } from "@/lib/images";
import { ServicesHomeSection } from "@/components/home/ServicesHomeSection";
import { StudioHomeSection } from "@/components/home/StudioHomeSection";
import { ContactHomeSection } from "@/components/home/ContactHomeSection";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border bg-background py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-8">
            <p className="text-[12px] uppercase tracking-[0.3em] text-gray-500">
              ESTUDIO DE ARQUITECTURA
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-[56px] lg:text-[56px] leading-[1.5]">
              Arquitectura que trascende el tiempo
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={ROUTES.PROJECTS}
                className="inline-flex items-center justify-center border border-foreground bg-foreground px-4 py-2 text-[14px] uppercase tracking-[0.22em] text-background transition-colors duration-200 hover:bg-background hover:text-foreground"
              >
                EXPLORAR PROYECTOS
              </Link>
            </div>
          </div>

          <div className="relative h-[260px] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] md:h-[70vh] md:max-h-[700px]">
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
      <ServicesHomeSection />
      <StudioHomeSection />
      <ContactHomeSection />
    </div>
  );
}

