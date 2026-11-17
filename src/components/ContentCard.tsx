import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const ContentCard: React.FC = () => {
  const { t } = useLanguage();
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="content-card">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? t('button_clicked') : t('button_idle')}
      </button>
    </div>
  );
};

export default ContentCard;