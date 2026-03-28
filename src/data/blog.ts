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
    id: "blog-2",
    title: "Stop Wasting Your AI's 'Working Memory'",
    excerpt: "Claude Code's 200k token context window sounds generous — but system overhead leaves only ~150k usable tokens. Worse, conversation history is resent every turn, so costs grow exponentially. Four focused 10-turn sessions cost ~4x less than one 40-turn marathon. Here's how to work smarter.",
    platform: "LinkedIn",
    date: "2026-03-28",
    url: "https://www.linkedin.com/pulse/stop-wasting-your-ais-working-memory-mohammad-iqbal-xnyyc",
  },
  {
    id: "blog-1",
    title: "Python 3.14: Cool New Features for You to Try",
    excerpt: "Python 3.14 is evolution, not just performance gains. Smarter annotations, multiple interpreters for concurrency, template string literals, faster execution, friendlier error messages, and a revamped interactive REPL — making Python more polished, capable, and future-ready than ever.",
    platform: "LinkedIn",
    date: "2025-10-15",
    url: "https://www.linkedin.com/posts/mohammad-iqbal-ai-engineer_python-314-cool-new-features-for-you-to-activity-7384211569498300416-MoX5",
  },
];
