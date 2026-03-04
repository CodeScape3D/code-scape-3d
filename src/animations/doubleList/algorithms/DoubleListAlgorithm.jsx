import NodoDoble from './NodoDoble';

// Función para copiar lista doble completa
export const copiarListaDoble = cabeza => {
  if (cabeza === null) return null;

  let nuevaCabeza = new NodoDoble(cabeza.getValue());
  let actualNuevo = nuevaCabeza;
  let actualViejo = cabeza.getNext();

  while (actualViejo !== null) {
    const nuevoNodo = new NodoDoble(actualViejo.getValue());
    nuevoNodo.setPrev(actualNuevo);
    actualNuevo.setNext(nuevoNodo);
    actualNuevo = nuevoNodo;
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
    head: copiarListaDoble(cabeza),
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

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      'Estado inicial de la lista doblemente enlazada',
      [0]
    )
  );

  const nuevoNodo = new NodoDoble(valor);
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
        'Conectando nuevo nodo con la cabeza actual (next)',
        [2]
      )
    );

    cabeza.setPrev(nuevoNodo);
    historialPasos.push(
      crearRegistro(
        cabeza,
        [valor],
        [],
        [],
        3,
        null,
        null,
        'Conectando cabeza actual con nuevo nodo (prev)',
        [3]
      )
    );

    cabeza = nuevoNodo;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [valor],
        [],
        4,
        null,
        null,
        'Actualizando cabeza al nuevo nodo',
        [4]
      )
    );
  }

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      5,
      null,
      null,
      'Inserción al inicio completada exitosamente',
      [5]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Insertar al final
export const InsertarAlFinal = (cabeza, valor) => {
  const historialPasos = [];

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      'Estado inicial de la lista doblemente enlazada',
      [0]
    )
  );

  const nuevoNodo = new NodoDoble(valor);
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

    nodoActual.setNext(nuevoNodo);
    nuevoNodo.setPrev(nodoActual);
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [nuevoNodo.getValue()],
        [],
        4,
        null,
        null,
        'Conectando último nodo con el nuevo nodo (doble enlace)',
        [7, 8]
      )
    );
  }

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
      [9]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Insertar en posición
export const InsertarEnPosicion = (cabeza, valor, posicion) => {
  const historialPasos = [];

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

  const nuevoNodo = new NodoDoble(valor);
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
  nuevoNodo.setPrev(actual);

  if (actual.getNext() !== null) {
    actual.getNext().setPrev(nuevoNodo);
  }
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
      `Insertando nodo en posición ${posicion} con doble enlace`,
      [7, 8, 9, 10]
    )
  );

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
      [11]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Eliminar del inicio
export const EliminarDelInicio = cabeza => {
  const historialPasos = [];

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

  cabeza = cabeza.getNext();

  if (cabeza !== null) {
    cabeza.setPrev(null);
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        3,
        null,
        null,
        'Actualizando cabeza y eliminando enlace prev',
        [3, 4]
      )
    );
  } else {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        3,
        null,
        null,
        'La lista ahora está vacía',
        [3]
      )
    );
  }

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      4,
      null,
      null,
      `Nodo ${valorEliminado} eliminado exitosamente`,
      [5]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Eliminar del final
export const EliminarDelFinal = cabeza => {
  const historialPasos = [];

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

  if (cabeza.getNext() === null) {
    const valorEliminado = cabeza.getValue();
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [valorEliminado],
        [],
        2,
        valorEliminado,
        null,
        `Único nodo encontrado: ${valorEliminado}`,
        [2]
      )
    );
    cabeza = null;
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [],
        3,
        null,
        null,
        'La lista ahora está vacía',
        [3]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  let nodoActual = cabeza;
  historialPasos.push(
    crearRegistro(
      cabeza,
      [nodoActual.getValue()],
      [],
      [],
      2,
      nodoActual.getValue(),
      null,
      'Buscando el último nodo',
      [2]
    )
  );

  while (nodoActual.getNext() !== null) {
    nodoActual = nodoActual.getNext();
    historialPasos.push(
      crearRegistro(
        cabeza,
        [nodoActual.getValue()],
        [],
        [],
        3,
        nodoActual.getValue(),
        null,
        `Recorriendo lista, nodo actual: ${nodoActual.getValue()}`,
        [3, 4]
      )
    );
  }

  const valorEliminado = nodoActual.getValue();
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [valorEliminado],
      [],
      4,
      valorEliminado,
      null,
      `Último nodo encontrado: ${valorEliminado}`,
      [5]
    )
  );

  nodoActual.getPrev().setNext(null);
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      5,
      null,
      null,
      `Nodo ${valorEliminado} eliminado exitosamente`,
      [6]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Eliminar en posición
