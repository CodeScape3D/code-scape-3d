//import { QuizView } from "../quiz";
import { NavBar, Footer } from "./";
import Cursos from "./Cursos";
import Header from "./Header";
import HeaderHome from "./HeaderHome";
//import { UserContextMenu } from "./UserContextMenu";


function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <NavBar />
      <div className="h-screen">
        <Header>
          <HeaderHome />
        </Header>

        {/* Cursos */}
        <Cursos />
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
