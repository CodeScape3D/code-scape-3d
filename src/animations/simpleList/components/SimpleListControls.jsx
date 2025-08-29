import { useDispatch, useSelector } from 'react-redux';
import {
  decrementHistorySimpleList,
  incrementHistorySimpleList,
  actionButtonSimpleList,
  restoreRepeatSimpleList,
  restoreTimeIdSimpleList,
  setHeadSimpleList,
  setPlayingSimpleList,
  setTimeIdSimpleList,
  updateVisualizationSimpleList,
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

export const SimpleListControls = () => {
  const simpleListState = useSelector(state => state.simpleList);
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
    if (!simpleListState.head) return 0;
    let count = 0;
    let current = simpleListState.head;
    while (current !== null) {
      count++;
      current = current.getNext();
    }
    return count;
  }, [simpleListState.head]);

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
    if (simpleListState.timeIds && simpleListState.timeIds.length > 0) {
      simpleListState.timeIds.forEach(timeoutId => {
        clearTimeout(timeoutId);
      });
      dispatch(restoreTimeIdSimpleList());
    }
  }, [simpleListState.timeIds, dispatch]);

  // Función para ejecutar las animaciones paso a paso
  const runAnimation = useCallback(
    (stepHistory, startFromBeginning = false) => {
      if (!stepHistory || stepHistory.length === 0) {
        setIsAnimating(false);
        return;
      }

      clearActiveTimeouts();
      dispatch(setPlayingSimpleList(true));
      setIsAnimating(true);

      const timeIds = [];

      if (startFromBeginning) {
        dispatch(updateVisualizationSimpleList(stepHistory[0]));
        dispatch(incrementHistorySimpleList());
      }

      const startIndex = startFromBeginning ? 1 : 0;

      for (let i = startIndex; i < stepHistory.length; i++) {
        const step = stepHistory[i];
        const timeoutId = setTimeout(
          () => {
            dispatch(updateVisualizationSimpleList(step));
            dispatch(incrementHistorySimpleList());
          },
          (i - startIndex) * (250 / (simpleListState.timeStep || 1))
        );

        timeIds.push(timeoutId);
      }

      const finalTimeoutId = setTimeout(
        () => {
          const finalState = stepHistory[stepHistory.length - 1];
          if (finalState) {
            dispatch(updateVisualizationSimpleList(finalState));
          }

          dispatch(setPlayingSimpleList(false));
          dispatch(restoreTimeIdSimpleList());
          setIsAnimating(false);
          animationExecutedRef.current = false;
        },
        (stepHistory.length - startIndex) *
          (250 / (simpleListState.timeStep || 1))
      );

      timeIds.push(finalTimeoutId);
      dispatch(setTimeIdSimpleList(timeIds));
    },
    [dispatch, simpleListState.timeStep, clearActiveTimeouts]
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
        dispatch(setPlayingSimpleList(false));

        const actionPayload = { action, value };
        if (position !== null) {
          actionPayload.position = position;
        }

        dispatch(setHeadSimpleList(simpleListState.head));
        dispatch(actionButtonSimpleList(actionPayload));
        dispatch(restoreRepeatSimpleList());

        animationExecutedRef.current = false;
        currentFunActionRef.current = action;
      } catch (error) {
        console.error('Error executing animation:', error);
        showError('Error al ejecutar la animación');
        setIsAnimating(false);
      }
    },
    [
      dispatch,
      simpleListState.head,
      isAnimating,
      showError,
      clearActiveTimeouts,
    ]
  );

  // Efecto para manejar la ejecución automática de animaciones
  useEffect(() => {
    if (
      simpleListState.stepHistory &&
      simpleListState.stepHistory.length > 0 &&
      simpleListState.funAction &&
      simpleListState.funAction === currentFunActionRef.current &&
      !simpleListState.playing &&
      !animationExecutedRef.current
    ) {
      animationExecutedRef.current = true;
      runAnimation(simpleListState.stepHistory, true);
    }
  }, [simpleListState.stepHistory, simpleListState.funAction, runAnimation]);

  // Limpiar refs cuando cambia la acción
  useEffect(() => {
    if (simpleListState.funAction !== currentFunActionRef.current) {
      animationExecutedRef.current = false;
      currentFunActionRef.current = simpleListState.funAction;
    }
  }, [simpleListState.funAction]);

  // Handlers para operaciones de lista
  const handleInsertarAlInicio = () => {
    const numValue = value === '' ? null : parseInt(value);

    if (numValue === null) {
      showError('Ingresa un valor válido');
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
    if (!simpleListState.head) {
      showError('La lista está vacía');
      return;
    }

    executeAnimation('eliminarDelInicio', null);
  };

  const handleEliminarDelFinal = () => {
    if (!simpleListState.head) {
      showError('La lista está vacía');
      return;
    }

    executeAnimation('eliminarDelFinal', null);
  };

  const handleEliminarEnPosicion = () => {
    if (!simpleListState.head) {
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
    if (!simpleListState.head) {
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
    if (simpleListState.playing) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (simpleListState.stepHistory && simpleListState.stepHistory.length > 0) {
      const currentHistory = simpleListState.history || -1;
      const remainingSteps = simpleListState.stepHistory.slice(
        Math.max(0, currentHistory + 1)
      );

      if (remainingSteps.length > 0) {
        animationExecutedRef.current = true;
        runAnimation(remainingSteps, false);
      } else {
        dispatch(restoreRepeatSimpleList());
        animationExecutedRef.current = true;
        runAnimation(simpleListState.stepHistory, true);
      }
    }
  };

  const pause = () => {
    dispatch(setPlayingSimpleList(false));
    clearActiveTimeouts();
    setIsAnimating(false);
  };

  const goBackward = () => {
    if (simpleListState.playing) {
      pause();
    }

    const currentHistory = simpleListState.history || -1;
    if (currentHistory > 0 && simpleListState.stepHistory) {
      const previousStep = simpleListState.stepHistory[currentHistory - 1];
      dispatch(decrementHistorySimpleList());
      dispatch(updateVisualizationSimpleList(previousStep));
    }
  };

  const goForward = () => {
    if (simpleListState.playing) {
      pause();
    }

    const currentHistory = simpleListState.history || -1;
    if (
      simpleListState.stepHistory &&
      currentHistory < simpleListState.stepHistory.length - 1
    ) {
      const nextStep = simpleListState.stepHistory[currentHistory + 1];
      dispatch(incrementHistorySimpleList());
      dispatch(updateVisualizationSimpleList(nextStep));
    }
  };

  const repeat = () => {
    if (simpleListState.stepHistory && simpleListState.stepHistory.length > 0) {
      clearActiveTimeouts();
      dispatch(restoreRepeatSimpleList());
      animationExecutedRef.current = true;
      runAnimation(simpleListState.stepHistory, true);
    }
  };

  // Limpiar timeouts al desmontar el componente
  useEffect(() => {
    return () => {
      clearActiveTimeouts();
    };
  }, [clearActiveTimeouts]);

  // Determinar el icono de play/pause
  const playPauseIcon = simpleListState.playing ? svgPause : svgPlay;

  return (
    <div className="w-full md:w-80 mx-auto md:ml-4 mb-4 flex flex-col md:justify-between">
      {/* Controles de reproducción */}
      <div className="flex justify-center space-x-2 mb-4">
        <BasicButton
          onClick={goBackward}
          disabled={
            simpleListState.playing || (simpleListState.history || -1) <= 0
          }
          title="Retroceder"
        >
          {svgBack}
        </BasicButton>

        <BasicButton
          onClick={onPlayPause}
          disabled={
            !simpleListState.stepHistory ||
            simpleListState.stepHistory.length === 0
          }
          title={simpleListState.playing ? 'Pausar' : 'Reproducir'}
        >
          {playPauseIcon}
        </BasicButton>

        <BasicButton
          onClick={goForward}
          disabled={
            simpleListState.playing ||
            !simpleListState.stepHistory ||
            (simpleListState.history || -1) >=
              simpleListState.stepHistory.length - 1
          }
          title="Avanzar"
        >
          {svgForward}
        </BasicButton>

        <BasicButton
          onClick={repeat}
          disabled={
            !simpleListState.stepHistory ||
            simpleListState.stepHistory.length === 0
          }
          title="Repetir"
        >
          {svgRepeat}
        </BasicButton>
      </div>

      {/* Controles Insertar Inicio/Final */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Valor"
          variant="outlined"
          type="number"
          value={value}
          onChange={handleValueChange}
          disabled={isAnimating}
          style={{ width: '120px' }}
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
            minWidth: '80px',
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
            minWidth: '80px',
          }}
        >
          Final
        </Button>
      </div>

      {/* Controles para Insertar en Posición */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={position}
          onChange={handlePositionChange}
          disabled={isAnimating}
          style={{ width: '120px' }}
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
            width: '100%',
            maxWidth: '170px',
          }}
        >
          Insertar
        </Button>
      </div>

      {/* Controles para Eliminar en Posición */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={deletePosition}
          onChange={handleDeletePositionChange}
          disabled={isAnimating}
          style={{ width: '120px' }}
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
            width: '100%',
            maxWidth: '170px',
          }}
        >
          Eliminar
        </Button>
      </div>

      {/* Control Eliminar Inicio/Final */}
      <div className="flex justify-center space-x-2 items-center mb-3">
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
            width: '100%',
            maxWidth: '140px',
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
            width: '100%',
            maxWidth: '140px',
          }}
        >
          Elim. Final
        </Button>
      </div>

      {/* Control Buscar */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Buscar"
          variant="outlined"
          type="number"
          value={searchValue}
          onChange={handleSearchValueChange}
          disabled={isAnimating}
          style={{ width: '120px' }}
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
            width: '100%',
            maxWidth: '170px',
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
