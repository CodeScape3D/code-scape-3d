
export const demoQuiz = {
    name: "Demo Quiz",
    questions: [
        {
            statement: "¿Cuál es la capital de Argentina?",
            question: "¿Cuál es la capital de Argentina?",
            options: {
                "a": "Buenos Aires",
                "b": "Córdoba",
                "c": "Rosario",
                "d": "Mendoza"
            },
            answer: "a",
            selectedAnswer: null,
            state: "UNANSWERED",
            feedback: "Buenos Aires es la capital de Argentina"
        },
        {
            statement: "¿Cuál es la capital de Brasil?",
            question: "¿Cuál es la capital de Brasil?",
            options: {
                "a": "Brasilia",
                "b": "Sao Paulo",
                "c": "Rio de Janeiro",
                "d": "Belo Horizonte"
            },
            answer: "a",
            selectedAnswer: null,
            state: "UNANSWERED",
            feedback: "Brasilia es la capital de Brasil"
        },
        {
            statement: "¿Cuál es la capital de Chile?",
            question: "¿Cuál es la capital de Chile?",
            options: {
                "a": "Santiago",
                "b": "Valparaíso",
                "c": "Concepción",
                "d": "La Serena"
            },
            answer: "a",
            selectedAnswer: null,
            state: "UNANSWERED",
            feedback: "Santiago es la capital de Chile"
        },
    ]
}

export const initialQuizState = {
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

export const quizLoadedState = {
    currentQuestionIndex: 0,
    currentQuestion: demoQuiz.questions[0],
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

export const quizSecondQuestionLoadedState = {
    currentQuestionIndex: 1,
    currentQuestion: demoQuiz.questions[1],
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

export const quizLastQuestionLoadedState = {
    currentQuestionIndex: demoQuiz.questions.length - 1,
    currentQuestion: demoQuiz.questions[demoQuiz.questions.length - 1],
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
