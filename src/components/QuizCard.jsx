import { Link } from 'react-router-dom';
import '../styles/mediaquerys.css';
import PropTypes from 'prop-types';

const QuizCard = ({ logo, titulo, ruta }) => {
  return (
    <div className="containerQuiz xl:mx-auto lg:w-56 sm:w-30 md:w-48 xl:w-64">
      <Link to={ruta}>
        <div className="bg-primary rounded-lg flex flex-col justify-center items-center h-40 sm:h-44 md:h-52 xl:h-56 custom-inner-div transition duration-300 ease-in-out hover:bg-secondary animate__bounceIn">
          <div className="flex justify-center sm:mt-4 sm:mb-3 md:mt-6 md:mb-4 cardQuery">
            {logo}
          </div>

          <div className="bg-secondary w-full h-full rounded-b-lg flex justify-center text-center items-center sm:h-28">
            <p className="sm:text-sm text-white md:text-base fontSizeQuizzes">
              {titulo}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

QuizCard.propTypes = {
  logo: PropTypes.element.isRequired,
  titulo: PropTypes.string.isRequired,
  ruta: PropTypes.string.isRequired,
};

export default QuizCard;
