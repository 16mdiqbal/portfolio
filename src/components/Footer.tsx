import { socialLinks } from "@/data/contact";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  ExternalLink,
};

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohammad Iqbal. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || ExternalLink;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.platform}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
