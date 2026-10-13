import { usePortfolio } from "@/hooks/usePortfolio";
import { Bio } from "@/modules/Bio";
import { Projects } from "../projects/homepagesection/Projects";

export function Home() {
  const { profile, projects, profileLoading, projectsLoading, projectsError } =
    usePortfolio();

  return (
    <>
      <Bio loading={profileLoading} blocks={profile.blocks} />

      <Projects
        projects={projects}
        loading={projectsLoading}
        error={projectsError}
      />
    </>
  );
}
