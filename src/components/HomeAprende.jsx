import { useEffect, useState } from "react";
import Cursos from "./Cursos";
import Header from "./Header";
import HeaderHomeAprende from "./HeaderHomeAprende";
import HomeAprendeTabla from "./HomeAprendeTabla";
import { topic } from "./HomeCartas";


export const HomeAprende = () => {
  const [filtro, setFiltro] = useState("");
  const [temasFiltrados, setTemasFiltrados] = useState([]);

  useEffect(() => {
    const filtrarTemas = topic.filter(theme => theme.curso === filtro)
    setTemasFiltrados(filtrarTemas)
  }, [filtro])

  return (
    <div className="flex flex-grow flex-col md:w-3/4 md:p-9">
      <Header>
        <HeaderHomeAprende />
      </Header>

      {/* Filtros*/}
      <Cursos setFiltro={setFiltro} />
      <p
        onClick={() => setFiltro("")}
        className="text-center mt-6 cursor-pointer hover:underline"
      >
        Quitar Filtros
      </p>


      {/* Tabla y Tarjetas(dentro) */}
      <HomeAprendeTabla filtro={filtro} temasFiltrados={temasFiltrados} />
    </div>
  );
};
