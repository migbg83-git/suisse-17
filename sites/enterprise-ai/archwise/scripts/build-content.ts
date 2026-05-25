import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js';

// Configure marked for code highlighting
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {
        console.error('Highlight error:', err);
      }
    }
    return code;
  },
  breaks: true,
  gfm: true
});

interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  cluster: string;
  date: string;
  readingTime?: number;
  featured?: boolean;
}

interface Article extends ArticleFrontmatter {
  content: string;
  html: string;
  readingTime: number;
}

// Calculate reading time (words per minute average: 200)
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

// Process single markdown file
function processMarkdownFile(filePath: string): Article | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Validate required frontmatter fields
    const requiredFields = ['title', 'slug', 'description', 'cluster', 'date'];
    for (const field of requiredFields) {
      if (!(field in data)) {
        console.error(`Missing required field "${field}" in ${filePath}`);
        return null;
      }
    }
    
    const frontmatter = data as ArticleFrontmatter;
    
    // Calculate reading time if not provided
    const readingTime = frontmatter.readingTime || calculateReadingTime(content);
    
    // Convert markdown to HTML
    const html = marked(content);
    
    return {
      ...frontmatter,
      content,
      html: html as string,
      readingTime,
      featured: frontmatter.featured || false
    };
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
  }
}

// Main build function
function buildContent() {
  console.log('🚀 Building content from Markdown files...\n');
  
  // Paths
  const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');
  const outputDir = path.join(process.cwd(), 'src', 'assets', 'content');
  const articlesOutputDir = path.join(outputDir, 'articles');
  
  // Ensure output directories exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  if (!fs.existsSync(articlesOutputDir)) {
    fs.mkdirSync(articlesOutputDir, { recursive: true });
  }
  
  // Read all markdown files
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
  
  if (files.length === 0) {
    console.error('❌ No markdown files found in', contentDir);
    process.exit(1);
  }
  
  console.log(`📝 Found ${files.length} markdown file(s)\n`);
  
  // Process all articles
  const articles: Article[] = [];
  
  for (const file of files) {
    const filePath = path.join(contentDir, file);
    console.log(`   Processing: ${file}`);
    
    const article = processMarkdownFile(filePath);
    if (article) {
      articles.push(article);
      
      // Write individual article JSON
      const articleOutputPath = path.join(articlesOutputDir, `${article.slug}.json`);
      fs.writeFileSync(articleOutputPath, JSON.stringify(article, null, 2), 'utf-8');
      console.log(`   ✓ Generated: articles/${article.slug}.json`);
    }
  }
  
  if (articles.length === 0) {
    console.error('\n❌ No valid articles processed');
    process.exit(1);
  }
  
  // Sort articles by date (newest first)
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Create articles list (without full HTML content for listing)
  const articlesList = articles.map(article => ({
    title: article.title,
    slug: article.slug,
    description: article.description,
    cluster: article.cluster,
    date: article.date,
    readingTime: article.readingTime,
    featured: article.featured
  }));
  
  // Write articles list JSON
  const articlesListPath = path.join(outputDir, 'articles.json');
  fs.writeFileSync(articlesListPath, JSON.stringify(articlesList, null, 2), 'utf-8');
  console.log(`\n✓ Generated: articles.json (${articlesList.length} articles)`);
  
  console.log('\n✅ Content build completed successfully!\n');
}

// Run build
buildContent();
