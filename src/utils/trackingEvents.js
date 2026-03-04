// Ejemplo de cómo rastrear eventos personalizados en tu proyecto
import { trackEvent } from './googleAnalytics';

// Ejemplo 1: Rastrear cuando un usuario hace clic en un botón de quiz
export const handleQuizClick = quizName => {
  trackEvent('quiz_started', {
    quiz_name: quizName,
    timestamp: new Date().toISOString(),
  });
};

// Ejemplo 2: Rastrear cuando un usuario completa un quiz
export const handleQuizComplete = (quizName, score) => {
  trackEvent('quiz_completed', {
    quiz_name: quizName,
    score: score,
    timestamp: new Date().toISOString(),
  });
};

// Ejemplo 3: Rastrear cuando un usuario ve una animación
export const handleAnimationView = animationName => {
  trackEvent('animation_viewed', {
    animation_name: animationName,
    timestamp: new Date().toISOString(),
  });
};

// Ejemplo 4: Rastrear búsquedas
export const handleSearch = searchQuery => {
  trackEvent('search_performed', {
    search_query: searchQuery,
    timestamp: new Date().toISOString(),
  });
};

// Ejemplo 5: Rastrear descargas o exports
export const handleExport = fileType => {
  trackEvent('content_exported', {
    file_type: fileType,
    timestamp: new Date().toISOString(),
  });
};
