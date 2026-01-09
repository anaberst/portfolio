import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border p-6 transition-shadow hover:shadow-sm">
      <header>
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </header>

      <p className="mt-2 text-gray-700">{project.description}</p>

      {/* Highlights */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full bg-gray-100 px-3 py-1 text-cs font-medium text-gray-700"
          >
            {highlight}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <p className="mt-4 text-sm text-gray-500">
        <span className="font-medium text-gray-600">Tech:</span>{" "}
        {project.tech.join(", ")}
      </p>

      {/* Actions */}
      <div className="mt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:underline"
          aria-label={`View ${project.title} on GitHub`}
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}
