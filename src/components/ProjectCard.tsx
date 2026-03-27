import type { Project } from "@/data/projects";
import { ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-xl border bg-card overflow-hidden transition-shadow hover:shadow-lg">
      {/* Image / placeholder */}
      <div className="aspect-video overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/20 via-secondary to-accent/5 flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
              <span className="font-display text-2xl text-accent">{project.title.charAt(0)}</span>
            </div>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">{project.techStack[0]}</span>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-display text-xl">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitBranch size={16} /> Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
