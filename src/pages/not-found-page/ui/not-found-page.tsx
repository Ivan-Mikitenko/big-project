import React from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation('translation');

  return (
    <div>
      <h1>{t('NotFoundPage')}</h1>
    </div>
  );
};
