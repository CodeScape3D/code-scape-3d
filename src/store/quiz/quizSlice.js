import { createSlice } from '@reduxjs/toolkit';
import { questionStates } from '../../quiz';

const MAX_SCORE = 5.0;
const MINIMUM_SCORE_TO_APPROVE = 3.0;
const MINIMUM_SCORE = 1.0

const initialState = {
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
    generatedArray: [],
    totalQuestions: 0,
    quizName: "",
    quizResults: {
        correctAnswersCount: 0,
        incorrectAnswersCount: 0,
        score: 0,
        approved: false,
        scoreStatistics: {
            datasets: [
                {
                    data: [0, 0],
                    backgroundColor: ["#87BA7A", "#FF7575"]
                }
            ]
        }
    }
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: initialState,
    reducers: {
        setQuiz: (state, { payload }) => {
            state.currentQuestionIndex = 0;
            state.currentQuestion = payload.questions[0];
            state.questions = payload.questions;
            state.totalQuestions = payload.questions.length;
            state.quizName = payload.name;
            state.generatedArray = payload.array;
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
        },
        computeResults: (state) => {
            const correctAnswers = state.questions.filter(question => question.state === questionStates.CORRECT).length;
            const incorrectAnswers = state.questions.filter(question => question.state === questionStates.INCORRECT).length;
            const result = (correctAnswers / state.totalQuestions) * MAX_SCORE;
            const score = result < MINIMUM_SCORE ? MINIMUM_SCORE.toFixed(2) : result.toFixed(2);
            const approved = score >= MINIMUM_SCORE_TO_APPROVE;
            const statistics = {
                data: [correctAnswers, incorrectAnswers],
            }

            state.quizResults = {
                correctAnswersCount: correctAnswers,
                incorrectAnswersCount: incorrectAnswers,
                score: score,
                approved: approved,
                scoreStatistics: {
                    datasets: [
                        {
                            data: statistics.data,
                            backgroundColor: ["#87BA7A", "#FF7575"]
                        }
                    ],
                    totalQuestions: state.totalQuestions
                }
            }
        },
        setCurrentQuestion: (state, { payload }) => {
            state.currentQuestion = payload;
        },
        resetStateForQuiz: (state) => {
            state = initialState;
        }
    }
});

export const {
    setQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    answerSelected,
    checkAnswer,
    computeResults,
    setCurrentQuestion,
    resetStateForQuiz
} = quizSlice.actions;
