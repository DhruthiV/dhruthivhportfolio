import { createContext } from "react";

import type { ProfileContent } from "@/lib/notionProfile";
import type { Project } from "@/data/projects";

interface PortfolioContextValue {
  profile: ProfileContent;
  projects: Project[];

  profileLoading: boolean;
  projectsLoading: boolean;

  projectsError: string | null;
  profileError: string | null;
}

export const PortfolioContext = createContext<PortfolioContextValue | null>(
  null,
);
