import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg border p-6">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
    </div>
  );
}
