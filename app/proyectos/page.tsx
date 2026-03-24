"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

export default function ProjectsPage() {
  const all = getAllProjects();

  return (
    <div className="border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow="Proyectos"
            title="Proyectos"
            description="Una selección de trabajos del estudio."
          />
        </Reveal>

        <StaggerContainer className="grid gap-10 md:grid-cols-2">
          {all.map((project) => (
            <StaggerItem key={project.slug} className="contents">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
