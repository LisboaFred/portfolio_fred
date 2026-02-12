import React from "react";
import { Code, Server, Smartphone, Cloud, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TechnicalExpertise = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      title: t('frontend'),
      icon: Code,
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Vite'],
    },
    {
      title: t('backend'),
      icon: Server,
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-500',
      skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma ORM'],
    },
    {
      title: t('mobile'),
      icon: Smartphone,
      iconBg: 'bg-pink-500/10',
      iconColor: 'text-pink-500',
      skills: ['React Native', 'Expo', 'Firebase', 'Push Notifications', 'App Store/Play Store'],
    },
    {
      title: t('devopsTools'),
      icon: Cloud,
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500',
      skills: ['Git/GitHub', 'Docker', 'GCP', 'AWS', 'Jest/Vitest', 'CI/CD'],
    },
  ];

  return (
    <section id="expertise" className="relative py-24 overflow-hidden" style={{ background: 'var(--section-bg-2)', transition: 'background 0.4s ease' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)'
        }}
      />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium glass rounded-full mb-4" style={{ color: 'var(--badge-text)' }}>
            <Sparkles className="w-3.5 h-3.5" />
            {t('skillsExpertise')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{t('technicalExpertise')}</h2>
          <p style={{ color: 'var(--text-secondary)' }} className="max-w-xl mx-auto">{t('skillsSubtitle')}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`glass rounded-2xl p-6 md:p-8 card-hover-glow group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.iconBg} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-default"
                      style={{
                        background: 'var(--skill-bg)',
                        border: '1px solid var(--skill-border)',
                        color: 'var(--skill-text)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = 'var(--skill-hover-bg)';
                        el.style.borderColor = 'var(--skill-hover-border)';
                        el.style.color = 'var(--skill-hover-text)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = 'var(--skill-bg)';
                        el.style.borderColor = 'var(--skill-border)';
                        el.style.color = 'var(--skill-text)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
