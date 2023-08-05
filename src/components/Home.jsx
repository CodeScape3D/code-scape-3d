import Cursos from "./Cursos";
import Header from "./Header";
import HeaderHome from "./HeaderHome";

function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <div className="h-screen">
        <Header>
          <HeaderHome />
        </Header>

        {/* Cursos */}
        <Cursos />  
      </div>
    </div>
  );
}

export default Home;
