import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/contact";
import SectionContainer from "@/components/SectionContainer";

const iconMap: Record<string, React.ElementType> = {
  Github, Linkedin, ExternalLink,
};

const Contact = () => {
  return (
    <SectionContainer>
      <h1 className="page-title">Contact</h1>
      <p className="page-subtitle mt-2 mb-4">Let's connect — I'd love to hear from you.</p>
      <div className="accent-line mb-10" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact details */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl">Get In Touch</h2>
          <div className="space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"><Mail size={18} /></div>
              <span className="text-sm">{contactInfo.email}</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"><MapPin size={18} /></div>
              <span className="text-sm">{contactInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl">Profiles</h2>
          <div className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || ExternalLink;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:border-accent/30 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium">{link.platform}</span>
                  <ExternalLink size={14} className="ml-auto text-muted-foreground" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
