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
import useAuth from './hooks/useAuth';
import useSessionClose from './hooks/useSessionClose';
import LoginButton from './components/Auth/LoginButton';

function ProtectedRoute({ user, children }) {
  if (!user) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          gap: '16px',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '3rem' }}>🔒</span>
        <h2
          style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#1a1a2e',
            margin: 0,
          }}
        >
          Inicia sesión para continuar
        </h2>
        <p
          style={{
            color: '#666',
            margin: 0,
            fontSize: '0.95rem',
            maxWidth: 360,
          }}
        >
          Necesitas una cuenta para acceder a este contenido.
        </p>
        <LoginButton />
      </div>
    );
  }
  return children;
}

function AppContent() {
  usePageTracking();
  const { user, loading, loginTime } = useAuth();
  useSessionClose(loginTime);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <span style={{ fontSize: '1rem', color: '#555' }}>Cargando…</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeAprende />} />
        <Route
          path="/animacion/:animacion"
          element={
            <ProtectedRoute user={user}>
              <AnimationView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes"
          element={
            <ProtectedRoute user={user}>
              <HomeQuiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes/sortingMethods"
          element={
            <ProtectedRoute user={user}>
              <SortingMethodsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes/searchMethods"
          element={
            <ProtectedRoute user={user}>
              <SearchMethodsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes/dataStructures"
          element={
            <ProtectedRoute user={user}>
              <DataStructuresPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/:quizName"
          element={
            <ProtectedRoute user={user}>
              <QuizView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/results"
          element={
            <ProtectedRoute user={user}>
              <QuizResults />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/results/answers"
          element={
            <ProtectedRoute user={user}>
              <QuizAnswers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mini-juegos"
          element={
            <ProtectedRoute user={user}>
              <HomeMiniJuegos />
            </ProtectedRoute>
          }
        />
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
