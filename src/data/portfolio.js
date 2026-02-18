


export const header = {
    title: 'TM.',
    subtitle: 'Technology Lead | Frontend Architect',
    homepage: 'https://thangamariappan.vercel.app/',
};

export const about = {
    name: 'Thanga Mariappan Pandian',
    role: 'Technology Lead | Frontend Architect',
    headline: 'Leading enterprise-scale frontend architecture and digital transformation.',
    description:
        'With over 9 years of specialized experience, I transform complex business requirements into high-performance, maintainable web ecosystems. I have led frontend architecture for Fortune 500 companies including Siemens Gamesa, BASF, and AGCO, focusing on scalability, developer experience, and business impact.',
    resume: null,
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
        id: 'svap',
        name: '🛫 Smart Visa Assistant Platform (SVAP)',
        title: 'Full-Stack AI Visa Intelligence',
        role: 'Architect & Lead Developer',
        description: 'An AI-powered ecosystem that simplifies international visa applications. Features a RAG-based assistant for real-time guidance on documentation and eligibility across 190+ countries.',
        challenge: 'Navigating the fragmented and frequently changing landscape of international visa regulations which vary drastically by nationality and destination.',
        solution: 'Engineered a high-performance web application using Angular 19 SSR and a Node.js/PostgreSQL backend. Integrated LLMs with specialized knowledge bases to provide accurate, context-aware visa advice.',
        stack: ['Angular 19', 'Node.js', 'PostgreSQL', 'LangChain', 'OpenAI', 'Vercel'],
        metrics: [
            { label: 'Framework', value: 'Angular 19' },
            { label: 'Core Tech', value: 'AI / RAG' },
            { label: 'Reach', value: '190+ Countries' }
        ],
        category: 'AI / Full Stack',
        links: {
            live: 'https://smartvisa.vercel.app/',
            code: 'https://github.com/thangamariappan19/svap',
        },
        featured: true,
    },
    {
        id: 'rch-id-guide',
        name: 'RCH ID Simple Guide',
        title: 'Reproductive & Child Health ID Tool',
        role: 'Creator & Architect',
        description: 'A dedicated portal helping users locate and understand their RCH (Reproductive and Child Health) ID, featuring multi-language support and a clean, accessible UI.',
        challenge: 'Simplifying the complex navigation of government health portals for non-technical users, particularly in regional languages.',
        solution: 'Built a lightweight, high-performance Angular application with robust internationalization (English/Tamil) and a custom design system for optimal accessibility.',
        stack: ['Angular', 'TypeScript', 'i18n', 'SCSS', 'Vercel'],
        metrics: [
            { label: 'Languages', value: '2' },
            { label: 'UX Score', value: 'High' },
            { label: 'Access', value: 'Global' }
        ],
        category: 'Health Tech',
        links: {
            live: 'https://rch-id-simple-guide.vercel.app/',
            code: 'https://github.com/thangamariappan19/rch-id-simple-guide/tree/main/rch-id-simple-guide',
        },
        featured: true,
    },
    {
        id: 'hybrid-rto',
        name: 'Hybrid RTO Predictive Analytics',
        title: 'Enterprise occupancy forecasting system',
        role: 'Lead Architect',
        description: 'A research-grade forecasting system designed to predict office occupancy patterns using multi-modal behavioral signals and privacy-preserving protocols.',
        challenge: 'Predicting employee behavioral patterns in a hybrid work environment while maintaining strict data privacy and anonymity.',
        solution: 'Developed a multi-modal forecasting engine combining badge swipes, calendar events, and weather signals. Implemented K-anonymity and differential privacy for ethical data processing.',
        stack: ['Angular', 'FastAPI', 'Python', 'Chart.js', 'SCSS'],
        metrics: [
            { label: 'Privacy', value: 'K-Anon' },
            { label: 'Frontend', value: 'Angular' },
            { label: 'Backend', value: 'FastAPI' }
        ],
        category: 'Machine Learning',
        links: {
            live: 'https://returntooffice.vercel.app/',
            code: 'https://github.com/thangamariappan19/rto',
        },
        featured: true,
    },
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
        featured: false,
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
        featured: false,
    },
    {
        id: 'tech-sheet',
        name: 'Tech Sheet',
        title: 'Developer Cheatsheets',
        role: 'Creator',
        description: 'A premium, markdown-powered platform for developers to manage cheatsheets with dark mode support.',
        challenge: 'Developing a zero-friction content management system with aesthetic flexibility.',
        solution: 'Built with Next.js and Tailwind CSS for a refined developer experience. Featured MDX support and Vercel edge deployment.',
        stack: ['Next.js', 'Tailwind', 'Markdown', 'Vercel'],
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
        items: ['Node.js', 'Python', 'FastAPI', 'GraphQL', 'REST Architecture', 'PostgreSQL']
    },
    architecture: {
        title: 'Architecture & DevOps',
        items: ['Micro-frontends', 'CI/CD Pipelines', 'Docker', 'AWS', 'Nx Monorepo', 'Webpack']
    },
    tools: {
        title: 'Tools & Methods',
        items: ['Git', 'Jira', 'Agile/Scrum', 'Figma', 'Jest/Karma', 'Chart.js']
    }
};

export const contact = {
    email: 'thangamariappancse@gmail.com',
};
