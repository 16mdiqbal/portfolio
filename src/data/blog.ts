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
    title: "Building Scalable React Applications",
    excerpt: "Lessons learned from scaling a React codebase from prototype to production, covering state management, code splitting, and testing strategies.",
    platform: "Medium",
    date: "2025-12-15",
    url: "https://medium.com",
  },
  {
    id: "blog-2",
    title: "My Journey Into Open Source",
    excerpt: "How contributing to open source projects helped me grow as a developer and connect with an incredible community.",
    platform: "LinkedIn",
    date: "2025-10-08",
    url: "https://linkedin.com",
  },
  {
    id: "blog-3",
    title: "Understanding TypeScript Generics",
    excerpt: "A practical guide to TypeScript generics with real-world examples that go beyond the basics.",
    platform: "Dev.to",
    date: "2025-08-22",
    url: "https://dev.to",
  },
];
