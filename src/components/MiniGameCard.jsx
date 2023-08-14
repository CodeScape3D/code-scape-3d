import { Link } from "react-router-dom";
import "../styles/mediaquerys.css";
import { HomeMiniJuegos } from "./HomeMiniJuegos";

const MiniGameCard = ({ logo, titulo, ruta }) => {
  return (
   
      <div className="bg-primary rounded-lg flex flex-col justify-center items-center h-40 w-40 
       xl:w-52 xl:h-52 lg:w-56 lg:h-56 md:w-48 md:h-48 sm:w-48 sm:h-48 animate__bounceIn">
        <Link to={ruta}>
        <div className="flex justify-center mt-4">{logo}</div>

        <div className="  bg-secondary xl:w-52 xl:h-20 lg:w-56 lg:h-24 md:w-48 md:h-16 sm:w-48 sm:h-16 pTitleGame rounded-b-lg flex justify-center text-center items-center">
          <p className="text-white text-2xl ">{titulo}</p>
        </div>
        </Link>
      </div>
  
  );
};

export default MiniGameCard;