export const EliminarEnPosicion = (cabeza, posicion) => {
  const historialPasos = [];

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
        'Error: Posición inválida',
        [1]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  if (posicion === 0) {
    return EliminarDelInicio(cabeza);
  }

  let actual = cabeza;
  let contador = 0;

  while (contador < posicion && actual !== null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [actual.getValue()],
        [],
        [],
        2,
        actual.getValue(),
        null,
        `Navegando a posición ${contador}`,
        [2, 3]
      )
    );
    actual = actual.getNext();
    contador++;
  }

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
        [4]
      )
    );
    return { historialPasos, nuevaCabeza: cabeza };
  }

  const valorEliminado = actual.getValue();
  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [valorEliminado],
      [],
      4,
      valorEliminado,
      null,
      `Nodo a eliminar encontrado: ${valorEliminado}`,
      [5]
    )
  );

  if (actual.getPrev() !== null) {
    actual.getPrev().setNext(actual.getNext());
  }
  if (actual.getNext() !== null) {
    actual.getNext().setPrev(actual.getPrev());
  }

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      5,
      null,
      null,
      `Nodo ${valorEliminado} eliminado exitosamente (enlaces actualizados)`,
      [6, 7]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza };
};

// Algoritmo: Buscar
export const Buscar = (cabeza, valor) => {
  const historialPasos = [];

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [],
      [],
      0,
      null,
      null,
      `Buscando valor ${valor} en la lista`,
      [0]
    )
  );

  if (cabeza === null) {
    historialPasos.push(
      crearRegistro(cabeza, [], [], [], 1, null, null, 'La lista está vacía', [
        1,
      ])
    );
    return { historialPasos, nuevaCabeza: cabeza, encontrado: false };
  }

  let nodoActual = cabeza;
  let posicion = 0;

  while (nodoActual !== null) {
    historialPasos.push(
      crearRegistro(
        cabeza,
        [],
        [],
        [nodoActual.getValue()],
        2,
        nodoActual.getValue(),
        nodoActual.getValue(),
        `Comparando con nodo en posición ${posicion}: ${nodoActual.getValue()}`,
        [2, 3]
      )
    );

    if (nodoActual.getValue() === valor) {
      historialPasos.push(
        crearRegistro(
          cabeza,
          [valor],
          [],
          [],
          3,
          valor,
          valor,
          `¡Valor ${valor} encontrado en posición ${posicion}!`,
          [4]
        )
      );
      return {
        historialPasos,
        nuevaCabeza: cabeza,
        encontrado: true,
        posicion,
      };
    }

    nodoActual = nodoActual.getNext();
    posicion++;
  }

  historialPasos.push(
    crearRegistro(
      cabeza,
      [],
      [valor],
      [],
      4,
      null,
      null,
      `Valor ${valor} no encontrado en la lista`,
      [5]
    )
  );

  return { historialPasos, nuevaCabeza: cabeza, encontrado: false };
};

// Componentes de código para visualización
export const InsertarAlInicioCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public void insertarAlInicio(int valor) {'}</p>
    <p>{'    NodeDoble nuevoNodo = new NodeDoble(valor);'}</p>
    <p>{'    nuevoNodo.setNext(cabeza);'}</p>
    <p>{'    if (cabeza != null) cabeza.setPrev(nuevoNodo);'}</p>
    <p>{'    cabeza = nuevoNodo;'}</p>
    <p>{'}'}</p>
  </div>
);

