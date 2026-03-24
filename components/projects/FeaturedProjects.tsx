"use client";

import { getFeaturedProjects } from "@/lib/projects";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  if (!featured.length) return null;

  return (
    <section className="border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            title="Proyectos"
            description="Una selección de proyectos del estudio."
          />
        </Reveal>

        <StaggerContainer className="grid gap-10 md:grid-cols-3">
          {featured.slice(0, 3).map((project) => (
            <StaggerItem key={project.slug} className="contents">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.12} className="flex justify-center pt-2">
          <Button
            variant="primary"
            href={ROUTES.PROJECTS}
            className="rounded-none px-4 py-2 text-[14px] md:text-[14px]"
          >
            Ver proyectos <span className="ml-2"><FontAwesomeIcon icon={faChevronRight} /></span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
