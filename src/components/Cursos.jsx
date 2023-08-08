import Curso from "./Curso";
import {courses} from "./HomeCartas"
import PropTypes from 'prop-types'


const Cursos = ({setFiltro}) => {
  return (
    <>
      <div className="mt-10 flex flex-row gap-3 md:gap-10 md:mx-auto items-center justify-center">
        {courses.map((curso) => (
          <Curso key={curso.id} curso={curso} setFiltro={setFiltro}/>
        ))}
      </div>
    </>
  );
};

Cursos.propTypes = {
  setFiltro: PropTypes.func,
}

export default Cursos;
