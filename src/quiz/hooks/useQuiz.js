import { useReducer } from "react"
import { quizReducer } from "../reducers"
import { quizActions } from "../actions"

export const useQuiz = (quizStructure = {}) => {

    const init = () => {
        const firstQuestion = quizStructure.quiz[0]
        return {
            currentQuestionIndex: 0,
            currentQuestion: firstQuestion,
            quiz: quizStructure.quiz,
            totalQuestions: quizStructure.quiz.length,
        }
    }

    const [quizState, dispatch] = useReducer(quizReducer, quizStructure, init)

    const goToNextQuestion = () => { 
        const action = {
            type: quizActions.nextQuestion
        }
        dispatch(action)
    }

    const goToPreviousQuestion = () => { 
        const action = {
            type: quizActions.previousQuestion
        }
        dispatch(action)
    }

    const onAnswerSelected = (answer) => { 
        const action = {
            type: quizActions.answerSelected,
            payload: answer
        }

        dispatch(action)
    }

    const onCheckAnswer = () => {
        const action = {
            type: quizActions.checkAnswer
        }

        dispatch(action)
    }

    return {
        quizState,
        ...quizState,
        goToNextQuestion,
        goToPreviousQuestion,
        onAnswerSelected
    }
    
}
