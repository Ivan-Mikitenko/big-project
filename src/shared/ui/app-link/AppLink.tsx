import cls from './AppLink.module.scss'
import {classNames} from "@/shared/lib/class-names/class-names";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface IAppLink extends LinkProps {
    theme?: AppLinkTheme,
}

// TODO: используем инкапсуляцию в shared слое?
export const AppLink: FC<IAppLink> = (props) => {
    const {children, theme = AppLinkTheme.PRIMARY, to, ...otherProps} = props

    return (
        <Link
            className={classNames(cls.appLink, {}, [])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )}
