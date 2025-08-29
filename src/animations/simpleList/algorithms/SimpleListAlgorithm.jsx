import { newTraceSimpleList, moveInHistoryRecordSimpleList } from './helpers';
import Nodo from './Nodo';

// Función para copiar lista completa
export const copiarLista = cabeza => {
  if (cabeza === null) return null;

  let nuevaCabeza = new Nodo(cabeza.getValue());
  let actualNuevo = nuevaCabeza;
  let actualViejo = cabeza.getNext();

  while (actualViejo !== null) {
    actualNuevo.setNext(new Nodo(actualViejo.getValue()));
    actualNuevo = actualNuevo.getNext();
    actualViejo = actualViejo.getNext();
  }

  return nuevaCabeza;
};

// Función para crear registro de animación
export const crearRegistro = (
  cabeza,
  primerConjunto = [],
  segundoConjunto = [],
  tercerConjunto = [],
  indiceActual = 0,
  nodoResaltado = null,
  puntero = null,
  descripcion = '',
  codigoResaltado = []
) => {
  return {
    head: copiarLista(cabeza),
    firstSet: [...primerConjunto],
    secondSet: [...segundoConjunto],
    thirdSet: [...tercerConjunto],
    currentIndex: indiceActual,
    highlightedNode: nodoResaltado,
    pointer: puntero,
    description: descripcion,
    highlightedCode: [...codigoResaltado],
  };
};

// Algoritmo: Insertar al inicio
export const InsertarAlInicio = (cabeza, valor) => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      'Estado inicial de la lista enlazada',
      [0]
    )
  );

  // Crear nuevo nodo
  const nuevoNodo = new Nodo(valor);
  historialPasos.push(
    crearRegistro(
      cabeza,
      [valor],
      [],
      [],
      1,
      null,
      null,
      `Creando nuevo nodo con valor ${valor}`,
      [1]
    )
  );

  if (cabeza === null) {
    // Caso lista vacía
    cabeza = nuevoNodo;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [valor],
        [],
        2,
        null,
        null,
        'Lista vacía: el nuevo nodo se convierte en la cabeza',
        [2, 3]
      )
    );
  } else {
    // Conectar nuevo nodo
    nuevoNodo.setNext(cabeza);
    historialPasos.push(
      crearRegistro(
        cabeza,
        [valor],
        [],
        [],
        2,
        null,
        null,
        'Conectando nuevo nodo con la cabeza actual',
        [2]
      )
    );

    // Actualizar cabeza
    cabeza = nuevoNodo;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [valor],
        [],
        3,
        null,
        null,
        'Actualizando cabeza al nuevo nodo',
        [3]
      )
    );
  }

  // Estado final
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      4,
      null,
      null,
      'Inserción al inicio completada exitosamente',
      [4]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Insertar al final
export const InsertarAlFinal = (cabeza, valor) => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      'Estado inicial de la lista enlazada',
      [0]
    )
  );

  // Crear nuevo nodo
  const nuevoNodo = new Nodo(valor);
  historialPasos.push(
    crearRegistro(
      cabeza,
      [valor],
      [],
      [],
      1,
      null,
      null,
      `Creando nuevo nodo con valor ${valor}`,
      [1]
    )
  );

  if (cabeza === null) {
    // Caso lista vacía
    cabeza = nuevoNodo;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [valor],
        [],
        2,
        null,
        null,
        'Lista vacía: el nuevo nodo se convierte en la cabeza',
        [2]
      )
    );
  } else {
    // Buscar último nodo
    let nodoActual = cabeza;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [valor],
        [nodoActual.getValue()],
        [],
        2,
        nodoActual.getValue(),
        null,
        'Iniciando búsqueda del último nodo',
        [3, 4]
      )
    );

    while (nodoActual.getNext() !== null) {
      nodoActual = nodoActual.getNext();
      historialPasos.push(
        crearRegistro(
          cabeza,
          [valor],
          [nodoActual.getValue()],
          [],
          3,
          nodoActual.getValue(),
          null,
          `Recorriendo lista, nodo actual: ${nodoActual.getValue()}`,
          [5, 6]
        )
      );
    }

    // Conectar nuevo nodo
    nodoActual.setNext(nuevoNodo);
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [nuevoNodo.getValue()],
        [],
        4,
        null,
        null,
        'Conectando último nodo con el nuevo nodo',
        [7]
      )
    );
  }

  // Estado final
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      5,
      null,
      null,
      'Inserción al final completada exitosamente',
      [8]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Insertar en posición
