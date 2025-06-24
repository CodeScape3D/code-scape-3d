class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  // Getter para obtener el valor del nodo
  getValue() {
    return this.value;
  }

  // Setter para establecer el valor del nodo
  setValue(value) {
    this.value = value;
  }

  // Getter para obtener la referencia al siguiente nodo
  getNext() {
    return this.next;
  }

  // Setter para establecer la referencia al siguiente nodo
  setNext(nextNode) {
    this.next = nextNode;
  }

  // Método para verificar si el nodo tiene un siguiente
  hasNext() {
    return this.next !== null;
  }

  // Método toString para representación en string del nodo
  toString() {
    return `Nodo(${this.value})`;
  }
}

export default Nodo;
