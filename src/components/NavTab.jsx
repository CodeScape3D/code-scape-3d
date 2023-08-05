import PropTypes from 'prop-types'

export const NavTab = ({ text, onClick = () => {}, iconSrc = "" }) => {
    return (
        <button className="nav-tab nav-tab" onClick={onClick}>
            <span className="text-2xl md:text-base">{text}</span>
            {
                iconSrc !== "" && <img src={iconSrc} alt="UserLogo" />
            }
        </button>
    )
}



NavTab.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    iconSrc: PropTypes.string
}
