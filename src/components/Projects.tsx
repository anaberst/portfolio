import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-transparent to-accentSoft/8" />
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 flex items-center font-heading text-3xl font-bold">
          <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
