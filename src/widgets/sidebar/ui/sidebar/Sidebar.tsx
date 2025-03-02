import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Button, ThemeButton } from '@/shared/ui/button/ui/Button';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LanguageSwitcher } from '@/widgets/languge-switcher';
import { ErrorButton } from '@/app/providers/error-boundary/ui/ErrorButton';

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('translation');

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(
      cls.sidebar,
      { [cls.collapsed]: collapsed },
      [className],
    )}
    >
      <Button onClick={toggleCollapsed} theme={ThemeButton.DEFAULT}>
        {collapsed ? t('Open') : t('Close')}
      </Button>
      <div className={cls.switchers}>
        <ErrorButton />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
