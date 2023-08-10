import { quizActions } from "../actions";
import { questionStates } from "../constants/";


export const quizReducer = (state = {}, action) => {

    switch (action.type) {
        case quizActions.nextQuestion:
            if (state.currentQuestionIndex < state.totalQuestions - 1) {
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    currentQuestion: state.quiz[state.currentQuestionIndex + 1],
                    currentQuestionState: state.quiz[state.currentQuestionIndex + 1].state
                }
            }

            return state
        case quizActions.previousQuestion:
            if (state.currentQuestionIndex > 0) {
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex - 1,
                    currentQuestion: state.quiz[state.currentQuestionIndex - 1],
                    currentQuestionState: state.quiz[state.currentQuestionIndex - 1].state
                }
            }

            return state
        case quizActions.answerSelected:

            const newQuizState = state.quiz.map((question, index) => {
                if (index === state.currentQuestionIndex) {
                    return {
                        ...question,
                        selectedAnswer: action.payload
                    }
                }

                return question
            })


            return {
                ...state,
                quiz: newQuizState,
                currentQuestion: newQuizState[state.currentQuestionIndex]
            }

        case quizActions.checkAnswer:
            const currentQuestion = state.quiz[state.currentQuestionIndex]
            const isCorrect = currentQuestion.selectedAnswer === currentQuestion.answer
            const newQuizState2 = state.quiz.map((question, index) => {
                if (index === state.currentQuestionIndex) {
                    return {
                        ...question,
                        state: isCorrect ? questionStates.CORRECT : questionStates.INCORRECT
                    }
                }

                return question
            })  

            return { 
                ...state,
                quiz: newQuizState2,
                currentQuestion: newQuizState2[state.currentQuestionIndex],
                currentQuestionState: newQuizState2[state.currentQuestionIndex].state
            }



        default:
            return state;
    }

}
