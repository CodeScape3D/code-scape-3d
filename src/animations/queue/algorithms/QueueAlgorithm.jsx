import { newTraceQueue, moveInHistoryRecordQueue } from './helpers';
import Nodo from './Nodo';

// Copiar la cola completa
const copiarCola = head => {
  if (head === null) return null;

  let nuevaCabeza = new Nodo(head.getValue());
  let actualNuevo = nuevaCabeza;
  let actualViejo = head.getNext();

  while (actualViejo !== null) {
    actualNuevo.setNext(new Nodo(actualViejo.getValue()));
    actualNuevo = actualNuevo.getNext();
    actualViejo = actualViejo.getNext();
  }

  return nuevaCabeza;
};

const crearRegistro = (
  head,
  primerConjunto = [],
  segundoConjunto = [],
  indiceActual = 0,
  nodoAEliminar = null
) => {
  const highlightedNode =
    primerConjunto && primerConjunto.length > 0 ? primerConjunto[0] : null;
  const pointer =
    segundoConjunto && segundoConjunto.length > 0 ? segundoConjunto[0] : null;

  return {
    head: copiarCola(head),
    firstSet: [...primerConjunto],
    secondSet: [...segundoConjunto],
    isHead: head ? head.getValue() : -1,
    currentIndex: indiceActual,
    highlightedNode,
    pointer,
    deletingNode: nodoAEliminar,
  };
};

// Enqueue: añadir al final (tail)
export const Enqueue = (head, valor) => {
  const historialPasos = [];

  // Línea 0: creación del nuevo nodo
  historialPasos.push(crearRegistro(head, [], [], 0));

  const nuevoNodo = new Nodo(valor);
  historialPasos.push(crearRegistro(head, [valor], [], 0));

  if (head === null) {
    // Línea 1: head === null
    head = nuevoNodo;
    historialPasos.push(crearRegistro(head, [], [], 1));
  } else {
    // Línea 2: else {
    let actual = head;
    historialPasos.push(crearRegistro(head, [], [actual.getValue()], 2));

    // Línea 5: recorrido de la cola
    while (actual.getNext() !== null) {
      actual = actual.getNext();
      historialPasos.push(crearRegistro(head, [valor], [actual.getValue()], 5));
    }

    // Línea 6: enlazar al final
    actual.setNext(nuevoNodo);
    historialPasos.push(crearRegistro(head, [], [nuevoNodo.getValue()], 6));
  }

  // Línea 7: cierre
  historialPasos.push(crearRegistro(head, [], [], 7));

  return { historialPasos, nuevaCabeza: head };
};

// Dequeue: eliminar del frente (head)
export const Dequeue = cabeza => {
  const historialPasos = [];

  // Línea 0: if (head === null)
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  if (cabeza === null) {
    // Se mantiene en la línea 0 (retorno por vacío)
    historialPasos.push(crearRegistro(cabeza, [], [], 0));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Línea 1: valor = head.getValue() - resaltar el nodo en rojo
  const valorEliminado = cabeza.getValue();
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));

  // Mantener el resaltado en rojo (sin desaparecer aún) - varios pasos
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));

  // AHORA SÍ: Marcar el nodo para animación de desaparición (sin el resaltado rojo pulsante)
  historialPasos.push(crearRegistro(cabeza, [], [], 1, valorEliminado));

  // Mantener la animación de desaparición
  historialPasos.push(crearRegistro(cabeza, [], [], 1, valorEliminado));
  historialPasos.push(crearRegistro(cabeza, [], [], 1, valorEliminado));

  // Línea 2: head = head.getNext() - ahora sí eliminar
  cabeza = cabeza.getNext();
  historialPasos.push(crearRegistro(cabeza, [], [], 2));

  // Última línea (fin): mantenerse en la 2 para mostrar estado final
  historialPasos.push(crearRegistro(cabeza, [], [], 2));

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// EliminarFinal: eliminar el último nodo (tail)
export const EliminarFinal = cabeza => {
  const historialPasos = [];

  // Línea 0: if (head === null)
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  if (cabeza === null) {
    // Cola vacía
    historialPasos.push(crearRegistro(cabeza, [], [], 0));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Línea 1: if (head.getNext() === null) - solo un elemento
  if (cabeza.getNext() === null) {
    const valorEliminado = cabeza.getValue();
    // Resaltar en rojo el único nodo
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));
    historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 1));
    // Marcar para desaparecer
    historialPasos.push(crearRegistro(cabeza, [], [], 1, valorEliminado));
    historialPasos.push(crearRegistro(cabeza, [], [], 1, valorEliminado));
    historialPasos.push(crearRegistro(cabeza, [], [], 1, valorEliminado));
    // Eliminar
    cabeza = null;
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    historialPasos.push(crearRegistro(cabeza, [], [], 4));
    return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
  }

  // Línea 2: actual = head
  let nodoActual = cabeza;
  historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 2));

  // Línea 3: recorrer hasta el penúltimo nodo
  while (nodoActual.getNext() && nodoActual.getNext().getNext() !== null) {
    nodoActual = nodoActual.getNext();
    historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 3));
  }

  // Encontrar el último nodo y resaltarlo en rojo
  const valorEliminado = nodoActual.getNext().getValue();
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));

  // Mantener el resaltado en rojo (sin desaparecer aún) - varios pasos
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 3));

  // AHORA SÍ: Marcar el nodo para animación de desaparición
  historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));

  // Mantener la animación de desaparición
  historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));
  historialPasos.push(crearRegistro(cabeza, [], [], 3, valorEliminado));

  // Línea 4: actual.setNext(null) - eliminar el último nodo
  nodoActual.setNext(null);
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  // Última línea (fin)
  historialPasos.push(crearRegistro(cabeza, [], [], 4));

  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

