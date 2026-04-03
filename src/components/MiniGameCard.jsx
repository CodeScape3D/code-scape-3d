import { Link } from 'react-router-dom';
import '../styles/mediaquerys.css';

const MiniGameCard = ({ logo, titulo, ruta, comingSoon = true }) => {
  return (
    <Link
      to={ruta}
      className={`group ${comingSoon ? 'pointer-events-none' : ''}`}
    >
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
        {/* Logo Container */}
        <div className="bg-gradient-to-br from-primary to-blue-500 p-6 md:p-8 flex items-center justify-center min-h-[160px] md:min-h-[180px]">
          <div
            className={`transform ${!comingSoon && 'group-hover:scale-105'} transition-transform duration-300`}
          >
            {logo}
          </div>
        </div>

        {/* Title Container */}
        <div className="bg-gray-50 p-4 md:p-5 border-t border-gray-100">
          <p className="text-gray-900 text-center font-semibold text-sm md:text-base">
            {titulo}
          </p>
        </div>

        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Próximamente
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MiniGameCard;
