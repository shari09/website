import { Home, NavLinks, SocialMedia } from "./interfaces";

export const navLinks: NavLinks = {
  home: { anchor: 'home', display: 'HOME' },
  about: { anchor: 'about', display: 'ABOUT' },
  work: { anchor: 'work', display: 'WORK' },
  testimonies: { anchor: 'testimonies', display: 'TESTIMONIES' },
};

export const socialMedia: { [key: string]: SocialMedia } = {
  github: { logoPath: '', link: '' },
  linkedIn: { logoPath: '', link: '' },
  email: { logoPath: '', link: '' },
  devpost: { logoPath: '', link: '' },
};

export const home: Home = {
  tag: 'HELLO! MY NAME IS',
  name: 'SHARI SUN',
  options: [
    'Full Stack Developer',
    'Systems Design Engineering',
    'Food Lover',
    'Designer',

  ],
  logoPath: './assets/logo.png',
};
