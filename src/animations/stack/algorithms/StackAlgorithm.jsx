import { newTrace, moveInHistoryRecord } from "./helpers";
import Nodo from './Nodo';

export const Push = (head, value, isHead) => {
  const stepHistory = newTrace(head, isHead);

  const nodo = new Nodo(value);
  nodo.setNext(head);
  head = nodo;

  moveInHistoryRecord(stepHistory, head, [head.getValue()], [], (head.getNext() === null ? -1 : head.getNext().getValue()), 0);
  moveInHistoryRecord(stepHistory, head, [], [head.getValue()], head.getValue(), 1);

  return stepHistory;

};

export const Pop = (head, value, isHead) => {
  const stepHistory = newTrace(head, isHead);

  if (head.getNext() !== null) {
    const temp = head;
    moveInHistoryRecord(stepHistory, head, [head.getValue()], [], head.getValue(), 1);
    moveInHistoryRecord(stepHistory, head, [head.getValue()], [(head.getNext() === null ? -1 : head.getNext().getValue())], (head.getNext() === null ? -1 : head.getNext().getValue()), 2);
    head = temp.getNext();
    moveInHistoryRecord(stepHistory, head, [], [head.getValue()], head.getValue(), 3);
  } else {
    head = null;
    moveInHistoryRecord(stepHistory, head, [], [], -1, -1);
  }

  return stepHistory;
}

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