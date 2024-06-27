import { useDispatch, useSelector } from "react-redux"
import { AnswerButton, AnswersGrid, QuizQuestion } from "../components"
import { BasicButton } from "../../components"
import { Navigate, useNavigate } from "react-router-dom"
import { questionType } from "../constants"
import { setCurrentQuestion } from "../../store"
import { getAnimationNameByQuizName } from "../helpers"
import { useTranslation } from "react-i18next"


export const QuizAnswers = () => {

    const { questions, quizName } = useSelector(state => state.quiz)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    
    if (questions.length === 0) {
        return <Navigate to="/quizzes" />
    }

    return (
        <div className="w-11/12 md:w-3/4 max-w-screen-lg h-full flex flex-col justify-center items-center gap-3 py-4">
            {
                questions.map((question, index) => (
                    <div className="question-wrapper flex flex-col items-center w-full gap-3" key={index * 2}>
                        <QuizQuestion question={`${index + 1}. ${question.statement}`} index={index} />
                        <AnswersGrid>
                            {
                                Object.entries(question.options).map(([key, value]) => (
                                    <AnswerButton
                                        answerLetter={key}
                                        answerContent={value}
                                        onAnswerSelected={() => { }}
                                        isSelected={false}
                                        disabled={true}
                                    />
                                ))
                            }
                        </AnswersGrid>
                        <span className="block">{ t("correctOption") }</span>
                        <AnswerButton
                            answerLetter={question.answer}
                            answerContent={question.options[question.answer]}
                            disabled={true}
                        />
                        <span className="block">{ t("youChoose") }</span>
                        <AnswerButton
                            answerLetter={question.selectedAnswer}
                            answerContent={question.options[question.selectedAnswer]}
                            disabled={true}
                        />
                        <span className="">{ t("explanation") }:</span>
                        <p className="text-justify">{question.feedback}</p>
                        {
                            question.type === questionType.PRACTICAL && <BasicButton onClick={() => {
                                dispatch(setCurrentQuestion(question))
                                navigate(`/animacion/${getAnimationNameByQuizName(quizName)}`)
                            }}> { t("seeFeedback") } </BasicButton>
                        }
                    </div>
                ))
            }

            <div className="flex gap-3">
                <BasicButton onClick={() => navigate(-1)}>
                    {
                        t("back")
                    }
                </BasicButton>
                <BasicButton onClick={() => navigate("/quizzes")}>
                    {  
                        t("exit")
                    }
                </BasicButton>
            </div>
        </div>
    )
}
