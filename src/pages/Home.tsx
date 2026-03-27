import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { icon: Code2, label: "Full-Stack Developer", desc: "React, Node.js, TypeScript" },
  { icon: Briefcase, label: "3+ Years Experience", desc: "Building production apps" },
  { icon: PenLine, label: "Technical Writer", desc: "Sharing knowledge & insights" },
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
            className="text-accent font-medium text-sm tracking-wide uppercase"
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="page-title">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <p className="page-subtitle mx-auto md:mx-0">
            A passionate developer who builds elegant, scalable web applications. I love turning complex problems into simple, beautiful solutions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
              <Link to="/projects">
                View Projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-body">
              <Link to="/contact">Get In Touch</Link>
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
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
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
