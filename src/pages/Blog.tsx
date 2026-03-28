import { blogEntries } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import SectionContainer from "@/components/SectionContainer";

const Blog = () => {
  return (
    <SectionContainer>
      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle mt-2 mb-4">Technical insights on QA engineering, AI-driven testing, and automation.</p>
      <div className="accent-line mb-10" />

      <div className="grid gap-4">
        {blogEntries.map((entry) => (
          <BlogCard key={entry.id} entry={entry} />
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mt-10">
        More posts coming soon — follow me on{" "}
        <a
          href="https://www.linkedin.com/in/mohammad-iqbal-ai-engineer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>{" "}
        to stay updated.
      </p>
    </SectionContainer>
  );
};

export default Blog;
