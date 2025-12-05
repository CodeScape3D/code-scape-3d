import { useDispatch, useSelector } from 'react-redux';
import {
  decrementHistoryDoubleList,
  incrementHistoryDoubleList,
  actionButtonDoubleList,
  restoreRepeatDoubleList,
  restoreTimeIdDoubleList,
  setHeadDoubleList,
  setPlayingDoubleList,
  setTimeIdDoubleList,
  updateVisualizationDoubleList,
} from '../../../store';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useCallback, useState, useRef, useEffect } from 'react';
import { BasicButton } from '../../../components';
import {
  svgPause,
  svgBack,
  svgPlay,
  svgRepeat,
  svgForward,
} from '../../../assets/svg/SvgConstans';

export const DoubleListControls = () => {
  const doubleListState = useSelector(state => state.doubleList);
  const dispatch = useDispatch();

  // Estados para los inputs
  const [value, setValue] = useState('');
  const [position, setPosition] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [deletePosition, setDeletePosition] = useState('');

  // Estados para el toast/notificaciones
  const [toast, setToast] = useState('');
  const [open, setOpen] = useState(false);

  // Estado para controlar las animaciones
  const [isAnimating, setIsAnimating] = useState(false);

  // Referencias para controlar la ejecución de animaciones
  const animationExecutedRef = useRef(false);
  const currentFunActionRef = useRef(null);

  // Función para obtener el tamaño actual de la lista
  const getListSize = useCallback(() => {
    if (!doubleListState.head) return 0;
    let count = 0;
    let current = doubleListState.head;
    while (current !== null) {
      count++;
      current = current.getNext();
    }
    return count;
  }, [doubleListState.head]);

  // Función para verificar si un elemento ya existe en la lista
  const elementExists = useCallback(
    value => {
      if (!doubleListState.head) return false;
      let current = doubleListState.head;
      while (current !== null) {
        if (current.getValue() === value) return true;
        current = current.getNext();
      }
      return false;
    },
    [doubleListState.head]
  );

  // Manejadores de cambio para los inputs
  const handleValueChange = useCallback(event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue !== null)) {
      setValue(inputValue);
    }
  }, []);

  const handlePositionChange = useCallback(event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue >= 0)) {
      setPosition(inputValue);
    }
  }, []);

  const handleSearchValueChange = useCallback(event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue !== null)) {
      setSearchValue(inputValue);
    }
  }, []);

  const handleDeletePositionChange = useCallback(event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue >= 0)) {
      setDeletePosition(inputValue);
    }
  }, []);

  // Función para mostrar mensajes de error
  const showError = useCallback(message => {
    setToast(message);
    setOpen(true);
  }, []);

  // Función para limpiar timeouts activos
  const clearActiveTimeouts = useCallback(() => {
    if (doubleListState.timeIds && doubleListState.timeIds.length > 0) {
      doubleListState.timeIds.forEach(timeoutId => {
        clearTimeout(timeoutId);
      });
      dispatch(restoreTimeIdDoubleList());
    }
  }, [doubleListState.timeIds, dispatch]);

  // Función para ejecutar las animaciones paso a paso
  const runAnimation = useCallback(
    (stepHistory, startFromBeginning = false) => {
      if (!stepHistory || stepHistory.length === 0) {
        setIsAnimating(false);
        return;
      }

      clearActiveTimeouts();
      dispatch(setPlayingDoubleList(true));
      setIsAnimating(true);

      const timeIds = [];

      if (startFromBeginning) {
        dispatch(updateVisualizationDoubleList(stepHistory[0]));
        dispatch(incrementHistoryDoubleList());
      }

      const startIndex = startFromBeginning ? 1 : 0;

      for (let i = startIndex; i < stepHistory.length; i++) {
        const step = stepHistory[i];
        const timeoutId = setTimeout(
          () => {
            dispatch(updateVisualizationDoubleList(step));
            dispatch(incrementHistoryDoubleList());
          },
          (i - startIndex) * (250 / (doubleListState.timeStep || 1))
        );

        timeIds.push(timeoutId);
      }

      const finalTimeoutId = setTimeout(
        () => {
          const finalState = stepHistory[stepHistory.length - 1];
          if (finalState) {
            dispatch(updateVisualizationDoubleList(finalState));
          }

          dispatch(setPlayingDoubleList(false));
          dispatch(restoreTimeIdDoubleList());
          setIsAnimating(false);
          animationExecutedRef.current = false;
        },
        (stepHistory.length - startIndex) *
          (250 / (doubleListState.timeStep || 1))
      );

      timeIds.push(finalTimeoutId);
      dispatch(setTimeIdDoubleList(timeIds));
    },
    [dispatch, doubleListState.timeStep, clearActiveTimeouts]
  );

  // Función para ejecutar animaciones de manera robusta
  const executeAnimation = useCallback(
    (action, value, position = null) => {
      if (isAnimating) {
        showError('Espera a que termine la animación actual');
        return;
      }

      try {
        clearActiveTimeouts();
        dispatch(setPlayingDoubleList(false));

        const actionPayload = { action, value };
        if (position !== null) {
          actionPayload.position = position;
        }

        // Marcar que se va a ejecutar una nueva animación
        animationExecutedRef.current = false;
        currentFunActionRef.current = action;

        dispatch(setHeadDoubleList(doubleListState.head));
        dispatch(actionButtonDoubleList(actionPayload));
      } catch (error) {
        console.error('Error executing animation:', error);
        showError('Error al ejecutar la animación');
        setIsAnimating(false);
      }
    },
    [
      dispatch,
      doubleListState.head,
      isAnimating,
      showError,
      clearActiveTimeouts,
    ]
  );

  // Efecto para manejar la ejecución automática de animaciones
  useEffect(() => {
    if (
      doubleListState.stepHistory &&
      doubleListState.stepHistory.length > 0 &&
      doubleListState.funAction &&
      doubleListState.funAction === currentFunActionRef.current &&
      !doubleListState.playing &&
      !animationExecutedRef.current &&
      doubleListState.history === -1
    ) {
      animationExecutedRef.current = true;
      runAnimation(doubleListState.stepHistory, true);
    }
  }, [
    doubleListState.stepHistory,
    doubleListState.funAction,
    doubleListState.playing,
    doubleListState.history,
    runAnimation,
  ]);

  // Limpiar refs cuando cambia la acción
  useEffect(() => {
    if (doubleListState.funAction !== currentFunActionRef.current) {
      animationExecutedRef.current = false;
      currentFunActionRef.current = doubleListState.funAction;
    }
  }, [doubleListState.funAction]);

  // Handlers para operaciones de lista
  const handleInsertarAlInicio = () => {
    const numValue = value === '' ? null : parseInt(value);

    if (numValue === null) {
      showError('Ingresa un valor válido');
      return;
    }

    if (elementExists(numValue)) {
      showError('El elemento ya existe en la lista');
      return;
    }

    executeAnimation('insertarAlInicio', numValue);
    setValue('');
  };

  const handleInsertarAlFinal = () => {
    const numValue = value === '' ? null : parseInt(value);

    if (numValue === null) {
      showError('Ingresa un valor válido');
      return;
    }

    if (elementExists(numValue)) {
      showError('El elemento ya existe en la lista');
      return;
    }

    executeAnimation('insertarAlFinal', numValue);
    setValue('');
  };

  const handleInsertarEnPosicion = () => {
    const numValue = value === '' ? null : parseInt(value);
    const pos = position === '' ? null : parseInt(position);

    if (numValue === null) {
      showError('Ingresa un valor válido para insertar');
      return;
    }

    if (elementExists(numValue)) {
      showError('El elemento ya existe en la lista');
      return;
    }

    if (pos === null || pos < 0) {
      showError('Ingresa una posición válida (≥ 0)');
      return;
    }

    const maxPosition = getListSize();
    if (pos > maxPosition) {
      showError(`La posición máxima válida es ${maxPosition}`);
      return;
    }

    executeAnimation('insertarEnPosicion', numValue, pos);
    setValue('');
    setPosition('');
  };

  const handleEliminarDelInicio = () => {
    if (!doubleListState.head) {
      showError('La lista está vacía');
      return;
    }

    executeAnimation('eliminarDelInicio', null);
  };

  const handleEliminarDelFinal = () => {
    if (!doubleListState.head) {
      showError('La lista está vacía');
      return;
    }

    executeAnimation('eliminarDelFinal', null);
  };

  const handleEliminarEnPosicion = () => {
    if (!doubleListState.head) {
      showError('La lista está vacía');
      return;
    }

    const pos = deletePosition === '' ? null : parseInt(deletePosition);

    if (pos === null || pos < 0) {
      showError('Ingresa una posición válida (≥ 0)');
      return;
    }

    const maxPosition = getListSize() - 1;
    if (pos > maxPosition) {
      showError(`La posición máxima válida es ${maxPosition}`);
      return;
    }

    executeAnimation('eliminarEnPosicion', null, pos);
    setDeletePosition('');
  };

  const handleBuscar = () => {
    if (!doubleListState.head) {
      showError('La lista está vacía');
      return;
    }

    const numValue = searchValue === '' ? null : parseInt(searchValue);

    if (numValue === null) {
      showError('Ingresa un valor válido para buscar');
      return;
    }

    executeAnimation('buscar', numValue);
    setSearchValue('');
  };

  // Controles de reproducción manual
  const onPlayPause = e => {
    e.preventDefault();
    if (doubleListState.playing) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (doubleListState.stepHistory && doubleListState.stepHistory.length > 0) {
      const currentHistory = doubleListState.history || -1;
      const remainingSteps = doubleListState.stepHistory.slice(
        Math.max(0, currentHistory + 1)
      );

      if (remainingSteps.length > 0) {
        animationExecutedRef.current = true;
        runAnimation(remainingSteps, false);
      } else {
        dispatch(restoreRepeatDoubleList());
        animationExecutedRef.current = true;
        runAnimation(doubleListState.stepHistory, true);
      }
    }
  };

  const pause = () => {
    dispatch(setPlayingDoubleList(false));
    clearActiveTimeouts();
    setIsAnimating(false);
  };

  const goBackward = () => {
    if (doubleListState.playing) {
      pause();
    }

    const currentHistory = doubleListState.history || -1;
    if (currentHistory > 0 && doubleListState.stepHistory) {
      const previousStep = doubleListState.stepHistory[currentHistory - 1];
      dispatch(decrementHistoryDoubleList());
      dispatch(updateVisualizationDoubleList(previousStep));
    }
  };

  const goForward = () => {
    if (doubleListState.playing) {
      pause();
    }

    const currentHistory = doubleListState.history || -1;
    if (
      doubleListState.stepHistory &&
      currentHistory < doubleListState.stepHistory.length - 1
    ) {
      const nextStep = doubleListState.stepHistory[currentHistory + 1];
      dispatch(incrementHistoryDoubleList());
      dispatch(updateVisualizationDoubleList(nextStep));
    }
  };

  const repeat = () => {
    if (doubleListState.stepHistory && doubleListState.stepHistory.length > 0) {
      clearActiveTimeouts();
      dispatch(restoreRepeatDoubleList());
      animationExecutedRef.current = true;
      runAnimation(doubleListState.stepHistory, true);
    }
  };

  // Limpiar timeouts al desmontar el componente
  useEffect(() => {
    return () => {
      clearActiveTimeouts();
    };
  }, [clearActiveTimeouts]);

  // Determinar el icono de play/pause
  const playPauseIcon = doubleListState.playing ? svgPause : svgPlay;

  return (
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:ml-4 mb-4 flex flex-col md:justify-between">
      {/* Controles de reproducción */}
      <div className="flex justify-center space-x-1 sm:space-x-2 mb-4">
        <BasicButton
          onClick={goBackward}
          disabled={
            doubleListState.playing || (doubleListState.history || -1) <= 0
          }
          title="Retroceder"
        >
          {svgBack}
        </BasicButton>

        <BasicButton
          onClick={onPlayPause}
          disabled={
            !doubleListState.stepHistory ||
            doubleListState.stepHistory.length === 0
          }
          title={doubleListState.playing ? 'Pausar' : 'Reproducir'}
        >
          {playPauseIcon}
        </BasicButton>

        <BasicButton
          onClick={goForward}
          disabled={
            doubleListState.playing ||
            !doubleListState.stepHistory ||
            (doubleListState.history || -1) >=
              doubleListState.stepHistory.length - 1
          }
          title="Avanzar"
        >
          {svgForward}
        </BasicButton>

        <BasicButton
          onClick={repeat}
          disabled={
            !doubleListState.stepHistory ||
            doubleListState.stepHistory.length === 0
          }
          title="Repetir"
        >
          {svgRepeat}
        </BasicButton>
      </div>

      {/* Controles Insertar Inicio/Final */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Valor"
          variant="outlined"
          type="number"
          value={value}
          onChange={handleValueChange}
          disabled={isAnimating}
          sx={{ width: { xs: '80px', sm: '100px' } }}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleInsertarAlInicio}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            minWidth: { xs: '60px', sm: '80px' },
            fontSize: { xs: '0.7rem', sm: '0.875rem' },
          }}
        >
          Inicio
        </Button>
        <Button
          variant="contained"
          onClick={handleInsertarAlFinal}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            minWidth: { xs: '60px', sm: '80px' },
            fontSize: { xs: '0.7rem', sm: '0.875rem' },
          }}
        >
          Final
        </Button>
      </div>

      {/* Controles para Insertar en Posición */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={position}
          onChange={handlePositionChange}
          disabled={isAnimating}
          sx={{ width: { xs: '80px', sm: '100px' } }}
          size="small"
          inputProps={{
            min: 0,
            max: getListSize(),
          }}
        />
        <Button
          variant="contained"
          onClick={handleInsertarEnPosicion}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
            minWidth: { xs: '100px', sm: '140px' },
            fontSize: { xs: '0.7rem', sm: '0.875rem' },
          }}
        >
          Insertar
        </Button>
      </div>

      {/* Controles para Eliminar en Posición */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={deletePosition}
          onChange={handleDeletePositionChange}
          disabled={isAnimating}
          sx={{ width: { xs: '80px', sm: '100px' } }}
          size="small"
          inputProps={{
            min: 0,
            max: getListSize() > 0 ? getListSize() - 1 : 0,
          }}
        />
        <Button
          variant="contained"
          onClick={handleEliminarEnPosicion}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
            minWidth: { xs: '100px', sm: '140px' },
            fontSize: { xs: '0.7rem', sm: '0.875rem' },
          }}
        >
          Eliminar
        </Button>
      </div>

      {/* Control Eliminar Inicio/Final */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <Button
          variant="contained"
          onClick={handleEliminarDelInicio}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'info.main',
            '&:hover': {
              backgroundColor: 'info.dark',
            },
            minWidth: { xs: '90px', sm: '120px' },
            fontSize: { xs: '0.65rem', sm: '0.8rem' },
          }}
        >
          Elim. Inicio
        </Button>
        <Button
          variant="contained"
          onClick={handleEliminarDelFinal}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'info.main',
            '&:hover': {
              backgroundColor: 'info.dark',
            },
            minWidth: { xs: '90px', sm: '120px' },
            fontSize: { xs: '0.65rem', sm: '0.8rem' },
          }}
        >
          Elim. Final
        </Button>
      </div>

      {/* Control Buscar */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Buscar"
          variant="outlined"
          type="number"
          value={searchValue}
          onChange={handleSearchValueChange}
          disabled={isAnimating}
          sx={{ width: { xs: '80px', sm: '100px' } }}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleBuscar}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'warning.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'warning.dark',
            },
            minWidth: { xs: '100px', sm: '140px' },
            fontSize: { xs: '0.7rem', sm: '0.875rem' },
          }}
        >
          Buscar
        </Button>
      </div>

      {/* Notificaciones */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {toast}
        </Alert>
      </Snackbar>
    </div>
  );
};
