import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const essaysDir = path.join(process.cwd(), 'content/thinking');

export type Essay = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    summary: string;
    featured?: boolean;
  };
  content: string;
};

export function getAllEssays(): Essay[] {
  if (!fs.existsSync(essaysDir)) return [];

  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith('.mdx'));

  return files
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(essaysDir, fileName);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as Essay['frontmatter'], content };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getEssayBySlug(slug: string): Essay {
  const fullPath = path.join(essaysDir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as Essay['frontmatter'], content };
}