export interface BlogEntry {
  id: string;
  title: string;
  excerpt: string;
  platform: "Medium" | "LinkedIn" | "Dev.to" | "Hashnode" | "Personal" | string;
  date?: string;
  url: string;
}

// Add your blog entries here. Each entry becomes a card on the Blog page.
export const blogEntries: BlogEntry[] = [
  {
    id: "blog-1",
    title: "Self-Healing Test Automation with LLMs",
    excerpt: "How I leveraged large language models to build a self-healing Selenium framework that automatically detects and repairs broken locators — cutting flaky test failures by over 60%.",
    platform: "LinkedIn",
    date: "2025-11-10",
    url: "https://www.linkedin.com/in/mohammad-iqbal-ai-engineer/",
  },
  {
    id: "blog-2",
    title: "Integrating RAG into Your QA Workflow",
    excerpt: "A practical guide to building a Retrieval-Augmented Generation pipeline on top of your internal QA documentation — enabling natural language queries over test plans, defect history, and runbooks.",
    platform: "LinkedIn",
    date: "2025-09-05",
    url: "https://www.linkedin.com/in/mohammad-iqbal-ai-engineer/",
  },
  {
    id: "blog-3",
    title: "Optimising CI/CD Pipelines for Large Test Suites",
    excerpt: "Strategies I've applied at PayPay Japan to dramatically reduce pipeline run times — intelligent test selection, parallelisation, and smarter caching with GitHub Actions.",
    platform: "LinkedIn",
    date: "2025-06-18",
    url: "https://www.linkedin.com/in/mohammad-iqbal-ai-engineer/",
  },
];
