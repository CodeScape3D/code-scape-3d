import "./App.css";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer, Home, HomeAprende, NotFound, HomeQuiz, HomeMiniJuegos } from "./components";
import { QuizView } from "./quiz/views";
import { AppTheme } from "./theme";

function App() {
  return (
    <AppTheme>
      <Router>
        <div className="flex flex-col items-center h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aprende" element={<HomeAprende />} />
            <Route path="/mini-juegos" element={<HomeMiniJuegos />} />
            <Route path="/quizzes" element={<HomeQuiz />} />
            <Route path="/quiz" element={<QuizView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppTheme>
  );
}

export default App;
