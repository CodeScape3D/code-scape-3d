import { useState } from "react"
import { QuizContext } from "./QuizContext"

const initialState = {
    correctAnswersCount: 0,
    incorrectAnswersCount: 0,
    score: 0,
    approved: false,
    quizName: "",
    scoreStatistics: {
        datasets: [
            {
                data: [0, 0],
                backgroundColor: ["#87BA7A", "#FF7575"]
            }
        ]
    },
    questions: []
}

export const QuizProvider = ({ children }) => {

    const [currentQuizData, setCurrentQuizData] = useState(initialState)

    return (
        <QuizContext.Provider value={{
            ...currentQuizData,
            currentQuizData,
            setCurrentQuizData
        }}>
            {children}
        </QuizContext.Provider>
    )
}
