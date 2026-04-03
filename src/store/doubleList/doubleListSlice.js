import { createSlice } from '@reduxjs/toolkit';
import {
  InsertarAlInicio,
  InsertarAlFinal,
  InsertarEnPosicion,
  EliminarDelInicio,
  EliminarDelFinal,
  EliminarEnPosicion,
  Buscar,
} from '../../animations/doubleList/algorithms';

const initialState = {
  head: null,
  stepHistory: [],
  history: -1,
  firstSet: [],
  secondSet: [],
  thirdSet: [],
  isHead: -1,
  highlightedNode: null,
  pointer: null,
  currentIndex: null,
  srcHead: null,
  playing: false,
  funAction: null,
  timeIds: [],
};

export const doubleListSlice = createSlice({
  name: 'doubleList',
  initialState,
  reducers: {
    setHeadDoubleList: (state, action) => {
      state.srcHead = action.payload;
      state.head = state.srcHead;
      state.isHead = state.srcHead ? state.srcHead.getValue() : -1;
    },

    actionButtonDoubleList: (state, action) => {
      const { action: operation, value, position } = action.payload;
      const head = state.head;

      let result = null;
      switch (operation) {
        case 'insertarAlInicio':
          result = InsertarAlInicio(head, value);
          break;
        case 'insertarAlFinal':
          result = InsertarAlFinal(head, value);
          break;
        case 'insertarEnPosicion':
          result = InsertarEnPosicion(head, value, position);
          break;
        case 'eliminarDelInicio':
          result = EliminarDelInicio(head);
          break;
        case 'eliminarDelFinal':
          result = EliminarDelFinal(head);
          break;
        case 'eliminarEnPosicion':
          result = EliminarEnPosicion(head, position);
          break;
        case 'buscar':
          result = Buscar(head, value);
          break;
        default:
          break;
      }

      if (result) {
        state.stepHistory = result.historialPasos;
        state.funAction = operation;
        state.srcHead = result.nuevaCabeza;
        state.head = state.srcHead;
        state.history = -1;
        state.isHead = state.srcHead ? state.srcHead.getValue() : -1;
        state.firstSet = [];
        state.secondSet = [];
        state.thirdSet = [];
        state.highlightedNode = null;
        state.pointer = null;
        state.currentIndex = null;
      }
    },

    restoreRepeatDoubleList: state => {
      state.head = state.srcHead;
      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.thirdSet = [];
      state.highlightedNode = null;
      state.pointer = null;
      state.currentIndex = null;
      state.playing = false;
    },

    restoreTimeIdDoubleList: state => {
      state.timeIds.forEach(timeoutId => clearTimeout(timeoutId));
      state.timeIds = [];
    },

    updateVisualizationDoubleList: (state, action) => {
      const currVisualization = action.payload;
      state.head = currVisualization.head;
      state.firstSet = [...currVisualization.firstSet];
      state.secondSet = [...currVisualization.secondSet];
      state.thirdSet = [...currVisualization.thirdSet];
      state.isHead = currVisualization.isHead;
      state.highlightedNode = currVisualization.highlightedNode;
      state.pointer = currVisualization.pointer;
      state.currentIndex = currVisualization.currentIndex;
    },

    setTimeIdDoubleList: (state, action) => {
      state.timeIds = action.payload;
    },

    incrementHistoryDoubleList: state => {
      if (state.history < state.stepHistory.length - 1) {
        state.history += 1;
      }
    },

    decrementHistoryDoubleList: state => {
      if (state.history > -1) {
        state.history -= 1;
      }
    },

    setPlayingDoubleList: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const {
  setHeadDoubleList,
  actionButtonDoubleList,
  restoreRepeatDoubleList,
  restoreTimeIdDoubleList,
  updateVisualizationDoubleList,
  setTimeIdDoubleList,
  incrementHistoryDoubleList,
  decrementHistoryDoubleList,
  setPlayingDoubleList,
} = doubleListSlice.actions;

export default doubleListSlice.reducer;
