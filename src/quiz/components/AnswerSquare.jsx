import PropTypes from 'prop-types'

export const AnswerSquare = ({ questionNumber, isCorrect = false }) => {
  return (
    <span className={`block ${isCorrect ? "bg-success": "bg-danger"} px-4 py-2 rounded-lg font-bold animate__animated animate__bounceIn`}>{questionNumber}</span>
  )
}

AnswerSquare.propTypes = {
    questionNumber: PropTypes.number.isRequired,
    isCorrect: PropTypes.bool
}
