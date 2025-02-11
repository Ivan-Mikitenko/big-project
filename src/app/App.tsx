import './styles/index.scss';
import { useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/class-names/class-names';
import { RouterConfig } from '@/app/router';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { Suspense } from 'react';

export const App = () => {
	const { theme } = useTheme();

	return (
		<Suspense fallback={<>Loading...</>}>
			<div className={classNames('app', {}, [theme])}>
				<Navbar />
				<div className={'content-page'}>
					<Sidebar />
					<RouterConfig />
				</div>
			</div>
		</Suspense>
	);
};
