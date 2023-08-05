import { useState } from "react"
import { NavTabs, NavTab } from "./"
import Logo from "../assets/logo.png"
import UserLogo from "../assets/user.png"
import Menu from "../assets/icons/menu.svg"
import { MobileMenu } from "./MobileMenu"

export const NavBar = () => {

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
                <img src={Logo} width="38" className="hidden md:block" />

                <NavTabs>
                    <NavTab text="Aprende"/>
                    <NavTab text="Minijuegos" />
                    <NavTab text="Quizzes" />
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
