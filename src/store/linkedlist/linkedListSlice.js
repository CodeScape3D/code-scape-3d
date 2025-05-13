import { createSlice } from "@reduxjs/toolkit";
import Nodo from "../../animations/linkedlist/algorithms/Nodo";
import {
  InsertHead,
  InsertTail,
  DeleteHead,
  DeleteTail,
  DeleteElement,
} from "../../animations";

const initialState = {
  head: new Nodo(4, new Nodo(5, new Nodo(8, new Nodo(7)))),
  elementos: [4, 5, 8, 7],
  stepHistory: [],
  timeStep: 1,
  funAction: null,

  history: -1,
  firstSet: [],
  secondSet: [],
  timeId: [],
  isHead: 4,
  isTail: 7,

  srcHead: new Nodo(4, new Nodo(5, new Nodo(8, new Nodo(7)))),
  playing: false,
};

export const linkedListSlice = createSlice({
  name: "linkedList",
  initialState,
  reducers: {
    restoreLinkedList: () => ({
      ...initialState,
    }),

    restoreTimeId: (state) => {
      state.timeId.forEach((timeoutId) => clearTimeout(timeoutId));
      return {
        ...state,
        timeId: [],
      };
    },

    updateVisualizationLinkedList: (state, action) => {
      const { head, firstSet, secondSet, isHead } = action.payload;

      const elementos = [];
      let current = head;
      while (current !== null) {
        elementos.push(current.getValue());
        current = current.getNext();
      }

      return {
        ...state,
        head,
        firstSet,
        secondSet,
        isHead,
        elementos,
      };
    },

    setTimeIdLinkedList: (state, action) => {
      return {
        ...state,
        timeId: [...state.timeId, action.payload],
      };
    },

    incrementHistoryLinkedList: (state) => {
      return {
        ...state,
        history: state.history + 1,
      };
    },

    decrementHistoryLinkedList: (state) => {
      return {
        ...state,
        history: state.history - 1,
      };
    },

    setPlayingLinkedList: (state, action) => {
      return {
        ...state,
        playing: action.payload,
      };
    },

    createRecordStack: (state, action) => {
      const head = state.head;
      const isHead = state.isHead;
      const value = action.payload.value;

      const funAction = getAction(action.payload.action);
      if (funAction) {
        const stepHistory = funAction(head, value, isHead);
        state.stepHistory = stepHistory;
        state.funAction = action.payload.action;
      }
    },
  },
});

export const getAction = (action) => {
  const actions = {
    inserthead: InsertHead,
    inserttail: InsertTail,
    deletehead: DeleteHead,
    deletetail: DeleteTail,
    deleteelement: DeleteElement,
  };
  return actions[action] || null;
};

export const {
  restoreLinkedList,
  restoreTimeId,
  updateVisualizationLinkedList,
  setTimeIdLinkedList,
  incrementHistoryLinkedList,
  decrementHistoryLinkedList,
  setPlayingLinkedList,
  createRecordStack,
} = linkedListSlice.actions;

export default linkedListSlice.reducer;
