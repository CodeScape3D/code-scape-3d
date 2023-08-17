import { questionStates } from "../../../quiz"
import {
    answerSelected,
    checkAnswer,
    computeResults,
    goToNextQuestion,
    goToPreviousQuestion,
    quizSlice,
    setQuiz
} from "../../../store"
import {
    correctlyAnsweredDemoQuizState,
    demoQuiz,
    dummyAnsweredDemoQuizState,
    incorrectlyAnsweredDemoQuizState,
    initialQuizState,
    quizFirstQuestionAnsweredCorrectlyState,
    quizFirstQuestionAnsweredIncorrectlyState,
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

    test("Debe seleccionar una respuesta y cambiarla en el estado", () => {
        const selectedAnswer = "a"
        const state = quizSlice.reducer(quizLoadedState, answerSelected(selectedAnswer))
        expect(state.questions[0].selectedAnswer).toBe(selectedAnswer)
        expect(state.currentQuestion.selectedAnswer).toBe(selectedAnswer)
    })

    test("Debe calificar la respuesta como correcta y cambiarla en el estado", () => {
        const state = quizSlice.reducer(quizFirstQuestionAnsweredCorrectlyState, checkAnswer())
        expect(state.questions[0].state).toBe(questionStates.CORRECT)
        expect(state.currentQuestion.state).toBe(questionStates.CORRECT)
    })

    test("Debe calificar la respuesta como incorrecta y cambiarla en el estado", () => {
        const state = quizSlice.reducer(quizFirstQuestionAnsweredIncorrectlyState, checkAnswer())
        expect(state.questions[0].state).toBe(questionStates.INCORRECT)
        expect(state.currentQuestion.state).toBe(questionStates.INCORRECT)
    })

    test("Debe de calificar el quiz correctamente", () => {
        const expectedCorrectAnswersCount = 1
        const expectedIncorrectAnswersCount = 2
        const expectedScore = 1.67
        const state = quizSlice.reducer(dummyAnsweredDemoQuizState, computeResults())

        const { correctAnswersCount, incorrectAnswersCount, score, approved, scoreStatistics } = state.quizResults

        expect(correctAnswersCount).toBe(expectedCorrectAnswersCount)
        expect(incorrectAnswersCount).toBe(expectedIncorrectAnswersCount)
        expect(score).toBe(expectedScore.toString())
        expect(approved).toBeFalsy()
        expect(scoreStatistics).toEqual({
            datasets: [{ data: [correctAnswersCount, incorrectAnswersCount], backgroundColor: ["#87BA7A", "#FF7575"] }],
            totalQuestions: 3
        })
    })

    test("Cuando todas las preguntas estan respondidas correctamente, la calificación debe ser la máxima y debe estar aprobado", () => { 
        const state = quizSlice.reducer(correctlyAnsweredDemoQuizState, computeResults())
        const { score, approved } = state.quizResults
        expect(score).toBe("5.00")
        expect(approved).toBeTruthy()
    })

    test("Cuando todas las preguntas estan respondidas incorrectamente, la calificación debe ser la mínima y no debe estar aprobado", () => { 
        const state = quizSlice.reducer(incorrectlyAnsweredDemoQuizState, computeResults())
        const { score, approved } = state.quizResults
        expect(score).toBe("1.00")
        expect(approved).toBeFalsy()
    })

})