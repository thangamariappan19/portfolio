const header = {
  homepage: 'https://thangamariappan.vercel.app/',
  title: 'TM.',
}

const about = {
  name: 'Thanga Mariappan Pandian',
  role: 'Technology Lead | Frontend Architect',
  description:
    'Senior engineer with 9+ years of experience building and scaling enterprise e-commerce and web platforms for global leaders. Lead Architect of the Hybrid RTO Predictive Analytics system, specializing in Angular, research-grade forecasting, and privacy-preserving data architectures.',
  resume: null,
  social: {
    linkedin: 'https://www.linkedin.com/in/thanga-mariappan-p/',
    github: 'https://github.com/thangamariappan19',
  },
}

const projects = [
  {
    name: 'Hybrid RTO Predictive Analytics',
    description:
      'Enterprise-grade forecasting system to predict office occupancy patterns using multi-modal behavioral signals and privacy protocols.',
    stack: ['Angular', 'FastAPI', 'Python', 'Chart.js', 'SCSS'],
    category: 'Machine Learning',
    sourceCode: 'https://github.com/thangamariappan19/rto',
    livePreview: 'https://returntooffice.vercel.app/',
  },
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
