
export const linkedListQuiz = {
    "name": "Listas enlazadas",
    "questions": [
        {
            "statement": "Estructura de datos que consiste en nodos enlazados, donde cada nodo apunta al siguiente nodo en la secuencia.",
            "question": "¿Qué es una lista enlazada?",
            "options": {
                "A": "Un conjunto desordenado de elementos.",
                "B": "Una estructura de datos estática.",
                "C": "Una estructura de datos que solo permite acceso al último elemento.",
                "D": "Estructura de datos que consiste en nodos enlazados, donde cada nodo apunta al siguiente nodo en la secuencia."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"

        },
        {
            "statement": "¿Cuál es la ventaja principal de las listas enlazadas sobre los arrays?",
            "question": "Ventaja principal de las listas enlazadas",
            "options": {
                "A": "Ocupan menos espacio en memoria.",
                "B": "Ofrecen acceso aleatorio más eficiente.",
                "C": "Son más fáciles de implementar.",
                "D": "Pueden crecer dinámicamente sin reubicación."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "Un nodo en una lista enlazada consta de dos campos. ¿Cuáles son?",
            "question": "Campos de un nodo en una lista enlazada",
            "options": {
                "A": "Índice y valor.",
                "B": "Valor y enlace al nodo anterior.",
                "C": "Valor y enlace al nodo siguiente.",
                "D": "Posición y valor."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "En una lista enlazada doblemente enlazada, ¿cada nodo tiene enlaces a cuántos otros nodos?",
            "question": "Enlaces en una lista enlazada doblemente enlazada",
            "options": {
                "A": "Ningún enlace.",
                "B": "Un enlace al nodo siguiente.",
                "C": "Un enlace al nodo anterior.",
                "D": "Un enlace al nodo siguiente y otro al nodo anterior."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la complejidad típica para insertar un elemento al principio de una lista enlazada?",
            "question": "Complejidad de inserción al principio de una lista enlazada",
            "options": {
                "A": "O(1)",
                "B": "O(n)",
                "C": "O(log n)",
                "D": "Depende del tamaño de la lista."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        }
    ]
}

export const sortingMethodsQuiz = {
    "name": "Métodos de ordenamiento",
    "questions": [
        {
            "statement": "Método de ordenamiento que compara pares de elementos adyacentes y los intercambia si están en el orden incorrecto.",
            "question": "¿Qué es el método de ordenamiento de burbuja?",
            "options": {
                "A": "Ordena dividiendo repetidamente la lista en sublistas más pequeñas.",
                "B": "Ordena encontrando el mínimo elemento y colocándolo al principio.",
                "C": "Ordena comparando pares de elementos adyacentes y ajustándolos si están en el orden incorrecto.",
                "D": "Ordena dividiendo la lista en dos subconjuntos y ordenándolos por separado."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la complejidad promedio del algoritmo de ordenamiento de burbuja?",
            "question": "Complejidad promedio del ordenamiento de burbuja",
            "options": {
                "A": "O(1)",
                "B": "O(n)",
                "C": "O(n log n)",
                "D": "O(n^2)"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "Método de ordenamiento que divide repetidamente la lista en sublistas más pequeñas y luego combina las sublistas ordenadas.",
            "question": "¿En qué consiste el método de ordenamiento merge sort?",
            "options": {
                "A": "Divide la lista en dos subconjuntos y ordena cada subconjunto de manera independiente.",
                "B": "Encuentra el elemento mínimo y lo coloca al principio de la lista.",
                "C": "Compara elementos adyacentes y los intercambia si están en el orden incorrecto.",
                "D": "Divide repetidamente la lista en sublistas más pequeñas y combina las sublistas ordenadas."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la principal ventaja del merge sort sobre otros métodos de ordenamiento?",
            "question": "Ventaja del merge sort",
            "options": {
                "A": "Tiene una complejidad de tiempo lineal.",
                "B": "Requiere menos espacio en memoria.",
                "C": "Es más fácil de implementar.",
                "D": "Siempre tiene un tiempo de ejecución constante."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "Método de ordenamiento que selecciona repetidamente el elemento mínimo de la lista restante y lo coloca al principio.",
            "question": "¿Qué es el método de ordenamiento selection sort?",
            "options": {
                "A": "Divide la lista en subconjuntos y los ordena de manera independiente.",
                "B": "Ordena comparando pares de elementos adyacentes y ajustándolos si están en el orden incorrecto.",
                "C": "Selecciona repetidamente el elemento máximo y lo coloca al final de la lista.",
                "D": "Selecciona repetidamente el elemento mínimo y lo coloca al principio de la lista."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        }
    ]
}

export const searchMethodsQuiz = {
    "name": "Métodos de búsqueda",
    "questions": [
        {
            "statement": "Método de búsqueda que recorre la lista desde el principio hasta encontrar el elemento buscado.",
            "question": "¿Qué es la búsqueda lineal?",
            "options": {
                "A": "Recorre la lista de manera aleatoria.",
                "B": "Recorre la lista de atrás hacia adelante.",
                "C": "Recorre la lista desde el principio hasta encontrar el elemento buscado.",
                "D": "Divide la lista en sublistas para buscar de manera más eficiente."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la complejidad promedio de la búsqueda lineal en una lista desordenada?",
            "question": "Complejidad promedio de la búsqueda lineal",
            "options": {
                "A": "O(1)",
                "B": "O(n)",
                "C": "O(n log n)",
                "D": "O(n^2)"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "Método de búsqueda que divide repetidamente la lista en dos subconjuntos y determina en cuál de ellos puede estar el elemento buscado.",
            "question": "¿En qué consiste la búsqueda binaria?",
            "options": {
                "A": "Recorre la lista desde el principio hasta encontrar el elemento buscado.",
                "B": "Compara pares de elementos adyacentes y ajusta si están en el orden incorrecto.",
                "C": "Divide repetidamente la lista en dos subconjuntos y determina en cuál de ellos puede estar el elemento buscado.",
                "D": "Selecciona repetidamente el elemento máximo y lo coloca al final de la lista."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la principal ventaja de la búsqueda binaria sobre la búsqueda lineal?",
            "question": "Ventaja de la búsqueda binaria",
            "options": {
                "A": "Siempre encuentra el elemento en tiempo constante.",
                "B": "No requiere que la lista esté ordenada.",
                "C": "Tiene una complejidad promedio más baja.",
                "D": "Es más fácil de implementar."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "Método de búsqueda que utiliza una función de hash para encontrar la ubicación del elemento.",
            "question": "¿Qué es la búsqueda por hashing?",
            "options": {
                "A": "Compara elementos adyacentes y los intercambia si están en el orden incorrecto.",
                "B": "Recorre la lista desde el principio hasta encontrar el elemento buscado.",
                "C": "Utiliza una función de hash para encontrar la ubicación del elemento.",
                "D": "Selecciona repetidamente el elemento mínimo y lo coloca al principio de la lista."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "En la búsqueda por hashing, ¿qué es una colisión?",
            "question": "Colisión en búsqueda por hashing",
            "options": {
                "A": "Cuando dos elementos son iguales.",
                "B": "Cuando la función de hash no encuentra el elemento.",
                "C": "Cuando varios elementos tienen la misma ubicación calculada por la función de hash.",
                "D": "Cuando el elemento no se encuentra en la lista."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "Método de búsqueda que utiliza la propiedad de que los elementos están ordenados para reducir el espacio de búsqueda a la mitad.",
            "question": "¿En qué consiste la búsqueda interpolada?",
            "options": {
                "A": "Compara pares de elementos adyacentes y ajusta si están en el orden incorrecto.",
                "B": "Utiliza una función de interpolación para encontrar la ubicación del elemento.",
                "C": "Recorre la lista desde el principio hasta encontrar el elemento buscado.",
                "D": "Divide repetidamente la lista en dos subconjuntos y determina en cuál de ellos puede estar el elemento buscado."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la principal limitación de la búsqueda interpolada?",
            "question": "Limitación de la búsqueda interpolada",
            "options": {
                "A": "Requiere que la lista esté ordenada.",
                "B": "No funciona con elementos numéricos.",
                "C": "Es más lenta que otros métodos de búsqueda.",
                "D": "Solo puede utilizarse en listas pequeñas."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        }
    ]
}

export const binaryTreeQuiz = {
    "name": "Árboles Binarios",
    "questions": [
        {
            "statement": "¿Qué es un árbol binario?",
            "question": "¿Cuál de las siguientes opciones describe mejor un árbol binario?",
            "options": {
                "A": "Un árbol con tres hijos en cada nodo.",
                "B": "Un árbol con dos hijos en cada nodo.",
                "C": "Un árbol con un solo hijo en cada nodo.",
                "D": "Un árbol con muchos hijos en cada nodo."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué es un nodo hoja?",
            "question": "En el contexto de un árbol binario, ¿qué es un nodo hoja?",
            "options": {
                "A": "Un nodo que tiene solo un hijo.",
                "B": "Un nodo que no tiene hijos.",
                "C": "Un nodo que tiene dos hijos.",
                "D": "Un nodo que es la raíz del árbol."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la altura de un árbol?",
            "question": "La altura de un árbol se define como...",
            "options": {
                "A": "El número de nodos en el árbol.",
                "B": "La longitud del camino más largo desde la raíz hasta un nodo hoja.",
                "C": "La suma de los valores de todos los nodos en el árbol.",
                "D": "El número promedio de hijos en cada nodo."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué es un árbol binario completo?",
            "question": "¿Cuál de las siguientes afirmaciones describe mejor a un árbol binario completo?",
            "options": {
                "A": "Un árbol en el que todos los nodos tienen dos hijos.",
                "B": "Un árbol en el que todos los nodos tienen un solo hijo.",
                "C": "Un árbol en el que todos los nodos tienen el mismo valor.",
                "D": "Un árbol en el que los nodos no tienen un orden específico."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cómo se llama un árbol binario en el que cada nodo puede tener como máximo dos hijos?",
            "question": "¿Cuál es el término que se utiliza para describir un árbol binario en el que cada nodo puede tener como máximo dos hijos?",
            "options": {
                "A": "Árbol binario ordenado.",
                "B": "Árbol binario balanceado.",
                "C": "Árbol binario completo.",
                "D": "Árbol binario regular."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué es la profundidad de un nodo?",
            "question": "En un árbol binario, ¿cómo se define la profundidad de un nodo?",
            "options": {
                "A": "La distancia entre el nodo y la raíz del árbol.",
                "B": "El número de hijos que tiene el nodo.",
                "C": "La altura del nodo.",
                "D": "La suma de los valores de los nodos en el camino desde el nodo hasta la raíz."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué es un árbol binario de búsqueda?",
            "question": "¿Cuál de las siguientes opciones describe mejor un árbol binario de búsqueda?",
            "options": {
                "A": "Un árbol en el que todos los nodos tienen solo un hijo.",
                "B": "Un árbol en el que cada nodo tiene un valor mayor que sus hijos.",
                "C": "Un árbol en el que cada nodo tiene un valor menor que sus hijos.",
                "D": "Un árbol en el que cada nodo tiene dos hijos."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        }
    ]
}

export const stackQuiz = {
    "name": "Pilas",
    "questions": [
        {
            "statement": "¿Qué es una pila en programación?",
            "question": "¿Cuál de las siguientes opciones describe mejor una pila en el contexto de programación?",
            "options": {
                "A": "Una estructura de datos lineal con acceso aleatorio.",
                "B": "Una estructura de datos que sigue el principio LIFO.",
                "C": "Una estructura de datos que sigue el principio FIFO.",
                "D": "Una estructura de datos jerárquica."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué operaciones se pueden realizar en una pila?",
            "question": "Cuál de las siguientes opciones NO es una operación común en una pila?",
            "options": {
                "A": "Push (apilar)",
                "B": "Pop (desapilar)",
                "C": "Retrieve (recuperar)",
                "D": "Peek (observar)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cómo se llama el elemento que se encuentra en la parte superior de la pila?",
            "question": "En una pila, ¿cuál es el término que se utiliza para referirse al elemento que se encuentra en la parte superior?",
            "options": {
                "A": "Último elemento",
                "B": "Primero elemento",
                "C": "Tope de pila",
                "D": "Base de pila"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué sucede cuando se realiza la operación 'pop' en una pila vacía?",
            "question": "¿Cuál de las siguientes opciones describe mejor el resultado de realizar 'pop' en una pila vacía?",
            "options": {
                "A": "Se agrega un elemento al tope de la pila.",
                "B": "Se elimina el elemento en la base de la pila.",
                "C": "Se devuelve un valor especial para indicar que la pila está vacía.",
                "D": "Se reorganizan los elementos restantes en la pila."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Para qué se utiliza comúnmente una pila en programación?",
            "question": "¿Cuál de las siguientes opciones describe mejor un uso común de las pilas en programación?",
            "options": {
                "A": "Ordenar elementos de forma ascendente.",
                "B": "Realizar búsquedas eficientes en grandes conjuntos de datos.",
                "C": "Implementar estructuras de árbol.",
                "D": "Controlar llamadas a funciones y manejar historial de navegación."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué es una pila desbordada (stack overflow)?",
            "question": "En programación, ¿qué término se usa para describir la situación en la que una pila ha alcanzado su capacidad máxima?",
            "options": {
                "A": "Stack underflow",
                "B": "Stack overflow",
                "C": "Pila excedida",
                "D": "Pila completa"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la principal diferencia entre una pila y una cola?",
            "question": "En el contexto de estructuras de datos, ¿cuál es la principal diferencia entre una pila y una cola?",
            "options": {
                "A": "La pila sigue el principio FIFO, mientras que la cola sigue el principio LIFO.",
                "B": "La pila permite acceso aleatorio, mientras que la cola no.",
                "C": "La pila permite inserción y eliminación en ambos extremos, mientras que la cola solo permite en uno de los extremos.",
                "D": "La pila es una estructura lineal, mientras que la cola es una estructura jerárquica."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        }
    ]
}

export const queueQuiz = {
    "name": "Colas",
    "questions": [
        {
            "statement": "¿Qué es una cola en programación?",
            "question": "¿Cuál de las siguientes opciones describe mejor una cola en el contexto de programación?",
            "options": {
                "A": "Una estructura de datos lineal con acceso aleatorio.",
                "B": "Una estructura de datos que sigue el principio LIFO.",
                "C": "Una estructura de datos que sigue el principio FIFO.",
                "D": "Una estructura de datos jerárquica."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué operaciones se pueden realizar en una cola?",
            "question": "Cuál de las siguientes opciones NO es una operación común en una cola?",
            "options": {
                "A": "Enqueue (encolar)",
                "B": "Dequeue (desencolar)",
                "C": "Retrieve (recuperar)",
                "D": "Peek (observar)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cómo se llama el elemento que se encuentra al frente de la cola?",
            "question": "En una cola, ¿cuál es el término que se utiliza para referirse al elemento que se encuentra al frente?",
            "options": {
                "A": "Último elemento",
                "B": "Primero elemento",
                "C": "Tope de cola",
                "D": "Base de cola"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué sucede cuando se realiza la operación 'dequeue' en una cola vacía?",
            "question": "¿Cuál de las siguientes opciones describe mejor el resultado de realizar 'dequeue' en una cola vacía?",
            "options": {
                "A": "Se agrega un elemento al frente de la cola.",
                "B": "Se elimina el elemento en la base de la cola.",
                "C": "Se devuelve un valor especial para indicar que la cola está vacía.",
                "D": "Se reorganizan los elementos restantes en la cola."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Para qué se utiliza comúnmente una cola en programación?",
            "question": "¿Cuál de las siguientes opciones describe mejor un uso común de las colas en programación?",
            "options": {
                "A": "Ordenar elementos de forma descendente.",
                "B": "Realizar búsquedas eficientes en grandes conjuntos de datos.",
                "C": "Implementar estructuras de árbol.",
                "D": "Administrar tareas en orden de llegada."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Qué es una cola desbordada?",
            "question": "En programación, ¿qué término se usa para describir la situación en la que una cola ha alcanzado su capacidad máxima?",
            "options": {
                "A": "Queue underflow",
                "B": "Queue overflow",
                "C": "Cola excedida",
                "D": "Cola completa"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        },
        {
            "statement": "¿Cuál es la principal diferencia entre una cola y una pila?",
            "question": "En el contexto de estructuras de datos, ¿cuál es la principal diferencia entre una cola y una pila?",
            "options": {
                "A": "La cola sigue el principio FIFO, mientras que la pila sigue el principio LIFO.",
                "B": "La cola permite acceso aleatorio, mientras que la pila no.",
                "C": "La cola permite inserción y eliminación en ambos extremos, mientras que la pila solo permite en uno de los extremos.",
                "D": "La cola es una estructura lineal, mientras que la pila es una estructura jerárquica."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED"
        }
    ]
}
