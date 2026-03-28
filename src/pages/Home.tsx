import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, PenLine, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import profileImg from "@/assets/profile.jpg";

const CAREER_START = new Date(2011, 8); // September 2011
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
);

const highlights = [
  { icon: Briefcase, label: `${yearsOfExperience}+ Years Experience`, desc: "Mobile, API & Web automation · Framework design" },
  { icon: Code2, label: "Senior SDET", desc: "AutoQA · PayPay Japan · CI/CD optimisation" },
  { icon: PenLine, label: "AI-Driven QA", desc: "RAG, MCP, LLMs · Intelligent & self-healing testing" },
];

const Home = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 mb-20">
        {/* Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-foreground font-semibold text-sm tracking-widest uppercase"
          >
            Senior SDET · AI Engineer · {yearsOfExperience}+ Years of Experience
          </motion.p>
          <div className="accent-line" />
          <h1 className="page-title">
            Hi, I'm <span className="text-accent">Mohammad Iqbal</span>
          </h1>
          <p className="page-subtitle mx-auto md:mx-0">
            I help engineering teams ship faster and with greater confidence — combining {yearsOfExperience}+ years of QA expertise with AI engineering to build intelligent, self-healing automation frameworks at PayPay Japan.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/projects">
                View Projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
                <Download size={16} className="mr-1" /> Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-accent/20 ring-offset-4 ring-offset-background">
            <img src={profileImg} alt="Mohammad Iqbal — Senior SDET & AI Engineer" className="w-full h-full object-cover scale-[1.18] object-top" />
          </div>
        </motion.div>
      </div>

      {/* Highlights */}
      <div className="grid sm:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="rounded-xl border bg-card p-6 text-center space-y-2"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
              <h.icon size={20} />
            </div>
            <h3 className="font-display text-lg">{h.label}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Home;
