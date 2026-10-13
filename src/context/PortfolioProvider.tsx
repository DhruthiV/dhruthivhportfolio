import { useEffect, useState } from "react";

import type { ReactNode } from "react";

import {
  fallbackProfileContent,
  fetchProfileContent,
} from "@/lib/notionProfile";

import type { ProfileContent } from "@/lib/notionProfile";

import { fetchNotionProjects } from "@/lib/notionProjects";

import { PortfolioContext } from "./PortfolioContext";
import type { Project } from "@/data/projects";

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileContent>(
    fallbackProfileContent,
  );

  const [projects, setProjects] = useState<Project[]>([]);

  const [profileLoading, setProfileLoading] = useState(true);

  const [projectsLoading, setProjectsLoading] = useState(true);

  const [profileError, setProfileError] = useState<string | null>(null);
  const [projectsError, setProjectsError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchProfileContent()
      .then((v) => !cancelled && setProfile(v))
      .catch((e) => {
        console.error("Profile loading failed", e);
        if (!cancelled) setProfileError("Failed to load profile");
      })
      .finally(() => !cancelled && setProfileLoading(false));

    fetchNotionProjects()
      .then((v) => !cancelled && setProjects(v))
      .catch((e) => {
        console.error("Projects loading failed", e);
        if (!cancelled) setProjectsError("Failed to load projects");
      })
      .finally(() => !cancelled && setProjectsLoading(false));

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        projects,

        profileLoading,
        projectsLoading,
        profileError,
        projectsError,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
