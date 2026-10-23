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
      className="group flex h-full min-h-[430px] cursor-pointer flex-col overflow-hidden rounded-sm border border-border bg-card pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
    >
      {/* Image */}
      {project.pic ? (
        <div className="relative shrink-0 overflow-hidden">
          <img
            src={project.pic}
            alt={`${project.name} project preview`}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] shrink-0 items-center justify-center bg-muted text-sm text-muted-foreground">
          No preview available
        </div>
      )}

      {/* Content */}
      <CardHeader className="flex-1">
        <CardTitle className="py-2 text-xl font-semibold transition-colors group-hover:text-primary">
          {project.name}
        </CardTitle>

        <div className="flex flex-wrap gap-1.5">
          <Badge className="rounded-full border border-border bg-muted px-2 py-1 text-[11px] font-medium text-foreground">
            {project.type}
          </Badge>
        </div>

        <CardDescription className="mt-2 line-clamp-3 text-md leading-6">
          {project.whatIDid}
        </CardDescription>
      </CardHeader>

      {/* Footer */}
      <CardFooter className="mt-auto shrink-0 justify-between">
        <ProjectLinks project={project} variant="icon" />
      </CardFooter>
    </Card>
  );
}
