import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavbarScroll } from '../hooks/useScrollAnimation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { t } = useLanguage();
    const { scrolled, activeSection } = useNavbarScroll();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { id: 'hero', label: t('navHome') },
        { id: 'experience', label: t('navExperience') },
        { id: 'expertise', label: t('navSkills') },
        { id: 'projects', label: t('navProjects') },
        { id: 'contact', label: t('navContact') },
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
                style={{
                    padding: scrolled ? '0.75rem 0' : '1.25rem 0',
                    background: scrolled ? 'var(--nav-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
                    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
                }}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('hero')}
                        className="text-lg font-bold gradient-text-static hover:opacity-80 transition-opacity"
                    >
                        FL<span style={{ color: 'var(--text-muted)' }}>.</span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                                    style={{
                                        color: activeSection === item.id ? 'var(--nav-active-text)' : 'var(--nav-text)',
                                        background: activeSection === item.id ? 'var(--nav-active-bg)' : 'transparent',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeSection !== item.id) {
                                            e.currentTarget.style.color = 'var(--nav-hover-text)';
                                            e.currentTarget.style.background = 'var(--nav-hover-bg)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeSection !== item.id) {
                                            e.currentTarget.style.color = 'var(--nav-text)';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        <div className="h-5 w-px" style={{ background: 'var(--divider-color)' }} />
                        <ThemeToggle />
                        <LanguageSelector />
                    </div>

                    {/* Mobile menu items */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <LanguageSelector />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 transition-colors"
                            style={{ color: 'var(--nav-text)' }}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute inset-0 backdrop-blur-lg" style={{ background: 'var(--nav-bg)', opacity: 0.98 }} onClick={() => setMobileOpen(false)} />
                <div className={`relative flex flex-col items-center justify-center h-full gap-6 transition-transform duration-500 ${mobileOpen ? 'translate-y-0' : '-translate-y-8'}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="text-2xl font-semibold transition-colors"
                            style={{
                                color: activeSection === item.id ? 'var(--nav-active-text)' : 'var(--text-secondary)',
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
