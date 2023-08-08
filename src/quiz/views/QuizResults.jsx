
import { AnswerSquare, AnswersChart, AnswersDetails } from "../components"
import { BasicButton } from "../../components"
import { svgCheck } from "../../assets/svg/SvgConstans"

const AnswersRow = () => {
    return (
        <div className="flex gap-3 flex-wrap w-full justify-center">
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map(number => (
                    <AnswerSquare key={number} questionNumber={number} isCorrect={number % 2 === 0} />
                ))
            }
        </div>
    )
}

export const QuizResults = () => {
    return (
        <>
            <div className="h-full w-full flex flex-col items-center md:items-start py-2  md:py-6 px-10 overflow-y-scroll md:overflow-y-auto">

                <AnswersRow />

                <div className="flex w-full flex-col md:flex-row flex-1 justify-center items-center gap-6">
                    <AnswersChart />
                    <AnswersDetails rightAnswersCount={7} wrongAnswersCount={3} rating={3.5} approved={true} />
                    <div className="hidden lg:block">
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
