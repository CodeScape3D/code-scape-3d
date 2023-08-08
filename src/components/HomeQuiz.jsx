import { useNavigate } from "react-router-dom";
import { BasicButton } from "./BasicButton";
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
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col">
      <div className="bg-quaternary text-white w-screen">
        <h1 className="text-3xl text-center mt-10 md:text-4xl">
          Desafía tus <br />
          conocimientos
        </h1>

        <p className="text-sm text-center mt-3 mb-10 md:text-lg">
          Elije un quiz y descubre si tienes potencial <br />
          como programador
        </p>
      </div>
      <main className="container m-auto mt-10 mb-6 md:mt-6 sm:mb-6 md:mb-6 lg:my-3 ">
        <div className="grid sm:grid-cols-1  gap-4 md:grid-cols-3 md:gap-6  justify-center ">

          
          <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72  h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-96 custom-inner-div">
            <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
              {svgOrderMethods}{" "}
            </div>

            <p className="bg-secondary w-full h-full rounded-b-lg  flex justify-center items-center sm:text-lg sm:h-96 text-white md:text-xl fontSizeQuizzes">
              Metodos de ordenamiento
            </p>
          </div>

          <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72  h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-96 custom-inner-div">
            <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
              {svgSearchMethods}{" "}
            </div>

            <p className="bg-secondary w-full h-full rounded-b-lg  flex justify-center items-center sm:text-lg sm:h-96 text-white md:text-xl fontSizeQuizzes">
              Métodos de Busqueda
            </p>
          </div>

          <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72  h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-96 custom-inner-div">
            <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
              {svgLinkedList}{" "}
            </div>

            <p className="bg-secondary w-full h-full rounded-b-lg  flex justify-center items-center sm:text-lg sm:h-96 text-white md:text-xl fontSizeQuizzes">
              Listas Enlazadas
            </p>

          </div>


          <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72  h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-96 custom-inner-div">
            <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
              {svgBinaryTrees}{" "}
            </div>

            <p className="bg-secondary w-full h-full rounded-b-lg  flex justify-center items-center sm:text-lg sm:h-96 text-white md:text-xl fontSizeQuizzes">
              Arboles Binarios
            </p>

          </div>


          <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72  h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-96 custom-inner-div">
            <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
              {svgPiles}{" "}
            </div>

            <p className="bg-secondary w-full h-full rounded-b-lg  flex justify-center items-center sm:text-lg sm:h-96 text-white md:text-xl fontSizeQuizzes">
              Pilas
            </p>

          </div>

          
          <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72  h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-96 custom-inner-div">
            <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
              {svgQueue}{" "}
            </div>

            <p className="bg-secondary w-full h-full rounded-b-lg  flex justify-center items-center sm:text-lg sm:h-96 text-white md:text-xl">
              Colas
            </p>

          </div>



        </div>
      </main>
    </div>
  );
};
