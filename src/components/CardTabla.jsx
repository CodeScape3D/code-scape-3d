import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardTabla = ({ tema, ruta = '' }) => {
  const { titulo, imagen, param } = tema;

  return (
    <Link to={ruta === '' ? `/animacion/${param}` : ruta}>
      <div className="hover:scale-110 bg-secondary w-36 h-40 p-3 rounded-lg flex justify-between items-center flex-col cursor-pointer animate__bounceIn">
        <div className="flex items-center justify-center flex-1 mt-2">
          {imagen}
        </div>
        <p className="text-sm text-white text-center mb-2">{titulo}</p>
      </div>
    </Link>
  );
};

CardTabla.propTypes = {
  tema: PropTypes.object.isRequired,
  ruta: PropTypes.string,
};

export default CardTabla;
