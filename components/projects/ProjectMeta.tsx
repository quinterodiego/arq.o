import type { Project } from "@/data/projects";
import { formatProjectMeta } from "@/lib/format";

type ProjectMetaProps = {
  project: Pick<Project, "location" | "year" | "area">;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
      {project.location} · {project.year} · {project.area}
    </p>
  );
}

