import ProjectsError from "../common/ProjectsError";
import { EmptyState } from "./blocks/EmptyState";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./blocks/ProjectCard";

interface ProjectsCardProps {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export function Projects({ projects, loading, error }: ProjectsCardProps) {
  const previewProjects = projects
    .filter(
      (project) =>
        project.visibility && project.order !== undefined && project.mainpage,
    )
    .sort((a, b) => {
      const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.order ?? Number.MAX_SAFE_INTEGER;

      return orderA - orderB;
    });

  if (loading) {
    return <EmptyState />;
  }

  if (error) {
    return (
      <div className="flex justify-center">
        <ProjectsError />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-center font-heading text-2xl font-semibold text-foreground">
        Projects
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {previewProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
