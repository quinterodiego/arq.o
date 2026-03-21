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
        <SectionHeader
          title="Proyectos"
          description="Una selección de proyectos del estudio."
        />

        <div className="grid gap-10 md:grid-cols-3">
          {featured.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button
            variant="primary"
            href={ROUTES.PROJECTS}
            className="rounded-none px-4 py-2 text-[14px] md:text-[14px]"
          >
            Ver proyectos
          </Button>
        </div>
      </Container>
    </section>
  );
}

