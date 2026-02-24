import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Builds() {
  const projects = getAllProjects();

  return (
    <div className="space-y-12 pt-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Builds</h1>
        <p className="text-neutral-500 text-sm">
          Things I built because something was broken and it bothered me.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-neutral-800 rounded-lg p-12 text-center">
          <p className="text-neutral-500 font-mono text-sm">
            First build shipping soon.
          </p>
        </div>
      )}
    </div>
  );
}