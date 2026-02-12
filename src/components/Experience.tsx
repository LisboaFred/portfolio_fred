import { Briefcase, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Experience = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const experiences = [
    {
      period: t('fullstackYears'),
      title: t('softwareDev'),
      description: t('softwareDevDescription'),
      icon: Rocket,
      color: 'from-purple-500 to-cyan-500',
    },
    {
      period: t('analystYears'),
      title: t('dataAnalyst'),
      description: t('dataAnalystDescription'),
      icon: Briefcase,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden" style={{ background: 'var(--section-bg-1)', transition: 'background 0.4s ease' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium glass rounded-full mb-4" style={{ color: 'var(--badge-text)' }}>
            <Briefcase className="w-3.5 h-3.5" />
            {t('careerJourney')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('professionalExperience')}</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative pl-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 md:p-8 card-hover-glow group">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r ${exp.color} text-white rounded-full mb-4`}>
                      {exp.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {exp.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
