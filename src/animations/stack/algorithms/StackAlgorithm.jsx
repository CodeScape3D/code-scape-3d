import { newTraceStack, moveInHistoryRecordStack } from "./helpers";
import Nodo from './Nodo';

export const Push = (head, value, isHead) => {
  const stepHistory = newTraceStack(head, isHead);

  const nodo = new Nodo(value);
  nodo.setNext(head);
  head = nodo;

  moveInHistoryRecordStack(stepHistory, head, [head.getValue()], [], (head.getNext() === null ? -1 : head.getNext().getValue()), 0);
  moveInHistoryRecordStack(stepHistory, head, [], [head.getValue()], head.getValue(), 1);

  return stepHistory;

};

export const Pop = (head, value, isHead) => {
  const stepHistory = newTraceStack(head, isHead);

  if (head.getNext() !== null) {
    const temp = head;
    moveInHistoryRecordStack(stepHistory, head, [head.getValue()], [], head.getValue(), 1);
    moveInHistoryRecordStack(stepHistory, head, [head.getValue()], [(head.getNext() === null ? -1 : head.getNext().getValue())], (head.getNext() === null ? -1 : head.getNext().getValue()), 2);
    head = temp.getNext();
    moveInHistoryRecordStack(stepHistory, head, [], [head.getValue()], head.getValue(), 3);
  } else {
    head = null;
    moveInHistoryRecordStack(stepHistory, head, [], [], -1, -1);
  }

  return stepHistory;
}

export const Sumergir = (head, value, isHead) => {
  const stepHistory = newTraceStack(head, isHead);
  
  // Si la pila está vacía o tiene un solo elemento, no hay nada que sumergir
  if (head === null || head.getNext() === null) {
    moveInHistoryRecordStack(stepHistory, head, [], [], (head ? head.getValue() : -1), 0);
    return stepHistory;
  }
  
  // Guardamos la referencia al nodo actual head que moveremos al final
  const oldHead = head;
  
  // Marcamos el nodo cabeza que se va a sumergir
  moveInHistoryRecordStack(stepHistory, head, [head.getValue()], [], head.getValue(), 0);
  
  // El nuevo head será el siguiente nodo
  const newHead = head.getNext();
  moveInHistoryRecordStack(stepHistory, head, [head.getValue()], [newHead.getValue()], head.getValue(), 1);
  
  // Ahora actualizamos head para que sea el segundo nodo
  head = newHead;
  
  // Encontrar el último nodo
  let current = head;
  let last = null;
  while (current !== null) {
    last = current;
    current = current.getNext();
  }
  
  // Marcar el último nodo que encontramos
  moveInHistoryRecordStack(stepHistory, head, [oldHead.getValue(), last.getValue()], [], newHead.getValue(), 2);
  
  // Desconectar el nodo original (oldHead) de la lista para evitar ciclos
  oldHead.setNext(null);
  
  // Conectar el último nodo con el nodo sumergido
  last.setNext(oldHead);
  moveInHistoryRecordStack(stepHistory, head, [], [last.getValue(), oldHead.getValue()], newHead.getValue(), 3);
  
  // Mostrar la nueva estructura con el head actualizado
  moveInHistoryRecordStack(stepHistory, head, [], [], head.getValue(), 4);
  
  return stepHistory;
};

export const PushCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`Nodo nodo = new Nodo(int)
nodo.next = head`}</pre>
      <pre>{`head = nodo`}</pre>
    </code>
  )
}

export const PopCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if empty, do nothing`}</pre>
      <pre>{`tmp = head`}</pre>
      <pre>{`head = tmp.next`}</pre>
      <pre>{`delete tmp`}</pre>
    </code>
  )
}

export const SumergirCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if empty or single node, do nothing`}</pre>
      <pre>{`newHead = head.next`}</pre>
      <pre>{`find last node in list`}</pre>
      <pre>{`last.next = head`}</pre>
      <pre>{`head.next = null`}</pre>
      <pre>{`head = newHead`}</pre>
    </code>
  )
  
}