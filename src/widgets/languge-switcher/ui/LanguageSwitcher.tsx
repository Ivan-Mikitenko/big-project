import cls from './LanguageSwitcher.module.scss';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Button, ThemeButton } from '@/shared/ui/button';
import { Trans, useTranslation } from 'react-i18next';

type ThemeSwitcherProps = {
	className?: string;
};

export const LanguageSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { t, i18n } = useTranslation('main');

	const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

	return (
		<Button
			theme={ThemeButton.DEFAULT}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggle}>
			<Trans i18nKey='Translate' values={{ lang: i18n.language }} />
		</Button>
	);
};
