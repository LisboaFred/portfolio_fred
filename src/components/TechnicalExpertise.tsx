
import { Database, Code, Activity } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const TechnicalExpertise = () => {
  const { t } = useLanguage();

  return (
    <div id="expertise" className="py-20 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-purple-50 text-purple-700 rounded-full">
            {t('skillsExpertise')}
          </span>
          <h2 className="text-3xl font-bold text-gray-900">{t('technicalExpertise')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm transition-transform hover:scale-105">
            <div className="inline-block p-3 bg-blue-50 rounded-xl mb-6">
              <Database className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('dataAnalysis')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>SQL & MySQL</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Power BI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Data Visualization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Statistical Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Data Mining</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm transition-transform hover:scale-105">
            <div className="inline-block p-3 bg-purple-50 rounded-xl mb-6">
              <Code className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('development')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Node.js</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>API Integration</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm transition-transform hover:scale-105">
            <div className="inline-block p-3 bg-green-50 rounded-xl mb-6">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('toolsTech')}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Git</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Agile Methodologies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Azure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>JWT Authentication </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Jest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;
