import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateRandomArray,
  getSortingAlgorithm,
  setearAlgoritmo,
  setGeneratedArray,
} from "../store";
import { useNavigate, useParams } from "react-router-dom";

export const useAnimationLogic = () => {
  const { animacion } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const algorithm =
    animacion.charAt(0).toUpperCase() + animacion.slice(1) + " Sort";

  const { generatedArray, currentQuestion } = useSelector(
    (state) => state.quiz
  );
  const sortState = useSelector((state) => state.sorts);

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
  }, [animacion, dispatch, generatedArray, currentQuestion, sort]);

  return {
    algorithm,
    sort,
    modalIsOpen,
    setIsOpen,
    generatedArray,
    currentQuestion,
  };
};
