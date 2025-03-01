import './styles/index.scss';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/class-names/class-names';
import { RouterConfig } from '@/app/router';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

export const App = () => {
  const { theme } = useTheme();
  const { t } = useTranslation('translation');

  return (
    <Suspense fallback={<p>{t('Loading')}</p>}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <RouterConfig />
        </div>
      </div>
    </Suspense>
  );
};
