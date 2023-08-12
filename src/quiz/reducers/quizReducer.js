import { quizActions } from "../actions";
import { questionStates } from "../constants/";


export const quizReducer = (state = {}, action) => {

    switch (action.type) {
        case quizActions.nextQuestion:
            if (state.currentQuestionIndex < state.totalQuestions - 1) {
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    currentQuestion: state.questions[state.currentQuestionIndex + 1],
                    currentQuestionState: state.questions[state.currentQuestionIndex + 1].state
                }
            }

            return state
        case quizActions.previousQuestion:
            if (state.currentQuestionIndex > 0) {
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex - 1,
                    currentQuestion: state.questions[state.currentQuestionIndex - 1],
                    currentQuestionState: state.questions[state.currentQuestionIndex - 1].state
                }
            }

            return state
        case quizActions.answerSelected:

            const newQuizState = state.questions.map((question, index) => {
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
                questions: newQuizState,
                currentQuestion: newQuizState[state.currentQuestionIndex]
            }

        case quizActions.checkAnswer:
            const currentQuestion = state.questions[state.currentQuestionIndex]
            const isCorrect = currentQuestion.selectedAnswer === currentQuestion.answer
            const newQuizState2 = state.questions.map((question, index) => {
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
                questions: newQuizState2,
                currentQuestion: newQuizState2[state.currentQuestionIndex],
                currentQuestionState: newQuizState2[state.currentQuestionIndex].state
            }

        case quizActions.computeResults:

            const correctAnswers = state.questions.filter(question => question.state === questionStates.CORRECT).length
            const incorrectAnswers = state.questions.filter(question => question.state === questionStates.INCORRECT).length
            const score = (correctAnswers / state.totalQuestions) * 5
            const approved = score >= 3
            const quizName = state.quizName
            const statistics = {
                data: [correctAnswers, incorrectAnswers],
            }
            const questions = quizState.questions

            return {
                ...state,
                results: {
                    correctAnswersCount: correctAnswers,
                    incorrectAnswersCount: incorrectAnswers,
                    score: score,
                    approved: approved,
                    quizName: quizName,
                    scoreStatistics: {
                        datasets: [
                            {
                                data: statistics.data,
                                backgroundColor: ["#87BA7A", "#FF7575"]
                            }
                        ]
                    },
                    questions: questions
                }
            }



        default:
            return state;
    }

}
