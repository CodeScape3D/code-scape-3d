import { Link } from "react-router-dom";
import "../styles/mediaquerys.css";

const QuizCard = ({ logo, titulo, ruta }) => {
  return (
    <div className="containerQuiz xl:mx-auto lg:w-72 sm:w-30 md:w-50 xl:w-80">
      <Link to={ruta}>
        <div className="bg-primary rounded-lg flex flex-col justify-center items-center h-60 sm:h-60 md:h-72 xl:h-80 custom-inner-div transition duration-300 ease-in-out hover:bg-secondary animate__bounceIn">
          <div className="flex justify-center sm:mt-8 sm:mb-6 md:mt-12 md:mb-10 cardQuery">
            {logo}
          </div>

          <div className="bg-secondary w-full h-full rounded-b-lg flex justify-center text-center items-center sm:h-96">
            <p className="sm:text-lg text-white md:text-xl fontSizeQuizzes">{titulo}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default QuizCard;
