import {
    binaryTreeQuiz,
    bubbleSortQuiz,
    insertionSortQuiz,
    linkedListQuiz,
    queueQuiz,
    quickSortQuiz,
    searchMethodsQuiz,
    shellSortQuiz,
    sortingMethodsQuiz,
    stackQuiz
} from "../data"

export const getQuizByName = (name) => {

    const quizzes = {
        "sortingMethods": sortingMethodsQuiz,
        "bubble": bubbleSortQuiz,
        "quick": quickSortQuiz,
        "shell": shellSortQuiz,
        "insertion": insertionSortQuiz,
        "linkedList": linkedListQuiz,
        "searchMethods": searchMethodsQuiz,
        "binaryTree": binaryTreeQuiz,
        "stacks": stackQuiz,
        "queues": queueQuiz
    }

    return quizzes[name]
}