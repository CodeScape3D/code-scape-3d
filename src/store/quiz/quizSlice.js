import { createSlice } from '@reduxjs/toolkit';
import { questionStates } from '../../quiz';

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        currentQuestionIndex: 0,
        currentQuestion: {
            statement: "",
            question: "",
            options: {},
            answer: "",
            selectedAnswer: null,
            state: "UNANSWERED"
        },
        questions: [],
        totalQuestions: 0,
        quizName: "",
    },
    reducers: {
        setQuiz: (state, { payload }) => {
            state.currentQuestionIndex = 0;
            state.currentQuestion = payload.questions[0];
            state.questions = payload.questions;
            state.totalQuestions = payload.questions.length;
            state.quizName = payload.name;
        },
        goToNextQuestion: (state) => {
            const canGoToNextQuestion = state.currentQuestionIndex < state.totalQuestions - 1
            if (canGoToNextQuestion) {
                state.currentQuestionIndex = state.currentQuestionIndex + 1;
                state.currentQuestion = state.questions[state.currentQuestionIndex];
            }
        },
        goToPreviousQuestion: (state) => {
            const canGoToPreviousQuestion = state.currentQuestionIndex > 0
            if (canGoToPreviousQuestion) {
                state.currentQuestionIndex = state.currentQuestionIndex - 1;
                state.currentQuestion = state.questions[state.currentQuestionIndex];
            }
        },
        answerSelected: (state, { payload }) => {
            state.questions[state.currentQuestionIndex].selectedAnswer = payload;
            state.currentQuestion = state.questions[state.currentQuestionIndex];
        },
        checkAnswer: (state) => {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            const isCorrect = currentQuestion.selectedAnswer === currentQuestion.answer;
            state.questions[state.currentQuestionIndex].state = isCorrect ? questionStates.CORRECT : questionStates.INCORRECT;
            state.currentQuestion = state.questions[state.currentQuestionIndex];
        }
    }
});

export const {
    setQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    answerSelected,
    checkAnswer
} = quizSlice.actions;
