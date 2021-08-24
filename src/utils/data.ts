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
    'Looking for Winter 2022 co-op',
    'Food Lover',
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
    but I haven't read upon any actual design guides (I may be violating a lot of design architecture). 
    Everything was made with intuition.
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
    { name: 'JavaScript', path: 'js' },
    { name: 'MongoDB', path: 'mongodb' },
    { name: 'NodeJS', path: 'nodejs' },
    { name: 'Python', path: 'python' },
    { name: 'React', path: 'reactjs' },
    { name: 'TypeScript', path: 'ts' },
    { name: 'Vue', path: 'vue' },
  ],
};
skillsSection.logos.forEach(({ path }, i) => { skillsSection.logos[i].path = `/assets/skills/${path}.svg` });
export { skillsSection };

export const experienceSection: ExperienceSection = {
  header: {
    plain: 'Some positions I\'ve held',
    emphasis: 'Recently',
  },
  positions: [
    { 
      company: 'EQWorks [CVE: EQ]',
      role: 'Full Stack Developer Intern',
      description: 'Added powerful features to the core app using React and Express that was demoed in various company-wide Tech Connects.',
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
      description: `Developed curriculum for students from 7-18 regarding various programming concepts such as game
        developing, competitive programming, design patterns, or unit testing and personally mentored them.`,
      duration: '2019 - 2021',
    },
    { 
      company: 'YRHacks',
      role: 'Lead Organizer',
      description: 'Organized the first school board (YRDSB) hackathon with 300+ participants.',
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
      name: 'Duber Judge',
      description: `An online judge made without using any frameworks/libraries 
        (with the exception of SQLite Java SDK) where one can practice and sharpen their coding/algorithm 
        knowledge alongside everyone else in the community. `,
      photoPath: '/assets/projects/dubj.png',
      link: 'https://github.com/beepboop271/duber-judge',
    },
  ],
  wordCards: [
    {
      name: 'ShiftBoard',
      languages: ['Django', 'SQLite', 'React', 'Python', 'TypeScript'],
      description: [
        `Allows a user to create boards for other, anonymous users to put messages and pictures 
        related to the theme of the board. Anyone can contribute to the board as long 
        as they have a link so no need for annoying sign-ups.`,
        `Backend is built around Django (unit tests, routing, database connection).`,
        `Dedicated to an important person who passed away this year.`,
      ],
      link: 'https://github.com/shift-board',
    },
    {
      name: 'Mongo-Tsapp',
      languages: ['React Native', 'TypeScript', 'MongoDB', 'Firebase'],
      description: [
        `A user friendly mobile version of teach assist (a tool YRDSB uses for student markings).`,
        `Used MongoDB atlas for data storage and Stitch (BAAS) for serverless functions (polling on the official site)`,
        `Firebase is used for push notifications for mark updates.`,
      ],
      link: 'https://github.com/shari09/mongo-tsapp',
    },
    {
      name: 'Minute Aid',
      languages: ['Firebase', 'React', 'Chrome extension', 'Azure'],
      description: [
        `The extension allows users to transcribe Google Meets and store the transcript in the web app.`,
        `Azure Cognitive Services is used for automatically detecting keywords said in the meeting.`,
        `Web app hosted on Firebase.`,
        `Made for Hack The North 2020++.`,
      ],
      link: 'https://devpost.com/software/minute-aid',
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
      quote: 'OUTREACH MOMMMMMMMMMM!!!',
      author: 'Xiao',
    },
    {
      quote: 'She plays Bloons TD with me and that is cool',
      author: 'EmeraldEntities',
    },
    {
      quote: 'Shari is a charismatic senpai with wonderful leadership skills that also doubles as an arson target',
      author: 'Vivian (watch out)',
    },
    {
      quote: 'Shari has an excellent eye for design and front end programming',
      author: 'Kenzo',
    },
  ],
};

