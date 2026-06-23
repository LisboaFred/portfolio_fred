import React from 'react';
import {
  ExternalLink,
  Github,
  FolderGit2,
  DollarSign,
  Calendar,
  Users,
  Layers,
  Smartphone,
  MailCheck,
  BriefcaseBusiness
} from 'lucide-react';
import ProjectCard from './ui/ProjectsCards';
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const featuredProject = {
    title: t('amorimAppTitle'),
    description: t('amorimAppDesc'),
    tech: ["React Native", "Expo", "Node.js", "Vercel", "Memberstack", "Resend", "JWT"],
    linkProject: "https://play.google.com/store/apps/details?id=com.dxdeveloper.amorimgloballegalapp&hl=pt_BR",
    icon: Smartphone,
    featured: true,
  };

  const projects = [
    {
      title: t('aiEmailTriageTitle'),
      description: t('aiEmailTriageDesc'),
      tech: ["TypeScript", "Node.js", "Gemini API", "IMAP", "MailParser", "WhatsApp API"],
      githubUrl: "https://github.com/LisboaFred/email-to-whatsapp-classifier",
      icon: MailCheck,
    },
    {
      title: t('dashfinancelisboa'),
      description: t('dashfinancelisboaDesc'),
      tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Recharts"],
      githubUrl: "https://github.com/LisboaFred/finance-lisboaFamily",
      linkProject: "https://finance-lisboa-family.vercel.app/login",
      icon: DollarSign,
    },
    {
      title: t('microservicesArchitecture'),
      description: t('microservicesArchitectureDesc'),
      tech: ["Node.js", "TypeScript", "Kafka", "Prisma", "PostgreSQL", "Microservices"],
      githubUrl: "https://github.com/LisboaFred/microservices",
      icon: Layers,
    },
    {
      title: t('developerPortfolioTitle'),
      description: t('developerPortfolioDesc'),
      tech: ["React", "TypeScript", "Tailwind CSS", "Context API", "Responsive UI"],
      githubUrl: "https://github.com/LisboaFred/portfolio_fred",
      linkProject: "https://fredlisboa.com",
      icon: BriefcaseBusiness,
    },
    {
      title: t('usersApiTypeScript'),
      description: t('usersApiTypeScriptDesc'),
      tech: ["Node.js", "TypeScript", "Express", "MongoDB", "JWT", "API REST"],
      githubUrl: "https://github.com/LisboaFred/users_typescript_api",
      icon: Users,
    },
    {
      title: t('appointmentScheduler'),
      description: t('appointmentSchedulerDesc'),
      tech: ["TypeScript", "Vitest", "date-fns", "Node.js", "Business Rules"],
      githubUrl: "https://github.com/LisboaFred/appointment_scheduler",
      icon: Calendar,
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{
        background: 'var(--section-bg-1)',
        transition: 'background 0.4s ease'
      }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(124, 58, 237, 0.06) 0%, transparent 50%)'
        }}
      />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium glass rounded-full mb-4"
            style={{ color: 'var(--badge-text)' }}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            {t('project')}
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('myProjects')}
          </h2>

          <p
            className="max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('projectsDescription')}
          </p>
        </div>

        {/* Featured Project */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <ProjectCard
            title={featuredProject.title}
            description={featuredProject.description}
            tech={featuredProject.tech}
            linkProject={featuredProject.linkProject}
            icon={featuredProject.icon}
            featured={featuredProject.featured}
          />
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`h-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                githubUrl={project.githubUrl}
                linkProject={project.linkProject}
                icon={project.icon}
              />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <a
            href="https://github.com/LisboaFred"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-xl font-semibold btn-neon"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Github className="w-5 h-5" />
            <span>{t('viewAllProjects')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;