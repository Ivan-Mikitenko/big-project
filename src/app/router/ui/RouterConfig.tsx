import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '@/shared/config/route-config/route-config';
import { Suspense } from 'react';

export const RouterConfig = () => {
	return (
		<Suspense fallback={<p>...Loading</p>}>
			<Routes>
				{RouteConfig.map(({ element, path }) => (
					<Route path={path} element={element} key={path} />
				))}
			</Routes>
		</Suspense>
	);
};
