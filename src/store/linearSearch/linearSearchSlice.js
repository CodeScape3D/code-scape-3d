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
  foundIndex: -1,
  description: '',
  funAction: null,
  currentLine: -1,
};

export const linearSearchSlice = createSlice({
  name: 'linearSearch',
  initialState,
  reducers: {
    setArrayLinearSearch: (state, action) => {
      state.array = action.payload;
      state.stepHistory = [];
      state.history = -1;
      state.foundIndex = -1;
      state.description = '';
    },

    setSearchValueLinearSearch: (state, action) => {
      state.searchValue = action.payload;
    },

    actionButtonLinearSearch: (state, action) => {
      const { trace, value } = action.payload;
      state.stepHistory = trace;
      state.history = -1;
      state.searchValue = value;
      state.repeat = false;
      state.funAction = 'busquedaLineal';
    },

    updateVisualizationLinearSearch: (state, action) => {
      const step = action.payload;
      if (step) {
        state.array = step.array || state.array;
        state.currentIndex = step.currentIndex ?? -1;
        state.foundIndex = step.foundIndex ?? -1;
        state.description = step.description || '';
        state.currentLine = step.currentLine ?? -1;
      }
    },

    incrementHistoryLinearSearch: state => {
      if (state.history < state.stepHistory.length - 1) {
        state.history += 1;
      }
    },

    decrementHistoryLinearSearch: state => {
      if (state.history > 0) {
        state.history -= 1;
      }
    },

    setPlayingLinearSearch: (state, action) => {
      state.isPlaying = action.payload;
    },

    setTimeIdLinearSearch: (state, action) => {
      state.timeIds = action.payload;
    },

    restoreTimeIdLinearSearch: state => {
      state.timeIds = [];
    },

    restoreRepeatLinearSearch: state => {
      state.repeat = true;
    },

    resetLinearSearch: state => {
      state.stepHistory = [];
      state.history = -1;
      state.currentIndex = -1;
      state.foundIndex = -1;
      state.description = '';
      state.isPlaying = false;
    },

    fullResetLinearSearch: () => initialState,
  },
});

export const {
  setArrayLinearSearch,
  setSearchValueLinearSearch,
  actionButtonLinearSearch,
  updateVisualizationLinearSearch,
  incrementHistoryLinearSearch,
  decrementHistoryLinearSearch,
  setPlayingLinearSearch,
  setTimeIdLinearSearch,
  restoreTimeIdLinearSearch,
  restoreRepeatLinearSearch,
  resetLinearSearch,
  fullResetLinearSearch,
} = linearSearchSlice.actions;

export default linearSearchSlice.reducer;
