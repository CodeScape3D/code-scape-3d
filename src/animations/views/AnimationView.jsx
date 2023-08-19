import { Header, SortControls, SortCode, SortChart } from '../sorting/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlgorithm, generateRandomArray, getSortingAlgorithm, setArray, } from '../../store';
import { useEffect, useState } from 'react';

export const AnimationView = () => {

  const { animacion } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const algorithm = animacion.charAt(0).toUpperCase() + animacion.slice(1) + ' Sort';
  const { generatedArray, currentQuestion } = useSelector((state) => state.quiz);

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sort = getSortingAlgorithm(algorithm);

    if (sort) {
      dispatch(setAlgorithm(algorithm));

      if (generatedArray.length > 0) {
        dispatch(setArray(generatedArray));
        setIsOpen(true);
      } else {
        dispatch(generateRandomArray());
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
        descripcionQuiz={`Quiz métodos de ` + algorithm + `.`}
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

      {modalIsOpen ? (<div>
        {currentQuestion.feedback}
        <button onClick={() => setIsOpen(false)}>Cerrar</button>
      </div>) : ("")}

    </div>
  );
};
