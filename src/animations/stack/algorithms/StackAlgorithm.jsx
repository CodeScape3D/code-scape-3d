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
  indiceActual = 0,
  nodoAEliminar = null
) => {
  return {
    head: copiarPila(cabeza),
    firstSet: [...primerConjunto],
    secondSet: [...segundoConjunto],
    isHead: cabeza ? cabeza.getValue() : -1,
    currentIndex: indiceActual,
    deletingNode: nodoAEliminar,
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

  // Resaltar en rojo (secondSet) varios pasos como en la cola
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 2));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 2));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 2));

  // Preparar la animación de desaparición (deletingNode)
  historialPasos.push(crearRegistro(cabeza, [], [], 2, valorEliminado));
  historialPasos.push(crearRegistro(cabeza, [], [], 2, valorEliminado));

  // Paso 4: Actualizar el tope para que apunte al siguiente elemento
  cabeza = cabeza.getNext();
  historialPasos.push(crearRegistro(cabeza, [], [], 3));

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
  historialPasos.push(crearRegistro(cabeza, [valorTope], [], 2, valorTope));

  // Paso 4: Actualizar el tope para que apunte al segundo elemento
  cabeza = cabeza.getNext();
  historialPasos.push(crearRegistro(cabeza, [valorTope], [], 3, valorTope));

  // Paso 5: Buscar el último nodo de la pila
  let nodoActual = cabeza;
  while (nodoActual.getNext() !== null) {
    nodoActual = nodoActual.getNext();
    historialPasos.push(
      crearRegistro(cabeza, [valorTope], [nodoActual.getValue()], 4, valorTope)
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

  // Paso 5: Si posición <= 0, insertar en el tope (cima)
  if (posicion <= 0) {
    nuevoNodo.setNext(cabeza);
    cabeza = nuevoNodo;
    historialPasos.push(crearRegistro(cabeza, [], [], 2));
    historialPasos.push(crearRegistro(cabeza, [], [], 5));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Paso 6: Si posición >= tamaño, insertar al fondo
  if (posicion >= tamanoPila) {
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
    historialPasos.push(crearRegistro(cabeza, [], [], 5));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Paso 7: Insertar en posición intermedia (contando desde el tope)
  let nodoActual = cabeza;
  let contador = 0;
  historialPasos.push(crearRegistro(cabeza, [valor], [], 3));

  // Navegar hasta la posición anterior
  while (contador < posicion - 1) {
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

  // Paso 4: Verificar que la posición sea válida (0 <= posición < tamanoPila)
  if (posicion < 0 || posicion >= tamanoPila) {
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  let valorEliminado;

  // Caso 1: Eliminar en posición 0 (tope -> pop-like)
  if (posicion === 0) {
    valorEliminado = cabeza.getValue();

    // Resaltar en rojo varios pasos
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 2));
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 2));
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 2));

    // Preparar desaparición
    historialPasos.push(crearRegistro(cabeza, [], [], 2, valorEliminado));
    historialPasos.push(crearRegistro(cabeza, [], [], 2, valorEliminado));

    cabeza = cabeza.getNext();
    historialPasos.push(crearRegistro(cabeza, [], [], 3));
    historialPasos.push(crearRegistro(cabeza, [], [], 4));
    return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
  }

  // Caso 2: Eliminar en la última posición (fondo)
  if (posicion === tamanoPila - 1) {
    // Encontrar el penúltimo nodo
    let nodoActual = cabeza;
    while (nodoActual.getNext().getNext() !== null) {
      nodoActual = nodoActual.getNext();
      historialPasos.push(
        crearRegistro(cabeza, [], [nodoActual.getValue()], 2)
      );
    }

    // Valor a eliminar (el último)
    valorEliminado = nodoActual.getNext().getValue();

    // Resaltar en rojo antes de desaparición
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));

    // Preparar desaparición
    historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));
    historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));

    // Eliminar el último nodo
    nodoActual.setNext(null);
    historialPasos.push(crearRegistro(cabeza, [], [], 4));
    return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
  }

  // Caso 3: Eliminar en posición intermedia (contando desde el tope)
  // Navegar hasta el nodo anterior al que se va a eliminar
  let nodoActual = cabeza;
  let contador = 0;
  while (contador < posicion - 1) {
    nodoActual = nodoActual.getNext();
    contador++;
    historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 2));
  }

  // Guardar el valor a eliminar
  valorEliminado = nodoActual.getNext().getValue();

  // Resaltar en rojo antes de desaparición
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));

  // Preparar desaparición
  historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));
  historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));

  // Eliminar el nodo de la cadena
  nodoActual.setNext(nodoActual.getNext().getNext());
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  // Paso 7: Mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Componentes de código con explicaciones detalladas para mejor visualización
export const PushCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{` nuevoNodo = new Nodo(valor)`}</pre>
      <pre className="text-white">{`if (cabeza === null) cabeza = nuevoNodo`}</pre>
      <pre className="text-white">{`nuevoNodo.setNext(cabeza)`}</pre>
      <pre className="text-white">{`cabeza = nuevoNodo`}</pre>
    </code>
  );
};

export const PopCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`if (cabeza === null) return error`}</pre>
      <pre className="text-white">{`valorEliminado = cabeza.getValue()`}</pre>
      <pre className="text-white">{`cabeza = cabeza.getNext()`}</pre>
    </code>
  );
};

export const SumergirCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`if (cabeza === null || cabeza.getNext() === null) return`}</pre>
      <pre className="text-white">{`nodoTope = cabeza`}</pre>
      <pre className="text-white">{`cabeza = cabeza.getNext()`}</pre>
      <pre className="text-white">{`while (nodoActual.getNext() !== null) nodoActual = nodoActual.getNext()`}</pre>
      <pre className="text-white">{`nodoTope.setNext(null); nodoActual.setNext(nodoTope)`}</pre>
    </code>
  );
};

export const InsertarCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`nuevoNodo = new Nodo(valor)`}</pre>
      <pre className="text-white">{`if (cabeza === null && posicion === 0) cabeza = nuevoNodo`}</pre>
      <pre className="text-white">{`while (temp !== null) { tamanoPila++; temp = temp.getNext() }`}</pre>
      <pre className="text-white">{`nuevoNodo.setNext(cabeza); cabeza = nuevoNodo`}</pre>
      <pre className="text-white">{`ultimo.setNext(nuevoNodo)`}</pre>
      <pre className="text-white">{`indiceDesdeTop = tamanoPila - posicion - 1`}</pre>
    </code>
  );
};

export const ExtraerCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`if (cabeza === null) return error`}</pre>
      <pre className="text-white">{`while (temp !== null) { tamanoPila++; temp = temp.getNext() }`}</pre>
      <pre className="text-white">{`if (posicion >= tamanoPila) return error`}</pre>
      <pre className="text-white">{`valorEliminado = cabeza.getValue(); cabeza = cabeza.getNext()`}</pre>
      <pre className="text-white">{`penúltimo.setNext(null)`}</pre>
      <pre className="text-white">{`indiceDesdeTop = tamanoPila - posicion - 1`}</pre>
      <pre className="text-white">{`valorEliminado = nodoActual.getNext().getValue()`}</pre>
      <pre className="text-white">{`nodoActual.setNext(nodoActual.getNext().getNext())`}</pre>
    </code>
  );
};
