
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <div id="experience" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-purple-50 text-purple-700 rounded-full">
            {t('careerJourney')}
          </span>
          <h2 className="text-3xl font-bold text-gray-900">{t('professionalExperience')}</h2>
        </div>
        
        <div className="space-y-12">
          <div className="relative pl-8 border-l-2 border-purple-100">
            <div className="absolute -left-3 top-0">
              <div className="bg-white p-1.5 rounded-full border-2 border-purple-100">
                <Briefcase className="w-4 h-4 text-purple-500" />
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm text-purple-600 font-medium">4 {t('years')}</span>
              <h3 className="text-xl font-semibold text-gray-900">{t('dataAnalyst')}</h3>
              <p className="text-gray-600">{t('dataAnalystDescription')}</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-purple-100">
            <div className="absolute -left-3 top-0">
              <div className="bg-white p-1.5 rounded-full border-2 border-purple-100">
                <Briefcase className="w-4 h-4 text-purple-500" />
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm text-purple-600 font-medium">1 {t('year')}</span>
              <h3 className="text-xl font-semibold text-gray-900">{t('softwareDev')}</h3>
              <p className="text-gray-600">{t('softwareDevDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
