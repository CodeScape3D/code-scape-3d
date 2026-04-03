import { useDispatch, useSelector } from 'react-redux';
import {
  setArrayBinarySearch,
  actionButtonBinarySearch,
  updateVisualizationBinarySearch,
  incrementHistoryBinarySearch,
  decrementHistoryBinarySearch,
  setPlayingBinarySearch,
  setTimeIdBinarySearch,
  restoreTimeIdBinarySearch,
  restoreRepeatBinarySearch,
  resetBinarySearch,
} from '../../../store';
import { busquedaBinaria } from '../algorithms';
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

export const BinarySearchControls = () => {
  const binarySearchState = useSelector(state => state.binarySearch);
  const dispatch = useDispatch();

  const [inputArray, setInputArray] = useState('1, 3, 5, 7, 12, 15, 20, 25');
  const [searchValue, setSearchValue] = useState('');
  const [toast, setToast] = useState('');
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animationExecutedRef = useRef(false);
  const currentActionRef = useRef(null);

  const handleArrayChange = useCallback(event => {
    setInputArray(event.target.value);
  }, []);

  const handleSearchValueChange = useCallback(event => {
    const inputValue = event.target.value;
    if (inputValue === '' || !isNaN(inputValue)) {
      setSearchValue(inputValue);
    }
  }, []);

  const showError = useCallback(message => {
    setToast(message);
    setOpen(true);
  }, []);

  const clearActiveTimeouts = useCallback(() => {
    if (binarySearchState.timeIds && binarySearchState.timeIds.length > 0) {
      binarySearchState.timeIds.forEach(timeoutId => clearTimeout(timeoutId));
      dispatch(restoreTimeIdBinarySearch());
    }
  }, [binarySearchState.timeIds, dispatch]);

  const runAnimation = useCallback(
    (stepHistory, startFromBeginning = false) => {
      if (!stepHistory || stepHistory.length === 0) {
        setIsAnimating(false);
        return;
      }

      clearActiveTimeouts();
      dispatch(setPlayingBinarySearch(true));
      setIsAnimating(true);

      const timeIds = [];
      if (startFromBeginning) {
        dispatch(updateVisualizationBinarySearch(stepHistory[0]));
        dispatch(incrementHistoryBinarySearch());
      }

      const startIndex = startFromBeginning ? 1 : 0;

      // Velocidad mejorada: 800ms para permitir ver mejor cada paso
      const animationSpeed = 800;

      for (let i = startIndex; i < stepHistory.length; i++) {
        const step = stepHistory[i];
        const timeoutId = setTimeout(
          () => {
            dispatch(updateVisualizationBinarySearch(step));
            dispatch(incrementHistoryBinarySearch());
          },
          (i - startIndex) * animationSpeed
        );
        timeIds.push(timeoutId);
      }

      const finalTimeoutId = setTimeout(
        () => {
          dispatch(setPlayingBinarySearch(false));
          dispatch(restoreTimeIdBinarySearch());
          setIsAnimating(false);
          animationExecutedRef.current = false;
        },
        (stepHistory.length - startIndex) * animationSpeed
      );

      timeIds.push(finalTimeoutId);
      dispatch(setTimeIdBinarySearch(timeIds));
    },
    [dispatch, clearActiveTimeouts]
  );

  const executeSearch = useCallback(
    value => {
      if (isAnimating) {
        showError('Espera a que termine la animación actual');
        return;
      }

      if (binarySearchState.array.length === 0) {
        showError('Primero carga un arreglo');
        return;
      }

      try {
        clearActiveTimeouts();
        dispatch(setPlayingBinarySearch(false));

        const arr = [...binarySearchState.array];
        const trace = busquedaBinaria(arr, value);

        animationExecutedRef.current = false;
        currentActionRef.current = 'busquedaBinaria';

        dispatch(actionButtonBinarySearch({ trace, value }));
      } catch (error) {
        console.error('Error executing search:', error);
        showError('Error al ejecutar la búsqueda');
        setIsAnimating(false);
      }
    },
    [
      dispatch,
      binarySearchState.array,
      isAnimating,
      showError,
      clearActiveTimeouts,
    ]
  );

  useEffect(() => {
    if (
      binarySearchState.stepHistory &&
      binarySearchState.stepHistory.length > 0 &&
      binarySearchState.funAction === currentActionRef.current &&
      !binarySearchState.isPlaying &&
      !animationExecutedRef.current &&
      binarySearchState.history === -1
    ) {
      animationExecutedRef.current = true;
      runAnimation(binarySearchState.stepHistory, true);
    }
  }, [
    binarySearchState.stepHistory,
    binarySearchState.funAction,
    binarySearchState.isPlaying,
    binarySearchState.history,
    runAnimation,
  ]);

  const handleLoadArray = () => {
    const values = inputArray
      .split(',')
      .map(v => parseInt(v.trim(), 10))
      .filter(v => !isNaN(v))
      .sort((a, b) => a - b); // Ordenar automáticamente

    if (values.length === 0) {
      showError('Ingresa valores válidos separados por comas');
      return;
    }

    if (values.length > 20) {
      showError('Máximo 20 elementos permitidos');
      return;
    }

    dispatch(setArrayBinarySearch(values));
    dispatch(resetBinarySearch());
    clearActiveTimeouts();
    setInputArray(values.join(', ')); // Actualizar input con array ordenado
    setToast('Arreglo cargado y ordenado');
    setOpen(true);
  };

  const handleRandomArray = () => {
    const length = Math.floor(Math.random() * 8) + 5;
    const randomArray = Array.from(
      { length },
      () => Math.floor(Math.random() * 50) + 1
    ).sort((a, b) => a - b);
    setInputArray(randomArray.join(', '));
    dispatch(setArrayBinarySearch(randomArray));
    dispatch(resetBinarySearch());
    clearActiveTimeouts();
    setToast('Arreglo aleatorio ordenado generado');
    setOpen(true);
  };

  const handleBuscar = () => {
    const numValue = searchValue === '' ? null : parseInt(searchValue);
    if (numValue === null) {
      showError('Ingresa un valor válido para buscar');
      return;
    }
    executeSearch(numValue);
    setSearchValue('');
  };

  const onPlayPause = e => {
    e.preventDefault();
    if (binarySearchState.isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (
      binarySearchState.stepHistory &&
      binarySearchState.stepHistory.length > 0
    ) {
      const currentHistory = binarySearchState.history || -1;
      const remainingSteps = binarySearchState.stepHistory.slice(
        Math.max(0, currentHistory + 1)
      );

      if (remainingSteps.length > 0) {
        animationExecutedRef.current = true;
        runAnimation(remainingSteps, false);
      } else {
        dispatch(restoreRepeatBinarySearch());
        animationExecutedRef.current = true;
        runAnimation(binarySearchState.stepHistory, true);
      }
    }
  };

  const pause = () => {
    dispatch(setPlayingBinarySearch(false));
    clearActiveTimeouts();
    setIsAnimating(false);
  };

  const goBackward = () => {
    if (binarySearchState.isPlaying) pause();
    const currentHistory = binarySearchState.history || -1;
    if (currentHistory > 0 && binarySearchState.stepHistory) {
      const previousStep = binarySearchState.stepHistory[currentHistory - 1];
      dispatch(decrementHistoryBinarySearch());
      dispatch(updateVisualizationBinarySearch(previousStep));
    }
  };

  const goForward = () => {
    if (binarySearchState.isPlaying) pause();
    const currentHistory = binarySearchState.history || -1;
    if (
      binarySearchState.stepHistory &&
      currentHistory < binarySearchState.stepHistory.length - 1
    ) {
      const nextStep = binarySearchState.stepHistory[currentHistory + 1];
      dispatch(incrementHistoryBinarySearch());
      dispatch(updateVisualizationBinarySearch(nextStep));
    }
  };

  const repeat = () => {
    if (
      binarySearchState.stepHistory &&
      binarySearchState.stepHistory.length > 0
    ) {
      clearActiveTimeouts();
      dispatch(restoreRepeatBinarySearch());
      animationExecutedRef.current = true;
      runAnimation(binarySearchState.stepHistory, true);
    }
  };

  useEffect(() => {
    return () => clearActiveTimeouts();
  }, [clearActiveTimeouts]);

  const playPauseIcon = binarySearchState.isPlaying ? svgPause : svgPlay;

  return (
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:ml-4 mb-4 flex flex-col md:justify-between">
      {/* Controles de reproducción */}
      <div className="flex justify-center space-x-1 sm:space-x-2 mb-4">
        <BasicButton
          onClick={goBackward}
          disabled={
            binarySearchState.isPlaying ||
            (binarySearchState.history || -1) <= 0
          }
          title="Retroceder"
        >
          {svgBack}
        </BasicButton>
        <BasicButton
          onClick={onPlayPause}
          disabled={
            !binarySearchState.stepHistory ||
            binarySearchState.stepHistory.length === 0
          }
          title={binarySearchState.isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {playPauseIcon}
        </BasicButton>
        <BasicButton
          onClick={goForward}
          disabled={
            binarySearchState.isPlaying ||
            !binarySearchState.stepHistory ||
            (binarySearchState.history || -1) >=
              binarySearchState.stepHistory.length - 1
          }
          title="Avanzar"
        >
          {svgForward}
        </BasicButton>
        <BasicButton
          onClick={repeat}
          disabled={
            !binarySearchState.stepHistory ||
            binarySearchState.stepHistory.length === 0
          }
          title="Repetir"
        >
          {svgRepeat}
        </BasicButton>
      </div>

      {/* Input del arreglo con botones Cargar y Aleatorio en la misma línea */}
      <div className="flex flex-nowrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Arreglo (comas)"
          variant="outlined"
          value={inputArray}
          onChange={handleArrayChange}
          disabled={isAnimating}
          sx={{ width: { xs: '100px', sm: '120px' }, flexShrink: 0 }}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleLoadArray}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'info.main',
            '&:hover': { backgroundColor: 'info.dark' },
            minWidth: { xs: '70px', sm: '90px' },
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            flexShrink: 0,
          }}
        >
          Cargar
        </Button>
        <Button
          variant="contained"
          onClick={handleRandomArray}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'info.main',
            '&:hover': { backgroundColor: 'info.dark' },
            minWidth: { xs: '70px', sm: '90px' },
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            flexShrink: 0,
          }}
        >
          Aleatorio
        </Button>
      </div>

      {/* Input de búsqueda */}
      <div className="flex justify-center gap-2 items-center mb-3">
        <TextField
          label="Valor a buscar"
          variant="outlined"
          type="number"
          value={searchValue}
          onChange={handleSearchValueChange}
          disabled={isAnimating}
          sx={{ width: { xs: '100px', sm: '120px' } }}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleBuscar}
          disabled={isAnimating || binarySearchState.array.length === 0}
          sx={{
            height: '40px',
            backgroundColor: 'warning.main',
            color: 'white',
            '&:hover': { backgroundColor: 'warning.dark' },
            minWidth: { xs: '100px', sm: '140px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          Buscar
        </Button>
      </div>

      {/* Indicador de progreso elegante */}
      {binarySearchState.stepHistory &&
        binarySearchState.stepHistory.length > 0 && (
          <div className="w-full px-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">
                Paso {Math.max(0, binarySearchState.history + 1)} de{' '}
                {binarySearchState.stepHistory.length}
              </span>
              <span className="text-xs text-orange-400">
                {binarySearchState.isPlaying
                  ? '▶️ En progreso...'
                  : '⏸️ Pausado'}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-400 transition-all duration-300"
                style={{
                  width: `${((binarySearchState.history + 1) / binarySearchState.stepHistory.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="info" onClose={() => setOpen(false)}>
          {toast}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BinarySearchControls;
