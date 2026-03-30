import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

const RESUME_PDF_PATH = `${import.meta.env.BASE_URL}resume.pdf`;
const RESUME_EMBED_PATH = `${import.meta.env.BASE_URL}resume-embed.html`;
const RESUME_ATS_PATH = `${import.meta.env.BASE_URL}resume-ats.html`;

const Resume = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="page-title">Resume</h1>
          <p className="page-subtitle mt-2">My professional experience and qualifications.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button asChild variant="outline" className="shrink-0">
            <a href={RESUME_ATS_PATH} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" /> ATS Resume
            </a>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
            <a href={RESUME_PDF_PATH} download>
              <Download size={16} className="mr-2" /> Download PDF
            </a>
          </Button>
        </div>
      </div>

      <div className="accent-line mb-8" />

      {/* Desktop: show embedded resume */}
      <div className="hidden md:block rounded-xl border bg-card overflow-hidden">
        <div className="aspect-[8.5/11] w-full">
          <iframe
            src={RESUME_EMBED_PATH}
            title="Resume"
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* Mobile: show download card instead of unusable iframe */}
      <div className="md:hidden rounded-xl border bg-card p-8 flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
          <FileText size={32} />
        </div>
        <div className="space-y-2">
          <h2 className="font-display text-xl">View My Resume</h2>
          <p className="text-sm text-muted-foreground">
            Download the PDF to view my full resume on your device.
          </p>
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full max-w-xs">
          <a href={RESUME_PDF_PATH} download>
            <Download size={16} className="mr-2" /> Download PDF
          </a>
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Resume;
