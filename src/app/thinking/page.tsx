import { getAllEssays } from '@/lib/essays';
import Link from 'next/link';

export default function Thinking() {
  const essays = getAllEssays();

  return (
    <div className="space-y-12">
      <div className="space-y-4 animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Thinking</h1>
        <p className="text-white/30 text-sm leading-relaxed">
          Sharp takes. No fluff. If I don&apos;t have a strong opinion, I don&apos;t write about it.
        </p>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>

      {essays.length > 0 ? (
        <div className="space-y-1 animate-fade-in-up animate-delay-2">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/thinking/${essay.slug}`}
              className="block group"
            >
              <div className="py-6 border-b border-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                <div className="flex items-start justify-between gap-8 mb-2">
                  <h3 className="text-[15px] font-medium text-white/60 group-hover:text-white transition-colors duration-300">
                    {essay.frontmatter.title}
                  </h3>
                  <span className="text-[10px] font-mono text-white/15 whitespace-nowrap mt-1">
                    {essay.frontmatter.date}
                  </span>
                </div>
                <p className="text-white/25 text-sm">
                  {essay.frontmatter.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-white/[0.06] rounded-xl p-16 text-center animate-fade-in-up animate-delay-2">
          <p className="text-white/20 font-mono text-xs tracking-wider">
            First essay dropping soon.
          </p>
        </div>
      )}
    </div>
  );
}
