import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getProjectBySlug(params.slug);

  return (
    <div className="space-y-10 pt-10">
      {/* HEADER */}
      <div className="space-y-4">
        <Link
          href="/builds"
          className="text-xs font-mono text-neutral-600 hover:text-neutral-300 transition-colors"
        >
          ← Back to builds
        </Link>
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>

        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
          <span>{frontmatter.date}</span>
          <span
            className={`px-2 py-1 rounded uppercase tracking-wider ${
              frontmatter.status === 'live'
                ? 'text-green-400 bg-green-400/10'
                : 'text-yellow-400 bg-yellow-400/10'
            }`}
          >
            {frontmatter.status}
          </span>
        </div>

        <div className="flex gap-2">
          {frontmatter.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-1 bg-neutral-900 rounded text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 pt-2">
          {frontmatter.github && (
            <a
              href={frontmatter.github}
              target="_blank"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              GitHub →
            </a>
          )}
          {frontmatter.live_url && (
            <a
              href={frontmatter.live_url}
              target="_blank"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              Live →
            </a>
          )}
        </div>
      </div>

      {/* IMPACT CALLOUT */}
      {frontmatter.impact && (
        <div className="border-l-2 border-white pl-4">
          <p className="text-xs font-mono text-neutral-500 mb-1">IMPACT</p>
          <p className="text-neutral-300">{frontmatter.impact}</p>
        </div>
      )}

      {/* CONTENT */}
      <article className="prose prose-invert prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-white prose-strong:text-white prose-code:text-neutral-300 prose-code:bg-neutral-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
        {/* Simple markdown rendering - splits content into paragraphs */}
        {content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) {
            return (
              <h2 key={i} className="text-xl font-bold mt-12 mb-4">
                {line.replace('## ', '')}
              </h2>
            );
          }
          if (line.startsWith('- ')) {
            return (
              <li key={i} className="text-neutral-300 ml-4">
                {line.replace('- ', '')}
              </li>
            );
          }
          if (line.trim() === '') return <br key={i} />;
          return (
            <p key={i} className="text-neutral-300 leading-relaxed">
              {line}
            </p>
          );
        })}
      </article>
    </div>
  );
}