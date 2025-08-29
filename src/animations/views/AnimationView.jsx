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
import {
  SimpleListChart,
  SimpleListControls,
  SimpleListCode,
} from '../simpleList/components'; // Importa los componentes
import { useTranslation } from 'react-i18next';

export const AnimationView = () => {
  const { t } = useTranslation();
  const { animacion } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Determina si es un algoritmo de ordenamiento
  const algorithm =
    animacion.charAt(0).toUpperCase() + animacion.slice(1) + ' Sort';
  const sort = getSortingAlgorithm(algorithm);

  const { generatedArray, currentQuestion } = useSelector(state => state.quiz);
  const sortState = useSelector(state => state.sorts);

  const [modalIsOpen, setIsOpen] = useState(false);

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
    // Para listas simples no necesitamos inicializar arrays
  }, [animacion]);

  // Determinar la clase para el contenedor principal
  const classNameChart =
    'flex-grow mb-4 w-full items-center justify-center ' +
    (['stack', 'simpleList'].includes(animacion) ? 'flex' : '');

  return (
    <div className="flex flex-col items-center mt-3 w-full h-full flex-grow">
      <Header
        titulo={
          sort
            ? algorithm
            : animacion === 'stack'
              ? 'Pilas'
              : animacion === 'simpleList'
                ? 'Listas Simples'
                : animacion
        }
        quiz={animacion}
        descripcionQuiz={animacion + ` quiz`}
      />

      <div className={classNameChart}>
        {animacion === 'stack' && <StackChart />}
        {animacion === 'simpleList' && <SimpleListChart />}
        {sort && <SortChart />}
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex items-center">
          {animacion === 'stack' && <StackControls />}
          {animacion === 'simpleList' && <SimpleListControls />}
          {sort && <SortControls />}
        </div>

        <div className="md:w-1/2 flex items-center">
          {animacion === 'stack' && <StackCode />}
          {animacion === 'simpleList' && <SimpleListCode />}
          {sort && <SortCode />}
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
