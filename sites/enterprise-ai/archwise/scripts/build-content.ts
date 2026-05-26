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
  tags?: string[];
  series?: string;
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

// Remove first H1 heading if it duplicates the title from frontmatter
function removeFirstHeadingIfDuplicate(content: string, title: string): string {
  const lines = content.split('\n');
  
  // Check if first non-empty line is an H1
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (line === '') continue;
    
    // Check if it's an H1 heading (starts with #)
    if (line.startsWith('# ')) {
      const headingText = line.substring(2).trim();
      
      // If the heading matches the title, remove this line
      if (headingText === title) {
        // Remove the line and return the rest
        lines.splice(i, 1);
        return lines.join('\n').trim();
      }
      
      // If first heading doesn't match, return original content
      return content;
    }
    
    // If first non-empty line is not H1, return original content
    return content;
  }
  
  return content;
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
    
    // Remove first H1 if it duplicates the title
    const cleanedContent = removeFirstHeadingIfDuplicate(content, frontmatter.title);
    
    // Calculate reading time if not provided
    const readingTime = frontmatter.readingTime || calculateReadingTime(cleanedContent);
    
    // Convert markdown to HTML
    const html = marked(cleanedContent);
    
    return {
      ...frontmatter,
      content: cleanedContent,
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
  console.log('🚀 Building content from Suisse-17 content repository...\n');
  
  // Paths - reading from the centralized content directory
  const contentDir = path.join(process.cwd(), '..', '..', '..', 'content', 'enterprise-ai');
  const outputDir = path.join(process.cwd(), 'src', 'assets', 'content');
  const articlesOutputDir = path.join(outputDir, 'articles');
  
  // Ensure output directories exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  if (!fs.existsSync(articlesOutputDir)) {
    fs.mkdirSync(articlesOutputDir, { recursive: true });
  }
  
  // Read all article-* directories
  const articleDirs = fs.readdirSync(contentDir)
    .filter(item => {
      const fullPath = path.join(contentDir, item);
      return fs.statSync(fullPath).isDirectory() && item.startsWith('article-');
    })
    .sort(); // Ensure consistent order
  
  if (articleDirs.length === 0) {
    console.error('❌ No article directories found in', contentDir);
    process.exit(1);
  }
  
  console.log(`📁 Found ${articleDirs.length} article director(ies)\n`);
  
  // Process all articles
  const articles: Article[] = [];
  
  for (const dir of articleDirs) {
    const articlePath = path.join(contentDir, dir, 'article.md');
    
    if (!fs.existsSync(articlePath)) {
      console.warn(`   ⚠️  Skipping ${dir}: article.md not found`);
      continue;
    }
    
    console.log(`   Processing: ${dir}/article.md`);
    
    const article = processMarkdownFile(articlePath);
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
