import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {useTheme} from "@/app/providers/theme-provider";
import {classNames} from "@/shared/lib/class-names/class-names";
import {RoutePath} from "@/shared/route-config/route-config";
import {RouterConfig} from "@/app/router";



export const Pages =() => {
    const {theme, handleTheme } = useTheme()

    return (
        <div  className={classNames('app', {} ,[theme])}>
            <button onClick={handleTheme}>THEME</button>
            <Link to={'/other'}>other link</Link>
            <Link to={'/'}>main link</Link>
            <RouterConfig/>
        </div>
    )
}
