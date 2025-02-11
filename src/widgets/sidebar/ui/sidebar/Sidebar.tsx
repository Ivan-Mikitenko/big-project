import cls from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/class-names/class-names';
import { Button, ThemeButton } from '@/shared/ui/button/ui/Button';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LanguageSwitcher } from '@/widgets/languge-switcher';

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button onClick={toggleCollapsed} theme={ThemeButton.DEFAULT}>
				{collapsed ? 'Открыть' : 'Закрыть'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