// Insertar: insertar en posición (0 = frente)
export const Insertar = (cabeza, valor, posicion) => {
  const historialPasos = [];

  // Línea 0: creación del nodo
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  const nuevoNodo = new Nodo(valor);
  historialPasos.push(crearRegistro(cabeza, [valor], [], 0));

  if (cabeza === null) {
    if (posicion === 0) {
      // Línea 1: head === null && posicion === 0
      cabeza = nuevoNodo;
      historialPasos.push(crearRegistro(cabeza, [], [], 1));
      historialPasos.push(crearRegistro(cabeza, [], [], 9));
      return { historialPasos, nuevaCabeza: cabeza };
    } else {
      // Línea 1: condición fallida -> return error
      historialPasos.push(crearRegistro(cabeza, [], [], 1));
      return { historialPasos, nuevaCabeza: cabeza };
    }
  }

  // calcular tamaño
  let tamano = 0;
  let temp = cabeza;
  while (temp !== null) {
    tamano++;
    temp = temp.getNext();
  }

  if (posicion >= tamano) {
    // insertar al final (enqueue)
    let actual = cabeza;
    while (actual.getNext() !== null) actual = actual.getNext();
    actual.setNext(nuevoNodo);
    historialPasos.push(crearRegistro(cabeza, [], [nuevoNodo.getValue()], 7));
    historialPasos.push(crearRegistro(cabeza, [], [], 9));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  if (posicion === 0) {
    // insertar al frente (dequeue-front insertion)
    nuevoNodo.setNext(cabeza);
    cabeza = nuevoNodo;
    historialPasos.push(crearRegistro(cabeza, [], [], 2));
    historialPasos.push(crearRegistro(cabeza, [], [], 9));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // insertar en posición intermedia
  let indice = 0;
  let nodoActual = cabeza;

  // Línea 4: actual = head
  historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 4));

  // Línea 5/6: for y avance
  while (indice < posicion - 1 && nodoActual.getNext() !== null) {
    nodoActual = nodoActual.getNext();
    indice++;
    historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 6));
  }

  // Línea 7: nuevoNodo.setNext(actual.getNext())
  nuevoNodo.setNext(nodoActual.getNext());
  historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 7));

  // Línea 8: actual.setNext(nuevoNodo)
  nodoActual.setNext(nuevoNodo);
  historialPasos.push(crearRegistro(cabeza, [], [nuevoNodo.getValue()], 8));

  // Línea 9: cierre
  historialPasos.push(crearRegistro(cabeza, [], [], 9));

  return { historialPasos, nuevaCabeza: cabeza };
};

