import { getAllEssays, getEssayBySlug } from '@/lib/essays';
import Link from 'next/link';

export function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((e) => ({ slug: e.slug }));
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getEssayBySlug(slug);

  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="space-y-6">
        <Link
          href="/thinking"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-white/20 hover:text-white/50 transition-colors duration-300"
        >
          <span>←</span>
          <span>Back to thinking</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
          {frontmatter.title}
        </h1>
        <p className="text-[11px] font-mono text-white/20">
          {frontmatter.date}
        </p>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

      <article className="space-y-1">
        {content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) {
            return (
              <h2 key={i} className="text-lg font-bold mt-14 mb-5 text-white/80 tracking-tight">
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
