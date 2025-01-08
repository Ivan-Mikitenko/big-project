import cls from './ThemeSwitcher.module.scss'
import {classNames} from "@/shared/lib/class-names/class-names";
import {FC} from "react";
import {Button, ThemeButton} from "@/shared/ui/button/ui/Button";

type ThemeSwitcherProps = {
    toggleTheme: () => void;
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {toggleTheme, className, children, ...otherProps} = props

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            {...otherProps}
        >
            {children}
        </Button>
    )}
