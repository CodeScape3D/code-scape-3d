import PropTypes from "prop-types";
const Curso = ({ curso, setFiltro }) => {
  const { imagen, titulo, value } = curso;

  return (
    <>
      <div
        onClick={() => setFiltro(value)}
        className="bg-primary cursor-pointer hover:bg-secondary transition-colors rounded-lg w-28 h-28 md:h-33 md:w-33 h-33 flex flex-col justify-center items-center shadow-xl animate__bounceIn"
      >
        <div className="flex justify-center w-10 h-10 md:h-10 md:w-10">{imagen}</div>
        <p className="text-white text-center mt-4 text-xs px-2 md:text-sm mb-2">
          {titulo}
        </p>
      </div>
    </>
  );
};

Curso.propTypes = {
  curso: PropTypes.object.isRequired,
  setFiltro: PropTypes.func,
};

export default Curso;
