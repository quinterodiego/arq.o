import type { Project } from "@/data/projects";
import { formatProjectMeta } from "@/lib/format";

type ProjectMetaProps = {
  project: Pick<Project, "location" | "year" | "area">;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-muted">
      {formatProjectMeta(project)}
    </p>
  );
}

