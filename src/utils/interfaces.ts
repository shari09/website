export interface NavLink {
  anchor: string;
  display: string;
}

export interface NavLinks { [key: string]: NavLink };

export interface SocialMedia {
  logoPath: string;
  link: string;
}

export interface HomeSection {
  tag: string;
  name: string;
  options: string[];
  logoPath: string;
}

export interface Header {
  plain: string;
  emphasis: string;
}

export interface AboutSection {
  header: Header;
  quote: string;
  tagline: string;
  description: string;
}

export interface Logo {
  name: string;
  path: string;
}

export interface SkillsSection {
  header: Header;
  logos: Logo[];
}

export interface ExperienceSection {
  header: Header;
  positions: {
    company: string;
    role: string;
    description: string | string[];
    duration: string;
  }[];
}

export interface PhotoCard {
  photoPath: string;
  name: string;
  description: string;
  link: string;
}

export interface WordCard {
  name: string;
  description: string[];
  languages: string[];
  link: string;
}

export interface ProjectsSection {
  header: Header;
  photoCards?: PhotoCard[];
  wordCards?: WordCard[];
}

export interface Testimony {
  quote: string;
  author: string;
}

export interface TestimoniesSection {
  header: Header;
  testimonies: Testimony[];
}