export const InsertarEnPosicion = (cabeza, valor, posicion) => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      `Insertando valor ${valor} en posición ${posicion}`,
      [0]
    )
  );

  // Validar posición
  if (posicion < 0) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Error: Posición inválida (menor que 0)',
        [1]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Caso especial: insertar en posición 0
  if (posicion === 0) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Posición 0 detectada, redirigiendo a insertar al inicio',
        [1]
      )
    );
    return InsertarAlInicio(cabeza, valor);
  }

  // Crear nuevo nodo
  const nuevoNodo = new Nodo(valor);
  historialPasos.push(
    crearRegistro(
      cabeza,
      [valor],
      [],
      [],
      1,
      null,
      null,
      `Creando nuevo nodo con valor ${valor}`,
      [2]
    )
  );

  // Navegar hasta la posición anterior
  let actual = cabeza;
  let contador = 0;

  if (actual === null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        2,
        null,
        null,
        'Error: No se puede insertar en posición mayor que 0 en lista vacía',
        [3]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Navegar hasta la posición anterior
  while (contador < posicion - 1 && actual !== null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [actual.getValue()],
        [],
        [],
        2,
        actual.getValue(),
        null,
        `Navegando a posición ${contador}, nodo actual: ${actual.getValue()}`,
        [4, 5]
      )
    );
    actual = actual.getNext();
    contador++;
  }

  // Verificar posición válida
  if (actual === null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        3,
        null,
        null,
        `Error: Posición ${posicion} fuera de rango`,
        [6]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Realizar inserción
  historialPasos.push(
    crearRegistro(
      cabeza,
      [actual.getValue()],
      [],
      [],
      3,
      actual.getValue(),
      null,
      `Posicionado en nodo anterior (posición ${contador})`,
      [6]
    )
  );

  nuevoNodo.setNext(actual.getNext());
  actual.setNext(nuevoNodo);

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [valor],
      [],
      4,
      nuevoNodo.getValue(),
      null,
      `Insertando nodo en posición ${posicion}`,
      [7, 8]
    )
  );

  // Estado final
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      5,
      null,
      null,
      'Inserción en posición completada exitosamente',
      [9]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Eliminar del inicio
export const EliminarDelInicio = cabeza => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      'Eliminando nodo del inicio de la lista',
      [0]
    )
  );

  if (cabeza === null) {
    // Caso lista vacía
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Error: No se puede eliminar de una lista vacía',
        [1]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Identificar nodo a eliminar
  const valorEliminado = cabeza.getValue();
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [valorEliminado],
      [],
      2,
      cabeza.getValue(),
      null,
      `Identificando nodo a eliminar: ${valorEliminado}`,
      [2]
    )
  );

  // Actualizar cabeza
  cabeza = cabeza.getNext();
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      3,
      null,
      null,
      'Actualizando cabeza al siguiente nodo',
      [3]
    )
  );

  // Estado final
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      4,
      null,
      null,
      'Eliminación del inicio completada exitosamente',
      [4]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Algoritmo: Eliminar del final
