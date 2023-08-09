import { quizActions } from "../actions";


export const quizReducer = (state = {}, action) => {

    switch (action.type) {
        case quizActions.nextQuestion:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                currentQuestion: state.quiz[state.currentQuestionIndex + 1]
            }
        case quizActions.previousQuestion:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1,
                currentQuestion: state.quiz[state.currentQuestionIndex - 1]
            }
        case quizActions.answerSelected:
            return { 
                ...state,
                selectedAnswer: action.payload
            }
        default:
            return state;
    }

}
