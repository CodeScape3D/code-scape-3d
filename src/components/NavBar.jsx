import Logo from "../assets/logo.png"
import UserLogo from "../assets/user.png"
import { NavTabs, NavTab } from "./"


export const NavBar = () => {
    return (
        <nav className="w-full bg-primary flex items-center justify-between px-3">
            <img src={Logo} width="38" />

            <NavTabs>
                <NavTab text="Material educativo" />
                <NavTab text="Minijuegos" />
                <NavTab text="Quizzes" />
            </NavTabs>

            <img src={UserLogo} width="38" />
        </nav>
    )
}
