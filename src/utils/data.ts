import { Home, NavLinks, SocialMedia, About, Skills, Experience } from "./interfaces";

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
I mainly do things related to web dev (no matter if it's frontend or backend), since web apps
are so prevalent right now. Aside from that, I also do UI/UX design (I designed this site)
but I haven't read upon any actual design guides. Everything was made with intuition.
If I ever have time, I'll try to get into cybersecurity because hacking sounds cool.
There are lots of things I like aside from programming.
In fact, I don't touch the computer at all outside my dedicated "learning hours".
I like digital drawing (though I haven't drawn in a while), painting, gaming (if it's non-competitive),
going out with friends (poor wallet though), photography, and photo/video editing (that's the one skill I wish I have).
If you ever see me in real life, just know that buying me food will always make me happy :)`,
};

const skills: Skills = {
  header: {
    plain: 'What are my',
    emphasis: 'Skills',
  },
  logos: [
    { name: 'Bootstrap', path: 'bootstrap' },
    { name: 'C++', path: 'cpp' },
    { name: 'CSS 3', path: 'css3' },
    { name: 'SQL', path: 'db' },
    { name: 'Django', path: 'django' },
    { name: 'Firebase', path: 'firebase' },
    { name: 'Google Cloud', path: 'google-cloud' },
    { name: 'HTML 5', path: 'html5' },
    { name: 'Java', path: 'java' },
    { name: 'Javascript', path: 'js' },
    { name: 'MongoDB', path: 'mongodb' },
    { name: 'NodeJS', path: 'nodejs' },
    { name: 'Python', path: 'python' },
    { name: 'ReactJS', path: 'reactjs' },
    { name: 'Typescript', path: 'ts' },
    { name: 'Vue.js', path: 'vue' },
  ],
};
skills.logos.forEach(({ path }, i) => { skills.logos[i].path = `./assets/skills/${path}.svg` });
export { skills };

export const experience: Experience = {
  header: {
    plain: 'What I have done over',
    emphasis: 'The Years',
  },
  positions: [
    { 
      company: 'EQWorks',
      role: 'Full Stack Developer Intern',
      description: 'Added powerful features to the core app that was demoed in various company-wide Tech Connects',
      duration: 'July - Sep 2021',
    },
    { 
      company: 'ULHacks',
      role: 'Head of Outreach',
      description: 'Added powerful features to the core app that was demoed in various company-wide Tech ConnectsAdded powerful features to the core app that was demoed in various company-wide Tech Connects',
      duration: 'July - Sep 2021',
    },
    { 
      company: 'Hatch Coding',
      role: 'Coding Instructor',
      description: 'Added powerful features to the core app that was demoed in various company-wide Tech Connects',
      duration: 'July - Sep 2021',
    },
    { 
      company: 'YRHacks',
      role: 'Lead Organizer',
      description: 'Added powerful features to the core app that was demoed in various company-wide Tech Connects',
      duration: 'July - Sep 2021',
    },
  ],
};
