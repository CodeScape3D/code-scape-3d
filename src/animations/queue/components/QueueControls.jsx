import { useDispatch, useSelector } from 'react-redux';
import {
  decrementHistoryQueue,
  incrementHistoryQueue,
  actionButtonQueue,
  restoreRepeatQueue,
  restoreTimeIdQueue,
  setHeadQueue,
  setPlayingQueue,
  setTimeIdQueue,
  updateVisualizationQueue,
} from '../../../store';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useEffect, useState, useCallback, useRef } from 'react';
import { BasicButton } from '../../../components';
import {
  svgPause,
  svgBack,
  svgPlay,
  svgRepeat,
  svgForward,
} from '../../../assets/svg/SvgConstans';

export const QueueControls = () => {
  const queueState = useSelector(state => state.queue);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [insertPosition, setInsertPosition] = useState('');
  const [extractPosition, setExtractPosition] = useState('');
  const [toast, setToast] = useState('');
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animationExecutedRef = useRef(false);
  const currentFunActionRef = useRef(null);

  const handleValueChange = event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue !== null)) {
      setValue(inputValue);
    }
  };

  const handleInsertPositionChange = event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue >= 0)) {
      setInsertPosition(inputValue);
    }
  };

  const handleExtractPositionChange = event => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue >= 0)) {
      setExtractPosition(inputValue);
    }
  };

  const showError = useCallback(message => {
    setToast(message);
    setOpen(true);
  }, []);

  const runAnimation = useCallback(
    (stepHistory, startFromBeginning = false) => {
      if (!stepHistory || stepHistory.length === 0) {
        setIsAnimating(false);
        return;
      }

      dispatch(restoreTimeIdQueue());
      dispatch(setPlayingQueue(true));
      setIsAnimating(true);

      const timeIds = [];

      if (startFromBeginning) {
        dispatch(updateVisualizationQueue(stepHistory[0]));
        dispatch(incrementHistoryQueue());
      }

      const startIndex = startFromBeginning ? 1 : 0;

      for (let i = startIndex; i < stepHistory.length; i++) {
        const step = stepHistory[i];
        const timeoutId = setTimeout(
          () => {
            dispatch(updateVisualizationQueue(step));
            dispatch(incrementHistoryQueue());
          },
          (i - startIndex) * (250 / (queueState.timeStep || 1))
        );

        timeIds.push(timeoutId);
      }

      const finalTimeoutId = setTimeout(
        () => {
          const finalState = stepHistory[stepHistory.length - 1];
          if (finalState) {
            dispatch(updateVisualizationQueue(finalState));
          }

          dispatch(setPlayingQueue(false));
          dispatch(restoreTimeIdQueue());
          setIsAnimating(false);
          animationExecutedRef.current = false;
        },
        (stepHistory.length - startIndex) * (250 / (queueState.timeStep || 1))
      );

      timeIds.push(finalTimeoutId);
      dispatch(setTimeIdQueue(timeIds));
    },
    [dispatch, queueState.timeStep]
  );

  const executeAnimation = useCallback(
    (action, value, position = null) => {
      if (isAnimating) {
        showError('Espera a que termine la animación actual');
        return;
      }

      try {
        dispatch(restoreTimeIdQueue());
        dispatch(setPlayingQueue(false));

        const actionPayload = { action, value };
        if (position !== null) actionPayload.position = position;

        dispatch(setHeadQueue(queueState.head));
        dispatch(actionButtonQueue(actionPayload));
        dispatch(restoreRepeatQueue());

        animationExecutedRef.current = false;
        currentFunActionRef.current = action;
      } catch (error) {
        console.error('Error executing animation:', error);
        showError('Error al ejecutar la animación');
        setIsAnimating(false);
      }
    },
    [dispatch, queueState.head, isAnimating, showError]
  );

  useEffect(() => {
    if (
      queueState.stepHistory &&
      queueState.stepHistory.length > 0 &&
      queueState.funAction &&
      queueState.funAction === currentFunActionRef.current &&
      !queueState.playing &&
      !animationExecutedRef.current
    ) {
      animationExecutedRef.current = true;
      runAnimation(queueState.stepHistory, true);
    }
  }, [queueState.stepHistory, queueState.funAction, runAnimation]);

  useEffect(() => {
    if (queueState.funAction !== currentFunActionRef.current) {
      animationExecutedRef.current = false;
      currentFunActionRef.current = queueState.funAction;
    }
  }, [queueState.funAction]);

  const handleEnqueue = () => {
    const numValue = value === '' ? null : parseInt(value);
    if (numValue === null) {
      showError('Ingresa un valor válido');
      return;
    }

    if (queueState.elementos && queueState.elementos.length >= 7) {
      showError('La cola está llena (máximo 7 elementos)');
      return;
    }

    if (queueState.elementos && queueState.elementos.includes(numValue)) {
      showError('El elemento ya existe en la cola');
      return;
    }

    executeAnimation('enqueue', numValue);
    setValue('');
  };

  const handleDequeue = () => {
    if (!queueState.head) {
      showError('La cola está vacía');
      return;
    }

    const frontValue = queueState.head.getValue();
    executeAnimation('dequeue', frontValue);
  };

  const handleEliminarFinal = () => {
    if (!queueState.head) {
      showError('La cola está vacía');
      return;
    }

    executeAnimation('eliminarFinal', null);
  };

  const handleInsert = () => {
    const numValue = value === '' ? null : parseInt(value);
    const pos = insertPosition === '' ? null : parseInt(insertPosition);

    if (numValue === null) {
      showError('Ingresa un valor válido para insertar');
      return;
    }

    if (pos === null || pos < 0) {
      showError('Ingresa una posición válida (≥ 0)');
      return;
    }

    if (queueState.elementos && queueState.elementos.includes(numValue)) {
      showError('El elemento ya existe en la cola');
      return;
    }

    if (queueState.elementos && queueState.elementos.length >= 7) {
      showError('La cola está llena (máximo 7 elementos)');
      return;
    }

    const maxPosition = queueState.elementos ? queueState.elementos.length : 0;
    if (pos > maxPosition) {
      showError(`La posición máxima válida es ${maxPosition}`);
      return;
    }

    executeAnimation('insertar', numValue, pos);
    setValue('');
    setInsertPosition('');
  };

  const handleExtraer = () => {
    if (!queueState.head) {
      showError('La cola está vacía');
      return;
    }

    const pos = extractPosition === '' ? null : parseInt(extractPosition);
    if (pos === null || pos < 0) {
      showError('Ingresa una posición válida (≥ 0)');
      return;
    }

    const maxPosition = queueState.elementos
      ? queueState.elementos.length - 1
      : 0;
    if (pos > maxPosition) {
      showError(`La posición máxima válida es ${maxPosition}`);
      return;
    }

    executeAnimation('extraer', null, pos);
    setExtractPosition('');
  };

  const onPlayPause = e => {
    e.preventDefault();
    if (queueState.playing) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (queueState.stepHistory && queueState.stepHistory.length > 0) {
      const currentHistory = queueState.history || -1;
      const remainingSteps = queueState.stepHistory.slice(
        Math.max(0, currentHistory + 1)
      );

      if (remainingSteps.length > 0) {
        animationExecutedRef.current = true;
        runAnimation(remainingSteps, false);
      } else {
        dispatch(restoreRepeatQueue());
        animationExecutedRef.current = true;
        runAnimation(queueState.stepHistory, true);
      }
    }
  };

  const pause = () => {
    dispatch(setPlayingQueue(false));
    dispatch(restoreTimeIdQueue());
    setIsAnimating(false);
  };

  const goBackward = () => {
    if (queueState.playing) pause();

    const currentHistory = queueState.history || -1;
    if (currentHistory > 0 && queueState.stepHistory) {
      const previousStep = queueState.stepHistory[currentHistory - 1];
      dispatch(decrementHistoryQueue());
      dispatch(updateVisualizationQueue(previousStep));
    }
  };

  const goForward = () => {
    if (queueState.playing) pause();

    const currentHistory = queueState.history || -1;
    if (
      queueState.stepHistory &&
      currentHistory < queueState.stepHistory.length - 1
    ) {
      const nextStep = queueState.stepHistory[currentHistory + 1];
      dispatch(incrementHistoryQueue());
      dispatch(updateVisualizationQueue(nextStep));
    }
  };

  const repeat = () => {
    if (queueState.stepHistory && queueState.stepHistory.length > 0) {
      dispatch(restoreTimeIdQueue());
      dispatch(restoreRepeatQueue());
      animationExecutedRef.current = true;
      runAnimation(queueState.stepHistory, true);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(restoreTimeIdQueue());
    };
  }, [dispatch]);

  const playPauseIcon = queueState.playing ? svgPause : svgPlay;

  return (
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:ml-4 mb-4 flex flex-col md:justify-between">
      {/* Controles de reproducción */}
      <div className="flex justify-center space-x-1 sm:space-x-2 mb-4">
        <BasicButton
          onClick={goBackward}
          disabled={queueState.playing || (queueState.history || -1) <= 0}
          title="Retroceder"
        >
          {svgBack}
        </BasicButton>

        <BasicButton
          onClick={onPlayPause}
          disabled={
            !queueState.stepHistory || queueState.stepHistory.length === 0
          }
          title={queueState.playing ? 'Pausar' : 'Reproducir'}
        >
          {playPauseIcon}
        </BasicButton>

        <BasicButton
          onClick={goForward}
          disabled={
            queueState.playing ||
            !queueState.stepHistory ||
            (queueState.history || -1) >=
              (queueState.stepHistory ? queueState.stepHistory.length - 1 : 0)
          }
          title="Avanzar"
        >
          {svgForward}
        </BasicButton>

        <BasicButton
          onClick={repeat}
          disabled={
            !queueState.stepHistory || queueState.stepHistory.length === 0
          }
          title="Repetir"
        >
          {svgRepeat}
        </BasicButton>
      </div>

      {/* Controles Enqueue/Dequeue */}
      <div className="flex justify-center gap-2 items-center mb-3">
        <TextField
          label="Valor"
          variant="outlined"
          type="number"
          value={value}
          onChange={handleValueChange}
          disabled={isAnimating}
          sx={{ width: { xs: '100px', sm: '120px' } }}
          size="small"
          inputProps={{ min: 0, step: 1 }}
        />
        <div className="flex flex-col gap-2">
          <Button
            variant="contained"
            onClick={handleEnqueue}
            disabled={isAnimating}
            sx={{
              height: '40px',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              minWidth: { xs: '90px', sm: '110px' },
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            Enqueue
          </Button>
          <Button
            variant="contained"
            onClick={handleDequeue}
            disabled={isAnimating}
            sx={{
              height: '40px',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              minWidth: { xs: '90px', sm: '110px' },
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            Dequeue
          </Button>
        </div>
      </div>

      {/* Controles para Insertar */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={insertPosition}
          onChange={handleInsertPositionChange}
          disabled={isAnimating}
          sx={{ width: { xs: '80px', sm: '100px' } }}
          size="small"
          inputProps={{
            min: 0,
            max: queueState.elementos ? queueState.elementos.length : 0,
            step: 1,
          }}
        />
        <Button
          variant="contained"
          onClick={handleInsert}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
            minWidth: { xs: '100px', sm: '140px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          Insertar
        </Button>
      </div>

      {/* Controles para Extraer */}
      <div className="flex flex-wrap justify-center gap-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={extractPosition}
          onChange={handleExtractPositionChange}
          disabled={isAnimating}
          sx={{ width: { xs: '80px', sm: '100px' } }}
          size="small"
          inputProps={{
            min: 0,
            max: queueState.elementos ? queueState.elementos.length - 1 : 0,
            step: 1,
          }}
        />
        <Button
          variant="contained"
          onClick={handleExtraer}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
            minWidth: { xs: '100px', sm: '140px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          Extraer
        </Button>
      </div>

      {/* Control Eliminar Final */}
      <div className="flex justify-center mb-3 px-2">
        <Button
          variant="contained"
          onClick={handleEliminarFinal}
          disabled={isAnimating}
          sx={{
            height: '40px',
            backgroundColor: 'info.main',
            '&:hover': {
              backgroundColor: 'info.dark',
            },
            width: '100%',
            maxWidth: { xs: '200px', sm: '292px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          Eliminar Final
        </Button>
      </div>

      {/* Notificaciones */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">{toast}</Alert>
      </Snackbar>
    </div>
  );
};

export default QueueControls;
