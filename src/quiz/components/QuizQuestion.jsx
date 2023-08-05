
import PropTypes from 'prop-types'

export const QuizQuestion = ({ question }) => {
    return (
        <span className="font-bold text-center">{question}</span>
    )
}

QuizQuestion.propTypes = {
    question: PropTypes.string.isRequired
}