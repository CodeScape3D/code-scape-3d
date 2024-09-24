import {
  incrementHistoryLinkedList,
  updateVisualizationLinkedList,
  restoreTimeId,
  setTimeIdLinkedList,
  setPlayingLinkedList,
  decrementHistoryLinkedList,
} from "./linkedListSlice";

// Thunk para ejecutar la secuencia de pasos en la lista enlazada
export const runLinkedList = (stepHistory) => (dispatch, getState) => {
  const { timeStep } = getState().linkedList;
  const timeId = [];

  stepHistory.forEach((item, i) => {
    let timeoutId = setTimeout(() => {
      dispatch(incrementHistoryLinkedList());
      dispatch(updateVisualizationLinkedList(item));
    }, i * (250 / timeStep));

    timeId.push(timeoutId);
  });

  let timeoutId = setTimeout(() => {
    dispatch(restoreTimeId());
  }, stepHistory.length * (250 / timeStep));

  timeId.push(timeoutId);
  dispatch(setTimeIdLinkedList(timeId));
};

// Thunk para iniciar la ejecución de la lista enlazada
export const playLinkedList = () => (dispatch, getState) => {
  const { history, stepHistory, playing } = getState().linkedList;

  if (!playing) {
    dispatch(setPlayingLinkedList(true));
    if (history === -1) {
      dispatch(runLinkedList(stepHistory));
    } else {
      const remainingHistory = stepHistory.slice(history);
      dispatch(runLinkedList(remainingHistory));
    }
  }
};

// Thunk para pausar la ejecución de la lista enlazada
export const pauseLinkedList = () => (dispatch) => {
  dispatch(setPlayingLinkedList(false));
  dispatch(restoreTimeId());
};

// Thunk para retroceder en la historia de la lista enlazada
export const goBackwardLinkedList = () => (dispatch, getState) => {
  const { playing, stepHistory, history } = getState().linkedList;

  if (playing) {
    dispatch(pauseLinkedList());
  }

  if (history > 0) {
    const item = stepHistory[history - 1];
    dispatch(decrementHistoryLinkedList());
    dispatch(updateVisualizationLinkedList(item));
  }
};

// Thunk para avanzar en la historia de la lista enlazada
export const goForwardLinkedList = () => (dispatch, getState) => {
  const { playing, stepHistory, history } = getState().linkedList;

  if (playing) {
    dispatch(pauseLinkedList());
  }

  if (history < stepHistory.length - 1) {
    const item = stepHistory[history + 1];
    dispatch(incrementHistoryLinkedList());
    dispatch(updateVisualizationLinkedList(item));
  }
};

// Thunk para repetir la secuencia completa
export const repeatLinkedList = () => (dispatch, getState) => {
  const { stepHistory } = getState().linkedList;
  dispatch(restoreTimeId());
  dispatch(setPlayingLinkedList(true));
  dispatch(runLinkedList(stepHistory));
};

// Thunk para continuar la reproducción de los pasos restantes
export const keepPlayingLinkedList = () => (dispatch, getState) => {
  const { stepHistory, history } = getState().linkedList;
  const remainingHistory = stepHistory.slice(history);
  dispatch(runLinkedList(remainingHistory));
};
