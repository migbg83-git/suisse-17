export interface Category {
  slug: string;
  name: string;
  description?: string;
}

export interface Tag {
  slug: string;
  name: string;
  description?: string;
}

export interface Series {
  slug: string;
  name: string;
  description?: string;
}


export interface Article {
  title: string;
  slug: string;
  description: string;
  summary?: string;
  category: Category;
  cluster?: string;
  tags?: Tag[];
  series?: Series;
  author: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  html?: string;
}

// ArticleDetail extiende Article y fuerza tipado fuerte en category, tags y series
export interface ArticleDetail extends Article {
  category: Category;
  tags: Tag[];
  series?: Series;
}
