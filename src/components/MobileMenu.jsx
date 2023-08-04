
import PropTypes from 'prop-types'
import UserLogo from "../assets/user.png"
import CloseIcon from "../assets/icons/close.svg"
import { NavTab } from './NavTab'

export const MobileMenu = ({ isHamburgerMenuVisible, hideHamburgerMenu }) => {

    return (
        <div className={`absolute top-0 left-0 ${isHamburgerMenuVisible ? "flex" : "hidden"} flex-col items-center justify-center md:hidden bg-primary text-white opacity-95 w-screen h-screen z-50 animate__animated animate__slideInRight`}>
            <NavTab text="Material Educativo" onClick={hideHamburgerMenu} />
            <NavTab text="Minijuegos" onClick={hideHamburgerMenu} />
            <NavTab text="Quizzes" onClick={hideHamburgerMenu} />
            <NavTab text="" onClick={hideHamburgerMenu} iconSrc={UserLogo} />
            <button className="absolute top-2 right-5" onClick={hideHamburgerMenu}>
                <img src={CloseIcon} width="24" alt="CloseIcon" />
            </button>
        </div>
    )
}

MobileMenu.propTypes = {
    isHamburgerMenuVisible: PropTypes.bool.isRequired,
    hideHamburgerMenu: PropTypes.func.isRequired
}