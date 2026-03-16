import type { Project } from "@/data/projects";

export function formatProjectMeta(project: Pick<Project, "location" | "year" | "area">) {
  return `${project.location} · ${project.year} · ${project.area}`;
}

