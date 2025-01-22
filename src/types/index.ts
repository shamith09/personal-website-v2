export interface Role {
  title: string;
  date: string;
  description: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
}
