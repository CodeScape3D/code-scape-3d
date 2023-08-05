import { BasicButton } from "../../components"
import PropTypes from 'prop-types'

export const AnswerButton = ({ text, onClick = () => {} }) => {
    return (
        <BasicButton backgroundColor="gray.primary" onClick={onClick}>
            <span className="block w-full h-full text-gray-900">{text}</span>
        </BasicButton>
  )
}

AnswerButton.propTypes = { 
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}