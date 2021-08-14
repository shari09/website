export interface NavLink {
  link: string;
  display: string;
}

type SocialMediaTypes = 'github' | 'linkedIn' | 'email' | 'devpost';

export interface SocialMedia {
  type: SocialMediaTypes;
  logoPath: string;
  link: string;
}
