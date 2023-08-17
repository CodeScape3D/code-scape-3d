
import PropTypes from 'prop-types'

export const AnswersDetails = ({ rightAnswersCount, wrongAnswersCount, rating, approved, quizName }) => {
    return (
        <div className="flex flex-col justify-center items-center md:items-start">
            <span>Respuestas correctas: {rightAnswersCount}</span>
            <span>Respuestas incorrectas: {wrongAnswersCount}</span>
            <span>Calificación: {rating}</span>
            <span>Estado: <span className={`${approved ? "text-success" : "text-danger"} font-bold`}>{approved ? "Aprobado" : "Reprobado"}</span></span>
            {
                approved
                    ? <span className="text-center md:text-left">¡Felicidades has aprobado el cuestionario de <span className="font-bold">{quizName}</span>!</span>
                    : <span className="text-danger">¡Sigue intentando!</span>
            }
        </div>
    )
}

AnswersDetails.propTypes = {
    rightAnswersCount: PropTypes.number.isRequired,
    wrongAnswersCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    approved: PropTypes.bool.isRequired,
    quizName: PropTypes.string.isRequired
}
