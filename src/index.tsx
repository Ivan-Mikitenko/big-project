import {render} from "react-dom";
import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./themeProvider/theme-provider";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
    ,document.getElementById('root')
)
