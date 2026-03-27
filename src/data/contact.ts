export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}

export const contactInfo = {
  email: "hello@yourname.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
};

// Add your social/profile links here.
export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { platform: "Twitter / X", url: "https://x.com", icon: "Twitter" },
];
