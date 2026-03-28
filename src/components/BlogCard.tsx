import type { BlogEntry } from "@/data/blog";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const platformColors: Record<string, string> = {
  Medium: "bg-foreground text-background",
  LinkedIn: "bg-accent text-accent-foreground",
  "Dev.to": "bg-foreground text-background",
  Hashnode: "bg-[hsl(230,70%,55%)] text-accent-foreground",
};

const BlogCard = ({ entry }: { entry: BlogEntry }) => {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border-l-4 border-l-accent border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-l-accent hover:border-accent/30"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <h3 className="font-display text-xl group-hover:text-accent transition-colors">
          {entry.title}
        </h3>
        <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors shrink-0">
          Read on {entry.platform} <ArrowUpRight size={14} />
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{entry.excerpt}</p>

      <div className="flex items-center gap-3">
        <Badge className={`text-xs ${platformColors[entry.platform] || "bg-secondary text-secondary-foreground"}`}>
          {entry.platform}
        </Badge>
        {entry.date && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar size={12} />
            {new Date(entry.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </span>
        )}
      </div>
    </a>
  );
};

export default BlogCard;
