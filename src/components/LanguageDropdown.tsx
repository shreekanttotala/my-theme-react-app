import React from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../i18n/config';

const LanguageDropdown: React.FC = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = (i18n.resolvedLanguage || 'en') as SupportedLanguage;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(e.target.value as SupportedLanguage);
  };

  return (
    <div className="toolbar-dropdown-wrapper">
      <svg
        className="toolbar-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <select
        aria-label={t('language_label')}
        className="toolbar-select"
        value={currentLanguage}
        onChange={handleChange}
      >
        <option value="en">{t('lang_en')}</option>
        <option value="de">{t('lang_de')}</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;