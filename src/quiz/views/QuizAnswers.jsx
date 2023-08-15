import { useSelector } from "react-redux"
import { AnswerButton, AnswersGrid, QuizQuestion } from "../components"
import { BasicButton } from "../../components"
import { Navigate, useNavigate } from "react-router-dom"


export const QuizAnswers = () => {

    const { questions } = useSelector(state => state.quiz)
    const navigate = useNavigate()
    
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
                        <span className="block">Respuesta correcta:</span>
                        <AnswerButton
                            answerLetter={question.answer}
                            answerContent={question.options[question.answer]}
                            disabled={true}
                        />
                    </div>
                ))
            }

            <div className="flex gap-3">
                <BasicButton onClick={() => navigate(-1)}>
                    Volver
                </BasicButton>
                <BasicButton onClick={() => navigate("/quizzes")}>
                    Salir
                </BasicButton>
            </div>
        </div>
    )
}
