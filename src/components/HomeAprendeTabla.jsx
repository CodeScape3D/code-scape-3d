import CardTabla from "./CardTabla";
import { topic } from "./HomeCartas";
import PropTypes from "prop-types";

const HomeAprendeTabla = ({ filtro, temasFiltrados }) => {
  return (
    <>
      {/* Tabla */}
      <div className="my-5 w-full md:w-full shadow-lg animate__bounceIn">
        <h2 className="block text-center font-bold bg-primary text-white py-1.5 rounded-tr-lg rounded-tl-lg">
          Tematicas
        </h2>
        <div className="h-full bg-tertiary rounded-bl-lg rounded-br-lg flex justify-center items-center flex-col md:flex-row p-5 md:gap-10 ">
          <>
            {filtro ? (
              <>
                {temasFiltrados.map((tema) => (
                  <div key={tema.id}>
                    <CardTabla tema={tema} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {topic.map((tema) => (
                  <div key={tema.id}>
                    <CardTabla tema={tema} />
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};

HomeAprendeTabla.propTypes = {
  filtro: PropTypes.string,
  temasFiltrados: PropTypes.array,
};

export default HomeAprendeTabla;
