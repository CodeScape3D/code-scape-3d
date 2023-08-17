import "./App.css";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer, HomeAprende, NotFound, HomeQuiz, HomeMiniJuegos } from "./components";
import { QuizResults, QuizView, QuizAnswers } from "./quiz";
import { AppTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <AppTheme>
      <Provider store={store}>
        <Router>
          <div className="flex flex-col min-h-screen items-center">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeAprende />} />
              <Route path="/mini-juegos" element={<HomeMiniJuegos />} />
              <Route path="/quizzes" element={<HomeQuiz />} />
              <Route path="/quiz/:quizName" element={<QuizView />} />
              <Route path="/quiz/results" element={<QuizResults />} />
              <Route path="/quiz/results/answers" element={<QuizAnswers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </AppTheme>
  );
}

export default App;
