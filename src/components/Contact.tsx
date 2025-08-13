import { Mail, Phone, Github, Linkedin  } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ContactLisboa= () => {
  const { t } = useLanguage();

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-purple-50 text-purple-700 rounded-full">
            {t('getInTouch')}
          </span>
          <h2 className="text-3xl font-bold text-gray-900">{t('contactMe')}</h2>
        </div>

        <div className="space-y-8 flex flex-col items-center">
          <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg transition-transform hover:scale-105 w-full max-w-xl">
            <div className="p-3 bg-purple-100 rounded-full">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:contato.fredericolisboa@gmail.com" className="text-purple-600 hover:text-purple-700">
                contato.fredericolisboa@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg transition-transform hover:scale-105 w-full max-w-xl">
            <div className="p-3 bg-green-100 rounded-full">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">WhatsApp</h3>
              <a href="https://wa.me/5531999832108" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                +55 31 99983-2108
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg transition-transform hover:scale-105 w-full max-w-xl">
            <div className="p-3 bg-gray-100 rounded-full">
              <Github className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">GitHub</h3>
              <a href="https://github.com/LisboaFred" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700">
                github.com/LisboaFred
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg transition-transform hover:scale-105 w-full max-w-xl">
            <div className="p-3 bg-blue-100 rounded-full">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/frederico-lisboa-703877262/"target="_blank"rel="noopener noreferrer"className="text-blue-600 hover:text-blue-700">
              linkedin.com/in/fredericolisboa/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLisboa;