import cls from './Navbar.module.scss'
import {classNames} from "@/shared/lib/class-names/class-names";
import {useTheme} from "@/app/providers/theme-provider";
import {AppLink} from "@/shared/ui/app-link/AppLink";
import {ThemeSwitcher} from "@/shared/ui/theme-switcher";
import ThemeDark from '@/shared/assets/icons/theme-dark.svg'
import ThemeLight from '@/shared/assets/icons/theme-light.svg'
import {Theme} from "@/app/providers/theme-provider/lib/theme-context";

export const Navbar = () => {
    const {theme, handleTheme } = useTheme()

    return (
        <div className={classNames(cls.navbar, {}, [theme])}>
            <div className={classNames(cls.linksContainer, {}, [])}>
                <AppLink to={'/other'} >other link</AppLink>
                <AppLink to={'/'}>main link</AppLink>
            </div>

            <ThemeSwitcher toggleTheme={handleTheme}>
                {theme === Theme.DARK ? <ThemeDark/> : <ThemeLight/>}
            </ThemeSwitcher>
        </div>

    )
}
