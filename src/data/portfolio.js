


export const header = {
    title: 'TM.',
    subtitle: 'Principal Frontend Architect',
    homepage: 'https://thangamariappan.vercel.app/',
};

export const about = {
    name: 'Thanga Mariappan Pandian',
    role: 'Principal Frontend Architect',
    headline: 'Architecting scalable enterprise frontends for global leaders.',
    description:
        'With over 9 years of specialized experience, I transform complex business requirements into high-performance, maintainable web ecosystems. I have led frontend architecture for Fortune 500 companies including Siemens Gamesa, BASF, and AGCO, focusing on scalability, developer experience, and business impact.',
    resume: '/Thanga_Mariappan.pdf',
    metrics: [
        { label: 'Experience', value: '9+', suffix: 'Years' },
        { label: 'Enterprise Depts', value: '3', suffix: 'Global' },
        { label: 'Users Impacted', value: '100', suffix: 'k+' },
    ],
    social: {
        linkedin: 'https://www.linkedin.com/in/thanga-mariappan-p/',
        github: 'https://github.com/thangamariappan19',
    },
};

export const projects = [
    {
        id: 'siemens-gamesa',
        name: 'Siemens Gamesa',
        title: 'Global E-commerce Storefront',
        role: 'Technical Lead',
        description: 'Enterprise B2B commerce platform serving wind turbine customers worldwide.',
        challenge: 'Legacy system suffered from high cart abandonment (25%+) and slow TTI (Time to Interactive) due to monolithic architecture.',
        solution: 'Re-architected the frontend using Angular & Spartacus (Headless Commerce). Implemented strict state management patterns, optimized critical rendering path, and established a component library.',
        stack: ['Angular', 'Spartacus', 'RxJS', 'TypeScript', 'SCSS'],
        metrics: [
            { label: 'Cart Abandonment', value: '↓ 20%' },
            { label: 'Performance', value: '98/100' },
            { label: 'Uptime', value: '99.9%' }
        ],
        category: 'Enterprise',
        links: {
            live: null, // Internal tool
            code: null,
        },
        featured: true,
    },
    {
        id: 'basf-winecellar',
        name: 'BASF Winecellar',
        title: 'Global Commerce Platform',
        role: 'Senior Frontend Engineer',
        description: 'High-traffic D2C e-commerce platform for one of the world\'s largest chemical producers.',
        challenge: 'Need for high reliability and seamless integration with Magnolia CMS for marketing flexibility during peak seasons.',
        solution: 'Designed a hybrid architecture using Angular and GraphQL to decouple the frontend from the CMS, enabling independent deployment cycles and faster content updates.',
        stack: ['Angular', 'GraphQL', 'Magnolia CMS', 'Docker'],
        metrics: [
            { label: 'Transactions/mo', value: '50k+' },
            { label: 'Uptime', value: '99.9%' },
        ],
        category: 'E-Commerce',
        featured: true,
    },
    {
        id: 'agco-dealer',
        name: 'AGCO Corporation',
        title: 'Dealer & Equipment Platform',
        role: 'Senior Engineer',
        description: 'Mission-critical platform for agricultural equipment dealers to manage inventory and sales.',
        challenge: 'Existing codebase was stuck on Angular 8, leading to slow build times and security vulnerabilities.',
        solution: 'Led the comprehensive migration strategy to Angular 13. Introduced monorepo structure (Nx) to share code between dealer and customer portals.',
        stack: ['Angular', 'Nx Monorepo', 'NgRx', 'Karma'],
        metrics: [
            { label: 'Runtime Perf', value: '↑ 30%' },
            { label: 'Build Time', value: '↓ 40%' },
        ],
        category: 'Enterprise',
        featured: true,
    },
    {
        id: 'tech-sheet',
        name: 'Tech Sheet',
        title: 'Developer Cheatsheets & Blog',
        role: 'Creator & Architect',
        description: 'A premium, markdown-powered platform for developers to manage cheatsheets and personal posts with dark mode support.',
        challenge: 'Developing a zero-friction content management system that combines high performance with aesthetic flexibility.',
        solution: 'Built with Next.js and Tailwind CSS for a refined developer experience. Featured MDX support for easy post writing and Vercel for world-class edge deployment.',
        stack: ['Next.js', 'Tailwind CSS', 'Markdown', 'Vercel', 'VsCode'],
        metrics: [
            { label: 'Lighthouse', value: '100/100' },
            { label: 'Dev Effort', value: 'Minimal' },
            { label: 'Dark Mode', value: 'Native' },
        ],
        category: 'Open Source',
        links: {
            live: 'https://techsheet.vercel.app/',
            code: 'https://github.com/thangamariappan19/techsheet.git',
        },
        featured: false,
    },
];

export const skills = {
    frontend: {
        title: 'Frontend Ecosystem',
        items: ['React 18', 'Angular (8-19)', 'TypeScript', 'Next.js', 'RxJS', 'Redux/NgRx']
    },
    backend: {
        title: 'Backend & Data',
        items: ['Node.js', 'Express', 'GraphQL', 'REST Architecture', 'PostgreSQL']
    },
    architecture: {
        title: 'Architecture & DevOps',
        items: ['Micro-frontends', 'CI/CD Pipelines', 'Docker', 'AWS', 'Nx Monorepo', 'Webpack']
    },
    tools: {
        title: 'Tools & Methods',
        items: ['Git', 'Jira', 'Agile/Scrum', 'Figma', 'Jest/Karma']
    }
};

export const contact = {
    email: 'thangamariappancse@gmail.com',
};
