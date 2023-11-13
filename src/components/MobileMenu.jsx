import PropTypes from 'prop-types'
import UserLogo from "../assets/user.png"
import { svgClose } from '../assets/svg/SvgConstans'
import { NavTab } from './NavTab'

export const MobileMenu = ({ isHamburgerMenuVisible, hideHamburgerMenu }) => {

    return (
        <div className={`absolute top-0 left-0 ${isHamburgerMenuVisible ? "flex" : "hidden"} flex-col items-center justify-center md:hidden bg-primary text-white opacity-95 w-screen h-screen z-50 animate__animated animate__slideInRight`}>

            <NavTab text="Aprende" linkTo="/" onClick={hideHamburgerMenu} />
            <NavTab text="Quizzes" linkTo="/quizzes" onClick={hideHamburgerMenu} />
            <NavTab text="Minijuegos" linkTo="/mini-juegos" onClick={hideHamburgerMenu} />
            <NavTab text="" linkTo='#!' iconSrc={UserLogo} onClick={hideHamburgerMenu} />

            <button className="absolute top-1 right-7" onClick={hideHamburgerMenu}>
                {svgClose}
            </button>
        </div>
    )
}

MobileMenu.propTypes = {
    isHamburgerMenuVisible: PropTypes.bool.isRequired,
    hideHamburgerMenu: PropTypes.func.isRequired
}