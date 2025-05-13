import {
  Header,
  SortControls,
  SortCode,
  SortChart,
} from '../sorting/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  generateRandomArray,
  getSortingAlgorithm,
  setearAlgoritmo,
  setGeneratedArray,
} from '../../store';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { BasicButton } from '../../components';
import { StackChart, StackCode, StackControls } from '../stack';
import { useTranslation } from 'react-i18next';

export const AnimationView = () => {
  const { t } = useTranslation();
  const { animacion } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const algorithm =
    animacion.charAt(0).toUpperCase() + animacion.slice(1) + ' Sort';

  const { generatedArray, currentQuestion } = useSelector(state => state.quiz);
  const sortState = useSelector(state => state.sorts);

  const [modalIsOpen, setIsOpen] = useState(false);

  const sort = getSortingAlgorithm(algorithm);

  useEffect(() => {
    if (sort) {
      dispatch(setearAlgoritmo(algorithm));
      if (generatedArray.length > 0) {
        const payload = {
          array: generatedArray,
          history: currentQuestion.stepToHistory,
        };

        dispatch(setGeneratedArray(payload));
        setIsOpen(true);
      } else {
        dispatch(generateRandomArray());
        setIsOpen(false);
      }
    }
  }, [animacion]);

  const classNameChart =
    'flex-grow mb-4 w-full items-center justify-center ' +
    (animacion === 'stack' ? 'flex' : '');
  return (
    <div className="flex flex-col items-center mt-3 w-full h-full flex-grow">
      <Header
        titulo={sort ? algorithm : animacion}
        quiz={animacion}
        descripcionQuiz={(sort ? algorithm : animacion) + ` quiz`}
      />

      <div className={classNameChart}>
        {animacion === 'stack' ? <StackChart /> : ''}
        {sort ? <SortChart /> : ''}
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex items-center">
          {animacion === 'stack' ? <StackControls /> : ''}
          {sort ? <SortControls /> : ''}
        </div>

        <div className="md:w-1/2 flex items-center">
          {animacion === 'stack' ? <StackCode /> : ''}
          {sort ? <SortCode /> : ''}
        </div>
      </div>

      <Dialog open={modalIsOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>{'Feedback'}</DialogTitle>

        <DialogContent>
          <DialogContentText>{currentQuestion.feedback}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <BasicButton onClick={() => setIsOpen(false)}>
            {t('close')}
          </BasicButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
