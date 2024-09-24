import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardTabla = ({ tema, ruta = "" }) => {
  const { titulo, imagen, param } = tema;

  return (
    <Link to={ruta === "" ? `/animacion/${param}` : ruta }>
      <div className="hover:scale-110 bg-secondary w-32 mb-2 h-32 p-4 rounded-lg flex justify-center items-center flex-col cursor-pointer animate__bounceIn transition-all hover:shadow-lg">
        <div className="">{imagen}</div>
        <p className="text-sm text-white">{titulo}</p>
      </div>
    </Link>
  );
};

CardTabla.propTypes = {
  tema: PropTypes.object.isRequired,
  ruta: PropTypes.string,
};

export default CardTabla;
