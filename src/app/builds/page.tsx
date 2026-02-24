import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Builds() {
  const projects = getAllProjects();

  return (
    <div className="space-y-12">
      <div className="space-y-4 animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Builds</h1>
        <p className="text-white/30 text-sm leading-relaxed">
          Things I built because something was broken and it bothered me enough to fix it.
        </p>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>

      {projects.length > 0 ? (
        <div className="space-y-4 animate-fade-in-up animate-delay-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-white/[0.06] rounded-xl p-16 text-center animate-fade-in-up animate-delay-2">
          <p className="text-white/20 font-mono text-xs tracking-wider">
            First build shipping soon.
          </p>
        </div>
      )}
    </div>
  );
}
