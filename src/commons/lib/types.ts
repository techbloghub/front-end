export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  company: string;
  author: string;
  url: string;
  coverImage: string;
  tags: string[];
  readTime: number;
}

export interface Company {
  name: string;
  postCount: number;
  lastUpdate: string;
  logo?: string;
}