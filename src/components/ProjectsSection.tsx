import React from 'react';
import { ExternalLink, Github, FolderGit2, DollarSign, Calendar, Database, Users, Layers, Shield } from 'lucide-react';
import ProjectCard from './ui/ProjectsCards';
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const featuredProject = {
    title: t('vaultTitle'),
    description: t('vaultDesc'),
    tech: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Google Cloud Run", "Tailwind CSS", "Recharts"],
    linkProject: "https://vault-1028028949462.southamerica-east1.run.app/login",
    icon: Shield,
    featured: true,
  };

  const projects = [
    {
      title: t('dashfinancelisboa'),
      description: t('dashfinancelisboaDesc'),
      tech: ["TypeScript", "React", "Node.js", "Express", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/LisboaFred/finance-lisboaFamily",
      linkProject: "https://finance-lisboa-family.vercel.app/login",
      icon: DollarSign,
    },
    {
      title: t('appointmentScheduler'),
      description: t('appointmentSchedulerDesc'),
      tech: ["TypeScript", "Vitest", "date-fns", "Node.js"],
      githubUrl: "https://github.com/LisboaFred/appointment_scheduler",
      icon: Calendar,
    },
    {
      title: t('taskManagerBackend'),
      description: t('taskManagerBackendDesc'),
      tech: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/LisboaFred/criacaoTarefasBackEnd",
      icon: Database,
    },
    {
      title: t('microservicesArchitecture'),
      description: t('microservicesArchitectureDesc'),
      tech: ["Node.js", "TypeScript", "Microservices", "Docker", "API REST"],
      githubUrl: "https://github.com/LisboaFred/microservices",
      icon: Layers,
    },
    {
      title: t('usersApiTypeScript'),
      description: t('usersApiTypeScriptDesc'),
      tech: ["Node.js", "TypeScript", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/LisboaFred/users-typescript-api",
      icon: Users,
    }
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ background: 'var(--section-bg-1)', transition: 'background 0.4s ease' }}>
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
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium glass rounded-full mb-4" style={{ color: 'var(--badge-text)' }}>
            <FolderGit2 className="w-3.5 h-3.5" />
            {t('project')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{t('myProjects')}</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{t('projectsDescription')}</p>
        </div>

        {/* Featured Project */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
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
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
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