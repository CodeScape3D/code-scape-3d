import {
    binaryTreeQuiz,
    linkedListQuiz,
    queueQuiz,
    searchMethodsQuiz,
    sortingMethodsQuiz,
    stackQuiz
} from "../data"

export const getQuizByName = (name) => {

    const quizzes = {
        "sortingMethods": sortingMethodsQuiz,
        "linkedList": linkedListQuiz,
        "searchMethods": searchMethodsQuiz,
        "binaryTree": binaryTreeQuiz,
        "stacks": stackQuiz,
        "queues": queueQuiz
    }

    return quizzes[name]

}