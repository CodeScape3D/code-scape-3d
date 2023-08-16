import { quizSlice, setQuiz } from "../../../store"
import { demoQuiz, initialQuizState } from "../../fixtures"

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

})