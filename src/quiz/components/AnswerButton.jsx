import { BasicButton } from "../../components"
import PropTypes from 'prop-types'

export const AnswerButton = ({ answerLetter, answerContent, onAnswerSelected = (answer) => {} }) => {
    return (
        <BasicButton backgroundColor="gray.primary" onClick={() => onAnswerSelected(answerLetter)}>
            <span className="block text-gray-900">{`${answerLetter}. ${answerContent}`}</span>
        </BasicButton>
  )
}

AnswerButton.propTypes = { 
    answerLetter: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func

}