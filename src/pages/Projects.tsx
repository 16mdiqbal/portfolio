import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionContainer from "@/components/SectionContainer";

const Projects = () => {
  return (
    <SectionContainer>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle mt-2 mb-4">A selection of things I've built and contributed to.</p>
      <div className="accent-line mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
