import { AnswerSquare } from "../components"

export const QuizResults = () => {
    return (
        <div className="h-full w-full flex flex-col py-3 px-10 items-start">
            <div className="flex gap-3">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(number => (
                        <AnswerSquare key={number} questionNumber={number} isCorrect={number % 2 === 0} />
                    ))
                }
            </div>
        </div>
    )
}
