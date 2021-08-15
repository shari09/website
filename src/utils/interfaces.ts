export interface NavLink {
  anchor: string;
  display: string;
}

export interface NavLinks { [key: string]: NavLink };

export interface SocialMedia {
  logoPath: string;
  link: string;
}

export interface Home {
  tag: string;
  name: string;
  options: string[];
  logoPath: string;
}

export interface Header {
  plain: string;
  emphasis: string;
}

export interface About {
  header: Header;
  quote: string;
  tagline: string;
  description: string;
}
