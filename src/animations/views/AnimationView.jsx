import { Header, SortControls, SortCode, SortChart } from '../sorting/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomArray, getSortingAlgorithm, setArray, setHistory, updateVisualization, setearAlgoritmo, setGeneratedArray } from '../../store';
import { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { BasicButton } from '../../components';

export const AnimationView = () => {

  const { animacion } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const algorithm = animacion.charAt(0).toUpperCase() + animacion.slice(1) + ' Sort';

  const { generatedArray, currentQuestion } = useSelector((state) => state.quiz);
  const sortState = useSelector((state) => state.sorts);

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sort = getSortingAlgorithm(algorithm);

    if (sort) {
      dispatch(setearAlgoritmo(algorithm));
      if (generatedArray.length > 0) {

        const payload = {
          array: generatedArray,
          history: currentQuestion.stepToHistory
        };

        dispatch(setGeneratedArray(payload));
        setIsOpen(true);
      } else {
        dispatch(generateRandomArray());
        setIsOpen(false);
      }

    } else {
      navigate('/404');
    }
  }, [animacion]);

  return (
    <div className="flex flex-col items-center mt-3 w-full h-full flex-grow">

      <Header
        titulo={algorithm}
        quiz={animacion}
        descripcionQuiz={algorithm + ` Quiz`}
      />

      <div className="flex-grow mb-4 w-full">
        <SortChart />
      </div>

      <div className="flex flex-col md:flex-row w-full">

        <div className="md:w-1/2 flex items-center">
          <SortControls />
        </div>

        <div className="md:w-1/2 flex items-center">
          <SortCode />
        </div>

      </div>

      <Dialog
        open={modalIsOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogTitle>
          {"Feedback"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {currentQuestion.feedback}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <BasicButton onClick={() => setIsOpen(false)}>
            Cerrar
          </BasicButton>
        </DialogActions>

      </Dialog>

    </div>
  );
};
