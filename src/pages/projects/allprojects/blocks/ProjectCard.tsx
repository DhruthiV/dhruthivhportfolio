import type { Project } from "@/data/projects";
import { ProjectLinks } from "../../common/ProjectLinks";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleOpen = () => {
    if (!project.caseStudyId) return;

    navigate(`/projects/case-study/${project.caseStudyId}`, {
      state: { title: project.name },
    });
  };

  return (
    <Card
      onClick={handleOpen}
      className="group flex h-full min-h-[380px] cursor-pointer flex-col overflow-hidden rounded-sm border border-border bg-card pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
    >
      {/* Image */}
      {project.pic && (
        <div className="relative shrink-0 overflow-hidden">
          <img
            src={project.pic}
            alt={`${project.name} project preview`}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Content */}
      <CardHeader className="flex-1 p-4">
        <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
          {project.name}
        </CardTitle>

        <div className="flex flex-wrap gap-1.5">
          <Badge className="bg-chart-5">{project.type}</Badge>
        </div>

        <CardDescription className="mt-1 text-sm leading-6">
          {project.whatIDid}
        </CardDescription>
      </CardHeader>
      {/* Footer */}
      <CardFooter className="mt-auto shrink-0 justify-between border-t border-border p-4">
        <ProjectLinks project={project} variant="icon" />
      </CardFooter>
    </Card>
  );
}
