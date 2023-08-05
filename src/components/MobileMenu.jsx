import PropTypes from 'prop-types'
import UserLogo from "../assets/user.png"
import CloseIcon from "../assets/icons/close.svg"
import { NavTab } from './NavTab'
import { useNavigate } from 'react-router-dom'

export const MobileMenu = ({ isHamburgerMenuVisible, hideHamburgerMenu }) => {

    const navigate = useNavigate();


    return (
        <div className={`absolute top-0 left-0 ${isHamburgerMenuVisible ? "flex" : "hidden"} flex-col items-center justify-center md:hidden bg-primary text-white opacity-95 w-screen h-screen z-50 animate__animated animate__slideInRight`}>

            <NavTab text="Inicio" onClick={() => { navigate("/"); hideHamburgerMenu() }} />
            <NavTab text="Aprende" onClick={() => { navigate("/aprende"); hideHamburgerMenu() }} />
            <NavTab text="Quizzes" onClick={() => { navigate("/quizzes"); hideHamburgerMenu() }} />
            <NavTab text="Minijuegos" onClick={() => { navigate("/mini-juegos"); hideHamburgerMenu() }} />

            <NavTab text="" iconSrc={UserLogo} />

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