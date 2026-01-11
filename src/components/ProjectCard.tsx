import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition hover:shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>

      <p className="mt-2 leading-relaxed text-sm text-gray-500 dark:text-gray-400">
        {project.tech.join(" · ")}
      </p>

      <p className="mt-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs text-gray-700 dark:text-gray-300"
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
          className="inline-block whitespace-nowrap text-sm font-medium text-black dark:text-gray-300 hover:underline"
          aria-label={`View ${project.title} on GitHub`}
        >
          View on GitHub →
        </a>
      </div>
    </article>
  );
}
