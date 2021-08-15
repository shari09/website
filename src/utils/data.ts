import { Home, NavLinks, SocialMedia, About } from "./interfaces";

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
    'University of Waterloo',
    'Systems Design Engineering',
    'Food Lover',
    'Designer',
  ],
  logoPath: './assets/logo.png',
};

export const about: About = {
  header: {
    plain: 'What kind of person',
    emphasis: 'Am I',
  },
  quote: 'Engineering is the process of breaking down complex problems and solve them in the cleanest way possible',
  tagline: 'Design, Create, Test',
  description: `
Lorem ipsum dolor sit amet, vel eu accusam eligendi.
Illud appareat quo no, id assum nulla vix, eam ut labore 
consequat dissentiet. Veniam volumus antiopam ei mea. Nam no 
moderatius sadipscing, an probo volumus senserit mea. Ut quo option
concludaturque, malis vivendo eam cu, et ius altera dolores.`,
};
