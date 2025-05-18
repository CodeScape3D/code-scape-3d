import { useDispatch, useSelector } from 'react-redux';
import { 
  decrementHistoryStack, 
  incrementHistoryStack, 
  actionButton, 
  restoreRepeatStack, 
  restoreTimeId, 
  setHead, 
  setPlayingStack, 
  setTimeIdStack, 
  updateVisualizationStack 
} from '../../../store';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { BasicButton } from '../../../components';
import { svgPause, svgBack, svgPlay, svgRepeat, svgForward } from '../../../assets/svg/SvgConstans';

export const StackControls = () => {
  const stackState = useSelector((state) => state.stack);
  const dispatch = useDispatch();

  // Estados locales
  const [value, setValue] = useState('');
  const [insertPosition, setInsertPosition] = useState('');
  const [extractPosition, setExtractPosition] = useState('');
  const [toast, setToast] = useState('');
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handlers para cambios en inputs
  const handleValueChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue !== null)) {
      setValue(inputValue);
    }
  };

  const handleInsertPositionChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue >= 0)) {
      setInsertPosition(inputValue);
    }
  };

  const handleExtractPositionChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && inputValue >= 0)) {
      setExtractPosition(inputValue);
    }
  };

  // Función para mostrar mensajes de error
  const showError = useCallback((message) => {
    setToast(message);
    setOpen(true);
  }, []);

  // Función para ejecutar animaciones de manera robusta
  const executeAnimation = useCallback((action, value, position = null) => {
    if (isAnimating) {
      showError("Espera a que termine la animación actual");
      return;
    }

    try {
      // Cancelar cualquier animación en curso
      dispatch(restoreTimeId());
      dispatch(setPlayingStack(false));
      
      // Preparar el payload de la acción
      const actionPayload = { action, value };
      if (position !== null) {
        actionPayload.position = position;
      }
      
      // Guardar estado actual y despachar acción
      dispatch(setHead(stackState.head));
      dispatch(actionButton(actionPayload));
      dispatch(restoreRepeatStack());
      
      setIsAnimating(true);
      
    } catch (error) {
      console.error('Error executing animation:', error);
      showError("Error al ejecutar la animación");
      setIsAnimating(false);
    }
  }, [dispatch, stackState.head, isAnimating, showError]);

  // Función para ejecutar la animación paso a paso
  const runAnimation = useCallback((stepHistory) => {
    if (!stepHistory || stepHistory.length === 0) {
      setIsAnimating(false);
      return;
    }

    dispatch(setPlayingStack(true));
    const timeIds = [];
    
    // Ejecutar cada paso con retraso
    stepHistory.forEach((step, index) => {
      const timeoutId = setTimeout(() => {
        dispatch(incrementHistoryStack());
        dispatch(updateVisualizationStack(step));
      }, index * (250 / (stackState.timeStep || 1)));
      
      timeIds.push(timeoutId);
    });

    // Finalizar animación
    const finalTimeoutId = setTimeout(() => {
      const finalState = stepHistory[stepHistory.length - 1];
      if (finalState) {
        dispatch(updateVisualizationStack(finalState));
      }
      
      dispatch(setPlayingStack(false));
      dispatch(restoreTimeId());
      setIsAnimating(false);
    }, stepHistory.length * (250 / (stackState.timeStep || 1)));

    timeIds.push(finalTimeoutId);
    dispatch(setTimeIdStack(timeIds));
  }, [dispatch, stackState.timeStep]);

  // Handlers para operaciones de pila
  const handlePushButton = () => {
    const numValue = value === '' ? null : parseInt(value);
    
    if (numValue === null) {
      showError("Ingresa un valor válido");
      return;
    }

    if (stackState.elementos && stackState.elementos.length >= 7) {
      showError("La pila está llena (máximo 7 elementos)");
      return;
    }

    if (stackState.elementos && stackState.elementos.includes(numValue)) {
      showError("El elemento ya existe en la pila");
      return;
    }

    executeAnimation('push', numValue);
    setValue('');
  };

  const handlePopButton = () => {
    if (!stackState.head) {
      showError("La pila está vacía");
      return;
    }

    const topValue = stackState.head.getValue();
    executeAnimation('pop', topValue);
  };

  const handleSumergirButton = () => {
    if (!stackState.head) {
      showError("La pila está vacía");
      return;
    }

    if (!stackState.head.getNext()) {
      showError("La pila necesita al menos 2 elementos para sumergir");
      return;
    }

    const topValue = stackState.head.getValue();
    executeAnimation('sumergir', topValue);
  };

  const handleInsertarButton = () => {
    const numValue = value === '' ? null : parseInt(value);
    const position = insertPosition === '' ? null : parseInt(insertPosition);
    
    if (numValue === null) {
      showError("Ingresa un valor válido para insertar");
      return;
    }

    if (position === null || position < 0) {
      showError("Ingresa una posición válida (≥ 0)");
      return;
    }

    if (stackState.elementos && stackState.elementos.includes(numValue)) {
      showError("El elemento ya existe en la pila");
      return;
    }

    if (stackState.elementos && stackState.elementos.length >= 7) {
      showError("La pila está llena (máximo 7 elementos)");
      return;
    }

    const maxPosition = stackState.elementos ? stackState.elementos.length : 0;
    if (position > maxPosition) {
      showError(`La posición máxima válida es ${maxPosition}`);
      return;
    }

    executeAnimation('insertar', numValue, position);
    setValue('');
    setInsertPosition('');
  };

  const handleExtraerButton = () => {
    if (!stackState.head) {
      showError("La pila está vacía");
      return;
    }

    const position = extractPosition === '' ? null : parseInt(extractPosition);
    
    if (position === null || position < 0) {
      showError("Ingresa una posición válida (≥ 0)");
      return;
    }

    const maxPosition = stackState.elementos ? stackState.elementos.length - 1 : 0;
    if (position > maxPosition) {
      showError(`La posición máxima válida es ${maxPosition}`);
      return;
    }

    executeAnimation('extraer', null, position);
    setExtractPosition('');
  };

  // Controles de reproducción manual
  const onPlayPause = (e) => {
    e.preventDefault();
    if (stackState.playing) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (stackState.stepHistory && stackState.stepHistory.length > 0) {
      const currentHistory = stackState.history || -1;
      const remainingSteps = stackState.stepHistory.slice(Math.max(0, currentHistory + 1));
      
      if (remainingSteps.length > 0) {
        runAnimation(remainingSteps);
      } else {
        runAnimation(stackState.stepHistory);
      }
    }
  };

  const pause = () => {
    dispatch(setPlayingStack(false));
    dispatch(restoreTimeId());
    setIsAnimating(false);
  };

  const goBackward = () => {
    if (stackState.playing) {
      pause();
    }

    const currentHistory = stackState.history || -1;
    if (currentHistory > 0 && stackState.stepHistory) {
      const previousStep = stackState.stepHistory[currentHistory - 1];
      dispatch(decrementHistoryStack());
      dispatch(updateVisualizationStack(previousStep));
    }
  };

  const goForward = () => {
    if (stackState.playing) {
      pause();
    }

    const currentHistory = stackState.history || -1;
    if (stackState.stepHistory && currentHistory < stackState.stepHistory.length - 1) {
      const nextStep = stackState.stepHistory[currentHistory + 1];
      dispatch(incrementHistoryStack());
      dispatch(updateVisualizationStack(nextStep));
    }
  };

  const repeat = () => {
    if (stackState.stepHistory && stackState.stepHistory.length > 0) {
      dispatch(restoreTimeId());
      dispatch(restoreRepeatStack());
      setIsAnimating(true);
      runAnimation(stackState.stepHistory);
    }
  };

  // Efecto para manejar cambios en stepHistory
  useEffect(() => {
    if (stackState.stepHistory && 
        stackState.stepHistory.length > 0 && 
        stackState.funAction && 
        !stackState.playing && 
        isAnimating) {
      runAnimation(stackState.stepHistory);
    }
  }, [stackState.stepHistory, stackState.funAction, stackState.playing, isAnimating, runAnimation]);

  // Determinar el icono de play/pause
  const playPauseIcon = stackState.playing ? svgPause : svgPlay;

  return (
    <div className='w-full md:w-80 mx-auto md:ml-4 mb-4 flex flex-col md:justify-between'>
      {/* Controles de reproducción */}
      <div className="flex justify-center space-x-2 mb-4">
        <BasicButton 
          onClick={goBackward}
          disabled={stackState.playing || (stackState.history || -1) <= 0}
          title="Retroceder"
        >
          {svgBack}
        </BasicButton>

        <BasicButton 
          onClick={onPlayPause}
          disabled={!stackState.stepHistory || stackState.stepHistory.length === 0}
          title={stackState.playing ? "Pausar" : "Reproducir"}
        >
          {playPauseIcon}
        </BasicButton>

        <BasicButton 
          onClick={goForward}
          disabled={stackState.playing || !stackState.stepHistory || 
                   (stackState.history || -1) >= stackState.stepHistory.length - 1}
          title="Avanzar"
        >
          {svgForward}
        </BasicButton>

        <BasicButton 
          onClick={repeat}
          disabled={!stackState.stepHistory || stackState.stepHistory.length === 0}
          title="Repetir"
        >
          {svgRepeat}
        </BasicButton>
      </div>

      {/* Controles Push/Pop */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Valor"
          variant="outlined"
          type="number"
          value={value}
          onChange={handleValueChange}
          disabled={isAnimating}
          style={{ width: "120px" }}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handlePushButton}
          disabled={isAnimating}
          sx={{
            height: "40px",
            backgroundColor: "primary.main",
            '&:hover': {
              backgroundColor: "primary.dark",
            },
            minWidth: "80px"
          }}
        >
          Push
        </Button>
        <Button
          variant="contained"
          onClick={handlePopButton}
          disabled={isAnimating}
          sx={{
            height: "40px",
            backgroundColor: "primary.main",
            '&:hover': {
              backgroundColor: "primary.dark",
            },
            minWidth: "80px"
          }}
        >
          Pop
        </Button>
      </div>
      
      {/* Controles para Insertar */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={insertPosition}
          onChange={handleInsertPositionChange}
          disabled={isAnimating}
          style={{ width: "120px" }}
          size="small"
          inputProps={{ 
            min: 0, 
            max: stackState.elementos ? stackState.elementos.length : 0 
          }}
        />
        <Button
          variant="contained"
          onClick={handleInsertarButton}
          disabled={isAnimating}
          sx={{
            height: "40px",
            backgroundColor: "secondary.main",
            '&:hover': {
              backgroundColor: "secondary.dark",
            },
            width: "100%",
            maxWidth: "170px"
          }}
        >
          Insertar
        </Button>
      </div>
      
      {/* Controles para Extraer */}
      <div className="flex justify-center space-x-2 items-center mb-3">
        <TextField
          label="Posición"
          variant="outlined"
          type="number"
          value={extractPosition}
          onChange={handleExtractPositionChange}
          disabled={isAnimating}
          style={{ width: "120px" }}
          size="small"
          inputProps={{ 
            min: 0, 
            max: stackState.elementos && stackState.elementos.length > 0 
              ? stackState.elementos.length - 1 
              : 0 
          }}
        />
        <Button
          variant="contained"
          onClick={handleExtraerButton}
          disabled={isAnimating}
          sx={{
            height: "40px",
            backgroundColor: "secondary.main",
            '&:hover': {
              backgroundColor: "secondary.dark",
            },
            width: "100%",
            maxWidth: "170px"
          }}
        >
          Extraer
        </Button>
      </div>
      
      {/* Control Sumergir */}
      <div className="flex justify-center mb-3">
        <Button
          variant="contained"
          onClick={handleSumergirButton}
          disabled={isAnimating}
          sx={{
            height: "40px",
            backgroundColor: "info.main",
            '&:hover': {
              backgroundColor: "info.dark",
            },
            width: "100%",
            maxWidth: "292px"
          }}
        >
          Sumergir
        </Button>
      </div>

      {/* Notificaciones */}
      <Snackbar 
        open={open} 
        autoHideDuration={4000} 
        onClose={() => setOpen(false)} 
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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