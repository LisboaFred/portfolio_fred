import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-3.5 h-3.5 mr-1" style={{ color: 'var(--text-muted)' }} />
      <button
        onClick={() => setLanguage('pt')}
        className="px-2 py-1 rounded-md text-xs font-semibold transition-all duration-300"
        style={{
          background: language === 'pt' ? 'var(--badge-bg)' : 'transparent',
          color: language === 'pt' ? 'var(--badge-text)' : 'var(--text-muted)',
          border: language === 'pt' ? '1px solid var(--badge-border)' : '1px solid transparent',
        }}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className="px-2 py-1 rounded-md text-xs font-semibold transition-all duration-300"
        style={{
          background: language === 'en' ? 'var(--badge-bg)' : 'transparent',
          color: language === 'en' ? 'var(--badge-text)' : 'var(--text-muted)',
          border: language === 'en' ? '1px solid var(--badge-border)' : '1px solid transparent',
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
