// Inicializar Google Analytics
export const initializeGoogleAnalytics = measurementId => {
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
  gtag('config', measurementId, {
    page_path: window.location.pathname,
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

// Función para rastrear cambios de página
export const trackPageView = pageName => {
  if (window.gtag) {
    window.gtag('config', '', {
      page_path: pageName,
      page_title: pageName,
    });
  }
};
