import { getAllEssays } from '@/lib/essays';
import Link from 'next/link';

export default function Thinking() {
  const essays = getAllEssays();

  return (
    <div className="space-y-12 pt-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Thinking</h1>
        <p className="text-neutral-500 text-sm">
          Sharp takes. No fluff. If I don&apos;t have a strong opinion, I don&apos;t
          write about it.
        </p>
      </div>

      {essays.length > 0 ? (
        <div className="space-y-6">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/thinking/${essay.slug}`}
              className="block group"
            >
              <div className="py-6 border-b border-neutral-800 hover:border-neutral-600 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                    {essay.frontmatter.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-600">
                    {essay.frontmatter.date}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm">
                  {essay.frontmatter.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-neutral-800 rounded-lg p-12 text-center">
          <p className="text-neutral-500 font-mono text-sm">
            First essay dropping soon.
          </p>
        </div>
      )}
    </div>
  );
}