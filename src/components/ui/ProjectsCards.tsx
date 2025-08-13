// src/components/ui/ProjectCard.tsx
import React from 'react';
import { ExternalLink, Github, LucideIcon } from 'lucide-react';
import { useLanguage } from "../../context/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  linkProject: string;
  icon: LucideIcon;
  techColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  githubUrl, 
  linkProject,
  icon: Icon, 
  techColor 
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className={`p-1.5 rounded-lg ${techColor}`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            title={t('viewOnGitHub')}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {technology}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2 mt-auto pt-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-xs font-medium"
          >
            <Github className="w-3 h-3" />
            <span>{t('code')}</span>
          </a>
          {linkProject && (
            <a
              href={linkProject}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-200 text-xs font-medium"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{t('site')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;