// Variable global para almacenar el measurement ID
let MEASUREMENT_ID = '';

// Inicializar Google Analytics
export const initializeGoogleAnalytics = measurementId => {
  // Guardar el measurement ID
  MEASUREMENT_ID = measurementId;

  // Crear el script de Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  // Agregar el script al head del documento
  document.head.appendChild(script);

  // Inicializar dataLayer de Google Analytics
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  // Desactivar el page_view automático para manejarlo manualmente en la SPA
  gtag('config', measurementId, {
    send_page_view: false,
  });

  // Guardar gtag en window para usarla en toda la app
  window.gtag = gtag;
};

// Función para rastrear eventos personalizados
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Función para rastrear cambios de página (GA4 - evento page_view)
export const trackPageView = pageName => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pageName,
      page_location: window.location.origin + pageName,
      page_title: document.title,
    });
  }
};
