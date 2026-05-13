import type { BlogEntry } from "@/data/blog";
import { ArrowUpRight, Calendar, Clock, Bot, Database, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiPython, SiLangchain, SiOpenai } from "react-icons/si";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type AnyIcon = IconType | LucideIcon;

const tagIconMap: Record<string, AnyIcon> = {
  "Document Loaders": SiLangchain,
  "LangChain":        SiLangchain,
  "RAG":              Database,
  "AI":               SiOpenai,
  "LLM":              SiOpenai,
  "Claude Code":      Bot,
  "Context Window":   Layers,
  "Productivity":     Database,
  "Python 3.14":      SiPython,
  "Python":           SiPython,
};

const difficultyStyle: Record<string, string> = {
  Beginner:     "text-green-600 dark:text-green-400",
  Intermediate: "text-amber-600 dark:text-amber-400",
  Advanced:     "text-red-600 dark:text-red-400",
};

const BlogCard = ({ entry }: { entry: BlogEntry }) => {
  const primaryTag = entry.tags?.[0];
  const secondaryTags = entry.tags?.slice(1) ?? [];
  const Icon = primaryTag ? tagIconMap[primaryTag] : undefined;
  const isNew = entry.date
    ? Date.now() - new Date(entry.date).getTime() < 30 * 24 * 60 * 60 * 1000
    : false;

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_28px_hsl(var(--accent)/0.13)] hover:border-accent/25"
    >
      {/* Accent stripe */}
      <div className="h-[3px] bg-accent transition-all duration-300 group-hover:bg-accent/80" />

      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Primary tag with icon + New badge */}
        <div className="flex items-center justify-between">
          {primaryTag && (
            <div className="flex items-center gap-1.5">
              {Icon && <Icon size={16} className="text-accent shrink-0" />}
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {primaryTag}
              </span>
            </div>
          )}
          {isNew && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
              New
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl leading-snug group-hover:text-accent transition-colors duration-200">
          {entry.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {entry.excerpt}
        </p>

        {/* Secondary tags */}
        {secondaryTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {secondaryTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5 font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50 mt-auto">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {entry.date && (
              <span className="flex items-center gap-1">
                <Calendar size={11} />
                {new Date(entry.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            )}
            {!!entry.readTime && (
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {entry.readTime} min
              </span>
            )}
            {entry.difficulty && (
              <span className={`font-medium ${difficultyStyle[entry.difficulty]}`}>
                {entry.difficulty}
              </span>
            )}
          </div>
          <span className="flex items-center gap-0.5 text-xs text-accent font-medium opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
            Read <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
