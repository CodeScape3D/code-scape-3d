import { useState } from "react"
import { NavTabs, NavTab } from "./"
import Logo from "../assets/logo.png"
import UserLogo from "../assets/user.png"
import Menu from "../assets/icons/menu.svg"
import { MobileMenu } from "./MobileMenu"
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {

    const navigate = useNavigate();

    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false)

    const showHamburgerMenu = () => {
        setIsHamburgerMenuVisible(true)
    }

    const hideHamburgerMenu = () => {
        setIsHamburgerMenuVisible(false)
    }

    return (
        <>
            <nav className="w-full bg-primary flex items-center justify-end md:justify-between px-3">

                <img src={Logo} width="38" className="hidden md:block cursor-pointer" onClick={() => navigate("/")} />

                <NavTabs>
                    <NavTab text="Inicio" onClick={() => { navigate("/") }} />
                    <NavTab text="Aprende" onClick={() => navigate("/aprende")} />
                    <NavTab text="Quizzes" onClick={() => navigate("/quizzes")} />
                    <NavTab text="Minijuegos" onClick={() => navigate("/mini-juegos")} />
                </NavTabs>

                <button className="hidden md:block"><img src={UserLogo} width="38" /></button>

                <button className="block md:hidden" onClick={showHamburgerMenu}>
                    <img src={Menu} width="38" />
                </button>
            </nav>

            <MobileMenu isHamburgerMenuVisible={isHamburgerMenuVisible} hideHamburgerMenu={hideHamburgerMenu} />
        </>
    )
}
