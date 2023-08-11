import "./App.css";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer, HomeAprende, NotFound, HomeQuiz, HomeMiniJuegos } from "./components";
import { QuizResults, QuizView } from "./quiz";
import { AppTheme } from "./theme";
import { QuizProvider } from "./quiz";

function App() {
  return (
    <AppTheme>
      <QuizProvider>
        <Router>
          <div className="flex flex-col min-h-screen items-center">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeAprende />} />
              <Route path="/mini-juegos" element={<HomeMiniJuegos />} />
              <Route path="/quizzes" element={<HomeQuiz />} />
              <Route path="/quiz/:quizName" element={<QuizView />} />
              <Route path="/quiz/results" element={<QuizResults />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </QuizProvider>
    </AppTheme>
  );
}

export default App;
