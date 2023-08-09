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
        console.log(answer)
        dispatch(action)
    }

    return {
        ...quizState,
        goToNextQuestion,
        goToPreviousQuestion,
        onAnswerSelected
    }
    
}
