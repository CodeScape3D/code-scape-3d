import { useReducer } from "react"
import { quizReducer } from "../reducers"
import { quizActions } from "../actions"

export const useQuiz = (quizStructure = {}) => {

    const init = () => {
        const firstQuestion = quizStructure.questions[0]
        return {
            currentQuestionIndex: 0,
            currentQuestion: firstQuestion,
            questions: quizStructure.questions,
            totalQuestions: quizStructure.questions.length,
            currentQuestionState: quizStructure.questions[0].state,
            quizName: quizStructure.name
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

    const canFinishQuiz = () => {
        return quizState.questions.every(question => question.selectedAnswer != null)
    }

    const computeResults = () => {
        const action = {
            type: quizActions.computeResults
        }

        dispatch(action)
    }

    return {
        ...quizState,
        quizState,
        goToNextQuestion,
        goToPreviousQuestion,
        onAnswerSelected,
        onCheckAnswer,
        canFinishQuiz,
        computeResults
    }

}
