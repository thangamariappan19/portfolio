const header = {
  homepage: 'https://thangamariappan.vercel.app/',
  title: 'TM.',
}

const about = {
  name: 'Thanga Mariappan',
  role: 'Senior Full Stack (Angular) Engineer | Technology Lead',
  description:
    'Senior engineer with 9+ years of experience building and scaling enterprise e-commerce and web platforms for global clients including Siemens Gamesa, BASF and AGCO. Specialized in Angular (8–19), Spartacus, GraphQL and production-grade frontend architecture with strong ownership of performance, stability and CI/CD driven releases.',
  resume: '', // add PDF link when ready
  social: {
    linkedin: 'https://www.linkedin.com/in/thanga-mariappan-p/',
    github: 'https://github.com/thangamariappan19',
  },
}

const projects = [
  {
    name: 'Siemens Gamesa – E-commerce Storefront',
    description:
      'Enterprise Spartacus-based Angular storefront serving 100K+ users. Worked on checkout flows, performance optimization and production releases reducing cart drop-offs by 20%.',
    stack: ['Angular', 'Spartacus', 'TypeScript', 'REST APIs', 'SCSS'],
  },
  {
    name: 'BASF Winecellar – Global Commerce Platform',
    description:
      'Built and maintained Angular-GraphQL based commerce platform integrated with Magnolia CMS, handling 50K+ transactions with 99% uptime.',
    stack: ['Angular', 'GraphQL', 'Magnolia CMS', 'TypeScript'],
  },
  {
    name: 'AGCO – Dealer & Equipment Platform',
    description:
      'Led Angular 8 → 13 migration improving runtime performance by 30% and build time by 40% across enterprise modules.',
    stack: ['Angular', 'TypeScript', 'NgRx', 'Karma', 'Jasmine'],
  },
  {
    name: 'Tech Sheet',
    description:
      'Tech sheets for popular programming languages, frameworks and development tools built using Next.js and Tailwind.',
    stack: ['Next.js', 'Tailwind CSS', 'React'],
    sourceCode: 'https://github.com/thangamariappan19/techsheet.git',
    livePreview: 'https://techsheet.vercel.app/',
  },
]

const skills = [
  'Angular',
  'Spartacus',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SCSS',
  'RxJS',
  'NgRx',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'Magnolia CMS',
  'Contentful',
  'Git',
  'Docker',
  'CI/CD',
  'Azure DevOps',
  'AWS'
]

const contact = {
  email: 'thangamariappancse@gmail.com',
}

export { header, about, projects, skills, contact }
