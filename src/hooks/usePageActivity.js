// usePageActivity — registra el tiempo en una página/tema
// Funciona tanto al navegar normalmente como al cerrar la pestaña
import { useEffect, useRef } from 'react';
import useActivity from './useActivity';
import { obtenerClicks, limpiarClicks } from '../utils/clickRegistry';

/**
 * @param {'pagina_visitada'|'tema_abierto'} tipo
 * @param {string} contenido — nombre de la página o tema
 */
const usePageActivity = (tipo, contenido) => {
  const { trackActivity } = useActivity();

  const startTimeRef = useRef(Date.now());
  const contenidoRef = useRef(contenido);
  const hasSavedRef = useRef(false);

  useEffect(() => {
    contenidoRef.current = contenido;
    startTimeRef.current = Date.now();
    hasSavedRef.current = false;
  }, [contenido]);

  useEffect(() => {
    const save = () => {
      if (hasSavedRef.current) return;
      hasSavedRef.current = true;
      const duracionSegundos = Math.round(
        (Date.now() - startTimeRef.current) / 1000
      );
      if (duracionSegundos < 2) return;
      const botones = obtenerClicks();
      limpiarClicks();
      trackActivity(tipo, contenidoRef.current, duracionSegundos, botones);
    };

    const handlePageHide = () => save();
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      save();
    };
  }, [tipo]);
};

export default usePageActivity;
