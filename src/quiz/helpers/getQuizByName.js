import { defaultLanguage } from '../../main';
import {
  binaryTreeQuiz,
  binaryTreeQuizEn,
  bubbleSortQuiz,
  bubbleSortQuizEn,
  insertionSortQuiz,
  insertionSortQuizEn,
  linkedListQuiz,
  linkedListQuizEn,
  queueQuiz,
  queueQuizEn,
  quickSortQuiz,
  quickSortQuizEn,
  searchMethodsQuiz,
  searchMethodsQuizEn,
  shellSortQuiz,
  shellSortQuizEn,
  sortingFundamentalsQuiz,
  sortingFundamentalsQuizEn,
  sortingMethodsQuiz,
  sortingMethodsQuizEn,
  stackQuiz,
  stackQuizEn,
} from '../data';

export const getQuizByName = name => {
  const userLanguage = localStorage.getItem('lang') || defaultLanguage;

  const quizzes = {
    sortingFundamentals: sortingFundamentalsQuiz,
    sortingMethods: sortingMethodsQuiz,
    bubble: bubbleSortQuiz,
    quick: quickSortQuiz,
    shell: shellSortQuiz,
    insertion: insertionSortQuiz,
    linkedList: linkedListQuiz,
    searchMethods: searchMethodsQuiz,
    binaryTree: binaryTreeQuiz,
    stacks: stackQuiz,
    queues: queueQuiz,
  };

  const quizzesEn = {
    sortingFundamentals: sortingFundamentalsQuizEn,
    sortingMethods: sortingMethodsQuizEn,
    bubble: bubbleSortQuizEn,
    quick: quickSortQuizEn,
    shell: shellSortQuizEn,
    insertion: insertionSortQuizEn,
    linkedList: linkedListQuizEn,
    searchMethods: searchMethodsQuizEn,
    binaryTree: binaryTreeQuizEn,
    stacks: stackQuizEn,
    queues: queueQuizEn,
  };

  return userLanguage == 'es' ? quizzes[name] : quizzesEn[name];
};
