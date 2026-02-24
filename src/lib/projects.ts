import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDir = path.join(process.cwd(), 'content/builds');

export type Project = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    status: string;
    tags: string[];
    itch: string;
    impact: string;
    github: string;
    live_url?: string;
    featured?: boolean;
  };
  content: string;
};

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.mdx'));

  return files
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDir, fileName);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as Project['frontmatter'], content };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(projectsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as Project['frontmatter'], content };
}