export const InsertarAlFinalCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public void insertarAlFinal(int valor) {'}</p>
    <p>{'    NodeDoble nuevoNodo = new NodeDoble(valor);'}</p>
    <p>{'    if (cabeza == null) { cabeza = nuevoNodo; return; }'}</p>
    <p>{'    NodeDoble actual = cabeza;'}</p>
    <p>{'    while (actual.getNext() != null)'}</p>
    <p>{'        actual = actual.getNext();'}</p>
    <p>{'    actual.setNext(nuevoNodo);'}</p>
    <p>{'    nuevoNodo.setPrev(actual);'}</p>
    <p>{'}'}</p>
  </div>
);

export const InsertarEnPosicionCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public void insertarEnPosicion(int valor, int pos) {'}</p>
    <p>{'    if (pos == 0) { insertarAlInicio(valor); return; }'}</p>
    <p>{'    NodeDoble nuevoNodo = new NodeDoble(valor);'}</p>
    <p>{'    NodeDoble actual = cabeza;'}</p>
    <p>{'    for (int i = 0; i < pos - 1 && actual != null; i++)'}</p>
    <p>{'        actual = actual.getNext();'}</p>
    <p>{'    if (actual == null) return;'}</p>
    <p>{'    nuevoNodo.setNext(actual.getNext());'}</p>
    <p>{'    nuevoNodo.setPrev(actual);'}</p>
    <p>{'    if (actual.getNext() != null)'}</p>
    <p>{'        actual.getNext().setPrev(nuevoNodo);'}</p>
    <p>{'    actual.setNext(nuevoNodo);'}</p>
    <p>{'}'}</p>
  </div>
);

export const EliminarDelInicioCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public int eliminarDelInicio() {'}</p>
    <p>{'    if (cabeza == null) return -1;'}</p>
    <p>{'    int valor = cabeza.getValue();'}</p>
    <p>{'    cabeza = cabeza.getNext();'}</p>
    <p>{'    if (cabeza != null) cabeza.setPrev(null);'}</p>
    <p>{'    return valor;'}</p>
    <p>{'}'}</p>
  </div>
);

export const EliminarDelFinalCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public int eliminarDelFinal() {'}</p>
    <p>{'    if (cabeza == null) return -1;'}</p>
    <p>{'    if (cabeza.getNext() == null) {'}</p>
    <p>{'        int valor = cabeza.getValue();'}</p>
    <p>{'        cabeza = null;'}</p>
    <p>{'        return valor;'}</p>
    <p>{'    }'}</p>
    <p>{'    NodeDoble actual = cabeza;'}</p>
    <p>{'    while (actual.getNext() != null)'}</p>
    <p>{'        actual = actual.getNext();'}</p>
    <p>{'    int valor = actual.getValue();'}</p>
    <p>{'    actual.getPrev().setNext(null);'}</p>
    <p>{'    return valor;'}</p>
    <p>{'}'}</p>
  </div>
);

export const EliminarEnPosicionCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public int eliminarEnPosicion(int pos) {'}</p>
    <p>{'    if (pos == 0) return eliminarDelInicio();'}</p>
    <p>{'    NodeDoble actual = cabeza;'}</p>
    <p>{'    for (int i = 0; i < pos && actual != null; i++)'}</p>
    <p>{'        actual = actual.getNext();'}</p>
    <p>{'    if (actual == null) return -1;'}</p>
    <p>{'    int valor = actual.getValue();'}</p>
    <p>{'    if (actual.getPrev() != null)'}</p>
    <p>{'        actual.getPrev().setNext(actual.getNext());'}</p>
    <p>{'    if (actual.getNext() != null)'}</p>
    <p>{'        actual.getNext().setPrev(actual.getPrev());'}</p>
    <p>{'    return valor;'}</p>
    <p>{'}'}</p>
  </div>
);

export const BuscarCode = ({ codeRef }) => (
  <div ref={codeRef}>
    <p>{'public int buscar(int valor) {'}</p>
    <p>{'    if (cabeza == null) return -1;'}</p>
    <p>{'    NodeDoble actual = cabeza;'}</p>
    <p>{'    int pos = 0;'}</p>
    <p>{'    while (actual != null) {'}</p>
    <p>{'        if (actual.getValue() == valor) return pos;'}</p>
    <p>{'        actual = actual.getNext();'}</p>
    <p>{'        pos++;'}</p>
    <p>{'    }'}</p>
    <p>{'    return -1;'}</p>
    <p>{'}'}</p>
  </div>
);
