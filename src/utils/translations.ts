export type Language = 'en' | 'pt';

export const translations = {
  pt: {
    // Navbar
    navHome: "Início",
    navExperience: "Experiência",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navContact: "Contato",

    // Hero
    role: "Desenvolvedor Fullstack",
    greeting: "Olá, eu sou",
    namePessoal: "Fred Lisboa",
    description: "Desenvolvedor Fullstack com experiência em React, React Native, Node.js e arquitetura de soluções escaláveis. Construo aplicações web e mobile de ponta a ponta — do backend robusto ao frontend elegante.",
    viewExperience: "Ver Experiência",
    contact: "Fale Comigo",
    seeSkills: "Ver Habilidades",
    project: "Projetos",
    downloadCV: "Download CV",

    // Experience
    careerJourney: "Trajetória Profissional",
    professionalExperience: "Experiência Profissional",
    years: "Anos",
    year: "Ano",
    dataAnalyst: "Analista de Dados",
    dataAnalystDescription: "Utilizando ferramentas avançadas de análise e visualização para transformar dados complexos em insights acionáveis. Especialista em SQL, MySQL e Power BI para tomada de decisões baseada em dados.",
    softwareDev: "Desenvolvedor Fullstack",
    softwareDevDescription: "Desenvolvo soluções completas web e mobile com React, React Native e Node.js. Crio APIs REST bem estruturadas, interfaces modernas e apps mobile nativos. Experiência com bancos de dados relacionais (PostgreSQL) e não relacionais (MongoDB, Firebase), além de deploy em cloud (GCP, AWS). Aplico testes automatizados com Jest e Vitest para garantir qualidade.",

    // Skills
    skillsExpertise: "Habilidades & Especialidades",
    technicalExpertise: "Expertise Técnica",
    skillsSubtitle: "Tecnologias e ferramentas que uso para construir soluções completas",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    devopsTools: "DevOps & Tools",

    // Projects Section
    myProjects: "Meus Projetos",
    projectsDescription: "Uma coleção dos meus projetos mais recentes, demonstrando habilidades fullstack em desenvolvimento web, mobile e arquitetura de software.",
    featuredProject: "Projeto Destaque",
    viewAllProjects: "Ver todos os projetos no GitHub",
    viewOnGitHub: "Ver no GitHub",
    code: "Código",
    site: "Produção",
    liveDemo: "Ver ao Vivo",

    // Project Titles and Descriptions
    vaultTitle: "Vault - Gestão Financeira",
    vaultDesc: "Aplicação fullstack completa de gestão financeira pessoal com dashboard interativo, gráficos, controle de categorias, regras automáticas e relatórios. Backend em Node.js + Express, frontend em React + TypeScript, deploy no Google Cloud Run.",
    dashfinancelisboa: "Finance Control - Lisboa",
    dashfinancelisboaDesc: "Aplicação full-stack com login e dashboard para controle de finanças pessoais, com backend em TypeScript (Node.js, Express) e frontend em React + TypeScript.",
    appointmentScheduler: "Agendador de Compromissos",
    appointmentSchedulerDesc: "Aplicação robusta em TypeScript para agendamento de compromissos com validações rigorosas de data e prevenção de conflitos.",
    taskManagerBackend: "Backend Gerenciador de Tarefas",
    taskManagerBackendDesc: "Backend completo para gerenciamento de tarefas em Node.js com TypeScript, Express e Prisma ORM com PostgreSQL.",
    microservicesArchitecture: "Arquitetura de Microserviços",
    microservicesArchitectureDesc: "Arquitetura completa de microserviços em Node.js + TypeScript com três serviços independentes demonstrando padrões modernos de desenvolvimento distribuído.",
    usersApiTypeScript: "API de Usuários TypeScript",
    usersApiTypeScriptDesc: "API REST completa para gerenciamento de usuários com Node.js, Express, TypeScript, MongoDB e autenticação JWT.",

    // Contact
    getInTouch: "Entre em Contato",
    contactMe: "Vamos Conversar",
    contactSubtitle: "Estou disponível para novos projetos e oportunidades. Vamos construir algo incrível juntos!",

    // Footer
    madeWith: "Feito com",
    by: "por",
  },
  en: {
    // Navbar
    navHome: "Home",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",

    // Hero
    role: "Fullstack Developer",
    greeting: "Hello, I'm",
    namePessoal: "Fred Lisboa",
    description: "Fullstack Developer experienced in React, React Native, Node.js and scalable solution architecture. I build end-to-end web and mobile applications — from robust backends to elegant frontends.",
    viewExperience: "View Experience",
    contact: "Contact Me",
    seeSkills: "See Skills",
    project: "Projects",
    downloadCV: "Download CV",

    // Experience
    careerJourney: "Career Journey",
    professionalExperience: "Professional Experience",
    years: "Years",
    year: "Year",
    dataAnalyst: "Data Analyst",
    dataAnalystDescription: "Leveraging advanced analytics and visualization tools to transform complex data into actionable insights. Expertise in SQL, MySQL, and Power BI for data-driven decision making.",
    softwareDev: "Fullstack Developer",
    softwareDevDescription: "I build complete web and mobile solutions with React, React Native and Node.js. I create well-structured REST APIs, modern interfaces and native mobile apps. Experience with relational (PostgreSQL) and non-relational (MongoDB, Firebase) databases, plus cloud deployment (GCP, AWS). I apply automated testing with Jest and Vitest to ensure quality.",

    // Skills
    skillsExpertise: "Skills & Expertise",
    technicalExpertise: "Technical Expertise",
    skillsSubtitle: "Technologies and tools I use to build complete solutions",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    devopsTools: "DevOps & Tools",

    // Projects Section
    myProjects: "My Projects",
    projectsDescription: "A collection of my most recent projects, showcasing fullstack skills in web development, mobile apps, and software architecture.",
    featuredProject: "Featured Project",
    viewAllProjects: "View all projects on GitHub",
    viewOnGitHub: "View on GitHub",
    code: "Code",
    site: "Production",
    liveDemo: "Live Demo",

    // Project Titles and Descriptions
    vaultTitle: "Vault - Financial Management",
    vaultDesc: "Complete fullstack personal finance management app with interactive dashboard, charts, category management, automatic rules and reports. Node.js + Express backend, React + TypeScript frontend, deployed on Google Cloud Run.",
    dashfinancelisboa: "Finance Control - Lisboa",
    dashfinancelisboaDesc: "A full-stack application with login and dashboard for personal finance control, with a backend in TypeScript (Node.js, Express) and a frontend in React + TypeScript.",
    appointmentScheduler: "Appointment Scheduler",
    appointmentSchedulerDesc: "A robust TypeScript application for appointment scheduling with strict date validations and conflict prevention.",
    taskManagerBackend: "Task Manager Backend",
    taskManagerBackendDesc: "Complete backend for task management in Node.js with TypeScript, Express and Prisma ORM with PostgreSQL.",
    microservicesArchitecture: "Microservices Architecture",
    microservicesArchitectureDesc: "Complete microservices architecture in Node.js + TypeScript with three independent services demonstrating modern distributed development patterns.",
    usersApiTypeScript: "Users API TypeScript",
    usersApiTypeScriptDesc: "Complete REST API for user management with Node.js, Express, TypeScript, MongoDB and JWT authentication.",

    // Contact
    getInTouch: "Get in Touch",
    contactMe: "Let's Talk",
    contactSubtitle: "I'm available for new projects and opportunities. Let's build something amazing together!",

    // Footer
    madeWith: "Made with",
    by: "by",
  },
};