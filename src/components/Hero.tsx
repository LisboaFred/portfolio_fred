
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToNextSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center space-y-6 max-w-3xl px-4">
        <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-purple-50 text-purple-700 rounded-full">
            {t('role')}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards]">
        {t('namePessoal')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_ease-in_0.6s_forwards]">
        {t('description')}
        </p>
        <div className="flex justify-center gap-4 mt-8 opacity-0 animate-[fadeIn_1s_ease-in_0.9s_forwards]">
          <button
            onClick={() => scrollToNextSection('experience')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            {t('viewExperience')}
          </button>
          <button
            onClick={() => scrollToNextSection('expertise')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            {t('seeSkills')}
          </button>
          <button
            onClick={() => scrollToNextSection('project')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            {t('project')}
          </button>
          <button
            onClick={() => scrollToNextSection('contact')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            {t('contact')}
          </button>
        </div>
      </div>
      <button
        onClick={() => scrollToNextSection('experience')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 opacity-0 animate-[fadeIn_1s_ease-in_1s_forwards]"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </button>
    </div>
  );
};

export default Hero;
