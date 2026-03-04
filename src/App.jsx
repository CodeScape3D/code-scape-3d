import './App.css';
import 'animate.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  NavBar,
  Footer,
  HomeAprende,
  NotFound,
  HomeQuiz,
  HomeMiniJuegos,
} from './components';
import {
  QuizResults,
  QuizView,
  QuizAnswers,
  SortingMethodsPage,
  SearchMethodsPage,
  DataStructuresPage,
} from './quiz';
import { AnimationView } from './animations';
import { AppTheme } from './theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { usePageTracking } from './hooks/usePageTracking';

function AppContent() {
  // Rastrear cambios de página automáticamente
  usePageTracking();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeAprende />} />
        <Route path="/animacion/:animacion" element={<AnimationView />} />
        <Route path="/quizzes" element={<HomeQuiz />} />
        <Route
          path="/quizzes/sortingMethods"
          element={<SortingMethodsPage />}
        />
        <Route path="/quizzes/searchMethods" element={<SearchMethodsPage />} />
        <Route
          path="/quizzes/dataStructures"
          element={<DataStructuresPage />}
        />
        <Route path="/quiz/:quizName" element={<QuizView />} />
        <Route path="/quiz/results" element={<QuizResults />} />
        <Route path="/quiz/results/answers" element={<QuizAnswers />} />
        <Route path="/mini-juegos" element={<HomeMiniJuegos />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppTheme>
      <Provider store={store}>
        <Router>
          <AppContent />
        </Router>
      </Provider>
    </AppTheme>
  );
}

export default App;
