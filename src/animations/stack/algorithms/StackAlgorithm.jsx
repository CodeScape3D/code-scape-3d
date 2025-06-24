import { newTraceStack, moveInHistoryRecordStack } from './helpers';
import Nodo from './Nodo';

// Función mejorada para copiar la pila completa
const copiarPila = cabeza => {
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

// Función mejorada para crear un registro de estado para la animación
const crearRegistro = (
  cabeza,
  primerConjunto = [],
  segundoConjunto = [],
  indiceActual = 0
) => {
  return {
    head: copiarPila(cabeza),
    firstSet: [...primerConjunto],
    secondSet: [...segundoConjunto],
    isHead: cabeza ? cabeza.getValue() : -1,
    currentIndex: indiceActual,
  };
};

// Animación Push: Añadir un elemento al tope de la pila
export const Push = (cabeza, valor) => {
  const historialPasos = [];

  // Paso 1: Visualizar el estado inicial
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  // Paso 2: Crear un nuevo nodo
  const nuevoNodo = new Nodo(valor);
  historialPasos.push(crearRegistro(cabeza, [valor], [], 1));

  // Paso 3: Si la pila está vacía, el nuevo nodo es la cabeza
  if (cabeza === null) {
    cabeza = nuevoNodo;
    // Mostrar el nuevo nodo como la cabeza
    historialPasos.push(crearRegistro(cabeza, [], [], 3));
  }
  // Paso 4: Si no, conectar el nuevo nodo al tope actual
  else {
    nuevoNodo.setNext(cabeza);
    // Mostrar el nuevo nodo y su conexión
    historialPasos.push(crearRegistro(cabeza, [valor], [], 2));

    // Paso 5: El nuevo nodo se convierte en el tope
    cabeza = nuevoNodo;
    // Actualizar cabeza
    historialPasos.push(crearRegistro(cabeza, [], [], 3));
  }

  // Paso 6: Mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  return { historialPasos, nuevaCabeza: cabeza };
};

// Animación Pop: Eliminar un elemento del tope de la pila
export const Pop = cabeza => {
  const historialPasos = [];

  // Paso 1: Visualizar el estado inicial
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  // Paso 2: Verificar si la pila está vacía
  if (cabeza === null) {
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Paso 3: Guardar el valor a eliminar
  const valorEliminado = cabeza.getValue();
  historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 2));

  // Paso 4: Actualizar el tope para que apunte al siguiente elemento
  cabeza = cabeza.getNext();
  historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 3));

  // Paso 5: Mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Animación Sumergir: Mover el elemento del tope al fondo de la pila
