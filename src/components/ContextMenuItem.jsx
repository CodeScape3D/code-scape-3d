import PropTypes from 'prop-types'

export const ContextMenuItem = ({text, icon = "", onClick = () => {}}) => {
    return (
        <button className="flex gap-2 w-full" onClick={onClick}>
            {
                icon !== "" && <img src={icon} width="24" />
            }
            <span className="text-white">{text}</span>
        </button>
    )
}

ContextMenuItem.propTypes = { 
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func,
}