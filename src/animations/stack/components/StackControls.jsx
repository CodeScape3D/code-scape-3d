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
  updateVisualizationStack,
} from '../../../store';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { BasicButton } from '../../../components';
import {
  svgPause,
  svgBack,
  svgPlay,
  svgRepeat,
  svgForward,
} from '../../../assets/svg/SvgConstans';

export const StackControls = () => {
  const stackState = useSelector(state => state.stack);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [toast, setToast] = useState('');
  const [open, setOpen] = useState(false);

  const handleNumeroChange = event => {
    setValue(parseInt(event.target.value));

    dispatch(setHead(stackState.head));

    if (stackState.playing) {
      pause();
    }

    if (stackState.elementos.length > 6) {
      setToast('La pila está llena');
      setOpen(true);
      return;
    }

    if (!stackState.elementos.includes(parseInt(event.target.value))) {
      dispatch(
        actionButton({
          action: 'push',
          value: parseInt(event.target.value),
        })
      );
    } else {
      setValue('');
      setToast('El elemento ya existe');
      setOpen(true);
    }
  };

  const handlePushButton = () => {
    run(stackState.stepHistory);
    setValue('');
  };

  const keepPlaying = () => {
    const stepHistory = stackState.stepHistory.slice(stackState.history);
    return run(stepHistory);
  };

  const onPlayPause = e => {
    e.preventDefault();
    if (stackState.playing) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    dispatch(setPlayingStack(true));
    if (stackState.history === -1) {
      run(stackState.stepHistory);
    } else {
      keepPlaying();
    }
  };

  const pause = () => {
    dispatch(setPlayingStack(false));
    dispatch(restoreTimeId());
  };

  const run = stepHistory => {
    const timeId = [];
    stepHistory.forEach((item, i) => {
      let timeoutId = setTimeout(
        () => {
          dispatch(incrementHistoryStack());
          dispatch(updateVisualizationStack(item));
        },
        i * (250 / stackState.timeStep)
      );

      timeId.push(timeoutId);
    });

    let timeoutId = setTimeout(
      () => {
        dispatch(restoreTimeId());
      },
      stepHistory.length * (250 / stackState.timeStep)
    );

    timeId.push(timeoutId);
    dispatch(setTimeIdStack(timeId));
  };

  const goBackward = () => {
    if (stackState.playing) {
      pause();
    }

    const stepHistory = stackState.stepHistory;
    const current = stackState.history;
    if (current > 0) {
      const item = stepHistory[current - 1];
      dispatch(decrementHistoryStack());
      dispatch(updateVisualizationStack(item));
    }
  };

  const goForward = () => {
    if (stackState.playing) {
      pause();
    }

    const stepHistory = stackState.stepHistory;
    const current = stackState.history;
    if (current < stepHistory.length - 1) {
      const item = stepHistory[current + 1];
      dispatch(incrementHistoryStack());
      dispatch(updateVisualizationStack(item));
    }
  };

  const repeat = () => {
    dispatch(restoreTimeId());
    dispatch(restoreRepeatStack());
    dispatch(setPlayingStack(true));
    run(stackState.stepHistory);
  };

  const handlePopButton = () => {
    if (stackState.playing) {
      pause();
    }

    dispatch(setHead(stackState.head));

    if (stackState.head) {
      dispatch(
        actionButton({
          action: 'pop',
          value: stackState.head.getValue(),
        })
      );
    } else {
      setToast('La pila está vacía');
      setOpen(true);
    }
  };

  const [svg, setSvg] = useState(svgPlay);

  useEffect(() => {
    if (stackState.playing) {
      setSvg(svgPause);
    } else {
      setSvg(svgPlay);
    }
  }, [stackState.playing]);

  return (
    <div className="w-full md:w-80 mx-auto md:ml-4 mb-4 flex flex-col md:justify-between">
      <div className="flex justify-center space-x-4 mb-3">
        <BasicButton onClick={goBackward}>
          <span>{svgBack}</span>
        </BasicButton>

        <BasicButton onClick={e => onPlayPause(e)}>
          <span> {svg}</span>
        </BasicButton>

        <BasicButton onClick={goForward}>
          <span>{svgForward}</span>
        </BasicButton>

        <BasicButton onClick={repeat}>
          <span>{svgRepeat}</span>
        </BasicButton>
      </div>
      <div className="flex justify-center space-x-4 items-center">
        <TextField
          label="Int"
          variant="outlined"
          type="number"
          value={value}
          onChange={handleNumeroChange}
          style={{ width: '135px' }}
        />
        <Button
          variant="contained"
          onClick={handlePushButton}
          sx={{
            height: '48px',
            backgroundColor: 'gray.main',
          }}
        >
          Push
        </Button>
        <Button
          variant="contained"
          onMouseEnter={handlePopButton}
          onClick={() => {
            run(stackState.stepHistory);
          }}
          sx={{
            height: '48px',
            backgroundColor: 'gray.main',
          }}
        >
          Pop
        </Button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="error"
          sx={{ width: '100%' }}
        >
          {toast}
        </Alert>
      </Snackbar>
    </div>
  );
};
