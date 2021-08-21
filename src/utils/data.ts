import { HomeSection, NavLinks, SocialMedia, AboutSection, SkillsSection, ExperienceSection, ProjectsSection, TestimoniesSection } from "./interfaces";

export const navLinks: NavLinks = {
  home: { anchor: 'home', display: 'HOME' },
  about: { anchor: 'about', display: 'ABOUT' },
  work: { anchor: 'work', display: 'WORK' },
  testimonies: { anchor: 'testimonies', display: 'TESTIMONIES' },
};

export const socialMedia: SocialMedia[] = [
  { logoPath: '/assets/social-media/devpost.svg', link: 'https://devpost.com/shari09' },
  { logoPath: '/assets/social-media/email.svg', link: 'mailto:sun.shari09@gmail.com' },
  { logoPath: '/assets/social-media/github.svg', link: 'https://github.com/shari09' },
  { logoPath: '/assets/social-media/linkedin.svg', link: 'https://www.linkedin.com/in/shari-sun-536477182/' },
];

export const homeSection: HomeSection = {
  tag: 'HELLO! MY NAME IS',
  name: 'SHARI SUN',
  options: [
    'Full Stack Developer',
    'University of Waterloo',
    'Systems Design Engineering',
    'Food Lover',
    'UI/UX Designer',
  ],
  logoPath: '/assets/logo.png',
};

export const aboutSection: AboutSection = {
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
    If you ever see me in real life, just know that buying me food will always make me happy :)
  `,
};

const skillsSection: SkillsSection = {
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
skillsSection.logos.forEach(({ path }, i) => { skillsSection.logos[i].path = `/assets/skills/${path}.svg` });
export { skillsSection };

export const experienceSection: ExperienceSection = {
  header: {
    plain: 'A few of what I\'ve done over',
    emphasis: 'The Years',
  },
  positions: [
    { 
      company: 'EQWorks [CVE: EQ]',
      role: 'Full Stack Developer Intern',
      description: 'Added powerful features to the core app that was demoed in various company-wide Tech Connects',
      duration: 'July - Sep 2021',
    },
    { 
      company: 'ULHacks',
      role: 'Head of Outreach | General Advisor',
      description: [
        `Organized the first iteration of ULHacks, a hackathon without any organization 
        backing such as schools or companies but we had an astonishing number of 250+ participants.`,
        'Negotiate with 10+ companies and organizations for sponsorship or partnership.',
      ],
      duration: 'June - Sep 2021',
    },
    { 
      company: 'Hatch Coding',
      role: 'Coding Instructor',
      description: `Mentored students from 7-18 regarding various programming concepts such as game
        developing, competitive programming, design patterns, or unit testing`,
      duration: '2019 - 2021',
    },
    { 
      company: 'YRHacks',
      role: 'Lead Organizer',
      description: 'Organized the first school board (YRDSB) hackathon with 300+ participants',
      duration: '2020 - 2021',
    },
  ],
};

export const projectsSection: ProjectsSection = {
  header: {
    plain: 'Collection of my recent',
    emphasis: 'Projects',
  },
  photoCards: [
    {
      name: 'RHHS Website',
      description: `A website informing all Richmond Hill High School students of the latest updates
        and school information such as clubs, events, gallery, etc.`,
      photoPath: '/assets/projects/stuco.png',
      link: 'https://rhhsstuco.ca',
    },
    {
      name: 'RHHS Website',
      description: `A website informing all Richmond Hill High School students of the latest updates
        and school information such as clubs, events, gallery, etc.`,
      photoPath: '/assets/projects/stuco.png',
      link: 'https://rhhsstuco.ca',
    },
  ],
  wordCards: [
    {
      name: 'ShiftBoard',
      languages: ['Django', 'SQLite', 'React.js', 'Python'],
      description: [
        `text. It's a convenient tool for mock-ups. It helps to outline 
        the visual elements of a document or presentation, eg typography, font, or layout.`,
        `Lorem ipsum is mostly a part of a Latin text by the classical author and 
        philosopher Cicero. Its words and letters have`,
        `been changed by addition or removal, so to deliberately render its content nonsensical; 
        it's not genuine, correct, or com`,
        `ted with the actual content still not being ready. Think of a news blog that's 
        filled with content hourly on`,
      ],
      link: 'https://github.com/shift-board',
    },
    {
      name: 'ShiftBoard',
      languages: ['Django', 'SQLite', 'React.js', 'Python'],
      description: [
        `text. It's a convenient tool for mock-ups. It helps to outline 
        the visual elements of a document or presentation, eg typography, font, or layout.`,
        `Lorem ipsum is mostly a part of a Latin text by the classical author and 
        philosopher Cicero. Its words and letters have`,
        `been changed by addition or removal, so to deliberately render its content nonsensical; 
        it's not genuine, correct, or com`,
        `ted with the actual content still not being ready. Think of a news blog that's 
        filled with content hourly on`,
        `ted with the actual content still not being ready. Think of a news blog that's 
        filled with content hourly on`,
      ],
      link: 'https://github.com/shift-board',
    },
    {
      name: 'ShiftBoard',
      languages: ['Django', 'SQLite', 'React.js', 'Python'],
      description: [
        `text. It's a convenient tool for mock-ups. It helps to outline 
        the visual elements of a document or presentation, eg typography, font, or layout.`,
        `Lorem ipsum is mostly a part of a Latin text by the classical author and 
        philosopher Cicero. Its words and letters have`,
        `been changed by addition or removal, so to deliberately render its content nonsensical; 
        it's not genuine, correct, or com`,
        `ted with the actual content still not being ready. Think of a news blog that's 
        filled with content hourly on`,
      ],
      link: 'https://github.com/shift-board',
    },
  ],
};

export const testimoniesSection: TestimoniesSection = {
  header: {
    plain: 'How am I like to',
    emphasis: 'Others',
  },
  testimonies: [
    {
      quote: 'is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ',
      author: 'EmeraldEntities',
    },
    {
      quote: 'is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements',
      author: 'EmeraldEntities',
    },
    {
      quote: 'is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ',
      author: 'EmeraldEntities',
    },
    {
      quote: 'is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ',
      author: 'EmeraldEntities',
    },
  ],
};

