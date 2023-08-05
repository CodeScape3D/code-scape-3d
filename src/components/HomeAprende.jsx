import Cursos from "./Cursos";
import Header from "./Header";
import HeaderHomeAprende from "./HeaderHomeAprende";

export const HomeAprende = () => {
  return (
    <div className="h-full">
      <Header>
        <HeaderHomeAprende />
      </Header>
      {/* Cursos */}
      <Cursos />
    </div>
  );
}
