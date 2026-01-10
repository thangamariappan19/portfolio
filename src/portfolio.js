const header = {
  homepage: 'https://thangamariappan.vercel.app/',
  title: 'TM.',
}

const about = {
  name: 'Thanga Mariappan Pandian',
  role: 'Senior Full Stack (Angular) Engineer | Technology Lead',
  description:
    'Senior engineer with 9+ years of experience building and scaling enterprise e-commerce and web platforms for global clients including Siemens Gamesa, BASF and AGCO. Specialized in Angular (8–19), Spartacus, GraphQL and production-grade frontend architecture with strong ownership of performance, stability and CI/CD driven releases.',
  resume: '/Thanga_Mariappan.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/thanga-mariappan-p/',
    github: 'https://github.com/thangamariappan19',
  },
}

const projects = [
  {
    name: 'Siemens Gamesa – E-commerce Storefront',
    description:
      'Enterprise Spartacus-based Angular storefront serving 100K+ users. Worked on checkout flows, performance optimization and production releases reducing cart drop-offs by 20%. (Client project)',
    stack: ['Angular', 'Spartacus', 'TypeScript', 'REST APIs', 'SCSS'],
    category: 'E-Commerce',
  },
  {
    name: 'BASF Winecellar – Global Commerce Platform',
    description:
      'Built and maintained Angular-GraphQL based commerce platform integrated with Magnolia CMS, handling 50K+ transactions with 99% uptime. (Client project)',
    stack: ['Angular', 'GraphQL', 'Magnolia CMS', 'TypeScript'],
    category: 'E-Commerce',
  },
  {
    name: 'AGCO – Dealer & Equipment Platform',
    description:
      'Led Angular 8 → 13 migration improving runtime performance by 30% and build time by 40% across enterprise modules. (Client project)',
    stack: ['Angular', 'TypeScript', 'NgRx', 'Karma', 'Jasmine'],
    category: 'Enterprise',
  },
  {
    name: 'Tech Sheet',
    description:
      'Tech sheets for popular programming languages, frameworks and development tools built using Next.js and Tailwind.',
    stack: ['Next.js', 'Tailwind CSS', 'React'],
    category: 'Development Tools',
    sourceCode: 'https://github.com/thangamariappan19/techsheet.git',
    livePreview: 'https://techsheet.vercel.app/',
  },
]

const skills = {
  frontend: {
    title: 'Frontend',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'RxJS', 'NgRx', 'Tailwind CSS']
  },
  backend: {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs']
  },
  cms: {
    title: 'CMS & E-Commerce',
    items: ['Spartacus', 'Magnolia CMS', 'Contentful', 'WordPress', 'Shopify']
  },
  devops: {
    title: 'DevOps & Tools',
    items: ['Git', 'Docker', 'AWS', 'Azure DevOps', 'CI/CD', 'Webpack']
  },
  testing: {
    title: 'Testing',
    items: ['Karma', 'Jasmine']
  },
  methodologies: {
    title: 'Methodologies',
    items: ['Agile', 'Scrum']
  }
}

const contact = {
  email: 'thangamariappancse@gmail.com',
}

export { header, about, projects, skills, contact }