export const Sumergir = cabeza => {
  const historialPasos = [];

  // Paso 1: Visualizar el estado inicial
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  // Paso 2: Verificar si la pila está vacía o tiene un solo elemento
  if (cabeza === null || cabeza.getNext() === null) {
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Paso 3: Guardar el nodo del tope y su valor
  const nodoTope = cabeza;
  const valorTope = nodoTope.getValue();
  historialPasos.push(crearRegistro(cabeza, [valorTope], [], 2));

  // Paso 4: Actualizar el tope para que apunte al segundo elemento
  cabeza = cabeza.getNext();
  historialPasos.push(crearRegistro(cabeza, [valorTope], [], 3));

  // Paso 5: Buscar el último nodo de la pila
  let nodoActual = cabeza;
  while (nodoActual.getNext() !== null) {
    nodoActual = nodoActual.getNext();
    historialPasos.push(
      crearRegistro(cabeza, [valorTope], [nodoActual.getValue()], 4)
    );
  }

  // Paso 6: El nodo tope ahora apunta a null y se coloca al final
  nodoTope.setNext(null);
  nodoActual.setNext(nodoTope);
  historialPasos.push(
    crearRegistro(cabeza, [valorTope], [nodoActual.getValue()], 5)
  );

  // Paso 7: Mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 5));

  return { historialPasos, nuevaCabeza: cabeza };
};

// Animación Insertar: Insertar un elemento en una posición específica
export const Insertar = (cabeza, valor, posicion) => {
  const historialPasos = [];

  // Paso 1: Visualizar el estado inicial
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  // Paso 2: Crear un nuevo nodo
  const nuevoNodo = new Nodo(valor);
  historialPasos.push(crearRegistro(cabeza, [valor], [], 1));

  // Paso 3: Si la pila está vacía, solo se puede insertar en posición 0
  if (cabeza === null) {
    if (posicion === 0) {
      cabeza = nuevoNodo;
      historialPasos.push(crearRegistro(cabeza, [], [], 2));
      historialPasos.push(crearRegistro(cabeza, [], [], 5));
      return { historialPasos, nuevaCabeza: cabeza };
    } else {
      historialPasos.push(crearRegistro(cabeza, [], [], 1));
      return { historialPasos, nuevaCabeza: cabeza };
    }
  }

  // Paso 4: Contar el tamaño actual de la pila
  let tamanoPila = 0;
  let temp = cabeza;
  while (temp !== null) {
    tamanoPila++;
    temp = temp.getNext();
  }

  // Paso 5: Si la posición es mayor o igual al tamaño, insertar en el tope (push)
  if (posicion >= tamanoPila) {
    nuevoNodo.setNext(cabeza);
    cabeza = nuevoNodo;
    historialPasos.push(crearRegistro(cabeza, [], [], 2));
    historialPasos.push(crearRegistro(cabeza, [], [], 5));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Paso 6: Si la posición es 0, insertar al fondo
  if (posicion === 0) {
    // Encontrar el último nodo
    let nodoActual = cabeza;
    historialPasos.push(crearRegistro(cabeza, [valor], [], 3));

    while (nodoActual.getNext() !== null) {
      nodoActual = nodoActual.getNext();
      historialPasos.push(
        crearRegistro(cabeza, [valor], [nodoActual.getValue()], 3)
      );
    }

    // Insertar al final
    nodoActual.setNext(nuevoNodo);
    historialPasos.push(crearRegistro(cabeza, [], [nuevoNodo.getValue()], 4));
  }
  // Paso 7: Insertar en posición intermedia
  else {
    // Convertir posición (desde el fondo) a índice (desde el tope)
    let indiceDesdeTop = tamanoPila - posicion - 1;
    let nodoActual = cabeza;
    let contador = 0;
    historialPasos.push(crearRegistro(cabeza, [valor], [], 3));

    // Navegar hasta la posición anterior
    while (contador < indiceDesdeTop) {
      nodoActual = nodoActual.getNext();
      contador++;
      historialPasos.push(
        crearRegistro(cabeza, [valor], [nodoActual.getValue()], 3)
      );
    }

    // Insertar el nuevo nodo
    nuevoNodo.setNext(nodoActual.getNext());
    historialPasos.push(
      crearRegistro(cabeza, [valor], [nodoActual.getValue()], 4)
    );

    nodoActual.setNext(nuevoNodo);
    historialPasos.push(crearRegistro(cabeza, [], [nuevoNodo.getValue()], 4));
  }

  // Paso 8: Mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 5));

  return { historialPasos, nuevaCabeza: cabeza };
};

// Animación Extraer: Eliminar un elemento en una posición específica
export const Extraer = (cabeza, posicion) => {
  const historialPasos = [];

  // Paso 1: Visualizar el estado inicial
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  // Paso 2: Verificar si la pila está vacía
  if (cabeza === null) {
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Paso 3: Contar el tamaño de la pila
  let tamanoPila = 0;
  let temp = cabeza;
  while (temp !== null) {
    tamanoPila++;
    temp = temp.getNext();
  }

  // Paso 4: Verificar que la posición sea válida
  if (posicion >= tamanoPila) {
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  let valorEliminado;

  // Paso 5: Si la posición es la última (tope), eliminar del tope (pop)
  if (posicion === tamanoPila - 1) {
    valorEliminado = cabeza.getValue();
    historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 2));

    cabeza = cabeza.getNext();
    historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 3));
  }
  // Paso 6: Eliminar en otras posiciones
  else {
    historialPasos.push(crearRegistro(cabeza, [], [], 2));

    // Si la posición es 0 (fondo), usar lógica especial
    if (posicion === 0) {
      // Caso especial: eliminar el último nodo de la cadena
      if (tamanoPila === 1) {
        // Solo hay un elemento, eliminarlo
        valorEliminado = cabeza.getValue();
        historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 3));
        cabeza = null;
        historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 4));
      } else {
        // Encontrar el penúltimo nodo
        let nodoActual = cabeza;
        while (nodoActual.getNext().getNext() !== null) {
          nodoActual = nodoActual.getNext();
          historialPasos.push(
            crearRegistro(cabeza, [], [nodoActual.getValue()], 2)
          );
        }

        // Eliminar el último nodo
        valorEliminado = nodoActual.getNext().getValue();
        historialPasos.push(
          crearRegistro(cabeza, [valorEliminado], [nodoActual.getValue()], 3)
        );

        nodoActual.setNext(null);
        historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 4));
      }
    }
    // Eliminar en posición intermedia
    else {
      // Convertir posición (desde el fondo) a índice (desde el tope)
      let indiceDesdeTop = tamanoPila - posicion - 1;
      let nodoActual = cabeza;
      let contador = 0;

      // Navegar hasta el nodo anterior al que se va a eliminar
      while (contador < indiceDesdeTop - 1) {
        nodoActual = nodoActual.getNext();
        contador++;
        historialPasos.push(
          crearRegistro(cabeza, [], [nodoActual.getValue()], 2)
        );
      }

      // Guardar el valor a eliminar
      valorEliminado = nodoActual.getNext().getValue();
      historialPasos.push(
        crearRegistro(cabeza, [valorEliminado], [nodoActual.getValue()], 3)
      );

      // Eliminar el nodo de la cadena
      nodoActual.setNext(nodoActual.getNext().getNext());
      historialPasos.push(crearRegistro(cabeza, [valorEliminado], [], 4));
    }
  }

  // Paso 7: Mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Componentes de código con explicaciones detalladas para mejor visualización
