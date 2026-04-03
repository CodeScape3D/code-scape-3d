class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  setNext(nextNode) {
    this.next = nextNode;
  }

  hasNext() {
    return this.next !== null;
  }

  toString() {
    return `Nodo(${this.value})`;
  }
}

export default Nodo;
