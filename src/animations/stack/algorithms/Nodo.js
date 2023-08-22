export default class Nodo {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  setNext(next) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}
