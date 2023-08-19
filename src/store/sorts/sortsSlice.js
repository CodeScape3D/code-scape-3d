import { createSlice } from "@reduxjs/toolkit";
import {
  BubbleSort,
  SelectionSort,
  InsertionSort,
  MergeSort,
  QuickSort,
  HeapSort,
  ShellSort,
  CocktailSort,
  ThreeWayQuickSort,
} from "../../animations/";

const initialState = {
  array: [],
  arraySize: 5,
  stepHistory: [],
  algorithm: "",

  history: -1,
  srcArray: [],
  firstSet: [],
  secondSet: [],
  thirdSet: [],
  fourthSet: [],
  sortedSet: [],
  timeIdArr: [],
  sortingSpeed: 1,
  isOver: false,
  playing: false,
};

export const sortsSlice = createSlice({
  name: "sorts",
  initialState,
  reducers: {
    setArray: (state, action) => {
      sortsSlice.caseReducers.restore(state, action);
      createRecord(state);
      sortsSlice.caseReducers.restoreTimeIdArr(state);
    },
    generateRandomArray: (state, action) => {
      const array = Array(state.arraySize)
        .fill(0)
        .map(() => getRandomInt(state.arraySize * 5));

      sortsSlice.caseReducers.restore(state, { payload: array });
      createRecord(state);
      sortsSlice.caseReducers.restoreTimeIdArr(state);
      state.playing = false;
    },
    setAlgorithm: (state, action) => {
      state.algorithm = action.payload;
      sortsSlice.caseReducers.generateRandomArray(state);
    },
    setArraySize: (state, action) => {
      state.arraySize = action.payload;
      sortsSlice.caseReducers.generateRandomArray(state);
    },

    setSortingSpeed: (state, action) => {
      state.sortingSpeed = action.payload;
    },

    restore: (state, action) => {
      state.array = action.payload;
      state.arraySize = action.payload.length;
      state.stepHistory = [];
      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.thirdSet = [];
      state.fourthSet = [];
      state.sortedSet = [];
      state.srcArray = [...action.payload];
    },
    restoreTimeIdArr: (state) => {
      state.timeIdArr.forEach((timeoutId) => clearTimeout(timeoutId));
      state.timeIdArr = [];
    },
    updateVisualization: (state, action) => {
      const currVisualization = action.payload;
      return {
        ...state,
        array: currVisualization.array,
        firstSet: currVisualization.firstSet,
        secondSet: currVisualization.secondSet,
        thirdSet: currVisualization.thirdSet,
        fourthSet: currVisualization.fourthSet,
        sortedSet: currVisualization.sortedSet,
        isOver:
          currVisualization.sortedSet.length + 1 ===
          currVisualization.array.length,
      };
    },

    incrementHistory: (state) => {
      return {
        ...state,
        history: state.history + 1,
      };
    },

    decrementHistory: (state) => {
      return {
        ...state,
        history: state.history - 1,
      };
    },

    setHistory: (state, action) => {
      state.history = action.payload;
    },

    setTimeIdArr: (state, action) => {
      state.timeIdArr = action.payload;
    },

    setPlaying: (state, action) => {
      state.playing = action.payload;
    },

    restoreRepeat: (state) => {
      const srcArray = [...state.srcArray];
      state.array = srcArray;
      state.history = -1;
      state.compared = [];
      state.sortedSet = [];
    },
  },
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const createRecord = (state) => {
  const numbers = [...state.array];
  const sort = getSortingAlgorithm(state.algorithm);
  if (sort) {
    const stepHistory = sort(numbers);
    state.stepHistory = stepHistory;
  }
};

export const getSortingAlgorithm = (algorithm) => {
  const sortingFunctions = {
    "Bubble Sort": BubbleSort,
    "Selection Sort": SelectionSort,
    "Insertion Sort": InsertionSort,
    "Merge Sort": MergeSort,
    "Quick Sort": QuickSort,
    "Heap Sort": HeapSort,
    "Shell Sort": ShellSort,
    "Cocktail Sort": CocktailSort,
    "ThreeWayQuick Sort": ThreeWayQuickSort,
  };
  return sortingFunctions[algorithm] || null;
};

export const {
  setArray,
  generateRandomArray,
  setAlgorithm,
  setArraySize,
  incrementHistory,
  decrementHistory,
  setTimeIdArr,
  updateVisualization,
  restoreTimeIdArr,
  setPlaying,
  restoreRepeat,
  setSortingSpeed,
  setHistory
} = sortsSlice.actions;
