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
      className="group flex cursor-pointer flex-col gap-4 outline-none"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-[#f9f9f9] transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-foreground/25 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 transition-[opacity] duration-300 ease-out group-hover:opacity-90">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500 transition-colors duration-300 group-hover:text-foreground/65">
          {project.category}
        </p>
        <h3 className="text-base font-medium leading-[1.5] text-foreground tracking-tight transition-colors duration-300 group-hover:text-foreground/90">
        {project.title}
      </h3>
      <div className="transition-opacity duration-300 group-hover:opacity-[0.88]">
        <ProjectMeta project={project} />
      </div>
    </div>
  </Link>
);
}
