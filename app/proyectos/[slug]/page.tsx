import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAllProjects, getNextProject, getProjectBySlug } from "@/lib/projects";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";
import { Reveal } from "@/components/motion/Reveal";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const next = getNextProject(project.slug);

  return (
    <div className="border-t border-border bg-background py-12 md:py-16">
      <Container className="space-y-10">
        <Reveal>
          <div className="space-y-4">
            <Breadcrumb
              items={[
                { label: "Proyectos", href: ROUTES.PROJECTS },
                { label: project.title }
              ]}
            />

            <header className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                {project.category}
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
                  {project.title}
                </h1>
                <ProjectMeta project={project} />
              </div>
            </header>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ProjectGallery images={project.gallery} title={project.title} />
        </Reveal>

        <Reveal delay={0.08}>
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <p>{project.description}</p>
          </div>

          <div className="space-y-4 border-t border-border pt-6 text-sm md:border-none md:pt-0">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] text-muted">
                Información del proyecto
              </p>
              <dl className="mt-2 space-y-1.5">
                <div className="flex justify-between gap-6">
                  <dt className="text-xs text-muted">Ubicación</dt>
                  <dd>{project.location}</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-xs text-muted">Año</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-xs text-muted">Área</dt>
                  <dd>{project.area}</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-xs text-muted">Programa</dt>
                  <dd>{project.category}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-4">
              <Button href={ROUTES.PROJECTS} variant="ghost">
                Volver a proyectos
              </Button>
              {next && (
                <Button href={`/proyectos/${next.slug}`} variant="primary">
                  Siguiente proyecto
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

