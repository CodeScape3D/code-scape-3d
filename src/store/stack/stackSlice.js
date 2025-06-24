import { createSlice } from '@reduxjs/toolkit';
import { Pop, Push, Sumergir, Insertar, Extraer } from '../../animations';

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
  name: 'stack',
  initialState,
  reducers: {
    setHead: (state, action) => {
      // Usar el reducer interno correctamente
      restoreStack(state, action);
      restoreTimeId(state);
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

      // Actualizar elementos basado en la nueva cabeza
      updateElementsFromHead(state);
    },
    restoreTimeId: state => {
      state.timeId.forEach(timeoutId => clearTimeout(timeoutId));
      state.timeId = [];
    },
    updateVisualizationStack: (state, action) => {
      const currVisualization = action.payload;

      // Actualizar elementos desde la cabeza de la visualización actual
      let elementos = [];
      let current = currVisualization.head;
      while (current !== null) {
        elementos.push(current.getValue());
        current = current.getNext();
      }

      // Actualizar el estado con la visualización actual
      state.head = currVisualization.head;
      state.firstSet = currVisualization.firstSet;
      state.secondSet = currVisualization.secondSet;
      state.isHead = currVisualization.isHead;
      state.elementos = elementos;
    },
    restoreRepeatStack: state => {
      const head = state.srcHead;
      state.head = head;
      state.history = -1;
      state.firstSet = [];
      state.secondSet = [];
      state.isHead = -1;

      // Actualizar elementos desde la cabeza restaurada
      updateElementsFromHead(state);
    },

    setTimeIdStack: (state, action) => {
      state.timeId.push(...action.payload);
    },

    incrementHistoryStack: state => {
      state.history = state.history + 1;
    },

    decrementHistoryStack: state => {
      state.history = state.history - 1;
    },

    setPlayingStack: (state, action) => {
      state.playing = action.payload;
    },
  },
});

// Función auxiliar para actualizar elementos desde la cabeza
const updateElementsFromHead = state => {
  let elementos = [];
  let current = state.head;
  while (current !== null) {
    elementos.push(current.getValue());
    current = current.getNext();
  }
  state.elementos = elementos;
};

const createRecordStack = (state, action) => {
  const head = state.head;
  const isHead = state.isHead;
  const value = action.payload.value;
  const position = action.payload.position;

  const funAction = getAction(action.payload.action);
  if (funAction) {
    let result;

    // Determinar qué parámetros pasar según la acción
    if (action.payload.action === 'insertar') {
      // En la pila, posición 0 significa al inicio (en el tope de la pila)
      // y posición length significa al final (en el fondo de la pila)
      result = funAction(head, value, position, isHead);
    } else if (action.payload.action === 'extraer') {
      // Para extraer, la posición debe ser interpretada desde el tope (0) hasta el fondo
      result = funAction(head, position, isHead);
    } else {
      result = funAction(head, value, isHead);
    }

    // Las funciones de animación devuelven un objeto con historialPasos y nuevaCabeza
    if (result && result.historialPasos) {
      state.stepHistory = result.historialPasos;
      state.funAction = action.payload.action;

      // Si hay una nueva cabeza, actualizarla en el estado temporal
      if (result.nuevaCabeza !== undefined) {
        // No actualizamos state.head aquí porque será actualizado durante la animación
        // Pero podríamos guardar la cabeza final para referencia
        state.srcHead = result.nuevaCabeza;
      }
    }
  }
};

export const getAction = action => {
  const actions = {
    push: Push,
    pop: Pop,
    sumergir: Sumergir,
    insertar: Insertar,
    extraer: Extraer,
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

const {
  restoreStack,
  restoreTimeId,
  updateVisualizationStack,
  restoreRepeatStack,
} = stackSlice.actions;

export const {
  actionButton,
  setHead,
  decrementHistoryStack,
  incrementHistoryStack,
  setTimeIdStack,
  setPlayingStack,
} = stackSlice.actions;

export {
  restoreStack,
  restoreTimeId,
  updateVisualizationStack,
  restoreRepeatStack,
};
