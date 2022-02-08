const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://thangamariappan.vercel.app/',
  title: 'TM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Thanga Mariappan',
  role: 'Front End Developer',
  description:
    'I am a Front-end Developer.I like to code things from scratch, I like dabbling in various parts of frontend development and like to learn about new technologies, read technical articles or simply play games in my free time.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/thanga-mariappan-p/',
    github: 'https://github.com/thangamariappan19',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tech Sheet',
    description:
      'Techsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single page.',
    stack: ['Next.js', 'Tailwind Css', 'React'],
    sourceCode: 'https://github.com/thangamariappan19/techsheet.git',
    livePreview: 'https://techsheet.vercel.app/',
  },
  {
    name: 'Portfolio',
    description:
      'The Complete Customizable Front End Developer Portfolio Template which lets you showcase your skills,work and provides each and every detail about you as Front End Developer.',
    stack: ['REACT', 'HTML', 'VERCEL'],
    sourceCode: 'https://github.com/thangamariappan19/portfolio.git',
    livePreview: 'https://thangamariappan.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'thangamariappancse@gmail.com',
}

export { header, about, projects, skills, contact }
