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
    <div className="h-full w-full flex flex-col">
      <div className="bg-quaternary text-white w-full">
        <h1 className="text-3xl font-bold text-center mt-10 md:text-4xl">
          Desafía tus <br />
          conocimientos
        </h1>

        <p className="text-sm text-center mt-3 mb-10 md:text-lg">
          Elije un quiz y descubre si tienes potencial <br />
          como programador
        </p>
      </div>
      <div className="mainQuizzes container m-auto mt-10 mb-6 md:mt-6 sm:mb-6 md:mb-6 lg:my-3  ">
        <div className="grid sm:grid-cols-1  gap-4 md:grid-cols-3 md:gap-6  justify-center ">

          <QuizCard logo={svgOrderMethods} titulo={"Metodos de Ordenamiento"} ruta={"/quiz/sortingMethods"} />
          <QuizCard logo={svgSearchMethods} titulo={"Metodos de Busquedas"} ruta={"#"}  />
          <QuizCard logo={svgLinkedList} titulo={"Listas Enlazadas"} ruta={"/quiz/linkedList"}  />
          <QuizCard logo={svgBinaryTrees} titulo={"Arboles Binarios"} ruta={"#"}  />
          <QuizCard logo={svgPiles} titulo={"Pilas"} ruta={"#"}  />
          <QuizCard logo={svgQueue} titulo={"Colas"} ruta={"#"}  />

        </div>
      </div>
    </div>
  );
};
