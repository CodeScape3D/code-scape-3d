import { linkedListQuiz, quizReducer } from "../../../quiz";

describe('Pruevas en el reducer quizReducer', () => {
    
    const quiz = linkedListQuiz

    test('debe de retornar el estado por defecto', () => {
        
        const state = {
            quiz: quiz.quiz,
            totalQuestions: quiz.quiz.length,
            currentQuestionIndex: 0,
            currentQuestion: quiz.quiz[0]
        }

        const { currentQuestion, currentQuestionIndex } =  quizReducer(state = state, action = {})

        expect(currentQuestion).toEqual(state.currentQuestion)
        expect(currentQuestionIndex).toEqual(0)

    })  

});
