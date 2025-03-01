import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteConfig } from '@/shared/config/route-config/route-config';

export const RouterConfig = () => {
  const { t } = useTranslation('translation');

  return (
    <Suspense fallback={<p>{t('Loading')}</p>}>
      <Routes>
        {RouteConfig.map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
        <Route path="*" />
      </Routes>
    </Suspense>
  );
};
