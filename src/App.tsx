import {Link, Route, Routes} from "react-router-dom";
import {Suspense, useState} from "react";
import {MainPageAsync} from "./pages/mainPage/main-page-async";
import {OtherPageAsync} from "./pages/otherPage/other-page-async";
import './styles/index.scss'
import {useTheme} from "./themeProvider/use-theme";
import {classNames} from "./helpers/class-names/class-names";


export const App = () => {
    const {theme, handleTheme } = useTheme()

    return (
        <div  className={classNames('app', {test: true, delete: false} ,[theme])}>
            <button onClick={handleTheme}>THEME</button>
            <Link to={'/other'}>other link</Link>
            <Link to={'/'}>main link</Link>
            <Suspense fallback={<p>...Loading</p>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/other'} element={<OtherPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
