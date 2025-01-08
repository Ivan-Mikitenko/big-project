import cls from './Button.module.scss'
import {classNames} from "@/shared/lib/class-names/class-names";
import {FC} from "react";

export enum ThemeButton  {
    CLEAR = 'clear',
    DEFAULT = 'default'
}

type ButtonProps = {
    onClick: () => void;
    theme: ThemeButton;
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {onClick, className, children, theme} = props

    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} onClick={onClick}>
            {children}
        </button>
    )}
