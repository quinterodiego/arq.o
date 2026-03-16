import { getFeaturedProjects } from "@/lib/projects";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  if (!featured.length) return null;

  return (
    <section className="border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Proyectos seleccionados"
            title="Una selección de trabajos del estudio."
            description="Cada proyecto es el resultado de un proceso que integra contexto, precisión técnica y atención al detalle."
          />
          <Button variant="ghost" href={ROUTES.PROJECTS} className="mt-2">
            Ver todos los proyectos
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {featured.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

