import {MainPageAsync} from "@/pages/main-page";
import {OtherPageAsync} from "@/pages/other-page";
import {RouteProps} from "react-router-dom";

export enum AppRoute {
    MAIN = 'main',
    OTHER = 'other',
    ERROR = 'error'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.OTHER]: '/other',
    [AppRoute.ERROR]: '/error'
}

export const RouteConfig = [
    {
        path: RoutePath.main,
        element: <MainPageAsync/>
    },
    {
        path: RoutePath.other,
        element: <OtherPageAsync/>
    },
    {
        path: RoutePath.error,
        element: <></>
    },
]
