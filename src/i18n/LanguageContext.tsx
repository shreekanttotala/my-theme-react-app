import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { translations } from './translations';
import type { Language, TranslationDictionary } from './types';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (
    key: keyof TranslationDictionary,
    params?: Record<string, string | number>
  ) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (
    key: keyof TranslationDictionary,
    params?: Record<string, string | number>
  ): string => {
    let text = translations[language][key] || key;
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(`{${paramKey}}`, String(value));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};