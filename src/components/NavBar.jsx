import { useState } from "react"
import { NavTabs, NavTab } from "./"
import Logo from "../assets/logo.png"
import UserLogo from "../assets/user.png"
import { MobileMenu } from "./MobileMenu"
import { useNavigate } from 'react-router-dom';
import { svgMenu } from "../assets/svg/SvgConstans"

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

                <svg
                    width="38"
                    height="38"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 38 38"
                    className="hidden md:block cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <image xlinkHref={Logo} width="38" height="38" />
                </svg>
                
                <NavTabs>
                    <NavTab text="Aprende" linkTo="/" />
                    <NavTab text="Quizzes" linkTo="/quizzes" />
                    <NavTab text="Minijuegos" linkTo="/mini-juegos" />
                </NavTabs>

                <button className="hidden md:block"><img src={UserLogo} width="38" /></button>

                <button className="block md:hidden p-1" onClick={showHamburgerMenu}>
                    {svgMenu}
                </button>
            </nav>

            <MobileMenu isHamburgerMenuVisible={isHamburgerMenuVisible} hideHamburgerMenu={hideHamburgerMenu} />
        </>
    )
}
