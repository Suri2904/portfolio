import { getAllEssays, getEssayBySlug } from '@/lib/essays';
import Link from 'next/link';

export function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((e) => ({ slug: e.slug }));
}

export default async function EssayPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const { frontmatter, content } = getEssayBySlug(slug);

  return (
    <div className="space-y-10 pt-10">
      <div className="space-y-4">
        <Link
          href="/thinking"
          className="text-xs font-mono text-neutral-600 hover:text-neutral-300 transition-colors"
        >
          ← Back to thinking
        </Link>
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-xs font-mono text-neutral-500">
          {frontmatter.date}
        </p>
      </div>

      <article>
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
