import { Link } from "react-router-dom";
import "../styles/mediaquerys.css";
import PropTypes from "prop-types";

const QuizCard = ({ logo, titulo, ruta }) => {
  return (
    <>
      <Link to={ruta}>
        <div className="bg-quaternary rounded-lg flex flex-col justify-center items-center xl:mx-auto l lg:w-72 
         h-60 sm:w-30 sm:h-60 md:w-50 md:h-72 xl:w-80 custom-inner-div containerQuiz transition duration-300 ease-in-out hover:bg-secondary">
          <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery ">
            {logo}{" "}
          </div>

          <div className="bg-secondary w-full h-full rounded-b-lg  flex justify-center text-center items-center
            sm:h-96 ">
            <p className="sm:text-lg text-white md:text-xl fontSizeQuizzes" >{titulo}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

QuizCard.propTypes = { 
  logo: PropTypes.element.isRequired,
  titulo: PropTypes.string.isRequired,
  ruta: PropTypes.string.isRequired,
};

export default QuizCard;
