import { useState } from "react"
import { QuizContext } from "./QuizContext"
import { useQuiz } from "../hooks"
import { linkedListQuiz } from "../data"


export const QuizProvider = ({ children }) => {

    const [currentQuiz, setCurrentQuiz] = useState(linkedListQuiz)

    const {
        goToNextQuestion,
        goToPreviousQuestion,
        onCheckAnswer,
        onAnswerSelected,
        currentQuestion,
        totalQuestions,
        currentQuestionIndex,
        currentQuestionState,
        canFinishQuiz
    } = useQuiz(currentQuiz)

    return (
        <QuizContext.Provider value={{ 
            currentQuiz,
            setCurrentQuiz,
            goToNextQuestion,
            goToPreviousQuestion,
            onCheckAnswer,
            onAnswerSelected,
            currentQuestion,
            totalQuestions,
            currentQuestionIndex,
            currentQuestionState,
            canFinishQuiz
        }}>
            {children}
        </QuizContext.Provider>
    )
}
