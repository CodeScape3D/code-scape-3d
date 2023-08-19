import { Header, SortControls, SortCode, SortChart } from '../sorting/components';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAlgorithm, generateRandomArray } from '../../store';
import { useEffect } from 'react';

export const AnimationView = () => {
  const { animacion } = useParams();
  const dispatch = useDispatch();
  const algorithm = animacion.charAt(0).toUpperCase() + animacion.slice(1) + ' Sort';

  useEffect(() => {
    dispatch(setAlgorithm(algorithm));
    dispatch(generateRandomArray());
  }, [animacion]);

  return (
    <div className="flex flex-col items-center mt-3 w-full h-full flex-grow">

      <Header
        titulo={algorithm}
        quiz={"sortingMethods"}
        descripcionQuiz={"Quiz métodos de ordenamiento"}
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
    </div>
  );
};