export const EliminarDelFinal = cabeza => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      'Eliminando nodo del final de la lista',
      [0]
    )
  );

  if (cabeza === null) {
    // Caso lista vacía
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Error: No se puede eliminar de una lista vacía',
        [1]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Caso especial: solo un elemento
  if (cabeza.getNext() === null) {
    const valorEliminado = cabeza.getValue();
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [valorEliminado],
        [],
        1,
        cabeza.getValue(),
        null,
        `Único elemento en la lista: ${valorEliminado}`,
        [2, 3]
      )
    );

    cabeza = null;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        2,
        null,
        null,
        'Lista ahora vacía después de eliminar único elemento',
        [4]
      )
    );

    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        3,
        null,
        null,
        'Eliminación del final completada exitosamente',
        [8]
      )
    );

    return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
  }

  // Buscar penúltimo nodo
  let actual = cabeza;
  historialPasos.push(
    crearRegistro(
      cabeza,
      [actual.getValue()],
      [],
      [],
      1,
      actual.getValue(),
      null,
      'Buscando penúltimo nodo de la lista',
      [5]
    )
  );

  while (actual.getNext().getNext() !== null) {
    actual = actual.getNext();
    historialPasos.push(
      crearRegistro(
        cabeza,
        [actual.getValue()],
        [],
        [],
        1,
        actual.getValue(),
        null,
        `Continuando búsqueda, nodo actual: ${actual.getValue()}`,
        [6]
      )
    );
  }

  // Identificar último nodo
  const valorEliminado = actual.getNext().getValue();
  historialPasos.push(
    crearRegistro(
      cabeza,
      [actual.getValue()],
      [valorEliminado],
      [],
      2,
      actual.getValue(),
      null,
      `Penúltimo nodo encontrado: ${actual.getValue()}, último nodo: ${valorEliminado}`,
      [6]
    )
  );

  // Eliminar último nodo
  actual.setNext(null);
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      3,
      null,
      null,
      'Desconectando último nodo de la lista',
      [7]
    )
  );

  // Estado final
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      4,
      null,
      null,
      'Eliminación del final completada exitosamente',
      [8]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Algoritmo: Eliminar en posición
export const EliminarEnPosicion = (cabeza, posicion) => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      `Eliminando nodo en posición ${posicion}`,
      [0]
    )
  );

  if (cabeza === null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Error: No se puede eliminar de una lista vacía',
        [1]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  if (posicion < 0) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Error: Posición inválida (menor que 0)',
        [1]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Caso especial: eliminar en posición 0
  if (posicion === 0) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Posición 0 detectada, redirigiendo a eliminar del inicio',
        [1]
      )
    );
    return EliminarDelInicio(cabeza);
  }

  // Navegar hasta nodo anterior
  let actual = cabeza;
  let contador = 0;

  historialPasos.push(
    crearRegistro(
      cabeza,
      [actual.getValue()],
      [],
      [],
      1,
      actual.getValue(),
      null,
      `Navegando a posición ${posicion - 1}`,
      [2]
    )
  );

  while (contador < posicion - 1 && actual !== null) {
    actual = actual.getNext();
    contador++;

    if (actual !== null) {
      historialPasos.push(
        crearRegistro(
          cabeza,
          [actual.getValue()],
          [],
          [],
          1,
          actual.getValue(),
          null,
          `Posición ${contador}, nodo actual: ${actual.getValue()}`,
          [3, 4]
        )
      );
    }
  }

  // Verificar posición válida
  if (actual === null || actual.getNext() === null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        2,
        null,
        null,
        `Error: Posición ${posicion} fuera de rango`,
        [5]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Identificar nodo a eliminar
  const valorEliminado = actual.getNext().getValue();
  historialPasos.push(
    crearRegistro(
      cabeza,
      [actual.getValue()],
      [valorEliminado],
      [],
      2,
      actual.getValue(),
      null,
      `Nodo anterior: ${actual.getValue()}, nodo a eliminar: ${valorEliminado}`,
      [5]
    )
  );

  // Realizar eliminación
  actual.setNext(actual.getNext().getNext());
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      3,
      null,
      null,
      'Reconectando nodos para omitir el nodo eliminado',
      [6]
    )
  );

  // Estado final
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      4,
      null,
      null,
      'Eliminación en posición completada exitosamente',
      [7]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Algoritmo: Buscar elemento
