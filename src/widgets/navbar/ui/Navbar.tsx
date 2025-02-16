import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/class-names/class-names';
import { useTheme } from '@/app/providers/theme-provider';
import { AppLink } from '@/shared/ui/app-link';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(cls.navbar, {}, [theme])}>
      <div className={classNames(cls.links, {}, [])}>
        <AppLink to="/other">other link</AppLink>
        <AppLink to="/">main link</AppLink>
      </div>
    </div>
  );
};
