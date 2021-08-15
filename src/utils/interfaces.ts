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
