import { useState, useMemo } from "react";
import { blogEntries } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import SectionContainer from "@/components/SectionContainer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const allTags = Array.from(new Set(blogEntries.flatMap((e) => e.tags ?? [])));

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return blogEntries.filter((entry) => {
      const matchesSearch =
        !q ||
        entry.title.toLowerCase().includes(q) ||
        entry.excerpt.toLowerCase().includes(q);
      const matchesTag =
        activeTag === "All" || (entry.tags ?? []).includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <SectionContainer>
      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle mt-2 mb-4">
        Sharing what I learn at the intersection of AI, RAG, and test automation — written as I build and explore.
      </p>
      <div className="accent-line mb-10" />

      {/* Search + filter */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="relative w-full max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
                activeTag === tag
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Card grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((entry) => (
            <BlogCard key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground text-center py-16">
          No articles match your search.
        </p>
      )}

      <p className="text-sm text-muted-foreground text-center mt-12">
        Follow me on{" "}
        <a
          href="https://www.linkedin.com/in/mohammad-iqbal-ai-engineer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>{" "}
        for more posts.
      </p>
    </SectionContainer>
  );
};

export default Blog;
