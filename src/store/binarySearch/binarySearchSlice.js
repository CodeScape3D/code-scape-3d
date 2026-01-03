import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array: [],
  searchValue: null,
  stepHistory: [],
  history: -1,
  isPlaying: false,
  timeIds: [],
  timeStep: 1,
  repeat: false,
  currentIndex: -1,
  leftIndex: -1,
  rightIndex: -1,
  midIndex: -1,
  foundIndex: -1,
  description: '',
  funAction: null,
  currentLine: -1,
};

export const binarySearchSlice = createSlice({
  name: 'binarySearch',
  initialState,
  reducers: {
    setArrayBinarySearch: (state, action) => {
      state.array = action.payload;
      state.stepHistory = [];
      state.history = -1;
      state.foundIndex = -1;
      state.description = '';
    },

    setSearchValueBinarySearch: (state, action) => {
      state.searchValue = action.payload;
    },

    actionButtonBinarySearch: (state, action) => {
      const { trace, value } = action.payload;
      state.stepHistory = trace;
      state.history = -1;
      state.searchValue = value;
      state.repeat = false;
      state.funAction = 'busquedaBinaria';
    },

    updateVisualizationBinarySearch: (state, action) => {
      const step = action.payload;
      if (step) {
        state.array = step.array || state.array;
        state.currentIndex = step.currentIndex ?? -1;
        state.leftIndex = step.leftIndex ?? -1;
        state.rightIndex = step.rightIndex ?? -1;
        state.midIndex = step.midIndex ?? -1;
        state.foundIndex = step.found ? step.midIndex : (step.foundIndex ?? -1);
        state.description = step.message || step.description || '';
        state.currentLine = step.currentLine ?? -1;
      }
    },

    incrementHistoryBinarySearch: state => {
      if (state.history < state.stepHistory.length - 1) {
        state.history += 1;
      }
    },

    decrementHistoryBinarySearch: state => {
      if (state.history > 0) {
        state.history -= 1;
      }
    },

    setPlayingBinarySearch: (state, action) => {
      state.isPlaying = action.payload;
    },

    setTimeIdBinarySearch: (state, action) => {
      state.timeIds = action.payload;
    },

    restoreTimeIdBinarySearch: state => {
      state.timeIds = [];
    },

    restoreRepeatBinarySearch: state => {
      state.repeat = true;
    },

    resetBinarySearch: state => {
      state.stepHistory = [];
      state.history = -1;
      state.currentIndex = -1;
      state.leftIndex = -1;
      state.rightIndex = -1;
      state.midIndex = -1;
      state.foundIndex = -1;
      state.description = '';
      state.isPlaying = false;
    },

    fullResetBinarySearch: () => initialState,
  },
});

export const {
  setArrayBinarySearch,
  setSearchValueBinarySearch,
  actionButtonBinarySearch,
  updateVisualizationBinarySearch,
  incrementHistoryBinarySearch,
  decrementHistoryBinarySearch,
  setPlayingBinarySearch,
  setTimeIdBinarySearch,
  restoreTimeIdBinarySearch,
  restoreRepeatBinarySearch,
  resetBinarySearch,
  fullResetBinarySearch,
} = binarySearchSlice.actions;

export default binarySearchSlice.reducer;
