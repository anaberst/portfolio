import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition hover:shadow-sm">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        {project.title}
      </h3>

      <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-gray-400">
        {project.tech.join(" · ")}
      </p>

      <p className="mt-4 leading-relaxed text-base text-gray-800 dark:text-gray-300">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-md bg-gray-200 dark:bg-gray-900 px-2 py-1 text-xs text-black dark:text-white"
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
          className="inline-block whitespace-nowrap text-sm font-medium text-black dark:text-white hover:underline"
          aria-label={`View ${project.title} on GitHub`}
        >
          View on GitHub →
        </a>
      </div>
    </article>
  );
}
