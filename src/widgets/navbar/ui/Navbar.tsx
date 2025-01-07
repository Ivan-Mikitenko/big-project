import {Link} from "react-router-dom";
import cls from './Navbar.module.scss'
import {classNames} from "@/shared/lib/class-names/class-names";
import {useTheme} from "@/app/providers/theme-provider";
import theme from "@storybook/addon-interactions/dist/ts3.9/theme";
import {createDefaultValueFromRawDefaultProp} from "@storybook/react/dist/ts3.9/client/docs/lib/defaultValues";
import {AppLink} from "@/shared/ui/app-link/AppLink";

export const Navbar = () => {
    const {theme, handleTheme } = useTheme()

    return (
        <div className={classNames(cls.navbar, {}, [theme])}>
            <div className={classNames(cls.linksContainer, {}, [])}>
                <AppLink to={'/other'} >other link</AppLink>
                <AppLink to={'/'}>main link</AppLink>
            </div>

            <button onClick={handleTheme}>THEME</button>
        </div>

    )
}
