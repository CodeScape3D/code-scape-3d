
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export const AnswersDetails = ({ rightAnswersCount, wrongAnswersCount, rating, approved, quizName }) => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col justify-center items-center md:items-start">
            <span>{`${t("correctAnswers")}: ${rightAnswersCount}`}</span>
            <span>{`${t("wrongAnswers")}: ${wrongAnswersCount}`}</span>
            <span>{`${t("score")}: ${rating}`}</span>
            <span>{t("state")}: <span className={`${approved ? "text-success" : "text-danger"} font-bold`}>{approved ? t("approved") : t("failed")}</span></span>
            {
                approved
                    ? <span className="text-center md:text-left">{ t("congratulations") } <span className="font-bold">{quizName}</span>!</span>
                    : <span className="text-danger">{t("keepTrying")}</span>
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
