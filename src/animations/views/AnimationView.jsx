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
import { QueueChart, QueueCode, QueueControls } from '../queue';
import {
  SimpleListChart,
  SimpleListControls,
  SimpleListCode,
} from '../simpleList/components';
import {
  DoubleListChart,
  DoubleListControls,
  DoubleListCode,
} from '../doubleList/components';
import {
  LinearSearchChart,
  LinearSearchControls,
  LinearSearchCode,
} from '../linearSearch';
import {
  BinarySearchChart,
  BinarySearchControls,
  BinarySearchCode,
} from '../binarySearch';
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
  }, [animacion]);

  // Determinar la clase para el contenedor principal
  const classNameChart =
    'flex-grow mb-4 w-full max-w-full overflow-hidden items-center justify-center ' +
    ([
      'stack',
      'queue',
      'simpleList',
      'doubleList',
      'linearSearch',
      'binarySearch',
    ].includes(animacion)
      ? 'flex'
      : '');

  // Obtener el título según el tipo de animación
  const getTitulo = () => {
    if (sort) return algorithm;
    switch (animacion) {
      case 'stack':
        return 'Pilas';
      case 'queue':
        return 'Colas';
      case 'simpleList':
        return 'Listas Simples';
      case 'doubleList':
        return 'Listas Dobles';
      case 'linearSearch':
        return 'Búsqueda Lineal';
      case 'binarySearch':
        return 'Búsqueda Binaria';
      default:
        return animacion;
    }
  };

  // Mapeo de animación a nombre de quiz
  const getQuizNameFromAnimation = () => {
    const quizMapping = {
      stack: 'stacks',
      queue: 'queues',
      binarySearch: 'binarySearch',
      bubble: 'bubble',
      quick: 'quick',
      shell: 'shell',
      insertion: 'insertion',
    };
    return quizMapping[animacion] || animacion;
  };

  return (
    <div className="flex flex-col items-center mt-3 w-full h-full flex-grow overflow-hidden px-2">
      <Header
        titulo={getTitulo()}
        quiz={getQuizNameFromAnimation()}
        descripcionQuiz={getTitulo() + ` quiz`}
      />

      <div className={classNameChart}>
        {animacion === 'stack' && <StackChart />}{' '}
        {animacion === 'queue' && <QueueChart />}{' '}
        {animacion === 'simpleList' && <SimpleListChart />}
        {animacion === 'doubleList' && <DoubleListChart />}
        {animacion === 'linearSearch' && <LinearSearchChart />}
        {animacion === 'binarySearch' && <BinarySearchChart />}
        {sort && <SortChart />}
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-full overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center">
          {animacion === 'stack' && <StackControls />}{' '}
          {animacion === 'queue' && <QueueControls />}{' '}
          {animacion === 'simpleList' && <SimpleListControls />}
          {animacion === 'doubleList' && <DoubleListControls />}
          {animacion === 'linearSearch' && <LinearSearchControls />}
          {animacion === 'binarySearch' && <BinarySearchControls />}
          {sort && <SortControls />}
        </div>

        <div className="md:w-1/2 flex items-center justify-center">
          {animacion === 'stack' && <StackCode />}{' '}
          {animacion === 'queue' && <QueueCode />}{' '}
          {animacion === 'simpleList' && <SimpleListCode />}
          {animacion === 'doubleList' && <DoubleListCode />}
          {animacion === 'linearSearch' && <LinearSearchCode />}
          {animacion === 'binarySearch' && <BinarySearchCode />}
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
