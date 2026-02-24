import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { getAllEssays } from '@/lib/essays';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = getAllProjects();
  const essays = getAllEssays();
  const featured = projects.filter((p) => p.frontmatter.featured);

  return (
    <div className="space-y-24">
      
      {/* HERO */}
      <section className="space-y-8 animate-fade-in-up">
        
        {/* Status badge */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-[11px] font-mono text-white/30 tracking-wider">
            Open to opportunities
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="gradient-text">Suryansh</span>
            <br />
            <span className="text-white/40">Chandel</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/40 max-w-lg leading-relaxed">
            I notice broken systems and build things to fix them.
          </p>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono text-white/20">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-[1px] bg-white/20"></span>
            Data Analyst @ Apollo 24|7
          </span>
          <span className="w-1 h-1 rounded-full bg-white/10"></span>
          <span>NIT Warangal</span>
        </div>
      </section>

      {/* SIGNAL */}
      <section className="animate-fade-in-up animate-delay-2">
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
          
          <div className="space-y-4">
            <p className="text-white/50 leading-relaxed text-[15px]">
              By day, I reduce operational chaos at India&apos;s largest digital
              health platform — cutting order cancellations by 30%, automating 80%
              of reporting, and owning PAN-India programs.
            </p>
            <p className="text-white/50 leading-relaxed text-[15px]">
              By night, I build tools for problems that personally annoy me.
            </p>
          </div>
          
          <p className="text-[11px] font-mono text-white/15 mt-6 tracking-wider">
            This site is the second part.
          </p>
        </div>
      </section>

      {/* FEATURED BUILDS */}
      <section className="space-y-8 animate-fade-in-up animate-delay-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-white/10"></div>
            <h2 className="text-[11px] font-mono tracking-[0.3em] text-white/30 uppercase">
              Featured Builds
            </h2>
          </div>
          {projects.length > 0 && (
            <Link
              href="/builds"
              className="text-[11px] font-mono text-white/20 hover:text-white/50 transition-colors duration-300"
            >
              View all →
            </Link>
          )}
        </div>

        {featured.length > 0 ? (
          <div className="space-y-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-white/[0.06] rounded-xl p-16 text-center">
            <p className="text-white/20 font-mono text-xs tracking-wider">
              First build shipping soon
            </p>
            <p className="text-white/10 text-[11px] mt-3 font-mono">
              Check <Link href="/now" className="text-white/30 hover:text-white/50 transition-colors underline underline-offset-4 decoration-white/10">/now</Link> to see what I&apos;m working on
            </p>
          </div>
        )}
      </section>

      {/* NAV CARDS */}
      <section className="grid grid-cols-3 gap-3 animate-fade-in-up animate-delay-4">
        <Link
          href="/builds"
          className="group border border-white/[0.06] rounded-xl p-6 text-center hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500"
        >
          <p className="font-mono text-2xl font-bold text-white/60 group-hover:text-white/90 transition-colors">
            {projects.length}
          </p>
          <p className="text-[9px] text-white/20 mt-2 font-mono tracking-[0.3em] uppercase">
            Builds
          </p>
        </Link>
        <Link
          href="/thinking"
          className="group border border-white/[0.06] rounded-xl p-6 text-center hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500"
        >
          <p className="font-mono text-2xl font-bold text-white/60 group-hover:text-white/90 transition-colors">
            {essays.length}
          </p>
          <p className="text-[9px] text-white/20 mt-2 font-mono tracking-[0.3em] uppercase">
            Essays
          </p>
        </Link>
        <Link
          href="/now"
          className="group border border-white/[0.06] rounded-xl p-6 text-center hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500"
        >
          <p className="font-mono text-2xl font-bold text-green-400/60 group-hover:text-green-400 transition-colors">
            ◉
          </p>
          <p className="text-[9px] text-white/20 mt-2 font-mono tracking-[0.3em] uppercase">
            Now
          </p>
        </Link>
      </section>

    </div>
  );
}
