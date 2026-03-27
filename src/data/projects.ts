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
    title: "AI-Augmented Test Automation Framework",
    description: "A self-healing test automation framework that leverages LLMs to automatically detect and repair broken locators, reducing maintenance overhead and improving test reliability across CI/CD pipelines.",
    image: "",
    techStack: ["Python", "Selenium", "OpenAI API", "LangChain", "GitHub Actions"],
    githubUrl: "https://github.com/16mdiqbal",
  },
  {
    id: "project-2",
    title: "RAG-Based QA Knowledge Assistant",
    description: "A Retrieval-Augmented Generation system that enables QA teams to query internal test documentation, defect history, and runbooks using natural language — accelerating onboarding and reducing knowledge silos.",
    image: "",
    techStack: ["Python", "LangChain", "FAISS", "Hugging Face", "FastAPI"],
    githubUrl: "https://github.com/16mdiqbal",
  },
  {
    id: "project-3",
    title: "CI/CD Pipeline Optimisation Toolkit",
    description: "A toolkit for analysing and optimising GitHub Actions pipelines — identifying bottlenecks, parallelising test suites, and reducing build times through intelligent test selection and caching strategies.",
    image: "",
    techStack: ["Python", "GitHub Actions", "Docker", "Bash", "YAML"],
    githubUrl: "https://github.com/16mdiqbal",
  },
];
