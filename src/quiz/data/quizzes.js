
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

