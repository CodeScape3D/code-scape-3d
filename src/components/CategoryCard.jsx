import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardTabla from "./CardTabla";

const CategoryCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { nombre, temas } = category;

  return (
    <div className="w-full mb-4 bg-tertiary rounded-lg shadow-lg overflow-hidden animate__bounceIn">
      <div 
        className="bg-primary text-white p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-bold">{nombre}</h3>
        <span className="text-xl">{isExpanded ? '−' : '+'}</span>
      </div>
      
      {isExpanded && (
        <div className="p-4 flex flex-wrap justify-center gap-4">
          {temas.map((tema) => (
            <Link key={tema.id} to={`/animacion/${tema.param}`}>
              <CardTabla tema={tema} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryCard;