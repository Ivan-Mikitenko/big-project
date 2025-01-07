import './styles/index.scss'
import {useTheme} from "@/app/providers/theme-provider";
import {classNames} from "@/shared/lib/class-names/class-names";
import {RouterConfig} from "@/app/router";
import {Navbar} from "@/widgets/navbar";

export const App = () => {
    const {theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <RouterConfig/>
        </div>
    )
}

