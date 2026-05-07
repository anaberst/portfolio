import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-secondary/60 bg-card/90 bg-dot-grid bg-[size:18px_18px] p-6 shadow-soft backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      <h3 className="font-heading text-xl font-semibold text-text">
        {project.title}
      </h3>

      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-xs font-medium text-text"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="mt-4 leading-relaxed text-base text-textMuted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full border border-lavender/60 bg-gradient-to-r from-secondary/60 via-lavender/50 to-accentSoft/70 px-2.5 py-1 text-xs text-text"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block whitespace-nowrap text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label={`View ${project.title} on GitHub`}
        >
          View on GitHub →
        </a>
      </div>
    </article>
  );
}
