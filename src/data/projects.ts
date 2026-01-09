export type Project = {
  title: string;
  tech: string[];
  description: string;
  githubUrl: string;
  highlights: string[];
  learned: string[];
};

export const projects: Project[] = [
  {
    title: "King of the Hill Engine",
    tech: ["Python"],
    description:
      "A turn-based chess engine implementing the “King of the Hill” variant, focusing on move validation, game state management, and win condition detection.",
    githubUrl: "https://github.com/anaberst/king-of-the-hill",
    highlights: ["Python", "Algorithms", "Game Logic"],
    learned: [
      "Designing clean game state abstractions",
      "Implementing rule variants without breaking core logic",
      "Writing testable, modular Python code",
    ],
  },
  {
    title: "Pommi Timer",
    tech: ["React", "TypeScript", "Vite", "Bootstrap"],
    description:
      "A Pomodoro timer application built with React and TypeScript, designed to be simple, accessible, and pleasant to use for busy students. Features customizable work intervals, persistent settings, and light/dark themes.",
    githubUrl: "https://github.com/anaberst/pommi",
    highlights: [
      "Frontend State Management",
      "Accessibility & UX",
      "Persistent Client State",
    ],
    learned: [
      "Managing time-based and user-configurable state in React",
      "Persisting application settings using localStorage",
      "Designing accessible UI components with clear user feedback",
    ],
  },
  {
    title: "Fitness Tracker",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "A full-stack web application for tracking gym workouts, allowing users to log exercises and view workout history through a simple, functional interface.",
    githubUrl: "https://github.com/anaberst/exercise-tracker",
    highlights: ["Full-Stack Development", "REST APIs", "CRUD Operations"],
    learned: [
      "Designing and consuming RESTful APIs",
      "Managing client-server data flow",
      "Structuring a full-stack JavaScript application",
    ],
  },
  {
    title: "Assembly String Reverser",
    tech: ["Assembly"],
    description:
      "A low-level program that reverses a string in memory, implemented in Assembly to explore stack usage, registers, and manual memory management.",
    githubUrl: "https://github.com/anaberst/intern-error-reverser",
    highlights: ["Low-Level Programming", "Memory Management", "Registers"],
    learned: [
      "Working directly with registers and the call stack",
      "Understanding memory layout and pointer arithmetic",
      "Translating high-level logic into low-level instructions",
    ],
  },
];
