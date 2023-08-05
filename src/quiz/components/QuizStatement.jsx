
import PropTypes from 'prop-types'

export const QuizStatement = ({ question }) => {
    return (
        <span className="block mb-4">{question}</span>
    )
}

QuizStatement.propTypes = {
    question: PropTypes.string.isRequired
}
