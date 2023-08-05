import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const NavTab = ({ text, onClick = () => {},  linkTo = "/" , iconSrc = "" }) => {
    return (
        <NavLink to={linkTo} onClick={onClick}  className={ ({isActive}) => `nav-tab ${isActive ? "nav-tab-active" : ""}`}>
            <span className="text-2xl md:text-base">{text}</span>
            {
                iconSrc !== "" && <img src={iconSrc} alt="UserLogo" />
            }
        </NavLink>
    )
}



NavTab.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    linkTo: PropTypes.string,
    iconSrc: PropTypes.string
}
