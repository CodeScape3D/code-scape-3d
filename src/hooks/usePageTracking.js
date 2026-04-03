import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/googleAnalytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Pequeño delay para asegurar que gtag esté listo
    const timeout = setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.search]);
};
