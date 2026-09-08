export type CredentialCategory =
'Training' |
'Certificate' |
'Recognition' |
'Academic Achievement';

export interface Credential {
  id: string;
  title: string;
  organization: string;
  date: string;
  sortDate: string;
  image: string;
  description: string;
  category: CredentialCategory;
  isTraining: boolean;
  isAchievement: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  featured?: boolean;
  skills: {name: string;level: number;}[];
}

export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  image: string;
  tags: string[];
}