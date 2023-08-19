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

export const HomeQuiz = () => {
  //const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-grow flex-col">
      <div className="bg-primary text-white w-full">
        <h1 className="text-3xl font-bold text-center mt-14 md:text-4xl">
          Desafía tus <br />
          conocimientos
        </h1>

        <p className="text-sm text-center mt-7 mb-10 md:text-lg">
          Elije un quiz y descubre si tienes potencial <br />
          como programador
        </p>
      </div>
      <div className="mainQuizzes container m-auto mt-10 mb-6 md:mt-6 sm:mb-6 md:mb-6 lg:my-3  ">
        <div className="grid sm:grid-cols-1  gap-4 md:grid-cols-3 md:gap-6  justify-center sm:mt-10 lg:mt-10 xl:mt-10 ">

          <QuizCard logo={svgOrderMethods} titulo={"Metodos de Ordenamiento"} ruta={"/quizzes/sortingMethods"} />
          <QuizCard logo={svgSearchMethods} titulo={"Metodos de Busquedas"} ruta={"/quiz/searchMethods"}  />
          <QuizCard logo={svgLinkedList} titulo={"Listas Enlazadas"} ruta={"/quiz/linkedList"}  />
          <QuizCard logo={svgBinaryTrees} titulo={"Arboles Binarios"} ruta={"/quiz/binaryTree"}  />
          <QuizCard logo={svgPiles} titulo={"Pilas"} ruta={"/quiz/stacks"}  />
          <QuizCard logo={svgQueue} titulo={"Colas"} ruta={"/quiz/queues"}  />

        </div>
      </div>
    </div>
  );
};
