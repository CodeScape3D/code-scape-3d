import { linkedListQuiz, searchMethodsQuiz, sortingMethodsQuiz } from "../data"

export const getQuizByName = (name) => { 

    const quizzes = {
        "sortingMethods": sortingMethodsQuiz,
        "linkedList": linkedListQuiz,
        "searchMethods": searchMethodsQuiz
    }

    return quizzes[name]

}