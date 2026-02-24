import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { getAllEssays } from '@/lib/essays';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = getAllProjects();
  const essays = getAllEssays();
  const featured = projects.filter((p) => p.frontmatter.featured);

  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="pt-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Suryansh Chandel
        </h1>
        <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
          I notice broken systems and build things to fix them.
        </p>
        <p className="text-sm text-neutral-600 font-mono">
          Data Analyst · Builder · NIT Warangal &apos;23
        </p>
      </section>

      {/* SIGNAL */}
      <section className="border-l-2 border-white pl-6 space-y-3">
        <p className="text-neutral-300 leading-relaxed">
          By day, I reduce operational chaos at India&apos;s largest digital
          health platform — cutting order cancellations by 30%, automating 80%
          of reporting, and owning PAN-India programs.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          By night, I build tools for problems that personally annoy me.
        </p>
        <p className="text-sm text-neutral-600 font-mono mt-4">
          This site is the second part.
        </p>
      </section>

      {/* FEATURED BUILDS */}
      {featured.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase">
              Featured Builds
            </h2>
            <Link
              href="/builds"
              className="text-xs font-mono text-neutral-600 hover:text-neutral-300 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* EMPTY STATE — Remove this section once you have projects */}
      {featured.length === 0 && (
        <section className="space-y-6">
          <h2 className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase">
            Builds
          </h2>
          <div className="border border-dashed border-neutral-800 rounded-lg p-12 text-center">
            <p className="text-neutral-500 font-mono text-sm">
              First build shipping soon.
            </p>
            <p className="text-neutral-700 text-xs mt-2">
              Check /now to see what I&apos;m working on.
            </p>
          </div>
        </section>
      )}

      {/* STATS BAR */}
      <section className="grid grid-cols-3 gap-4">
        <Link
          href="/builds"
          className="border border-neutral-800 rounded-lg p-6 text-center hover:border-neutral-600 transition-colors"
        >
          <p className="font-mono text-2xl font-bold">{projects.length}</p>
          <p className="text-[10px] text-neutral-500 mt-1 font-mono tracking-widest">
            BUILDS
          </p>
        </Link>
        <Link
          href="/thinking"
          className="border border-neutral-800 rounded-lg p-6 text-center hover:border-neutral-600 transition-colors"
        >
          <p className="font-mono text-2xl font-bold">{essays.length}</p>
          <p className="text-[10px] text-neutral-500 mt-1 font-mono tracking-widest">
            ESSAYS
          </p>
        </Link>
        <Link
          href="/now"
          className="border border-neutral-800 rounded-lg p-6 text-center hover:border-neutral-600 transition-colors"
        >
          <p className="font-mono text-2xl font-bold">◉</p>
          <p className="text-[10px] text-neutral-500 mt-1 font-mono tracking-widest">
            NOW
          </p>
        </Link>
      </section>
    </div>
  );
}