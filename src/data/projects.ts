export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

// Add your projects here. Each entry becomes a card on the Projects page.
export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product catalog, cart management, and secure checkout flow.",
    image: "",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Kanban-style task manager with drag-and-drop, real-time updates, and team collaboration features.",
    image: "",
    techStack: ["TypeScript", "Next.js", "Prisma", "Tailwind"],
    githubUrl: "https://github.com",
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location search, 7-day forecasts, and data visualizations.",
    image: "",
    techStack: ["React", "D3.js", "OpenWeather API"],
    githubUrl: "https://github.com",
  },
];
