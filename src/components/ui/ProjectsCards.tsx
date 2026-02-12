import React from 'react';
import { ExternalLink, Github, LucideIcon } from 'lucide-react';
import { useLanguage } from "../../context/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  linkProject?: string;
  icon: LucideIcon;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  githubUrl,
  linkProject,
  icon: Icon,
  featured = false,
}) => {
  const { t } = useLanguage();

  if (featured) {
    return (
      <div className="col-span-full glass rounded-2xl overflow-hidden card-hover-glow group relative">
        {/* Gradient accent top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500" />

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full uppercase tracking-wider">
                  {t('featuredProject')}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>
                {title}
              </h3>
              <p className="leading-relaxed mb-6 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((technology, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg"
                    style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)', border: '1px solid var(--badge-border)' }}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {linkProject && (
                  <a
                    href={linkProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('liveDemo')}
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold btn-neon"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Github className="w-4 h-4" />
                    {t('code')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl overflow-hidden card-hover-glow group relative flex flex-col">
      {/* Subtle gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-xl transition-colors" style={{ background: 'var(--icon-bg)' }}>
            <Icon className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-purple-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {linkProject && (
              <a
                href={linkProject}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-cyan-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md"
              style={{ background: 'var(--skill-bg)', color: 'var(--text-muted)', border: '1px solid var(--skill-border)' }}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;