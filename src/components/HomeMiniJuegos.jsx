import '../styles/mediaquerys.css';
import MiniGameCard from './MiniGameCard';

import {
  svgGameCards,
  svgGameMarbles,
  svgGameThief,
  svgGameSaveHomeland,
  svgGameRescueOperation,
  svgGamePrivacy,
  svgGameFruitSplash,
  svgGameMilitary,
} from '../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const HomeMiniJuegos = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center mainDivGames bg-white w-full">
      <div className="text-center text-black lg:mt-7 md:mt-4 md:mb-4">
        <h1 className="font-bold text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl mt-5">
          Aprende mientras <br />
          juegas en CodeScape3D
        </h1>
        <p className="mt-6 text-lg md:text-lg lg:text-2xl text-center">
          Selecciona tu minijuego favorito <br /> y presiona en "jugar"
        </p>
      </div>

      <div className="rounded-md lg:mb-10 md:mb-8 sm:mb-6 mb-6 md:m-0 md:gap-10 gap-5 bg-tertiary grid md:grid-cols-3 sm:grid-cols-2 lg:gap-x-24 lg:gap-y-16 p-14 gamesScroll sm:mt-6">
        <MiniGameCard logo={svgGameCards} titulo={'Cartas'} ruta={'#'} />
        <MiniGameCard logo={svgGameMarbles} titulo={'Canicas'} ruta={'#'} />
        <MiniGameCard logo={svgGameThief} titulo={'El ladrón'} ruta={'#'} />
        <MiniGameCard
          logo={svgGameSaveHomeland}
          titulo={'Salva la patria'}
          ruta={'#'}
        />
        <MiniGameCard
          logo={svgGameRescueOperation}
          titulo={'Rescate'}
          ruta={'#'}
        />
        <MiniGameCard logo={svgGamePrivacy} titulo={'Restringido'} ruta={'#'} />
        <MiniGameCard
          logo={svgGameFruitSplash}
          titulo={'La Fruta'}
          ruta={'#'}
        />
        <MiniGameCard logo={svgGameMilitary} titulo={'El militar'} ruta={'#'} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-primary"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-5xl font-semibold">{t('comingSoon')}</p>
      </div>
    </div>
  );
};
