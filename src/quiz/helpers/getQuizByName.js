import { defaultLanguage } from '../../main';
import {
  binarySearchQuiz,
  binarySearchQuizEn,
  binaryTreeQuiz,
  binaryTreeQuizEn,
  bubbleSortQuiz,
  bubbleSortQuizEn,
  insertionSortQuiz,
  insertionSortQuizEn,
  linearSearchQuiz,
  linearSearchQuizEn,
  linkedListQuiz,
  linkedListQuizEn,
  queueQuiz,
  queueQuizEn,
  quickSortQuiz,
  quickSortQuizEn,
  shellSortQuiz,
  shellSortQuizEn,
  simpleListQuiz,
  simpleListQuizEn,
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
    linearSearch: linearSearchQuiz,
    binarySearch: binarySearchQuiz,
    linkedList: linkedListQuiz,
    binaryTree: binaryTreeQuiz,
    stacks: stackQuiz,
    queues: queueQuiz,
    simpleList: simpleListQuiz,
  };

  const quizzesEn = {
    sortingFundamentals: sortingFundamentalsQuizEn,
    sortingMethods: sortingMethodsQuizEn,
    bubble: bubbleSortQuizEn,
    quick: quickSortQuizEn,
    shell: shellSortQuizEn,
    insertion: insertionSortQuizEn,
    linearSearch: linearSearchQuizEn,
    binarySearch: binarySearchQuizEn,
    linkedList: linkedListQuizEn,
    binaryTree: binaryTreeQuizEn,
    stacks: stackQuizEn,
    queues: queueQuizEn,
    simpleList: simpleListQuizEn,
  };

  return userLanguage == 'es' ? quizzes[name] : quizzesEn[name];
};
