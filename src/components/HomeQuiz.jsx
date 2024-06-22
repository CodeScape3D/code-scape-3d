import QuizCard from "./QuizCard";
import {
  svgOrderMethods,
  svgSearchMethods,
  svgLinkedList,
  svgBinaryTrees,
  svgPiles,
  svgQueue,
} from "../assets/svg/SvgConstans";
import "../styles/mediaquerys.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetStateForQuiz } from "../store";
import { useTranslation } from "react-i18next";

export const HomeQuiz = () => {
  
  const { t } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(resetStateForQuiz())
  }, []) 

  return (
    <div className="h-full w-full flex flex-grow flex-col">
      <div className="bg-primary text-white w-full">
        <h1 className="text-3xl font-bold text-center mt-14 md:text-4xl">
          {
            t("quizzesPageTitle")
          }
        </h1>

        <p className="text-sm text-center mt-7 mb-10 md:text-lg">
          {
            t("quizzesPageSubtitle")
          }
        </p>
      </div>
      <div className="mainQuizzes container m-auto mt-10 mb-6 md:mt-6 sm:mb-6 md:mb-6 lg:my-3  ">
        <div className="grid sm:grid-cols-1  gap-4 md:grid-cols-3 md:gap-6  justify-center sm:mt-10 lg:mt-10 xl:mt-10 ">

          <QuizCard logo={svgOrderMethods} titulo={t("sortingMethods")} ruta={"/quizzes/sortingMethods"} />
          <QuizCard logo={svgSearchMethods} titulo={t("searchingMethods")} ruta={"/quiz/searchMethods"}  />
          <QuizCard logo={svgLinkedList} titulo={t("linkedLists")} ruta={"/quiz/linkedList"}  />
          <QuizCard logo={svgBinaryTrees} titulo={t("binaryTrees")} ruta={"/quiz/binaryTree"}  />
          <QuizCard logo={svgPiles} titulo={t("stacks")} ruta={"/quiz/stacks"}  />
          <QuizCard logo={svgQueue} titulo={t("queues")} ruta={"/quiz/queues"}  />

        </div>
      </div>
    </div>
  );
};
