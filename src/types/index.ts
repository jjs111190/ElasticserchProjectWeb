export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface FilterState {
  search: string;
  category: string;
  tags: string[];
}