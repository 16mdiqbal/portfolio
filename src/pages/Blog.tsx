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
    </SectionContainer>
  );
};

export default Blog;
