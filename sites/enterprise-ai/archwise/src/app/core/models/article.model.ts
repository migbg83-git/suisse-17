export interface Article {
  title: string;
  slug: string;
  description: string;
  cluster: string;
  date: string;
  readingTime: number;
  featured: boolean;
  tags?: string[];
  series?: string;
}

export interface ArticleDetail extends Article {
  content: string;
  html: string;
}
