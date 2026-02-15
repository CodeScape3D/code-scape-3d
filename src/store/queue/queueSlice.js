import { createSlice } from '@reduxjs/toolkit';
import {
  Dequeue,
  Enqueue,
  EliminarFinal,
  InsertarQueue,
  ExtraerQueue,
} from '../../animations';

const initialState = {
  head: null,
  elementos: [],
  stepHistory: [],
  timeStep: 1,

  funAction: null,

  history: -1,
  firstSet: [],
  secondSet: [],
  highlightedNode: null,
  pointer: null,
  deletingNode: null,
  timeId: [],
  isHead: -1,

  srcHead: null,
  playing: false,
};

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    setHeadQueue: (state, action) => {
      restoreQueue(state, action);
      restoreTimeIdQueue(state);
    },
    actionButtonQueue: (state, action) => {
      createRecordQueue(state, action);
    },
    restoreQueue: (state, action) => {
      state.head = action.payload;
      state.stepHistory = [];
      state.timeStep = 1;

      state.funAction = null;

      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.timeId = [];

      state.srcHead = action.payload;

      updateElementsFromHead(state);
    },
    restoreTimeIdQueue: state => {
      state.timeId.forEach(timeoutId => clearTimeout(timeoutId));
      state.timeId = [];
    },
    updateVisualizationQueue: (state, action) => {
      const currVisualization = action.payload;

      let elementos = [];
      let current = currVisualization.head;
      while (current !== null) {
        elementos.push(current.getValue());
        current = current.getNext();
      }

      state.head = currVisualization.head;
      state.firstSet = currVisualization.firstSet;
      state.secondSet = currVisualization.secondSet;
      state.highlightedNode = currVisualization.highlightedNode || null;
      state.pointer = currVisualization.pointer || null;
      state.deletingNode = currVisualization.deletingNode || null;
      state.isHead = currVisualization.isHead;
      state.elementos = elementos;
    },
    restoreRepeatQueue: state => {
      const head = state.srcHead;
      state.head = head;
      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.deletingNode = null;
      state.isHead = -1;

      updateElementsFromHead(state);
    },

    setTimeIdQueue: (state, action) => {
      state.timeId.push(...action.payload);
    },

    incrementHistoryQueue: state => {
      state.history = state.history + 1;
    },

    decrementHistoryQueue: state => {
      state.history = state.history - 1;
    },

    setPlayingQueue: (state, action) => {
      state.playing = action.payload;
    },
  },
});

const updateElementsFromHead = state => {
  let elementos = [];
  let current = state.head;
  while (current !== null) {
    elementos.push(current.getValue());
    current = current.getNext();
  }
  state.elementos = elementos;
};

const createRecordQueue = (state, action) => {
  const head = state.head;
  const isHead = state.isHead;
  const value = action.payload.value;
  const position = action.payload.position;

  const funAction = getActionQueue(action.payload.action);
  if (funAction) {
    let result;

    if (action.payload.action === 'insertar') {
      result = funAction(head, value, position, isHead);
    } else if (action.payload.action === 'extraer') {
      result = funAction(head, position, isHead);
    } else {
      result = funAction(head, value, isHead);
    }

    if (result && result.historialPasos) {
      state.stepHistory = result.historialPasos;
      state.funAction = action.payload.action;

      if (result.nuevaCabeza !== undefined) {
        state.srcHead = result.nuevaCabeza;
      }
    }
  }
};

export const getActionQueue = action => {
  const actions = {
    enqueue: Enqueue,
    dequeue: Dequeue,
    eliminarFinal: EliminarFinal,
    insertar: InsertarQueue,
    extraer: ExtraerQueue,
  };
  return actions[action] || null;
};

export const verificarCola = (head, elemento) => {
  let current = head;
  while (current !== null) {
    if (current.getValue() === elemento) return true;
    current = current.getNext();
  }
  return false;
};

const {
  restoreQueue,
  restoreTimeIdQueue,
  updateVisualizationQueue,
  restoreRepeatQueue,
} = queueSlice.actions;

export const {
  actionButtonQueue,
  setHeadQueue,
  decrementHistoryQueue,
  incrementHistoryQueue,
  setTimeIdQueue,
  setPlayingQueue,
} = queueSlice.actions;

export {
  restoreQueue,
  restoreTimeIdQueue,
  updateVisualizationQueue,
  restoreRepeatQueue,
};
