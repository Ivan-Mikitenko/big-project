import {useContext} from "react";
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from "./theme-context";

export const useTheme = ()  => {
    const {theme, setTheme} = useContext(ThemeContext)

    const handleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        localStorage.setItem(LOCAL_STORAGE_KEY, newTheme)
        setTheme(newTheme);
    }

    return {
        theme,
        handleTheme
    }
}
