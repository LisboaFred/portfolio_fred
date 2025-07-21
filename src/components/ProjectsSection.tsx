// src/components/sections/ProjectsSection.tsx
import React from 'react';
import { ExternalLink, Github, Calendar, Database, Users, Layers, DollarSign } from 'lucide-react';
import ProjectCard from './ui/ProjectsCards';
import { useLanguage } from "../context/LanguageContext";

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('dashfinancelisboa'),
      description: t('dashfinancelisboaDesc'),
      tech: ["TypeScript", "API REST", "JWT", "Node.js", "Vite", "ESLint", "Axios", "Tailwind CSS"],
      githubUrl: "https://github.com/LisboaFred/finance-lisboaFamily",
      icon: DollarSign,
      techColor: "bg-blue-500"
    },
    {
      title: t('appointmentScheduler'),
      description: t('appointmentSchedulerDesc'),
      tech: ["TypeScript", "Vitest", "date-fns", "Node.js"],
      githubUrl: "https://github.com/LisboaFred/appointment_scheduler",
      icon: Calendar,
      techColor: "bg-blue-500"
    },
    {
      title: t('taskManagerBackend'),
      description: t('taskManagerBackendDesc'),
      tech: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/LisboaFred/criacaoTarefasBackEnd",
      icon: Database,
      techColor: "bg-green-500"
    },
    {
      title: t('microservicesArchitecture'),
      description: t('microservicesArchitectureDesc'),
      tech: ["Node.js", "TypeScript", "Microservices", "Docker", "API REST"],
      githubUrl: "https://github.com/LisboaFred/microservices",
      icon: Layers,
      techColor: "bg-purple-500"
    },
    {
      title: t('usersApiTypeScript'),
      description: t('usersApiTypeScriptDesc'),
      tech: ["Node.js", "TypeScript", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/LisboaFred/users-typescript-api",
      icon: Users,
      techColor: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="projects">
      <div id="project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('myProjects')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              icon={project.icon}
              techColor={project.techColor}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/LisboaFred"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <Github className="w-6 h-6" />
            <span>{t('viewAllProjects')}</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;