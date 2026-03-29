import { GitBranch, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

const Projects = () => {
  return (
    <SectionContainer>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle mt-2 mb-4">A selection of things I've built and contributed to.</p>
      <div className="accent-line mb-10" />

      <div className="rounded-xl border bg-card p-12 flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
          <Clock size={32} />
        </div>
        <div className="space-y-2 max-w-md">
          <h2 className="font-display text-2xl">Coming Soon</h2>
          <p className="text-muted-foreground">
            I'm currently working on projects to showcase here. Check back soon — I'll be adding them as they're completed.
          </p>
        </div>
        <Button asChild variant="outline">
          <a href="https://github.com/16mdiqbal" target="_blank" rel="noopener noreferrer">
            <GitBranch size={16} className="mr-2" /> View my GitHub in the meantime
          </a>
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Projects;
