import { MainPageAsync } from '@/pages/main-page';
import { OtherPageAsync } from '@/pages/other-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { ErrorBoundary } from '@/app/providers/error-boundary';

export enum AppRoute {
	MAIN = 'main',
	OTHER = 'other',
	ERROR = 'error',
	NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.OTHER]: '/other',
  [AppRoute.ERROR]: '/error',
  [AppRoute.NOT_FOUND]: '*',
};

export const RouteConfig = [
  {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  {
    path: RoutePath.other,
    element: <OtherPageAsync />,
  },
  {
    path: RoutePath.error,
    element: <></>,
  },
  {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
];
