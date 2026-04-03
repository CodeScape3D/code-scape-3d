// useSessionClose — detecta cuando el usuario cierra/oculta la pestaña
// y registra una actividad de tipo 'cierre' con la duración de la sesión
import { useEffect, useRef } from 'react';
import { getCurrentUser } from '../services/authService';
import { trackActivity } from '../services/firestoreService';

/**
 * @param {number|null} loginTime — timestamp en ms del momento del login actual
 */
const useSessionClose = loginTime => {
  // Usamos ref para tener siempre el valor más reciente sin recrear el listener
  const loginTimeRef = useRef(loginTime);

  useEffect(() => {
    loginTimeRef.current = loginTime;
  }, [loginTime]);

  useEffect(() => {
    if (!loginTime) return;

    const handleVisibilityChange = () => {
      // 'hidden' se dispara cuando el usuario: cierra la pestaña,
      // cambia de pestaña, o cierra el navegador
      if (document.visibilityState !== 'hidden') return;

      const currentUser = getCurrentUser();
      if (!currentUser || !loginTimeRef.current) return;

      const duracionSegundos = Math.round(
        (Date.now() - loginTimeRef.current) / 1000
      );

      // Solo registrar si la sesión duró al menos 5 segundos
      if (duracionSegundos < 5) return;

      // Fire-and-forget: el navegador puede cancelarlo si tarda mucho,
      // pero en la mayoría de casos lo completa antes del cierre
      trackActivity(
        currentUser.uid,
        currentUser.displayName,
        'cierre',
        'sesion',
        duracionSegundos
      );
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [loginTime]);
};

export default useSessionClose;
