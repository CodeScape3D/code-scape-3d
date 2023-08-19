import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementHistory,
  decrementHistory,
  restoreRepeat,
  setTimeIdArr,
  updateVisualization,
  restoreTimeIdArr,
  setPlaying,
  setSortingSpeed,
  setArraySize,
} from "../../../store"

export const SortControls = () => {

  const dispatch = useDispatch();
  const sortState = useSelector(state => state.sorts);

  const keepPlaying = () => {
    const stepHistory = sortState.stepHistory.slice(sortState.history);
    return run(stepHistory);
  };

  const onPlayPause = (e) => {
    e.preventDefault();
    if (sortState.playing) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    dispatch(setPlaying(true));
    if (sortState.history === -1) {
      run(sortState.stepHistory);
    } else {
      keepPlaying();
    }
  };

  const pause = () => {
    dispatch(setPlaying(false));
    dispatch(restoreTimeIdArr());
  };

  const run = (stepHistory) => {
    const timeIdArr = [];
    stepHistory.forEach((item, i) => {
      let timeoutId = setTimeout(() => {
        dispatch(incrementHistory());
        dispatch(updateVisualization(item));
      }, i * (250 / sortState.sortingSpeed));

      timeIdArr.push(timeoutId);
    });

    let timeoutId = setTimeout(() => {
      dispatch(restoreTimeIdArr());
    }, stepHistory.length * (250 / sortState.sortingSpeed));


    timeIdArr.push(timeoutId);
    dispatch(setTimeIdArr(timeIdArr));

  };

  const goBackward = () => {

    if (sortState.playing) {
      pause();
    }

    const stepHistory = sortState.stepHistory;
    const current = sortState.history;
    if (current > 0) {
      const item = stepHistory[current - 1];
      dispatch(decrementHistory());
      dispatch(updateVisualization(item));
    }
  };

  const goForward = () => {

    if (sortState.playing) {
      pause();
    }

    const stepHistory = sortState.stepHistory;
    const current = sortState.history;
    if (current < stepHistory.length - 1) {
      const item = stepHistory[current + 1];
      dispatch(incrementHistory());
      dispatch(updateVisualization(item));
    }
  };

  const repeat = () => {
    dispatch(restoreTimeIdArr());
    dispatch(restoreRepeat());
    dispatch(setPlaying(true));
    run(sortState.stepHistory);
  };

  const changePlaySpeed = (e) => {
    pause();
    const sortingSpeed = Number(e.target.value);
    dispatch(setSortingSpeed(sortingSpeed));
  };

  const onArraySizeChange = (e) => {
    const arraySize = Number(e.target.value);
    dispatch(setArraySize(arraySize));
  }

  return (
    <div className='w-full md:w-80 mx-auto md:ml-4 mb-4 flex flex-col md:justify-between'>
      <div className='flex justify-center space-x-4 mb-3'>
        <Button
          onClick={goBackward}
          variant="contained"
          style={{ height: "48px" }}
        >
          ⏪
        </Button>
        <Button
          onClick={(e) => onPlayPause(e)}
          variant="contained"
          style={{ height: "48px" }}
        >
          {sortState.playing ? "⏸️" : "▶️"}
        </Button>
        <Button
          onClick={goForward}
          variant="contained"
          style={{ height: "48px" }}
        >
          ⏩
        </Button>
        <Button
          onClick={repeat}
          variant="contained"
          style={{ height: "48px" }}
        >
          🔁
        </Button>
      </div>
      <div className="flex justify-center space-x-4 items-center">
        <FormControl variant="outlined" style={{ width: "150px" }}>
          <InputLabel htmlFor="speed-select">Speed Selector</InputLabel>
          <Select
            id="speed-select"
            defaultValue={1}
            onChange={changePlaySpeed}
            label="Speed Selector"
            style={{ height: "48px" }}
          >
            <MenuItem value={0.25}>0.25x</MenuItem>
            <MenuItem value={0.5}>0.5x</MenuItem>
            <MenuItem value={1}>1x</MenuItem>
            <MenuItem value={2}>2x</MenuItem>
            <MenuItem value={4}>4x</MenuItem>
            <MenuItem value={10}>10x</MenuItem>
            <MenuItem value={25}>25x</MenuItem>
            <MenuItem value={50}>50x</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ width: "150px" }}>
          <InputLabel htmlFor="array-size-select">Array Length</InputLabel>
          <Select
            id="array-size-select"
            onChange={onArraySizeChange}
            defaultValue={5}
            label="Array Length"
            style={{ height: "48px" }}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}
