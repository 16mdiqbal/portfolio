export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}

export const contactInfo = {
  email: "16.mdiqbal@gmail.com",
  phone: "",
  location: "Japan",
};

// Add your social/profile links here.
export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/16mdiqbal", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/mohammad-iqbal-ai-engineer/", icon: "Linkedin" },
];
