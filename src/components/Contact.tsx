import { Mail, Phone, Github, Linkedin, Heart, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactLisboa = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "contato.fredericolisboa@gmail.com",
      href: "mailto:contato.fredericolisboa@gmail.com",
      color: "text-purple-500",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 31 99983-2108",
      href: "https://wa.me/5531999832108",
      color: "text-green-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/LisboaFred",
      href: "https://github.com/LisboaFred",
      color: "text-gray-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/fredericolisboa",
      href: "https://www.linkedin.com/in/frederico-lisboa-703877262/",
      color: "text-cyan-500",
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: 'var(--section-bg-2)', transition: 'background 0.4s ease' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)'
        }}
      />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium glass rounded-full mb-4" style={{ color: 'var(--badge-text)' }}>
            <MessageCircle className="w-3.5 h-3.5" />
            {t('getInTouch')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{t('contactMe')}</h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{t('contactSubtitle')}</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass rounded-2xl p-5 group flex items-center gap-4 transition-all duration-500 hover:translate-y-[-4px] card-hover-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl group-hover:scale-110 transition-transform" style={{ background: 'var(--icon-bg)' }}>
                  <Icon className={`w-5 h-5 ${contact.color}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>{contact.label}</h3>
                  <p className="font-medium text-sm truncate" style={{ color: 'var(--text-primary)' }}>{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className={`relative mt-20 pt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s', borderTop: '1px solid var(--divider-color)' }}>
        <p className="text-center text-sm flex items-center justify-center gap-1.5" style={{ color: 'var(--footer-text)' }}>
          {t('madeWith')} <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> {t('by')}
          <span className="gradient-text-static font-semibold ml-1">Frederico Lisboa</span>
        </p>
      </div>
    </section>
  );
};

export default ContactLisboa;