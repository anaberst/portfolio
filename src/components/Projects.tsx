import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-700 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
