import { goToNextQuestion, goToPreviousQuestion, quizSlice, setQuiz } from "../../../store"
import {
    demoQuiz,
    initialQuizState,
    quizLastQuestionLoadedState,
    quizLoadedState,
    quizSecondQuestionLoadedState
} from "../../fixtures"

describe("Pruebas en el quizSlice", () => {

    test("Debe retornar el estado inicial y llamarse 'quiz'", () => {
        expect(quizSlice.name).toBe("quiz")
        const state = quizSlice.reducer(initialQuizState, {})
        expect(state).toEqual(initialQuizState)
    })

    test("Debe setear el quiz", () => {
        const state = quizSlice.reducer(initialQuizState, setQuiz(demoQuiz))
        const firstQuestion = demoQuiz.questions[0]
        expect(state).toEqual(
            {
                currentQuestionIndex: 0,
                currentQuestion: firstQuestion,
                questions: demoQuiz.questions,
                totalQuestions: demoQuiz.questions.length,
                quizName: demoQuiz.name,
                quizResults: {
                    correctAnswersCount: 0,
                    incorrectAnswersCount: 0,
                    score: 0,
                    approved: false,
                    scoreStatistics: {
                        datasets: [{ data: [0, 0], backgroundColor: ["#87BA7A", "#FF7575"] }]
                    }
                }
            }
        )
    })

    test("Debe ir a la siguiente pregunta e incrementar el indice de la pregunta actual", () => {
        const state = quizSlice.reducer(quizLoadedState, goToNextQuestion())
        const expectedIndex = 1
        const expectedQuestion = demoQuiz.questions[expectedIndex]
        expect(state.currentQuestionIndex).toBe(expectedIndex)
        expect(state.currentQuestion).toEqual(expectedQuestion)
    })

    test("Si esta en la ultima pregunta y se va a la pregunta siguiente, no debe pasar nada", () => {
        const state = quizSlice.reducer(quizLastQuestionLoadedState, goToNextQuestion())
        expect(state).toEqual(quizLastQuestionLoadedState)
    })

    test("Debe ir a la pregunta anterior y decrementar el indice de la pregunta actual", () => {
        const state = quizSlice.reducer(quizSecondQuestionLoadedState, goToPreviousQuestion())
        const expectedIndex = 0
        const expectedQuestion = demoQuiz.questions[expectedIndex]
        expect(state.currentQuestionIndex).toBe(expectedIndex)
        expect(state.currentQuestion).toEqual(expectedQuestion)
    })

    test("Si esta en la primera pregunta y se va a la pregunta anterior, no debe pasar nada", () => {
        const state = quizSlice.reducer(quizLoadedState, goToPreviousQuestion())
        expect(state).toEqual(quizLoadedState)
    })



})