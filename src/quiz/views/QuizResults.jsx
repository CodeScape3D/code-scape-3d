
import { AnswerSquare, AnswersChart, AnswersDetails } from "../components"
import { BasicButton } from "../../components"
import { svgCheck } from "../../assets/svg/SvgConstans"
import { useContext } from "react"
import { QuizContext } from "../context"
import { questionStates } from "../constants"

const AnswersRow = ({ data }) => {
    return (
        <div className="flex gap-3 flex-wrap w-full justify-center">
            {
                data.map((answer, index) => (
                    <AnswerSquare key={answer.answer} questionNumber={index + 1} isCorrect={answer.state === questionStates.CORRECT} />
                ))
            }
        </div>
    )
}

export const QuizResults = () => {

    const {
        correctAnswersCount,
        incorrectAnswersCount,
        score,
        approved,
        scoreStatistics,
        questions
    } = useContext(QuizContext)

    return (
        <>
            <div className="h-full w-full flex flex-grow flex-col py-6 px-10 items-start">
                <AnswersRow data={questions} />

                <div className="flex w-full flex-col md:flex-row flex-1 justify-center items-center gap-6">
                    <AnswersChart data={scoreStatistics} />
                    <AnswersDetails rightAnswersCount={correctAnswersCount} wrongAnswersCount={incorrectAnswersCount} rating={score} approved={approved} />
                    <div className="hidden lg:block animate__animated animate__backInRight">
                        {svgCheck}
                    </div>
                </div>

                <div className="flex flex-col mt-2 md:mt-0 md:flex-row w-full justify-center items-center gap-3">
                    <BasicButton backgroundColor="secondary.main">
                        <span>Finalizar cuestionario</span>
                    </BasicButton>
                    <BasicButton backgroundColor="secondary.main">
                        <span>Ver respuestas</span>
                    </BasicButton>
                </div>
            </div>
        </>
    )
}
