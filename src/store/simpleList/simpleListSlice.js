import { createSlice } from '@reduxjs/toolkit';
import {
  InsertarAlInicio,
  InsertarAlFinal,
  InsertarEnPosicion,
  EliminarDelInicio,
  EliminarDelFinal,
  EliminarEnPosicion,
  Buscar,
} from '../../animations/simpleList/algorithms';

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
  timeId: [],
};

export const simpleListSlice = createSlice({
  name: 'simpleList',
  initialState,
  reducers: {
    setHeadSimpleList: (state, action) => {
      state.srcHead = action.payload;
      state.head = state.srcHead;
      state.isHead = state.srcHead ? state.srcHead.getValue() : -1;
    },

    actionButtonSimpleList: (state, action) => {
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

    restoreRepeatSimpleList: state => {
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

    restoreTimeIdSimpleList: state => {
      state.timeId.forEach(timeoutId => clearTimeout(timeoutId));
      state.timeId = [];
    },

    updateVisualizationSimpleList: (state, action) => {
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

    setTimeIdSimpleList: (state, action) => {
      state.timeId = action.payload;
    },

    incrementHistorySimpleList: state => {
      if (state.history < state.stepHistory.length - 1) {
        state.history += 1;
      }
    },

    decrementHistorySimpleList: state => {
      if (state.history > -1) {
        state.history -= 1;
      }
    },

    setPlayingSimpleList: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const {
  setHeadSimpleList,
  actionButtonSimpleList,
  restoreRepeatSimpleList,
  restoreTimeIdSimpleList,
  updateVisualizationSimpleList,
  setTimeIdSimpleList,
  incrementHistorySimpleList,
  decrementHistorySimpleList,
  setPlayingSimpleList,
} = simpleListSlice.actions;

export default simpleListSlice.reducer;
