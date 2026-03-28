import { useForm, ValidationError } from "@formspree/react";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Send } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/contact";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const iconMap: Record<string, React.ElementType> = {
  Github, Linkedin, ExternalLink,
};

const CALENDLY_URL = "https://calendly.com/16-mdiqbal";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpqowvbe");

  return (
    <SectionContainer>
      <h1 className="page-title">Contact</h1>
      <p className="page-subtitle mt-2 mb-4">Open to new opportunities, collaborations, and conversations. Feel free to reach out.</p>
      <div className="accent-line mb-10" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="space-y-8">
          {/* Contact details */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Get In Touch</h2>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"><Mail size={18} /></div>
              <span className="text-sm">{contactInfo.email}</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"><MapPin size={18} /></div>
              <span className="text-sm">{contactInfo.location}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl">Profiles</h2>
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

          {/* Book a call */}
          <div className="rounded-xl border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"><Calendar size={18} /></div>
              <h2 className="font-display text-xl">Book a Call</h2>
            </div>
            <p className="text-sm text-muted-foreground">Prefer to talk directly? Schedule a 30-minute call at a time that works for you.</p>
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Calendar size={16} className="mr-2" /> Schedule a Meeting
              </a>
            </Button>
          </div>

        </div>

        {/* Contact form */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl">Send a Message</h2>
          {state.succeeded ? (
            <div className="rounded-xl border bg-card p-8 text-center space-y-2">
              <p className="font-display text-xl">Message sent!</p>
              <p className="text-sm text-muted-foreground">Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Your Email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive mt-1" />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={6} required className="resize-none" />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-destructive mt-1" />
              </div>
              <Button type="submit" disabled={state.submitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Send size={16} className="mr-2" />
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
