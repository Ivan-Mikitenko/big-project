import {Link, Route, Routes} from "react-router-dom";

import {Suspense} from "react";
import {MainPageAsync} from "./pages/mainPage/main-page-async";
import {OtherPageAsync} from "./pages/otherPage/other-page-async";

export const App = () => {
    return (
        <>
            <Link to={'/other'}>other link</Link>
            <Link to={'/main'}>main link</Link>
            <Suspense fallback={<p>...Loading</p>}>
                <Routes>
                    <Route path={'/main'} element={<MainPageAsync />} />
                    <Route path={'/other'} element={<OtherPageAsync />} />
                </Routes>
            </Suspense>
        </>
    )
}
