export interface Experience {
  title: string;
  tip: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  lang: string[];
}

export interface Project {
  title: string;
  tip?: string;
  description: string[];
  lang: string[];
  link?: string;
  github?: string;
  onProgress?: boolean;
}
