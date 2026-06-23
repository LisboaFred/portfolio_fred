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
    description: "Desenvolvedor Fullstack com experiência em aplicações web e mobile, APIs, integrações, automações e IA aplicada. Trabalho com React, React Native, Node.js, TypeScript e arquitetura de soluções escaláveis — do backend robusto ao frontend elegante.",
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
    fullstackYears: "4 Anos",
    analystYears: "1 Ano",
    dataAnalyst: "Analista de Dados",
    dataAnalystDescription: "Utilizando ferramentas avançadas de análise e visualização para transformar dados complexos em insights acionáveis. Especialista em SQL, MySQL e Power BI para tomada de decisões baseada em dados.",
    softwareDev: "Desenvolvedor Fullstack",
    softwareDevDescription: "Desenvolvo soluções completas web e mobile com React, React Native e Node.js. Crio APIs bem estruturadas, automações, integrações entre sistemas e soluções com IA aplicada. Tenho experiência com bancos relacionais e não relacionais, deploy em cloud, autenticação, dashboards, consumo de APIs externas e testes automatizados com Jest e Vitest.",

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
    projectsDescription: "Projetos práticos que demonstram minha experiência com aplicações web e mobile, APIs, automações, integrações, IA aplicada e arquitetura de software.",
    featuredProject: "Projeto Destaque",
    viewAllProjects: "Ver todos os projetos no GitHub",
    viewOnGitHub: "Ver no GitHub",
    code: "Código",
    site: "Produção",
    liveDemo: "Ver ao Vivo",

    // Project Titles and Descriptions
    amorimAppTitle: "Amorim Global App",
    amorimAppDesc: "Aplicativo corporativo fullstack em produção para a Amorim Global, desenvolvido com React Native e Expo. O app consome uma API Node.js serverless hospedada na Vercel e possui integração com autenticação, área do cliente e serviços externos.",

    aiEmailTriageTitle: "Triagem de E-mails com IA + WhatsApp",
    aiEmailTriageDesc: "Automação que monitora e-mails via IMAP, classifica mensagens com Gemini/LLM por prioridade e envia resumos executivos pelo WhatsApp.",

    dashfinancelisboa: "Finance Lisboa Family",
    dashfinancelisboaDesc: "Aplicação full-stack para controle de finanças pessoais, com autenticação, transações, categorias, dashboard, gráficos e análise de gastos.",

    microservicesArchitecture: "Arquitetura de Microserviços",
    microservicesArchitectureDesc: "Arquitetura de microserviços orientada a eventos com Node.js, TypeScript, Kafka, Prisma e PostgreSQL para clientes, produtos e pedidos.",

    developerPortfolioTitle: "Portfólio Profissional",
    developerPortfolioDesc: "Portfólio desenvolvido em React, TypeScript e Tailwind CSS, com layout responsivo, suporte multilíngue e apresentação dos principais projetos.",

    usersApiTypeScript: "API de Usuários TypeScript",
    usersApiTypeScriptDesc: "API REST para gerenciamento de usuários com Node.js, TypeScript, Express, MongoDB, autenticação, validações e estrutura modular.",

    appointmentScheduler: "Agendador de Compromissos",
    appointmentSchedulerDesc: "Serviço de agendamento em TypeScript com regras de negócio, validação de conflitos de horário, manipulação de datas e testes automatizados.",

    taskManagerBackend: "Backend Gerenciador de Tarefas",
    taskManagerBackendDesc: "Backend para gerenciamento de tarefas com Node.js, TypeScript, Express, Prisma e PostgreSQL, estruturado como API REST.",

    // Mantido apenas para evitar erro caso algum componente antigo ainda referencie essas chaves
    vaultTitle: "Vault - Gestão Financeira",
    vaultDesc: "Aplicação fullstack de gestão financeira pessoal com dashboard, gráficos, categorias e relatórios.",

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
    description: "Fullstack Developer experienced in web and mobile applications, APIs, integrations, automations and applied AI. I work with React, React Native, Node.js, TypeScript and scalable solution architecture — from robust backends to elegant frontends.",
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
    fullstackYears: "4 Years",
    analystYears: "1 Year",
    dataAnalyst: "Data Analyst",
    dataAnalystDescription: "Leveraging advanced analytics and visualization tools to transform complex data into actionable insights. Expertise in SQL, MySQL, and Power BI for data-driven decision making.",
    softwareDev: "Fullstack Developer",
    softwareDevDescription: "I build complete web and mobile solutions with React, React Native and Node.js. I create well-structured APIs, automations, system integrations and applied AI solutions. I have experience with relational and non-relational databases, cloud deployment, authentication, dashboards, external APIs and automated testing with Jest and Vitest.",

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
    projectsDescription: "Practical projects showcasing my experience with web and mobile apps, APIs, automations, integrations, applied AI and software architecture.",
    featuredProject: "Featured Project",
    viewAllProjects: "View all projects on GitHub",
    viewOnGitHub: "View on GitHub",
    code: "Code",
    site: "Production",
    liveDemo: "Live Demo",

    // Project Titles and Descriptions
    amorimAppTitle: "Amorim Global App",
    amorimAppDesc: "Fullstack corporate app in production for Amorim Global, built with React Native and Expo. The app consumes a serverless Node.js API hosted on Vercel and integrates authentication, client area features and external services.",

    aiEmailTriageTitle: "AI Email Triage + WhatsApp Automation",
    aiEmailTriageDesc: "Intelligent email triage system that monitors an inbox via IMAP, classifies messages with Gemini/LLM by priority and sends executive summaries through WhatsApp.",

    dashfinancelisboa: "Finance Lisboa Family",
    dashfinancelisboaDesc: "Full-stack personal finance application with authentication, transactions, categories, dashboard, charts and spending analytics.",

    microservicesArchitecture: "Microservices Architecture",
    microservicesArchitectureDesc: "Event-driven microservices architecture with Node.js, TypeScript, Kafka, Prisma and PostgreSQL for customers, products and orders.",

    developerPortfolioTitle: "Developer Portfolio",
    developerPortfolioDesc: "Professional portfolio built with React, TypeScript and Tailwind CSS, featuring responsive layout, multilingual support and project presentation.",

    usersApiTypeScript: "Users TypeScript API",
    usersApiTypeScriptDesc: "REST API for user management with Node.js, TypeScript, Express, MongoDB, authentication, validations and modular structure.",

    appointmentScheduler: "Appointment Scheduler",
    appointmentSchedulerDesc: "TypeScript scheduling service with business rules, time conflict validation, date handling and automated tests.",

    taskManagerBackend: "Task Manager Backend",
    taskManagerBackendDesc: "Task management backend built with Node.js, TypeScript, Express, Prisma and PostgreSQL, structured as a REST API.",

    // Kept only to avoid errors if an old component still references these keys
    vaultTitle: "Vault - Financial Management",
    vaultDesc: "Fullstack personal finance management app with dashboard, charts, categories and reports.",

    // Contact
    getInTouch: "Get in Touch",
    contactMe: "Let's Talk",
    contactSubtitle: "I'm available for new projects and opportunities. Let's build something amazing together!",

    // Footer
    madeWith: "Made with",
    by: "by",
  },
} as const;