export const Buscar = (cabeza, valor) => {
  const historialPasos = [];

  // Estado inicial
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      `Iniciando búsqueda del valor ${valor}`,
      [0]
    )
  );

  if (cabeza === null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        1,
        null,
        null,
        'Lista vacía: valor no encontrado',
        [1]
      )
    );
    return { historialPasos, encontrado: false, posicion: -1 };
  }

  let nodoActual = cabeza;
  let posicion = 0;
  historialPasos.push(
    crearRegistro(
      cabeza,
      [nodoActual.getValue()],
      [],
      [],
      2,
      nodoActual.getValue(),
      null,
      `Iniciando búsqueda desde la cabeza`,
      [2, 3]
    )
  );

  while (nodoActual !== null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [nodoActual.getValue()],
        [],
        [],
        2,
        nodoActual.getValue(),
        null,
        `Comparando: ${nodoActual.getValue()} con ${valor} en posición ${posicion}`,
        [4, 5]
      )
    );

    if (nodoActual.getValue() === valor) {
      // Elemento encontrado
      historialPasos.push(
        crearRegistro(
          cabeza,
          [],
          [nodoActual.getValue()],
          [],
          3,
          nodoActual.getValue(),
          null,
          `¡Valor ${valor} encontrado en posición ${posicion}!`,
          [6, 7]
        )
      );
      historialPasos.push(
        crearRegistro(
          cabeza,
          [],
          [],
          [],
          4,
          null,
          null,
          'Búsqueda completada exitosamente',
          [10]
        )
      );
      return {
        historialPasos,
        encontrado: true,
        posicion,
      };
    }

    nodoActual = nodoActual.getNext();
    posicion++;

    if (nodoActual !== null) {
      historialPasos.push(
        crearRegistro(
          cabeza,
          [nodoActual.getValue()],
          [],
          [],
          2,
          nodoActual.getValue(),
          null,
          `Avanzando al siguiente nodo: ${nodoActual.getValue()}`,
          [8, 9]
        )
      );
    }
  }

  // Elemento no encontrado
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      4,
      null,
      null,
      `Valor ${valor} no encontrado en la lista`,
      [10]
    )
  );
  return { historialPasos, encontrado: false, posicion: -1 };
};

// Componente para dibujar lista enlazada
export const DrawLinkedList = ({ record, cabeza }) => {
  const currentRecord = record || { head: cabeza };

  if (!currentRecord.head) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center">
          <div className="text-2xl mb-2">∅</div>
          <div className="text-lg font-medium">Lista vacía</div>
        </div>
      </div>
    );
  }

  const nodes = [];
  let current = currentRecord.head;
  let index = 0;

  while (current !== null) {
    const value = current.getValue();
    const isHighlighted = currentRecord.highlightedNode === value;
    const isInFirstSet = currentRecord.firstSet.includes(value);
    const isInSecondSet = currentRecord.secondSet.includes(value);
    const isInThirdSet = currentRecord.thirdSet.includes(value);

    // Estilos del nodo
    let nodeClass =
      'relative flex items-center justify-center w-20 h-16 border-3 rounded-lg font-bold text-lg transition-all duration-700 shadow-lg';

    if (isInFirstSet) {
      nodeClass +=
        ' bg-orange-100 border-orange-500 text-orange-900 shadow-orange-200';
    } else if (isInSecondSet) {
      nodeClass +=
        ' bg-green-100 border-green-500 text-green-900 shadow-green-200';
    } else if (isInThirdSet) {
      nodeClass += ' bg-red-100 border-red-500 text-red-900 shadow-red-200';
    } else if (isHighlighted) {
      nodeClass +=
        ' bg-blue-100 border-blue-500 text-blue-900 scale-110 shadow-blue-200';
    } else {
      nodeClass += ' bg-white border-gray-400 text-gray-800 shadow-gray-200';
    }

    // Crear el nodo visual
    const nodeElement = (
      <div key={index} className="flex items-center">
        <div className="relative">
          {/* Indicador HEAD */}
          {index === 0 && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                HEAD
              </div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600 mx-auto"></div>
            </div>
          )}

          {/* Nodo principal */}
          <div className={nodeClass}>
            <div className="flex items-center">
              <div className="flex-1 text-center">{value}</div>
              <div className="w-px h-8 bg-gray-400 mx-2"></div>
              <div className="w-6 h-6 border border-gray-400 rounded-sm bg-gray-100 flex items-center justify-center text-xs">
                {current.getNext() !== null ? '•' : '∅'}
              </div>
            </div>
          </div>
        </div>

        {/* Flecha conectora */}
        {current.getNext() !== null && (
          <div className="flex items-center mx-3">
            <div className="w-12 h-1 bg-gray-600 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            </div>
          </div>
        )}

        {/* Indicador NULL al final */}
        {current.getNext() === null && (
          <div className="flex items-center mx-3">
            <div className="w-12 h-1 bg-gray-600 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            </div>
            <div className="w-8 h-8 border-2 border-gray-600 rounded-full bg-white flex items-center justify-center text-sm font-bold text-gray-600">
              ∅
            </div>
          </div>
        )}
      </div>
    );

    nodes.push(nodeElement);
    current = current.getNext();
    index++;
  }

  return (
    <div className="flex items-center justify-center p-8 min-h-40 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-0 overflow-x-auto max-w-full">
        {nodes}
      </div>
    </div>
  );
};

