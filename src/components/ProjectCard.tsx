import Link from 'next/link';
import { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, frontmatter } = project;

  return (
    <Link href={`/builds/${slug}`} className="block group">
      <div className="relative border border-white/[0.06] rounded-xl p-6 md:p-8 hover:border-white/[0.12] transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04]">
        
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/[0.03] to-transparent pointer-events-none" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
              {frontmatter.title}
            </h3>
            <span
              className={`text-[9px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border ${
                frontmatter.status === 'live'
                  ? 'text-green-400/80 border-green-400/20 bg-green-400/[0.06]'
                  : frontmatter.status === 'building'
                  ? 'text-yellow-400/80 border-yellow-400/20 bg-yellow-400/[0.06]'
                  : 'text-white/30 border-white/10 bg-white/[0.03]'
              }`}
            >
              {frontmatter.status}
            </span>
          </div>

          <p className="text-white/40 text-sm leading-relaxed">
            {frontmatter.itch}
          </p>

          {frontmatter.impact && (
            <p className="text-[11px] font-mono text-white/25 mt-4 tracking-wide">
              ↳ {frontmatter.impact}
            </p>
          )}

          <div className="flex gap-2 mt-5">
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-5 flex items-center gap-1.5 text-[11px] font-mono text-white/20 group-hover:text-white/50 transition-colors duration-300">
            <span>Read case study</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