// Extraer: eliminar en posición específica (índices alineados con ExtraerCode)
export const Extraer = (cabeza, posicion) => {
  const historialPasos = [];

  // Línea 0: chequeo de cola vacía
  historialPasos.push(crearRegistro(cabeza, [], [], 0));

  if (cabeza === null) {
    historialPasos.push(crearRegistro(cabeza, [], [], 0));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  let tamano = 0;
  let temp = cabeza;
  while (temp !== null) {
    tamano++;
    temp = temp.getNext();
  }

  // Línea 1: posición fuera de rango
  if (posicion >= tamano) {
    historialPasos.push(crearRegistro(cabeza, [], [], 1));
    return { historialPasos, nuevaCabeza: cabeza };
  }

  // Eliminar al frente (línea 2)
  if (posicion === 0) {
    const valor = cabeza.getValue();
    // Resaltar en rojo el nodo a eliminar
    historialPasos.push(crearRegistro(cabeza, [], [valor], 2));
    // Mantener el resaltado en rojo (sin desaparecer aún) - varios pasos
    historialPasos.push(crearRegistro(cabeza, [], [valor], 2));
    historialPasos.push(crearRegistro(cabeza, [], [valor], 2));
    historialPasos.push(crearRegistro(cabeza, [], [valor], 2));
    // AHORA SÍ: Marcar para animación de desaparición (sin el resaltado rojo pulsante)
    historialPasos.push(crearRegistro(cabeza, [], [], 2, valor));
    // Mantener la animación de desaparición
    historialPasos.push(crearRegistro(cabeza, [], [], 2, valor));
    historialPasos.push(crearRegistro(cabeza, [], [], 2, valor));
    // Ahora sí eliminar el nodo
    cabeza = cabeza.getNext();
    historialPasos.push(crearRegistro(cabeza, [], [], 2));
    historialPasos.push(crearRegistro(cabeza, [], [], 9));
    return { historialPasos, nuevaCabeza: cabeza, valorEliminado: valor };
  }

  // Eliminar intermedio
  let indice = 0;
  let nodoActual = cabeza;

  // Línea 4: inicializar "actual" - resaltar en rojo
  historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 4));

  // Línea 5: recorrer hasta el nodo previo - resaltar cada nodo en rojo
  while (indice < posicion - 1) {
    nodoActual = nodoActual.getNext();
    indice++;
    historialPasos.push(crearRegistro(cabeza, [], [nodoActual.getValue()], 5));
  }

  // Línea 7: encontrar el nodo a eliminar y resaltarlo en rojo
  const valorEliminado = nodoActual.getNext().getValue();
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 7));

  // Mantener el resaltado en rojo (sin desaparecer aún) - varios pasos
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 7));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 7));
  historialPasos.push(crearRegistro(cabeza, [], [valorEliminado], 7));

  // AHORA SÍ: Marcar el nodo para animación de desaparición (el nodo aún existe en la cola)
  // Ya NO lo ponemos en secondSet para que no tenga el efecto de pulso rojo
  historialPasos.push(crearRegistro(cabeza, [], [], 7, valorEliminado));

  // Mantener la animación de desaparición
  historialPasos.push(crearRegistro(cabeza, [], [], 7, valorEliminado));
  historialPasos.push(crearRegistro(cabeza, [], [], 7, valorEliminado));

  // Línea 8: reasignar puntero para eliminar - ahora sí eliminamos el nodo
  nodoActual.setNext(nodoActual.getNext().getNext());
  historialPasos.push(crearRegistro(cabeza, [], [], 8));

  // Línea 9: fin
  historialPasos.push(crearRegistro(cabeza, [], [], 9));
  return { historialPasos, nuevaCabeza: cabeza, valorEliminado };
};

export const EnqueueCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`nuevoNodo = new Nodo(valor)`}</pre>
      <pre className="text-white">{`if (head === null) head = nuevoNodo`}</pre>
      <pre className="text-white">{`else {`}</pre>
      <pre className="text-white">{`  actual = head`}</pre>
      <pre className="text-white">{`  while (actual.getNext() !== null)`}</pre>
      <pre className="text-white">{`    actual = actual.getNext()`}</pre>
      <pre className="text-white">{`  actual.setNext(nuevoNodo)`}</pre>
      <pre className="text-white">{`}`}</pre>
    </code>
  );
};

export const DequeueCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`if (head === null) return error`}</pre>
      <pre className="text-white">{`valor = head.getValue()`}</pre>
      <pre className="text-white">{`head = head.getNext()`}</pre>
    </code>
  );
};

export const EliminarFinalCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`if (head === null) return error`}</pre>
      <pre className="text-white">{`if (head.getNext() === null) { head = null; return }`}</pre>
      <pre className="text-white">{`actual = head`}</pre>
      <pre className="text-white">{`while (actual.getNext().getNext() !== null)`}</pre>
      <pre className="text-white">{`  actual = actual.getNext()`}</pre>
      <pre className="text-white">{`actual.setNext(null)`}</pre>
    </code>
  );
};

export const InsertarCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`nuevoNodo = new Nodo(valor)`}</pre>
      <pre className="text-white">{`if (head === null && posicion === 0) head = nuevoNodo`}</pre>
      <pre className="text-white">{`else if (posicion === 0) { nuevoNodo.setNext(head); head = nuevoNodo }`}</pre>
      <pre className="text-white">{`else {`}</pre>
      <pre className="text-white">{`  actual = head`}</pre>
      <pre className="text-white">{`  for (i = 0; i < posicion - 1; i++)`}</pre>
      <pre className="text-white">{`    actual = actual.getNext()`}</pre>
      <pre className="text-white">{`  nuevoNodo.setNext(actual.getNext())`}</pre>
      <pre className="text-white">{`  actual.setNext(nuevoNodo)`}</pre>
      <pre className="text-white">{`}`}</pre>
    </code>
  );
};

export const ExtraerCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre className="text-white">{`if (head === null) return error`}</pre>
      <pre className="text-white">{`if (posicion >= tamano) return error`}</pre>
      <pre className="text-white">{`if (posicion === 0) head = head.getNext()`}</pre>
      <pre className="text-white">{`else {`}</pre>
      <pre className="text-white">{`  actual = head`}</pre>
      <pre className="text-white">{`  for (i = 0; i < posicion - 1; i++)`}</pre>
      <pre className="text-white">{`    actual = actual.getNext()`}</pre>
      <pre className="text-white">{`  eliminado = actual.getNext()`}</pre>
      <pre className="text-white">{`  actual.setNext(actual.getNext().getNext())`}</pre>
      <pre className="text-white">{`}`}</pre>
    </code>
  );
};
