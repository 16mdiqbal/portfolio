import type { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-xl border bg-card overflow-hidden transition-shadow hover:shadow-lg">
      {/* Image placeholder */}
      <div className="aspect-video bg-secondary flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Project Preview</span>
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
            <Github size={16} /> Source
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