// Funciones de visualización de código
export const InsertarAlInicioCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'nuevoNodo = new Nodo(valor)',
    'nuevoNodo.setNext(cabeza)',
    'cabeza = nuevoNodo',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};

export const InsertarAlFinalCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'nuevoNodo = new Nodo(valor)',
    'if (cabeza === null) cabeza = nuevoNodo',
    'else {',
    '  actual = cabeza',
    '  while (actual.getNext() !== null)',
    '    actual = actual.getNext()',
    '  actual.setNext(nuevoNodo)',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};

export const InsertarEnPosicionCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'if (posicion === 0) return insertarAlInicio(valor)',
    'nuevoNodo = new Nodo(valor)',
    'if (cabeza === null) return error',
    'actual = cabeza',
    'for (i = 0; i < posicion - 1; i++)',
    '  if (actual === null) return error',
    'nuevoNodo.setNext(actual.getNext())',
    'actual.setNext(nuevoNodo)',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};

export const EliminarDelInicioCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'if (cabeza === null) return error',
    'valorEliminado = cabeza.getValue()',
    'cabeza = cabeza.getNext()',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};

export const EliminarDelFinalCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'if (cabeza === null) return error',
    'if (cabeza.getNext() === null) {',
    '  valorEliminado = cabeza.getValue()',
    '  cabeza = null',
    '} else {',
    '  while (actual.getNext().getNext() !== null)',
    '    actual = actual.getNext()',
    '  valorEliminado = actual.getNext().getValue()',
    '  actual.setNext(null)',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};

export const EliminarEnPosicionCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'if (posicion === 0) return eliminarDelInicio()',
    'actual = cabeza',
    'for (i = 0; i < posicion - 1; i++)',
    '  actual = actual.getNext()',
    'if (actual === null || actual.getNext() === null) return error',
    'valorEliminado = actual.getNext().getValue()',
    'actual.setNext(actual.getNext().getNext())',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};

export const BuscarCode = ({ codeRef, highlightedLines = [] }) => {
  const lines = [
    'if (cabeza === null) return not found',
    'actual = cabeza',
    'posicion = 0',
    'while (actual !== null) {',
    '  if (actual.getValue() === valor)',
    '    return found at posicion',
    '  actual = actual.getNext()',
    '  posicion++',
    '}',
    'return not found',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code ref={codeRef}>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`${highlightedLines.includes(index) ? 'bg-yellow-500 bg-opacity-30 text-yellow-200' : ''} px-2 py-1 rounded transition-all duration-300`}
          >
            {line}
          </pre>
        ))}
      </code>
    </div>
  );
};
