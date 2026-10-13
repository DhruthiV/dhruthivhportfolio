export type ProjectType = string;
export interface Project {
  name: string;
  description: string;
  pic?: string;
  slug?: string;
  caseStudyId?: string;
  whatIDid: string;

  type: ProjectType;

  linkedinPost?: string | undefined;
  behance?: string | undefined;

  youtube?: string;
  liveUrl?: string;

  order?: number;
  visibility: boolean;
  mainpage: boolean;
}
