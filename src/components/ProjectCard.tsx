import Link from 'next/link';
import { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, frontmatter } = project;

  return (
    <Link href={`/builds/${slug}`} className="block group">
      <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-500 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
            {frontmatter.title}
          </h3>
          <span
            className={`text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded ${
              frontmatter.status === 'live'
                ? 'text-green-400 bg-green-400/10'
                : frontmatter.status === 'building'
                ? 'text-yellow-400 bg-yellow-400/10'
                : 'text-neutral-500 bg-neutral-800'
            }`}
          >
            {frontmatter.status}
          </span>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed">
          {frontmatter.itch}
        </p>

        {frontmatter.impact && (
          <p className="text-xs font-mono text-neutral-500 mt-3">
            ↳ {frontmatter.impact}
          </p>
        )}

        <div className="flex gap-2 mt-4">
          {frontmatter.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-1 bg-neutral-900 rounded text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}