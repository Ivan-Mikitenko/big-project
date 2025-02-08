import cls from './ThemeSwitcher.module.scss';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Button, ThemeButton } from '@/shared/ui/button';
import { useTheme } from '@/app/providers/theme-provider';
import ThemeDark from '@/shared/assets/icons/theme-dark.svg';
import ThemeLight from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/app/providers/theme-provider/lib/theme-context';

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, handleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={handleTheme}>
			{theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
		</Button>
	);
};
