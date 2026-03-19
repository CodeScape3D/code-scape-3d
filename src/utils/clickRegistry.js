// clickRegistry — módulo singleton que acumula clicks EXITOSOS de la sesión actual
// Los componentes llaman a registrarClick() solo cuando la operación fue exitosa.
// usePageActivity lee y limpia el registro al guardar la actividad.

let clicks = [];

/**
 * Registra un click exitoso. Solo guarda el nombre del botón.
 * @param {string} nombre — Nombre/funcionalidad del botón (ej: "Push", "Pop")
 */
export const registrarClick = nombre => {
  clicks.push(nombre);
};

/** Devuelve copia del registro actual */
export const obtenerClicks = () => [...clicks];

/** Limpia el registro (se llama al guardar la actividad) */
export const limpiarClicks = () => {
  clicks = [];
};
