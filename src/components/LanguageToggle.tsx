import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="toggle-container">
      <button 
        className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        {t('lang_en')}
      </button>
      <button 
        className={`toggle-btn ${language === 'de' ? 'active' : ''}`}
        onClick={() => setLanguage('de')}
      >
        {t('lang_de')}
      </button>
    </div>
  );
};

export default LanguageToggle;