import "../styles/mediaquerys.css";
import MiniGameCard from "./MiniGameCard";

import {
  svgGameCards,
  svgGameMarbles,
  svgGameThief,
  svgGameSaveHomeland,
  svgGameRescueOperation,
  svgGamePrivacy,
  svgGameFruitSplash,
  svgGameMilitary,
} from "../assets/svg/SvgConstans";

export const HomeMiniJuegos = () => {
  return (
    <div className="flex 2xl:flex-row 2xl:flex-grow xl:flex-row xl:flex-grow lg:flex-col lg:flex-grow md:flex-col md:flex-grow sm:flex-col sm:flex-grow items-center justify-center mainDivGames bg-white">
      <div className="text-center text-black lg:mt-7 md:mt-4 md:mb-4">
        <h1 className=" font-bold  2xl:text-5xl xl:text-4xl xl:mr-10 lg:text-4xl md:text-3xl sm:text-3xl text-2xl mt-5  ">
          Aprende mientras <br />
          juegas en CodeScape3D
        </h1>
        <p className="mt-6 text-lg lg:text-2xl md:text-lg sm:text-base md:mt-2 text-center  ">
          Selecciona tu minijuego favorito <br /> y presiona en "jugar"
        </p>
      </div>

      <div
        className="rounded-md lg:mb-10  md:mb-8 sm:mb-6 mb-6 2xl:ml-52 xl:ml-50 xl:mr-10 md:m-0 md:gap-10 gap-5 bg-tertiary grid 
      md:grid-cols-3 sm:grid-cols-2 lg:gap-x-24 lg:gap-y-16 p-14 gamesScroll sm:mt-6 "
      >
        <MiniGameCard logo={svgGameCards} titulo={"Cartas"} ruta={"#"} />

        <MiniGameCard logo={svgGameMarbles} titulo={"Canicas"} ruta={"#"} />

        <MiniGameCard logo={svgGameThief} titulo={"El ladrón"} ruta={"#"} />


        <MiniGameCard logo={svgGameSaveHomeland} titulo={"Salva la patria"} ruta={"#"} />


        <MiniGameCard logo={svgGameRescueOperation} titulo={"Rescate"} ruta={"#"} />


        <MiniGameCard logo={svgGamePrivacy} titulo={"Restringido"} ruta={"#"} />


        <MiniGameCard logo={svgGameFruitSplash} titulo={"La Fruta"} ruta={"#"} />

        <MiniGameCard logo={svgGameMilitary} titulo={"El militar"} ruta={"#"} />

        
      </div>
    </div>
  );
};
