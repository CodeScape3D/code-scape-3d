import { createSlice } from "@reduxjs/toolkit";
import { Pop, Push, Sumergir } from "../../animations";

const initialState = {
  head: null,
  elementos: [],
  stepHistory: [],
  timeStep: 1,

  funAction: null,

  history: -1,
  firstSet: [],
  secondSet: [],
  timeId: [],
  isHead: -1,

  srcHead: null,
  playing: false,
};

export const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    setHead: (state, action) => {
      stackSlice.caseReducers.restoreStack(state, action);
      stackSlice.caseReducers.restoreTimeId(state);
    },
    actionButton: (state, action) => {
      createRecordStack(state, action);
    },
    restoreStack: (state, action) => {
      state.head = action.payload;
      state.stepHistory = [];
      state.timeStep = 1;

      state.funAction = null;

      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.timeId = [];

      state.srcHead = action.payload;
    },
    restoreTimeId: (state) => {
      state.timeId.forEach((timeoutId) => clearTimeout(timeoutId));
      state.timeId = [];
    },
    updateVisualizationStack: (state, action) => {
      const currVisualization = action.payload;

      let elementos = [];
      let current = currVisualization.head;
      while (current !== null) {
        elementos.push(current.getValue());
        current = current.getNext();
      }

      return {
        ...state,
        head: currVisualization.head,
        firstSet: currVisualization.firstSet,
        secondSet: currVisualization.secondSet,
        isHead: currVisualization.isHead,
        elementos: elementos,
      };
    },
    restoreRepeatStack: (state) => {
      const head = state.srcHead;
      state.head = head;
      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.isHead = -1;
      state.elementos = [];
    },

    setTimeIdStack: (state, action) => {
      state.timeId.push(action.payload);
    },

    incrementHistoryStack: (state) => {
      return {
        ...state,
        history: state.history + 1,
      };
    },

    decrementHistoryStack: (state) => {
      return {
        ...state,
        history: state.history - 1,
      };
    },

    setPlayingStack: (state, action) => {
      state.playing = action.payload;
    },
  },
});

const createRecordStack = (state, action) => {
  const head = state.head;
  const isHead = state.isHead;
  const value = action.payload.value;

  const funAction = getAction(action.payload.action);
  if (funAction) {
    const stepHistory = funAction(head, value, isHead);
    state.stepHistory = stepHistory;
    state.funAction = action.payload.action;
  }
};

export const getAction = (action) => {
  const actions = {
    push: Push,
    pop: Pop,
    sumergir: Sumergir
  };
  return actions[action] || null;
};

export const verificar = (head, elemento) => {
  let current = head;
  while (current !== null) {
    if (current.getValue() === elemento) {
      return true;
    }
    current = current.getNext();
  }
  return false;
};

export const {
  actionButton,
  restoreStack,
  restoreTimeId,
  setHead,
  decrementHistoryStack,
  incrementHistoryStack,
  updateVisualizationStack,
  setTimeIdStack,
  setPlayingStack,
  restoreRepeatStack,
} = stackSlice.actions;