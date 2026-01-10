import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-sm">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-2 text-sm text-gray-500">{project.tech.join(" · ")}</p>

      <p className="mt-4 text-gray-700">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
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
          className="text-sm font-medium text-black hover:underline"
          aria-label={`View ${project.title} on GitHub`}
        >
          View on GitHub →
        </a>
      </div>
    </article>
  );
}
