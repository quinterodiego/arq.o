import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectMeta } from "./ProjectMeta";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col gap-4"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-[#f9f9f9]">
        <div className="relative aspect-[4/3]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
          {project.category}
        </p>
        <h3 className="text-base font-medium tracking-tight">
          {project.title}
        </h3>
        <ProjectMeta project={project} />
      </div>
    </Link>
  );
}

