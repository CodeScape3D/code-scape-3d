import { useDispatch, useSelector } from 'react-redux';
import {
  setArrayLinearSearch,
  actionButtonLinearSearch,
  updateVisualizationLinearSearch,
  incrementHistoryLinearSearch,
  decrementHistoryLinearSearch,
  setPlayingLinearSearch,
  setTimeIdLinearSearch,
  restoreTimeIdLinearSearch,
  restoreRepeatLinearSearch,
  resetLinearSearch,
} from '../../../store';
import { busquedaLineal } from '../algorithms';
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

export const LinearSearchControls = () => {
  const linearSearchState = useSelector(state => state.linearSearch);
  const dispatch = useDispatch();

  const [inputArray, setInputArray] = useState('5, 12, 3, 8, 15, 7, 20, 1');
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
    if (linearSearchState.timeIds && linearSearchState.timeIds.length > 0) {
      linearSearchState.timeIds.forEach(timeoutId => clearTimeout(timeoutId));
      dispatch(restoreTimeIdLinearSearch());
    }
  }, [linearSearchState.timeIds, dispatch]);

  const runAnimation = useCallback(
    (stepHistory, startFromBeginning = false) => {
      if (!stepHistory || stepHistory.length === 0) {
        setIsAnimating(false);
        return;
      }

      clearActiveTimeouts();
      dispatch(setPlayingLinearSearch(true));
      setIsAnimating(true);

      const timeIds = [];
      if (startFromBeginning) {
        dispatch(updateVisualizationLinearSearch(stepHistory[0]));
        dispatch(incrementHistoryLinearSearch());
      }

      const startIndex = startFromBeginning ? 1 : 0;

      for (let i = startIndex; i < stepHistory.length; i++) {
        const step = stepHistory[i];
        const timeoutId = setTimeout(
          () => {
            dispatch(updateVisualizationLinearSearch(step));
            dispatch(incrementHistoryLinearSearch());
          },
          (i - startIndex) * 500
        );
        timeIds.push(timeoutId);
      }

      const finalTimeoutId = setTimeout(
        () => {
          dispatch(setPlayingLinearSearch(false));
          dispatch(restoreTimeIdLinearSearch());
          setIsAnimating(false);
          animationExecutedRef.current = false;
        },
        (stepHistory.length - startIndex) * 500
      );

      timeIds.push(finalTimeoutId);
      dispatch(setTimeIdLinearSearch(timeIds));
    },
    [dispatch, clearActiveTimeouts]
  );

  const executeSearch = useCallback(
    value => {
      if (isAnimating) {
        showError('Espera a que termine la animación actual');
        return;
      }

      if (linearSearchState.array.length === 0) {
        showError('Primero carga un arreglo');
        return;
      }

      try {
        clearActiveTimeouts();
        dispatch(setPlayingLinearSearch(false));

        const arr = [...linearSearchState.array];
        const trace = busquedaLineal(arr, value);

        animationExecutedRef.current = false;
        currentActionRef.current = 'busquedaLineal';

        dispatch(actionButtonLinearSearch({ trace, value }));
      } catch (error) {
        console.error('Error executing search:', error);
        showError('Error al ejecutar la búsqueda');
        setIsAnimating(false);
      }
    },
    [
      dispatch,
      linearSearchState.array,
      isAnimating,
      showError,
      clearActiveTimeouts,
    ]
  );

  useEffect(() => {
    if (
      linearSearchState.stepHistory &&
      linearSearchState.stepHistory.length > 0 &&
      linearSearchState.funAction === currentActionRef.current &&
      !linearSearchState.isPlaying &&
      !animationExecutedRef.current &&
      linearSearchState.history === -1
    ) {
      animationExecutedRef.current = true;
      runAnimation(linearSearchState.stepHistory, true);
    }
  }, [
    linearSearchState.stepHistory,
    linearSearchState.funAction,
    linearSearchState.isPlaying,
    linearSearchState.history,
    runAnimation,
  ]);

  const handleLoadArray = () => {
    const values = inputArray
      .split(',')
      .map(v => parseInt(v.trim(), 10))
      .filter(v => !isNaN(v));

    if (values.length === 0) {
      showError('Ingresa valores válidos separados por comas');
      return;
    }

    if (values.length > 20) {
      showError('Máximo 20 elementos permitidos');
      return;
    }

    dispatch(setArrayLinearSearch(values));
    dispatch(resetLinearSearch());
    clearActiveTimeouts();
    setToast('Arreglo cargado correctamente');
    setOpen(true);
  };

  const handleRandomArray = () => {
    const length = Math.floor(Math.random() * 8) + 5;
    const randomArray = Array.from(
      { length },
      () => Math.floor(Math.random() * 50) + 1
    );
    setInputArray(randomArray.join(', '));
    dispatch(setArrayLinearSearch(randomArray));
    dispatch(resetLinearSearch());
    clearActiveTimeouts();
    setToast('Arreglo aleatorio generado');
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
    if (linearSearchState.isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (
      linearSearchState.stepHistory &&
      linearSearchState.stepHistory.length > 0
    ) {
      const currentHistory = linearSearchState.history || -1;
      const remainingSteps = linearSearchState.stepHistory.slice(
        Math.max(0, currentHistory + 1)
      );

      if (remainingSteps.length > 0) {
        animationExecutedRef.current = true;
        runAnimation(remainingSteps, false);
      } else {
        dispatch(restoreRepeatLinearSearch());
        animationExecutedRef.current = true;
        runAnimation(linearSearchState.stepHistory, true);
      }
    }
  };

  const pause = () => {
    dispatch(setPlayingLinearSearch(false));
    clearActiveTimeouts();
    setIsAnimating(false);
  };

  const goBackward = () => {
    if (linearSearchState.isPlaying) pause();
    const currentHistory = linearSearchState.history || -1;
    if (currentHistory > 0 && linearSearchState.stepHistory) {
      const previousStep = linearSearchState.stepHistory[currentHistory - 1];
      dispatch(decrementHistoryLinearSearch());
      dispatch(updateVisualizationLinearSearch(previousStep));
    }
  };

  const goForward = () => {
    if (linearSearchState.isPlaying) pause();
    const currentHistory = linearSearchState.history || -1;
    if (
      linearSearchState.stepHistory &&
      currentHistory < linearSearchState.stepHistory.length - 1
    ) {
      const nextStep = linearSearchState.stepHistory[currentHistory + 1];
      dispatch(incrementHistoryLinearSearch());
      dispatch(updateVisualizationLinearSearch(nextStep));
    }
  };

  const repeat = () => {
    if (
      linearSearchState.stepHistory &&
      linearSearchState.stepHistory.length > 0
    ) {
      clearActiveTimeouts();
      dispatch(restoreRepeatLinearSearch());
      animationExecutedRef.current = true;
      runAnimation(linearSearchState.stepHistory, true);
    }
  };

  useEffect(() => {
    return () => clearActiveTimeouts();
  }, [clearActiveTimeouts]);

  const playPauseIcon = linearSearchState.isPlaying ? svgPause : svgPlay;

  return (
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:ml-4 mb-4 flex flex-col md:justify-between">
      {/* Controles de reproducción */}
      <div className="flex justify-center space-x-1 sm:space-x-2 mb-4">
        <BasicButton
          onClick={goBackward}
          disabled={
            linearSearchState.isPlaying ||
            (linearSearchState.history || -1) <= 0
          }
          title="Retroceder"
        >
          {svgBack}
        </BasicButton>
        <BasicButton
          onClick={onPlayPause}
          disabled={
            !linearSearchState.stepHistory ||
            linearSearchState.stepHistory.length === 0
          }
          title={linearSearchState.isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {playPauseIcon}
        </BasicButton>
        <BasicButton
          onClick={goForward}
          disabled={
            linearSearchState.isPlaying ||
            !linearSearchState.stepHistory ||
            (linearSearchState.history || -1) >=
              linearSearchState.stepHistory.length - 1
          }
          title="Avanzar"
        >
          {svgForward}
        </BasicButton>
        <BasicButton
          onClick={repeat}
          disabled={
            !linearSearchState.stepHistory ||
            linearSearchState.stepHistory.length === 0
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
          sx={{ width: { xs: '120px', sm: '140px' } }}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleBuscar}
          disabled={isAnimating || linearSearchState.array.length === 0}
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
      {linearSearchState.stepHistory &&
        linearSearchState.stepHistory.length > 0 && (
          <div className="w-full px-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">
                Paso {Math.max(0, linearSearchState.history + 1)} de{' '}
                {linearSearchState.stepHistory.length}
              </span>
              <span className="text-xs text-cyan-400">
                {linearSearchState.isPlaying
                  ? '▶️ En progreso...'
                  : '⏸️ Pausado'}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{
                  width: `${((linearSearchState.history + 1) / linearSearchState.stepHistory.length) * 100}%`,
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

export default LinearSearchControls;
