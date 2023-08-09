import { quizActions } from "../actions";


export const quizReducer = (state = {}, action) => {

    switch (action.type) {
        case quizActions.nextQuestion:
            if (state.currentQuestionIndex < state.totalQuestions - 1) {
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    currentQuestion: state.quiz[state.currentQuestionIndex + 1]
                }
            } 

            return state
        case quizActions.previousQuestion:
            if (state.currentQuestionIndex > 0) {
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex - 1,
                    currentQuestion: state.quiz[state.currentQuestionIndex - 1]
                }
            }

            return state
        case quizActions.answerSelected:
            return { 
                ...state,
                selectedAnswer: action.payload
            }
        default:
            return state;
    }

}
