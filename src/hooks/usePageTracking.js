import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/googleAnalytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Rastrear cada vez que cambia la ruta
    trackPageView(location.pathname);
  }, [location.pathname]);
};
