import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/content';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-card rounded-lg border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
      <h3 className="font-heading text-lg font-semibold text-foreground-heading mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        View on GitHub
        <ExternalLink size={14} />
      </a>
    </article>
  );
}
