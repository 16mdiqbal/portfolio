import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

// Place your resume PDF at public/resume.pdf — currently using resume.html as placeholder
const RESUME_PDF_PATH = `${import.meta.env.BASE_URL}resume.pdf`;
const RESUME_EMBED_PATH = `${import.meta.env.BASE_URL}resume-embed.html`;

const Resume = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="page-title">Resume</h1>
          <p className="page-subtitle mt-2">My professional experience and qualifications.</p>
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
          <a href={RESUME_PDF_PATH} download>
            <Download size={16} className="mr-2" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="accent-line mb-8" />

      <div className="rounded-xl border bg-card overflow-hidden">
        <div className="aspect-[8.5/11] w-full">
          <iframe
            src={RESUME_EMBED_PATH}
            title="Resume"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Resume;
