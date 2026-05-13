export interface BlogEntry {
  id: string;
  title: string;
  excerpt: string;
  platform: "Medium" | "LinkedIn" | "Dev.to" | "Hashnode" | "Personal" | string;
  date?: string;
  url: string;
  tags?: string[];
  readTime?: number;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

// Add your blog entries here. Each entry becomes a card on the Blog page.
export const blogEntries: BlogEntry[] = [
  {
    id: "blog-4",
    title: "LangChain Document Loaders: The First Step Every RAG Pipeline Needs",
    excerpt: "RAG pipelines begin by ingesting data — but most tutorials skip over how that actually works. LangChain Document Loaders convert PDFs, web pages, databases, and 100+ other sources into a single unified format your AI can work with, making them the essential first step in any production RAG system.",
    platform: "LinkedIn",
    date: "2026-05-12",
    url: "https://www.linkedin.com/pulse/langchain-document-loaders-first-step-every-rag-pipeline-iqbal-96vac",
    tags: ["Document Loaders", "LangChain", "RAG"],
    readTime: 7,
    difficulty: "Intermediate",
  },
  {
    id: "blog-3",
    title: "RAG Explained: Why Modern AI Needs More Than a Good Memory",
    excerpt: "LLMs have a knowledge cutoff, hallucinate, and can't access your private data — four critical limitations that make them unreliable in production. RAG fixes this by retrieving relevant context first, then generating grounded responses, giving AI systems access to up-to-date information and making enterprise AI actually trustworthy.",
    platform: "LinkedIn",
    date: "2026-05-09",
    url: "https://www.linkedin.com/pulse/rag-explained-why-modern-ai-needs-more-than-good-memory-iqbal-egipc/",
    tags: ["RAG", "AI", "LLM"],
    readTime: 8,
    difficulty: "Beginner",
  },
  {
    id: "blog-2",
    title: "Stop Wasting Your AI's 'Working Memory'",
    excerpt: "Claude Code's 200k token context window sounds generous — but system overhead leaves only ~150k usable tokens. Worse, conversation history is resent every turn, so costs grow exponentially. Four focused 10-turn sessions cost ~4x less than one 40-turn marathon. Here's how to work smarter.",
    platform: "LinkedIn",
    date: "2026-03-28",
    url: "https://www.linkedin.com/pulse/stop-wasting-your-ais-working-memory-mohammad-iqbal-xnyyc",
    tags: ["Context Window", "Claude Code", "AI"],
    readTime: 5,
    difficulty: "Beginner",
  },
  {
    id: "blog-1",
    title: "Python 3.14: Cool New Features for You to Try",
    excerpt: "Python 3.14 is evolution, not just performance gains. Smarter annotations, multiple interpreters for concurrency, template string literals, faster execution, friendlier error messages, and a revamped interactive REPL — making Python more polished, capable, and future-ready than ever.",
    platform: "LinkedIn",
    date: "2025-10-15",
    url: "https://www.linkedin.com/posts/mohammad-iqbal-ai-engineer_python-314-cool-new-features-for-you-to-activity-7384211569498300416-MoX5",
    tags: ["Python 3.14", "Python"],
    readTime: 6,
    difficulty: "Beginner",
  },
];
