export const createTrace = (
  array,
  currentIndex = -1,
  foundIndex = -1,
  searchValue = null,
  description = '',
  currentLine = -1
) => {
  return {
    array: [...array],
    currentIndex,
    foundIndex,
    searchValue,
    description,
    currentLine,
  };
};

export const busquedaLineal = (array, target) => {
  const trace = [];
  const arr = [...array];

  // Línea 0: function busquedaLineal(arreglo, objetivo) {
  trace.push(
    createTrace(
      arr,
      -1,
      -1,
      target,
      `Iniciando búsqueda lineal del valor ${target}`,
      0
    )
  );

  for (let i = 0; i < arr.length; i++) {
    // Línea 1: for (let i = 0; i < arreglo.length; i++) {
    trace.push(
      createTrace(
        arr,
        i,
        -1,
        target,
        `Iteración ${i}: revisando posición ${i}`,
        1
      )
    );

    // Línea 2: if (arreglo[i] === objetivo) {
    trace.push(
      createTrace(
        arr,
        i,
        -1,
        target,
        `Comparando arr[${i}] = ${arr[i]} con ${target}`,
        2
      )
    );

    if (arr[i] === target) {
      // Línea 3: return i; // Encontrado
      trace.push(
        createTrace(
          arr,
          i,
          i,
          target,
          `¡Encontrado! El valor ${target} está en el índice ${i}`,
          3
        )
      );
      return trace;
    }
  }

  // Línea 6: return -1; // No encontrado
  trace.push(
    createTrace(
      arr,
      -1,
      -2,
      target,
      `El valor ${target} no se encontró en el arreglo`,
      6
    )
  );
  return trace;
};

export const BusquedaLinealCode = () => {
  return `function busquedaLineal(arreglo, objetivo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === objetivo) {
      return i; // Encontrado
    }
  }
  return -1; // No encontrado
}`;
};
