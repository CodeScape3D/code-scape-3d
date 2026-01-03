class NodoDoble {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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

  getPrev() {
    return this.prev;
  }

  setPrev(prevNode) {
    this.prev = prevNode;
  }

  hasNext() {
    return this.next !== null;
  }

  hasPrev() {
    return this.prev !== null;
  }

  toString() {
    return `NodoDoble(${this.value})`;
  }
}

export default NodoDoble;
