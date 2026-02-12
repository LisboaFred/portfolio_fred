import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-xl transition-all duration-500 hover:scale-110 group"
            style={{
                background: theme === 'dark'
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(0,0,0,0.05)',
            }}
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                {/* Sun icon */}
                <Sun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'light'
                            ? 'opacity-100 rotate-0 scale-100 text-amber-500'
                            : 'opacity-0 rotate-90 scale-50 text-amber-500'
                        }`}
                />
                {/* Moon icon */}
                <Moon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark'
                            ? 'opacity-100 rotate-0 scale-100 text-purple-300'
                            : 'opacity-0 -rotate-90 scale-50 text-purple-300'
                        }`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;
