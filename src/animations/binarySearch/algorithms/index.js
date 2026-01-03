/**
 * Algoritmo de Búsqueda Binaria
 * Complejidad: O(log n)
 * Requiere que el array esté ordenado
 */
export const busquedaBinaria = (arr, target) => {
  const trace = [];
  let left = 0;
  let right = arr.length - 1;
  let found = false;
  let foundIndex = -1;

  // Línea 0: function busquedaBinaria(arr, target) {
  // Línea 1: let izquierda = 0;
  // Línea 2: let derecha = arr.length - 1;
  trace.push({
    array: [...arr],
    currentIndex: -1,
    leftIndex: left,
    rightIndex: right,
    midIndex: -1,
    target,
    found: false,
    message: `🔍 Iniciando búsqueda binaria del valor ${target} en un arreglo de ${arr.length} elementos`,
    currentLine: 0,
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Línea 3: while (izquierda <= derecha) {
    trace.push({
      array: [...arr],
      currentIndex: mid,
      leftIndex: left,
      rightIndex: right,
      midIndex: mid,
      target,
      found: false,
      message: `🔄 Iteración: Buscando en rango [${left}...${right}] - ${right - left + 1} elementos`,
      currentLine: 3,
    });

    // Línea 4: let medio = Math.floor((izq + der) / 2);
    trace.push({
      array: [...arr],
      currentIndex: mid,
      leftIndex: left,
      rightIndex: right,
      midIndex: mid,
      target,
      found: false,
      message: `🎯 Calculando punto medio: (${left} + ${right}) ÷ 2 = ${mid} → arr[${mid}] = ${arr[mid]}`,
      currentLine: 4,
    });

    // Línea 5: if (arr[medio] === target) {
    trace.push({
      array: [...arr],
      currentIndex: mid,
      leftIndex: left,
      rightIndex: right,
      midIndex: mid,
      target,
      found: false,
      message: `⚖️ Comparando: arr[${mid}] = ${arr[mid]} vs objetivo ${target}`,
      currentLine: 5,
    });

    if (arr[mid] === target) {
      found = true;
      foundIndex = mid;

      // Línea 6: return medio; // Encontrado
      trace.push({
        array: [...arr],
        currentIndex: mid,
        leftIndex: left,
        rightIndex: right,
        midIndex: mid,
        target,
        found: true,
        message: `✅ ¡ÉXITO! Elemento ${target} encontrado en la posición ${mid}`,
        currentLine: 6,
      });
      break;
    } else if (arr[mid] < target) {
      // Línea 7: } else if (arr[medio] < target) {
      // Línea 8: izquierda = medio + 1;
      trace.push({
        array: [...arr],
        currentIndex: mid,
        leftIndex: left,
        rightIndex: right,
        midIndex: mid,
        target,
        found: false,
        message: `➡️ ${arr[mid]} < ${target}: Descartando mitad izquierda, buscando en [${mid + 1}...${right}]`,
        currentLine: 8,
      });
      left = mid + 1;
    } else {
      // Línea 9: } else {
      // Línea 10: derecha = medio - 1;
      trace.push({
        array: [...arr],
        currentIndex: mid,
        leftIndex: left,
        rightIndex: right,
        midIndex: mid,
        target,
        found: false,
        message: `⬅️ ${arr[mid]} > ${target}: Descartando mitad derecha, buscando en [${left}...${mid - 1}]`,
        currentLine: 10,
      });
      right = mid - 1;
    }
  }

  if (!found) {
    // Línea 13: return -1; // No encontrado
    trace.push({
      array: [...arr],
      currentIndex: -1,
      leftIndex: left,
      rightIndex: right,
      midIndex: -1,
      target,
      found: false,
      message: `❌ Elemento ${target} NO encontrado. No existe en el arreglo.`,
      currentLine: 13,
    });
  }

  return trace;
};

export const BusquedaBinariaCode = () => {
  return `function busquedaBinaria(arr, target) {
  let izquierda = 0;
  let derecha = arr.length - 1;
  while (izquierda <= derecha) {
    let medio = Math.floor((izq + der) / 2);
    if (arr[medio] === target) {
      return medio; // Encontrado
    } else if (arr[medio] < target) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }
  return -1; // No encontrado
}`;
};

export default busquedaBinaria;
