import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getProjectBySlug(slug);

  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="space-y-6">
        <Link
          href="/builds"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-white/20 hover:text-white/50 transition-colors duration-300"
        >
          <span className="hover:-translate-x-0.5 transition-transform">←</span>
          <span>Back to builds</span>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
            {frontmatter.title}
          </h1>

          <div className="flex items-center gap-3 text-[11px] font-mono text-white/25">
            <span>{frontmatter.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <span
              className={`px-2.5 py-1 rounded-full border ${
                frontmatter.status === 'live'
                  ? 'text-green-400/80 border-green-400/20 bg-green-400/[0.06]'
                  : 'text-yellow-400/80 border-yellow-400/20 bg-yellow-400/[0.06]'
              }`}
            >
              {frontmatter.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                className="text-[11px] font-mono text-white/30 hover:text-white/70 transition-colors duration-300 flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
            )}
            {frontmatter.live_url && (
              <a
                href={frontmatter.live_url}
                target="_blank"
                className="text-[11px] font-mono text-green-400/50 hover:text-green-400 transition-colors duration-300 flex items-center gap-1.5"
              >
                <span>Live</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

      {frontmatter.impact && (
        <div className="relative pl-5 border-l border-green-400/20">
          <p className="text-[10px] font-mono text-green-400/40 mb-1.5 tracking-[0.2em] uppercase">
            Impact
          </p>
          <p className="text-white/50 text-sm">{frontmatter.impact}</p>
        </div>
      )}

      <article className="space-y-1">
        {content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) {
            return (
              <h2
                key={i}
                className="text-lg font-bold mt-14 mb-5 text-white/80 tracking-tight"
              >
                {line.replace('## ', '')}
              </h2>
            );
          }
          if (line.startsWith('- ')) {
            return (
              <li key={i} className="text-white/40 ml-4 text-sm leading-relaxed list-disc">
                {line.replace('- ', '')}
              </li>
            );
          }
          if (line.trim() === '') return <div key={i} className="h-3" />;
          return (
            <p key={i} className="text-white/40 text-sm leading-[1.8]">
              {line}
            </p>
          );
        })}
      </article>
    </div>
  );
}
