import { linkedListQuiz, sortingMethodsQuiz } from "../data"

export const getQuizByName = (name) => { 

    const quizzes = {
        "sortingMethods": sortingMethodsQuiz,
        "linkedList": linkedListQuiz
    }

    return quizzes[name]

}