import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardTabla = ({ tema }) => {
  const { titulo, imagen, param } = tema;

  return (
    <Link to={`/animacion/${param}`}>
      <div className="hover:scale-110 bg-secondary w-32 mb-2 h-32 p-4 rounded-lg flex justify-center items-center flex-col cursor-pointer animate__bounceIn">
        <div className="">{imagen}</div>
        <p className="text-sm text-white">{titulo}</p>
      </div>
    </Link>
  );
};

CardTabla.propTypes = {
  tema: PropTypes.object.isRequired,
};

export default CardTabla;
