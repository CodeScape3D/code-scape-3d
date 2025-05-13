import { newTraceList, moveInHistoryRecordList } from "./helpers";
import Nodo from "./Nodo";

export const InsertHead = (head, value, isHead) => {
  const stepHistory = newTraceList(head, isHead);

  const nodo = new Nodo(value);
  nodo.setNext(head);
  head = nodo;

  moveInHistoryRecordList(
    stepHistory,
    head,
    [head.getValue()],
    [],
    head.getNext() === null ? -1 : head.getNext().getValue(),
    0
  );
  moveInHistoryRecordList(
    stepHistory,
    head,
    [],
    [head.getValue()],
    head.getValue(),
    1
  );

  return stepHistory;
};

export const InsertTail = (head, value, isTail) => {
  const stepHistory = newTraceList(head, isTail);

  const nodo = new Nodo(value);
  if (head === null) {
    head = nodo;
    moveInHistoryRecordList(
      stepHistory,
      head,
      [head.getValue()],
      [],
      head.getValue(),
      0
    );
    return stepHistory;
  }

  let current = head;
  while (current.getNext() !== null) {
    current = current.getNext();
    moveInHistoryRecordList(
      stepHistory,
      current,
      [],
      [],
      current.getValue(),
      0
    );
  }

  current.setNext(nodo);
  moveInHistoryRecordList(
    stepHistory,
    current,
    [],
    [nodo.getValue()],
    nodo.getValue(),
    1
  );

  return stepHistory;
};

export const DeleteHead = (head, value, isHead) => {
  const stepHistory = newTraceList(head, isHead);

  if (head === null) {
    return stepHistory;
  }

  const removedValue = head.getValue();
  head = head.getNext();

  moveInHistoryRecordList(
    stepHistory,
    head,
    [],
    [removedValue],
    head === null ? -1 : head.getValue(),
    0
  );
  return stepHistory;
};

export const DeleteTail = (head, value, isTail) => {
  const stepHistory = newTraceList(head, isTail);

  if (head === null || head.getNext() === null) {
    return DeleteHead(head, value, isTail); // If there's only one node, delete head
  }

  let current = head;
  while (current.getNext().getNext() !== null) {
    current = current.getNext();
    moveInHistoryRecordList(
      stepHistory,
      current,
      [],
      [],
      current.getValue(),
      0
    );
  }

  const removedValue = current.getNext().getValue();
  current.setNext(null);

  moveInHistoryRecordList(
    stepHistory,
    current,
    [],
    [removedValue],
    current.getValue(),
    1
  );

  return stepHistory;
};

export const DeleteElement = (head, value, isHead) => {
  const stepHistory = newTraceList(head, isHead);

  if (head === null) {
    return stepHistory;
  }

  if (head.getValue() === value) {
    return DeleteHead(head, value, isHead);
  }

  let current = head;
  while (current.getNext() !== null && current.getNext().getValue() !== value) {
    current = current.getNext();
    moveInHistoryRecordList(
      stepHistory,
      current,
      [],
      [],
      current.getValue(),
      0
    );
  }

  if (current.getNext() !== null) {
    const removedValue = current.getNext().getValue();
    current.setNext(current.getNext().getNext());
    moveInHistoryRecordList(
      stepHistory,
      current,
      [],
      [removedValue],
      current.getValue(),
      1
    );
  }

  return stepHistory;
};

export const InsertHeadCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`Nodo nodo = new Nodo(int)`}</pre>
      <pre>{`nodo.next = head`}</pre>
      <pre>{`head = nodo`}</pre>
    </code>
  );
};

export const InsertTailCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`Nodo nodo = new Nodo(int)`}</pre>
      <pre>{`Nodo current = head`}</pre>
      <pre>{`while(current.next != null)`}</pre>
      <pre>{`  current = current.next`}</pre>
      <pre>{`current.next = nodo`}</pre>
    </code>
  );
};

export const DeleteHeadCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if (head == null)`}</pre>
      <pre>{`  return`}</pre>
      <pre>{`head = head.next`}</pre>
    </code>
  );
};

export const DeleteTailCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if (head == null || head.next == null)`}</pre>
      <pre>{`  head = null`}</pre>
      <pre>{`Nodo current = head`}</pre>
      <pre>{`while(current.next.next != null)`}</pre>
      <pre>{`  current = current.next`}</pre>
      <pre>{`current.next = null`}</pre>
    </code>
  );
};

export const DeleteElementCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`if (head == null)`}</pre>
      <pre>{`  return`}</pre>
      <pre>{`if (head.value == value)`}</pre>
      <pre>{`  head = head.next`}</pre>
      <pre>{`Nodo current = head`}</pre>
      <pre>{`while (current.next != null && current.next.value != value)`}</pre>
      <pre>{`  current = current.next`}</pre>
      <pre>{`if (current.next != null)`}</pre>
      <pre>{`  current.next = current.next.next`}</pre>
    </code>
  );
};