export const PushCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{` nuevoNodo = new Nodo(valor)`}</pre>
      <pre>{`if (cabeza === null) cabeza = nuevoNodo`}</pre>
      <pre>{`nuevoNodo.setNext(cabeza)`}</pre>
      <pre>{`cabeza = nuevoNodo`}</pre>
    </code>
  );
};

export const PopCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if (cabeza === null) return error`}</pre>
      <pre>{`valorEliminado = cabeza.getValue()`}</pre>
      <pre>{`cabeza = cabeza.getNext()`}</pre>
    </code>
  );
};

export const SumergirCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if (cabeza === null || cabeza.getNext() === null) return`}</pre>
      <pre>{`nodoTope = cabeza`}</pre>
      <pre>{`cabeza = cabeza.getNext()`}</pre>
      <pre>{`while (nodoActual.getNext() !== null) nodoActual = nodoActual.getNext()`}</pre>
      <pre>{`nodoTope.setNext(null); nodoActual.setNext(nodoTope)`}</pre>
    </code>
  );
};

export const InsertarCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`nuevoNodo = new Nodo(valor)`}</pre>
      <pre>{`if (cabeza === null && posicion === 0) cabeza = nuevoNodo`}</pre>
      <pre>{`while (temp !== null) { tamanoPila++; temp = temp.getNext() }`}</pre>
      <pre>{`nuevoNodo.setNext(cabeza); cabeza = nuevoNodo`}</pre>
      <pre>{`ultimo.setNext(nuevoNodo)`}</pre>
      <pre>{`indiceDesdeTop = tamanoPila - posicion - 1`}</pre>
    </code>
  );
};

export const ExtraerCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if (cabeza === null) return error`}</pre>
      <pre>{`while (temp !== null) { tamanoPila++; temp = temp.getNext() }`}</pre>
      <pre>{`if (posicion >= tamanoPila) return error`}</pre>
      <pre>{`valorEliminado = cabeza.getValue(); cabeza = cabeza.getNext()`}</pre>
      <pre>{`penúltimo.setNext(null)`}</pre>
      <pre>{`indiceDesdeTop = tamanoPila - posicion - 1`}</pre>
      <pre>{`valorEliminado = nodoActual.getNext().getValue()`}</pre>
      <pre>{`nodoActual.setNext(nodoActual.getNext().getNext())`}</pre>
    </code>
  );
};
