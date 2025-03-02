import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/button';

export const ErrorButton = () => {
  const { t } = useTranslation('translation');
  const [error, setError] = useState(false);
  const onError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onError} theme={ThemeButton.DEFAULT}>
      {t('Throw error')}
    </Button>
  );
};
