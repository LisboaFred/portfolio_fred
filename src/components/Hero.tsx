import { useEffect, useState } from 'react';
import { ArrowDown, Code2, Terminal, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = t('description');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 18);
    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--hero-bg)', transition: 'background 0.4s ease' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-72 h-72 rounded-full blur-3xl" style={{ background: 'var(--gradient-orb-purple)', animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--gradient-orb-cyan)', animation: 'float-slow 10s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'var(--gradient-orb-purple)', animation: 'float 12s ease-in-out infinite 4s' }} />

      {/* Floating tech icons */}
      <div className="absolute top-32 right-[20%] opacity-20" style={{ animation: 'float 5s ease-in-out infinite' }}>
        <Code2 className="w-8 h-8" style={{ color: 'var(--badge-text)' }} />
      </div>
      <div className="absolute bottom-40 left-[20%] opacity-20" style={{ animation: 'float 7s ease-in-out infinite 1s' }}>
        <Terminal className="w-8 h-8 text-cyan-500" />
      </div>
      <div className="absolute top-48 left-[10%] opacity-20" style={{ animation: 'float 6s ease-in-out infinite 2s' }}>
        <Smartphone className="w-6 h-6 text-pink-400" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-lines) 1px, transparent 1px), linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Role badge */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium glass rounded-full mb-6" style={{ color: 'var(--badge-text)' }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t('role')}
          </span>
        </div>

        {/* Greeting */}
        <p className="text-xl md:text-2xl mb-2 opacity-0 animate-fade-in-up font-light" style={{ animationDelay: '0.4s', color: 'var(--text-secondary)' }}>
          {t('greeting')}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span className="gradient-text">{t('namePessoal')}</span>
        </h1>

        {/* Description with typing effect */}
        <div className="max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
            {displayText}
            <span className={`inline-block w-0.5 h-5 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'var(--cursor-bg)' }} />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105"
          >
            <span className="flex items-center gap-2">
              {t('project')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3.5 glass rounded-xl font-semibold btn-neon"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('contact')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '1.4s' }}
      >
        <div className="flex flex-col items-center gap-2 transition-colors" style={{ color: 'var(--text-muted)' }}>
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
