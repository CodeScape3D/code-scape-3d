import PropTypes from 'prop-types'

export const NavTab = ({ text }) => {
    return (
        <button className="nav-tab">
            {text}
        </button>
    )
}



NavTab.propTypes = {
    text: PropTypes.string.isRequired
}
