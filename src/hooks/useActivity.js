// useActivity — custom hook for tracking user activities in Firestore
import { useCallback } from 'react';
import { trackActivity as trackActivityService } from '../services/firestoreService';
import { getCurrentUser } from '../services/authService';

/**
 * Provides a trackActivity function that automatically attaches the current user's ID.
 *
 * Usage:
 *   const { trackActivity } = useActivity();
 *   trackActivity('tema_abierto', 'Arrays');
 *   trackActivity('ejercicio_completado', 'Búsqueda Lineal', 180);
 *   trackActivity('pagina_visitada', 'estructuras-datos', duracion);
 */
const useActivity = () => {
  /**
   * @param {'tema_abierto'|'ejercicio_completado'|'pagina_visitada'} tipo
   * @param {string} contenido
   * @param {number} [duracionSegundos]
   */
  const trackActivity = useCallback(
    async (tipo, contenido, duracionSegundos, botones = []) => {
      const currentUser = getCurrentUser();

      // Only track if there is an authenticated user
      if (!currentUser) return;

      try {
        await trackActivityService(
          currentUser.uid,
          currentUser.displayName,
          tipo,
          contenido,
          duracionSegundos,
          botones
        );
      } catch (err) {
        console.error('Activity tracking error:', err);
      }
    },
    []
  );

  return { trackActivity };
};

export default useActivity;
