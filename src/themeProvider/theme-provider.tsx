import {FC, useState} from "react";
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from "./theme-context";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
