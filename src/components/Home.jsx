import { QuizView } from "../quiz";
import { NavBar, Footer} from "./"
import { UserContextMenu } from "./UserContextMenu";

function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <NavBar />
      <div className="h-screen w-full">
        <QuizView />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
