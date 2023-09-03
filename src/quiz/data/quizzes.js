
export const linkedListQuiz = {
    "name": "Listas Enlazadas",
    "questions": [
        {
            "statement": "¿Cuál es la definición adecuada de una lista enlazada?",
            "question": "¿Qué se entiende por una lista enlazada?",
            "options": {
                "A": "Una colección ordenada de elementos con un tamaño fijo.",
                "B": "Una colección desordenada de elementos con un tamaño variable.",
                "C": "Una colección ordenada de elementos con un tamaño variable.",
                "D": "Una colección desordenada de elementos con un tamaño fijo."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una lista enlazada es una estructura de datos que consiste en una serie de nodos, donde cada nodo contiene un valor y una referencia al siguiente nodo."
        },
        {
            "statement": "¿Qué es un nodo en una lista enlazada?",
            "question": "En el contexto de listas enlazadas, ¿qué es un nodo?",
            "options": {
                "A": "Un enlace entre dos elementos en la lista.",
                "B": "El primer elemento de la lista.",
                "C": "Un valor almacenado en la lista.",
                "D": "Un elemento de la lista que contiene un valor y una referencia al siguiente elemento."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Un nodo en una lista enlazada es un elemento que contiene un valor y un puntero/referencia al siguiente nodo en la lista."
        },
        {
            "statement": "¿Cuál es la ventaja principal de una lista enlazada sobre un array?",
            "question": "En comparación con un array, ¿cuál es la principal ventaja de una lista enlazada?",
            "options": {
                "A": "Las listas enlazadas pueden almacenar un número ilimitado de elementos.",
                "B": "Las listas enlazadas tienen acceso más rápido a elementos.",
                "C": "Las listas enlazadas ocupan menos espacio en memoria.",
                "D": "Las listas enlazadas pueden insertar y eliminar elementos eficientemente en cualquier posición."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una ventaja clave de las listas enlazadas es su capacidad para insertar y eliminar elementos eficientemente en cualquier posición, mientras que los arrays pueden ser menos eficientes en ese aspecto debido a la necesidad de reorganizar elementos."
        },
        {
            "statement": "En una lista enlazada doblemente enlazada, cada nodo tiene referencias a:",
            "question": "En una lista enlazada doblemente enlazada, ¿a qué elementos apunta cada nodo?",
            "options": {
                "A": "Al nodo anterior y al siguiente nodo.",
                "B": "Solo al nodo anterior.",
                "C": "Solo al nodo siguiente.",
                "D": "Al primer y último nodo de la lista."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En una lista enlazada doblemente enlazada, cada nodo tiene referencias tanto al nodo anterior como al siguiente."
        },
        {
            "statement": "¿Qué es la operación de 'eliminar' en una lista enlazada?",
            "question": "En una lista enlazada, ¿qué implica la operación de 'eliminar' un nodo?",
            "options": {
                "A": "Eliminar el valor almacenado en el nodo.",
                "B": "Desconectar el nodo de la lista y liberar la memoria.",
                "C": "Mover el nodo al final de la lista.",
                "D": "Duplicar el nodo y sus datos."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La operación de 'eliminar' en una lista enlazada implica desconectar el nodo de la lista y liberar la memoria asociada al nodo eliminado."
        },
        {
            "statement": "¿Cuál es la complejidad temporal promedio para buscar un elemento en una lista enlazada no ordenada?",
            "question": "En una lista enlazada no ordenada, ¿cuál es la complejidad temporal promedio de la operación de búsqueda?",
            "options": {
                "A": "O(1)",
                "B": "O(n)",
                "C": "O(log n)",
                "D": "Depende del tamaño de la lista."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En una lista enlazada no ordenada, la complejidad promedio de búsqueda es O(n), ya que en el peor caso tendrías que recorrer toda la lista para encontrar el elemento buscado."
        },
        {
            "statement": "¿Qué es la 'circularidad' en una lista enlazada circular?",
            "question": "En el contexto de listas enlazadas circulares, ¿qué significa 'circularidad'?",
            "options": {
                "A": "Cada nodo apunta a todos los demás nodos.",
                "B": "La lista se repite infinitamente.",
                "C": "El último nodo apunta al primer nodo.",
                "D": "Los nodos están organizados en una forma circular."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En una lista enlazada circular, el último nodo apunta de nuevo al primer nodo, creando así una estructura circular."
        },
        {
            "statement": "¿Qué es la 'cabeza' en una lista enlazada?",
            "question": "En una lista enlazada, ¿a qué hace referencia el término 'cabeza'?",
            "options": {
                "A": "El primer nodo de la lista.",
                "B": "El último nodo de la lista.",
                "C": "El nodo que contiene el valor más grande.",
                "D": "El nodo que contiene el valor más pequeño."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La 'cabeza' de una lista enlazada se refiere al primer nodo de la lista, es el punto de entrada principal para acceder a los elementos de la lista."
        }
    ]
}

export const sortingFundamentalsQuiz = { 
    "name": "Fundamentos de métodos de ordenamiento",
    "questions": [
        {
            "statement": "¿Qué es el 'ordenamiento' en programación?",
            "question": "¿Qué es el 'ordenamiento' en programación?",
            "options": { 
                "A": "Un proceso para organizar datos en una base de datos",
                "B": "Un método para buscar elementos en una lista",
                "C": "Una técnica para reorganizar elementos en una secuencia específica",
                "D": "Un algoritmo para generar números aleatorios."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": ": El ordenamiento en programación se refiere a la acción de reorganizar los elementos de una colección, como una lista o un arreglo usando una secuencia en particular, bien puede ser de manera ascendente, descendente o en un criterio definido"
        },
        {
            "statement": " ¿Cuál de los siguientes métodos de ordenamiento tiene una complejidad promedio de tiempo de O(n log n)?",
            "question": " ¿Cuál de los siguientes métodos de ordenamiento tiene una complejidad promedio de tiempo de O(n log n)?",
            "options": { 
                "A": "Burbuja (Bubble Sort)",
                "B": "Inserción (Insertion Sort)",
                "C": "Selección (Selection Sort)",
                "D": "Quicksort"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Tanto burbuja, selección e inserción tienen una complejidad de: O(n^2) y Quicksort tiene una complejidad de  O(n log n)"
        },
        {
            "statement": "En el contexto de los métodos de ordenamiento, ¿qué es un 'elemento pivote'?",
            "question": "En el contexto de los métodos de ordenamiento, ¿qué es un 'elemento pivote'?",
            "options": { 
                "A": "El primer elemento en la lista",
                "B": "El elemento más pequeño en la lista",
                "C": "Un elemento aleatorio en la lista",
                "D": "Un elemento utilizado para dividir una lista en subconjuntos durante el proceso de ordenamiento."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "El pivote es aquel elemento que se selecciona del arreglo para tenerlo como referencia durante el ordenamiento, a su izquierda se dejan los elementos menores a este y a su derecha los elementos mayores a este."
        },
        {
            "statement": "¿Cuál de los siguientes enunciados es cierto sobre el 'ordenamiento estable' en algoritmos de ordenamiento?",
            "question": "¿Cuál de los siguientes enunciados es cierto sobre el 'ordenamiento estable' en algoritmos de ordenamiento?",
            "options": { 
                "A": "Los elementos se organizan en orden descendente",
                "B": "Los elementos iguales mantienen su orden relativo después del ordenamiento",
                "C": "Los elementos se reorganizan de forma aleatoria",
                "D": "Solo se pueden ordenar números enteros en un orden estable."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En otras palabras, si se tienen dos elementos con el mismo valor o clave en la lista original y se aplica un algoritmo de ordenamiento estable, después de ordenar la lista, estos dos elementos seguirán estando en el mismo orden relativo entre sí."
        },
        {
            "statement": "¿Cómo pueden los métodos de ordenamiento mejorar el rendimiento de un programa? ",
            "question": "¿Cómo pueden los métodos de ordenamiento mejorar el rendimiento de un programa? ",
            "options": { 
                "A": "Aceleran el proceso de inicio del programa",
                "B": "Reducen el consumo de energía del hardware",
                "C": "Disminuyen la cantidad de memoria RAM necesaria",
                "D": "Agilizan la búsqueda y clasificación de datos, lo que puede hacer que el programa sea más eficiente."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Cuando un programa necesita buscar o acceder a datos en una lista, como una lista de contactos en un teléfono, una lista de productos en una tienda en línea o cualquier otro conjunto de datos, tener esos datos ordenados adecuadamente puede hacer que la búsqueda sea mucho más rápida. Cuando los datos están ordenados, puedes utilizar técnicas de búsqueda eficientes, como la búsqueda binaria, que reduce drásticamente el número de comparaciones necesarias para encontrar un elemento específico en la lista. Esto hace que el programa sea más rápido y eficiente en términos de tiempo de ejecución."
        },
        {
            "statement": "¿Qué consideración es esencial al elegir un método de ordenamiento para una aplicación específica?",
            "question": "¿Qué consideración es esencial al elegir un método de ordenamiento para una aplicación específica?",
            "options": { 
                "A": "La popularidad del método en la comunidad de programadores",
                "B": "La complejidad del código fuente del método",
                "C": "El tipo de datos y el tamaño del conjunto que se va a ordenar",
                "D": "La cantidad de colores que se pueden aplicar al algoritmo"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La elección del método de ordenamiento correcto debe basarse principalmente en el tipo de datos y el tamaño del conjunto de datos que necesitas ordenar, ya que esto afectará directamente el rendimiento y la eficiencia de una aplicación."
        },
        {
            "statement": "El hecho de que la recursividad sea usada en lugar de la iteración permite:",
            "question": "El hecho de que la recursividad sea usada en lugar de la iteración permite:",
            "options": { 
                "A": "Soluciones elegantes y simples",
                "B": "Soluciones con menos código",
                "C": "Soluciones bien estructuradas y modulares a problemas complejos",
                "D": "Todas las anteriores"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Cuando se utiliza la recursión en lugar de la iteración en un programa, se pueden lograr todas las ventajas mencionadas en las opciones a, b y c:"
        }
    ]
}

export const bubbleSortQuiz = {
    "name": "Ordenamiento de Burbuja",
    "array": [5, 2, 8, 1, 3, 7, 4, 6],
    "questions": [
        {
            "statement": "Enunciado de la pregunta teórica 1",
            "question": "¿Cuál es la idea principal detrás del método de ordenamiento de burbuja?",
            "options": {
                "A": "Dividir y conquistar",
                "B": "Comparar y trocar",
                "C": "Intercambiar y combinar",
                "D": "Reemplazar y ordenar"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "En el método de ordenamiento de burbuja, los elementos adyacentes se comparan y se intercambian si están en el orden incorrecto."
        },
        {
            "statement": "Enunciado de la pregunta teórica 2",
            "question": "¿Cuál es la complejidad temporal promedio del método de ordenamiento de burbuja?",
            "options": {
                "A": "O(n)",
                "B": "O(n log n)",
                "C": "O(n^2)",
                "D": "O(log n)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "La complejidad temporal promedio del método de ordenamiento de burbuja es O(n^2), lo que lo hace ineficiente para listas grandes."
        },
        {
            "statement": "Enunciado de la pregunta teórica 4",
            "question": "¿Cuál es el mejor caso de complejidad temporal para el método de ordenamiento de burbuja?",
            "options": {
                "A": "O(n)",
                "B": "O(n log n)",
                "C": "O(n^2)",
                "D": "O(log n)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "El mejor caso de complejidad temporal para el método de ordenamiento de burbuja es O(n), que ocurre cuando la lista ya está ordenada y no se realizan intercambios en las iteraciones."
        },
        {
            "statement": "Enunciado de la pregunta teórica 3",
            "question": "¿Cuál es la principal desventaja del método de ordenamiento de burbuja?",
            "options": {
                "A": "Es difícil de implementar",
                "B": "Requiere mucho espacio de memoria",
                "C": "Es inestable para elementos iguales",
                "D": "Tiene una complejidad O(n log n)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "El método de ordenamiento de burbuja es inestable para elementos iguales, lo que significa que el orden relativo de elementos iguales podría cambiar después de la ordenación."
        },
        {
            "statement": "Enunciado de la pregunta práctica 2",
            "question": "Utilizando el método de ordenamiento de burbuja, ¿cuál sería el arreglo después de una iteración completa?",
            "options": {
                "A": "[2, 5, 1, 3, 7, 4, 6, 8]",
                "B": "[1, 2, 3, 4, 5, 6, 7, 8]",
                "C": "[5, 2, 8, 1, 3, 7, 4, 6]",
                "D": "[8, 7, 6, 5, 4, 3, 2, 1]"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "En una iteración completa del método de ordenamiento de burbuja, se compara y troca cada par de elementos adyacentes, lo que resultaría en el arreglo [2, 5, 1, 3, 7, 4, 6, 8].",
            "stepToHistory": 15
        },
        {
            "statement": "Enunciado de la pregunta práctica 3",
            "question": "Siguiendo el método de ordenamiento de burbuja, ¿cuántas iteraciones se necesitan para ordenar completamente el arreglo proporcionado?",
            "options": {
                "A": "6",
                "B": "7",
                "C": "8",
                "D": "5"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Para ordenar completamente el arreglo [5, 2, 8, 1, 3, 7, 4, 6] utilizando el método de ordenamiento de burbuja, se necesitan 7 iteraciones.",
            "stepToHistory": 0
        },
        {
            "statement": "Enunciado de la pregunta práctica 4",
            "question": "¿Cuál es el elemento más grande después de la primera iteración del método de ordenamiento de burbuja en el arreglo proporcionado?",
            "options": {
                "A": "5",
                "B": "8",
                "C": "1",
                "D": "2"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Después de la primera iteración, el elemento más grande, que estaba al final del arreglo, se movería a su posición correcta, que es la última.",
            "stepToHistory": 0
        },
        
    ]
}

export const quickSortQuiz = {
    "name": "Quicksort",
    "array": [42, 17, 89, 5, 63, 31, 77, 11],
    "questions": [
        {
            "statement": "¿Cuál es la idea principal detrás del algoritmo Quicksort?",
            "question": "Selecciona la opción correcta.",
            "options": {
                "A": "Dividir el arreglo en subarreglos y ordenarlos por separado.",
                "B": "Recorrer el arreglo y comparar cada elemento con el siguiente.",
                "C": "Ordenar el arreglo utilizando una cola de prioridad.",
                "D": "Invertir el orden de los elementos del arreglo."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "Correcto. Quicksort divide el arreglo en subarreglos más pequeños y luego los ordena de manera recursiva."
        },
        {
            "statement": "¿Cuál es la complejidad promedio del algoritmo Quicksort?",
            "question": "Selecciona la opción correcta.",
            "options": {
                "A": "O(n)",
                "B": "O(n log n)",
                "C": "O(n^2)",
                "D": "O(log n)"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "Correcto. La complejidad promedio de Quicksort es O(n log n)."
        },
        {
            "statement": "Dado el siguiente paso en Quicksort:\n\nPivote: 31\nElementos menores: [17, 5, 11]\nElementos mayores: [42, 89, 63, 77]\n\n¿Cuál es el siguiente paso?",
            "question": "Selecciona la opción correcta.",
            "options": {
                "A": "Ordenar los elementos menores.",
                "B": "Ordenar los elementos mayores.",
                "C": "El arreglo ya está ordenado.",
                "D": "Intercambiar el pivote con el primer elemento mayor."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "Correcto. En Quicksort, se ordenan recursivamente los elementos menores y mayores por separado."
        },
        {
            "statement": "Dado el siguiente arreglo: [42, 17, 89, 5, 63, 31, 77, 11]\n\n¿Cuál es el tercer elemento después de aplicar el algoritmo Quicksort?",
            "question": "Selecciona la opción correcta.",
            "options": {
                "A": "17",
                "B": "31",
                "C": "42",
                "D": "63"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Correcto. El tercer elemento después de aplicar Quicksort es 63.",
            "stepToHistory": 0
        },
        {
            "statement": "Dado el siguiente arreglo: [42, 17, 89, 5, 63, 31, 77, 11]\n\nAplica un paso de Quicksort y muestra el arreglo resultante.",
            "question": "Selecciona la opción correcta.",
            "options": {
                "A": "[11, 17, 5, 31, 63, 42, 77, 89]",
                "B": "[11, 17, 5, 31, 63, 77, 42, 89]",
                "C": "[11, 17, 5, 31, 42, 63, 77, 89]",
                "D": "[11, 17, 31, 5, 63, 42, 77, 89]"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Correcto. Después de un paso de Quicksort, el arreglo se vería como [11, 17, 5, 31, 63, 77, 42, 89].",
            "stepToHistory": 0
        },
        {
            "statement": "Dado el siguiente arreglo: [42, 17, 89, 5, 63, 31, 77, 11]\n\n¿Cuál es el último elemento después de aplicar Quicksort de manera completa?",
            "question": "Selecciona la opción correcta.",
            "options": {
                "A": "11",
                "B": "31",
                "C": "63",
                "D": "89"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Después de aplicar Quicksort completamente, el último elemento sería 63.",
            "stepToHistory": 0
        }
    ]
}



export const shellSortQuiz = {
    "name": "ShellSort",
    "array": [56, 32, 17, 92, 78, 23, 61, 42],
    "questions": [
        {
            "statement": "Explique brevemente cómo funciona el algoritmo ShellSort.",
            "question": "¿Cómo funciona ShellSort?",
            "options": {
                "A": "Compara elementos adyacentes y los intercambia si están en el orden incorrecto.",
                "B": "Divide el arreglo en subarreglos y luego los ordena con el método de inserción.",
                "C": "Selecciona el elemento más grande y lo coloca en la posición correcta en cada pasada.",
                "D": "Cuenta la frecuencia de cada elemento en el arreglo y los organiza en orden ascendente."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "ShellSort divide el arreglo en subarreglos y luego los ordena con el método de inserción."
        },
        {
            "statement": "¿Cuál es la principal característica distintiva de ShellSort en comparación con otros métodos de ordenamiento?",
            "question": "Principal característica de ShellSort.",
            "options": {
                "A": "Utiliza un pivote para comparar elementos.",
                "B": "Opera en tiempo constante.",
                "C": "Ordena primero los elementos pares y luego los impares.",
                "D": "Utiliza una secuencia de brechas para realizar múltiples pasadas."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "ShellSort utiliza una secuencia de brechas para realizar múltiples pasadas y mejorar el ordenamiento."
        },
        {
            "statement": "¿Cuál es el peor caso de complejidad temporal para ShellSort?",
            "question": "Peor caso de complejidad temporal.",
            "options": {
                "A": "O(n)",
                "B": "O(n log n)",
                "C": "O(n^2)",
                "D": "O(log n)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "El peor caso de ShellSort es O(n^2), pero depende de la secuencia de brechas utilizada."
        },
        {
            "statement": "¿Qué secuencia de brechas es comúnmente utilizada en ShellSort?",
            "question": "Secuencia de brechas en ShellSort.",
            "options": {
                "A": "Secuencia de Fibonacci.",
                "B": "Secuencia de números primos.",
                "C": "Secuencia aritmética ascendente.",
                "D": "Secuencia geométrica."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "La secuencia de Fibonacci es comúnmente utilizada en ShellSort para definir las brechas."
        },
        {
            "statement": "Dado el arreglo [56, 32, 17, 92, 78, 23, 61, 42], ¿cuál sería la brecha inicial en ShellSort?",
            "question": "¿Cuál es la brecha inicial?",
            "options": {
                "A": "1",
                "B": "2",
                "C": "3",
                "D": "4"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "La brecha inicial en ShellSort es 2 en este caso.",
            "stepToHistory": 0
        },
        {
            "statement": "Ordena el siguiente arreglo utilizando el algoritmo ShellSort con brechas de tamaño 2: [56, 32, 17, 92, 78, 23, 61, 42]. ¿Cuál sería el arreglo ordenado después de la primera pasada?",
            "question": "Arreglo después de la primera pasada de ShellSort.",
            "options": {
                "A": "[32, 56, 17, 92, 23, 78, 42, 61]",
                "B": "[56, 17, 32, 78, 23, 42, 61, 92]",
                "C": "[17, 56, 32, 78, 23, 42, 61, 92]",
                "D": "[56, 32, 17, 92, 78, 23, 61, 42]"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Después de la primera pasada con brechas de tamaño 2, el arreglo se vería así: [32, 56, 17, 92, 23, 78, 42, 61].",
            "stepToHistory": 0
        }
    ]
}

export const insertionSortQuiz = {
    "name": "Insertion Sort",
    "array": [18, 42, 9, 31, 27, 5, 13, 37],
    "questions": [
        {
            "statement": "Explique brevemente cómo funciona el algoritmo Insertion Sort.",
            "question": "¿Cómo funciona Insertion Sort?",
            "options": {
                "A": "Divide el arreglo en dos mitades y luego combina los resultados ordenados.",
                "B": "Selecciona el elemento más grande y lo coloca en la posición correcta en cada pasada.",
                "C": "Compara elementos adyacentes y los intercambia si están en el orden incorrecto.",
                "D": "Inserta elementos en la posición correcta uno por uno en el subarreglo ordenado."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "Insertion Sort inserta elementos uno por uno en la posición correcta en el subarreglo ordenado."
        },
        {
            "statement": "¿Cuál es la principal ventaja del algoritmo Insertion Sort?",
            "question": "Principal ventaja de Insertion Sort.",
            "options": {
                "A": "Es eficiente para arreglos de gran tamaño.",
                "B": "Siempre tiene una complejidad lineal.",
                "C": "Es estable y no cambia el orden relativo de elementos iguales.",
                "D": "Ninguna de las anteriores."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "Insertion Sort es estable y no cambia el orden relativo de elementos iguales."
        },
        {
            "statement": "¿Cuál es el peor caso de complejidad temporal para Insertion Sort?",
            "question": "Peor caso de complejidad temporal.",
            "options": {
                "A": "O(n)",
                "B": "O(n log n)",
                "C": "O(n^2)",
                "D": "O(log n)"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "El peor caso de Insertion Sort es O(n^2)."
        },
        {
            "statement": "¿Cuál es el elemento pivote en el algoritmo Insertion Sort?",
            "question": "Elemento pivote en Insertion Sort.",
            "options": {
                "A": "El primer elemento del arreglo.",
                "B": "El último elemento del arreglo.",
                "C": "El elemento en la posición central del arreglo.",
                "D": "No hay un elemento pivote en Insertion Sort."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "THEORICAL",
            "feedback": "En Insertion Sort, el pivote es el primer elemento del arreglo."
        },
        {
            "statement": "Ordena el siguiente arreglo utilizando el algoritmo Insertion Sort: [18, 42, 9, 31, 27, 5, 13, 37]. ¿Cuál sería el arreglo ordenado después de la segunda pasada?",
            "question": "Arreglo después de la segunda pasada de Insertion Sort.",
            "options": {
                "A": "[18, 9, 42, 31, 27, 5, 13, 37]",
                "B": "[9, 18, 42, 31, 27, 5, 13, 37]",
                "C": "[18, 42, 9, 31, 27, 5, 13, 37]",
                "D": "[18, 9, 5, 27, 31, 42, 13, 37]"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Después de la segunda pasada, el arreglo sería: [9, 18, 42, 31, 27, 5, 13, 37].",
            "stepToHistory": 0
        },
        {
            "statement": "Ordena el siguiente arreglo utilizando el algoritmo Insertion Sort: [18, 42, 9, 31, 27, 5, 13, 37]. ¿Cuál sería el arreglo ordenado después de la quinta pasada?",
            "question": "Arreglo después de la quinta pasada de Insertion Sort.",
            "options": {
                "A": "[5, 9, 13, 18, 27, 31, 37, 42]",
                "B": "[5, 9, 13, 18, 27, 31, 42, 37]",
                "C": "[18, 9, 13, 5, 27, 31, 37, 42]",
                "D": "[18, 42, 9, 31, 27, 5, 13, 37]"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "type": "PRACTICAL",
            "feedback": "Después de la quinta pasada, el arreglo sería: [5, 9, 13, 18, 27, 31, 37, 42].",
            "stepToHistory": 0
        }
    ]
}



export const sortingMethodsQuiz = {
    "name": "Métodos de Ordenamiento",
    "questions": [
        {
            "statement": "¿Cuál de los siguientes métodos de ordenamiento es conocido por su eficiencia en listas pequeñas o parcialmente ordenadas?",
            "question": "¿Qué método de ordenamiento es eficiente para listas pequeñas o parcialmente ordenadas?",
            "options": {
                "A": "Quicksort",
                "B": "Bubblesort",
                "C": "Insertion Sort",
                "D": "Merge Sort"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Insertion Sort es eficiente en listas pequeñas o parcialmente ordenadas debido a su naturaleza de inserción incremental."
        },
        {
            "statement": "¿Cuál es la peor complejidad temporal en el peor caso para el algoritmo Quicksort?",
            "question": "En el peor caso, ¿cuál es la complejidad temporal de Quicksort?",
            "options": {
                "A": "O(1)",
                "B": "O(n)",
                "C": "O(n log n)",
                "D": "O(n^2)"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En el peor caso, Quicksort tiene una complejidad temporal de O(n^2), pero con particiones equilibradas y elección adecuada del pivote, puede tener una complejidad promedio de O(n log n)."
        },
        {
            "statement": "¿Qué método de ordenamiento siempre tiene una complejidad temporal de O(n log n) en el peor caso?",
            "question": "¿Cuál de estos métodos de ordenamiento siempre tiene una complejidad temporal de O(n log n) en el peor caso?",
            "options": {
                "A": "Bubblesort",
                "B": "Selection Sort",
                "C": "Heapsort",
                "D": "Mergesort"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Mergesort tiene una complejidad temporal de O(n log n) en el peor caso, lo que lo hace eficiente para ordenar grandes conjuntos de datos."
        },
        {
            "statement": "¿Cuál de los siguientes métodos de ordenamiento es inestable?",
            "question": "¿Cuál de estos métodos de ordenamiento es inestable?",
            "options": {
                "A": "Quicksort",
                "B": "Insertion Sort",
                "C": "Mergesort",
                "D": "Selection Sort"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Selection Sort es un método de ordenamiento inestable, lo que significa que no necesariamente mantiene el orden relativo de elementos iguales."
        },
        {
            "statement": "¿Cuál de los siguientes métodos de ordenamiento es más apropiado para listas enlazadas?",
            "question": "Para ordenar listas enlazadas, ¿cuál de estos métodos es más apropiado?",
            "options": {
                "A": "Bubblesort",
                "B": "Quicksort",
                "C": "Insertion Sort",
                "D": "Mergesort"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Mergesort es especialmente adecuado para listas enlazadas debido a su naturaleza de dividir y combinar, que se alinea bien con las operaciones de enlace de nodos."
        },
        {
            "statement": "¿En qué situación HeapSort supera a Quicksort y Mergesort?",
            "question": "¿En qué situación HeapSort es superior a Quicksort y Mergesort?",
            "options": {
                "A": "En la eficiencia de memoria.",
                "B": "En la velocidad de ordenamiento.",
                "C": "Cuando se ordenan elementos repetidos.",
                "D": "Cuando se trata de datos distribuidos uniformemente."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "HeapSort es más eficiente en términos de memoria, ya que no requiere almacenar todos los elementos en una estructura de datos adicional antes de ordenar."
        },
        {
            "statement": "¿Cuál es la principal desventaja del algoritmo Bubblesort?",
            "question": "¿Cuál es la principal desventaja de Bubblesort?",
            "options": {
                "A": "Es inestable.",
                "B": "Tiene una complejidad temporal alta en el peor caso.",
                "C": "Es lento en general.",
                "D": "No se puede implementar en lenguajes de programación modernos."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La principal desventaja de Bubblesort es su lentitud en comparación con otros métodos de ordenamiento, ya que requiere muchas comparaciones y movimientos de elementos."
        },
        {
            "statement": "¿Qué método de ordenamiento tiene siempre una complejidad temporal de O(n^2), pero es más eficiente en listas pequeñas?",
            "question": "¿Cuál de estos métodos de ordenamiento siempre tiene una complejidad temporal de O(n^2), pero es más eficiente en listas pequeñas?",
            "options": {
                "A": "Quicksort",
                "B": "Bubblesort",
                "C": "Insertion Sort",
                "D": "Selection Sort"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Insertion Sort tiene una complejidad temporal de O(n^2) en el peor caso, pero es más eficiente en listas pequeñas debido a su naturaleza de inserción incremental."
        }
    ]
}


export const searchMethodsQuiz = {
    "name": "Métodos de Búsqueda",
    "questions": [
        {
            "statement": "¿Cuál de los siguientes métodos de búsqueda es más eficiente en un conjunto de datos ordenado?",
            "question": "En un conjunto de datos ordenado, ¿cuál método de búsqueda es más eficiente?",
            "options": {
                "A": "Búsqueda lineal",
                "B": "Búsqueda binaria",
                "C": "Búsqueda en árbol",
                "D": "Búsqueda hash"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La búsqueda binaria es más eficiente en conjuntos de datos ordenados, ya que reduce el espacio de búsqueda a la mitad en cada iteración."
        },
        {
            "statement": "¿Cuál de los siguientes métodos de búsqueda es más adecuado para conjuntos de datos pequeños y no ordenados?",
            "question": "En conjuntos de datos pequeños y no ordenados, ¿cuál método de búsqueda es más adecuado?",
            "options": {
                "A": "Búsqueda lineal",
                "B": "Búsqueda binaria",
                "C": "Búsqueda en árbol",
                "D": "Búsqueda hash"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La búsqueda lineal es más adecuada para conjuntos de datos pequeños y no ordenados, ya que implica revisar cada elemento uno por uno."
        },
        {
            "statement": "¿Qué método de búsqueda se beneficia más de conjuntos de datos ordenados en términos de tiempo?",
            "question": "Entre estos métodos de búsqueda, ¿cuál se beneficia más de conjuntos de datos ordenados en términos de tiempo?",
            "options": {
                "A": "Búsqueda lineal",
                "B": "Búsqueda binaria",
                "C": "Búsqueda en árbol",
                "D": "Búsqueda hash"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La búsqueda binaria se beneficia enormemente de conjuntos de datos ordenados, ya que reduce la cantidad de elementos a considerar en cada paso."
        },
        {
            "statement": "¿Cuál de los siguientes métodos de búsqueda es más eficiente en términos de tiempo en conjuntos de datos grandes?",
            "question": "En conjuntos de datos grandes, ¿cuál método de búsqueda es más eficiente en términos de tiempo?",
            "options": {
                "A": "Búsqueda lineal",
                "B": "Búsqueda binaria",
                "C": "Búsqueda en árbol",
                "D": "Búsqueda hash"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La búsqueda hash es más eficiente en términos de tiempo en conjuntos de datos grandes, ya que permite el acceso directo a los elementos utilizando una función de hash."
        },
        {
            "statement": "¿En qué tipo de estructura de datos es común realizar la búsqueda en profundidad (DFS) y la búsqueda en amplitud (BFS)?",
            "question": "¿En qué tipo de estructura de datos es común realizar tanto la búsqueda en profundidad (DFS) como la búsqueda en amplitud (BFS)?",
            "options": {
                "A": "Listas enlazadas",
                "B": "Árboles binarios",
                "C": "Colas",
                "D": "Grafos"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La búsqueda en profundidad (DFS) y la búsqueda en amplitud (BFS) son comunes en la exploración de grafos para encontrar caminos y conexiones entre nodos."
        },
        {
            "statement": "¿En qué tipo de estructura de datos es útil implementar una tabla hash para la búsqueda eficiente?",
            "question": "¿En qué tipo de estructura de datos es útil implementar una tabla hash para la búsqueda eficiente?",
            "options": {
                "A": "Listas enlazadas",
                "B": "Árboles binarios",
                "C": "Colas",
                "D": "Arrays"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Las tablas hash son particularmente útiles para la búsqueda eficiente en arrays o arreglos, ya que permiten acceso directo a través de una función de hash."
        },
        {
            "statement": "¿Cuál es la principal ventaja de la búsqueda binaria sobre la búsqueda lineal?",
            "question": "¿Cuál es la principal ventaja de la búsqueda binaria en comparación con la búsqueda lineal?",
            "options": {
                "A": "Es más simple de implementar.",
                "B": "Es más rápida en todo tipo de conjuntos de datos.",
                "C": "Es más precisa.",
                "D": "Requiere menos memoria."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La principal ventaja de la búsqueda binaria es su velocidad, ya que reduce significativamente el número de comparaciones necesarias, especialmente en conjuntos de datos grandes."
        },
        {
            "statement": "¿Cuál de los siguientes métodos de búsqueda es especialmente eficiente para conjuntos de datos dispersos?",
            "question": "¿Cuál de estos métodos de búsqueda es especialmente eficiente para conjuntos de datos dispersos?",
            "options": {
                "A": "Búsqueda lineal",
                "B": "Búsqueda binaria",
                "C": "Búsqueda en árbol",
                "D": "Búsqueda hash"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La búsqueda hash es especialmente eficiente para conjuntos de datos dispersos o con muchos valores faltantes, ya que puede mapear rápidamente claves a valores."
        }
    ]
}


export const binaryTreeQuiz = {
    "name": "Árboles Binarios",
    "questions": [
        {
            "statement": "¿Cuál es la definición correcta de un árbol binario?",
            "question": "En el contexto de estructuras de datos, ¿qué es un árbol binario?",
            "options": {
                "A": "Una estructura de datos que contiene elementos únicos en forma de lista.",
                "B": "Una estructura de datos que contiene elementos duplicados organizados en forma de árbol.",
                "C": "Una estructura de datos en la que cada nodo tiene hasta tres hijos.",
                "D": "Una estructura de datos en la que cada nodo tiene hasta dos hijos."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Un árbol binario es una estructura de datos en la que cada nodo tiene hasta dos hijos: un hijo izquierdo y un hijo derecho."
        },
        {
            "statement": "¿Cuál es la ventaja de los árboles binarios en comparación con las listas enlazadas?",
            "question": "En comparación con las listas enlazadas, ¿cuál es una ventaja de los árboles binarios?",
            "options": {
                "A": "Los árboles binarios requieren menos memoria.",
                "B": "Los árboles binarios admiten inserciones y eliminaciones eficientes en cualquier posición.",
                "C": "Los árboles binarios tienen acceso más rápido a los elementos.",
                "D": "Los árboles binarios son más fáciles de implementar."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Los árboles binarios pueden proporcionar un acceso más rápido a los elementos en comparación con las listas enlazadas, especialmente cuando el árbol está balanceado."
        },
        {
            "statement": "¿Cuál es la diferencia clave entre un árbol binario completo y un árbol binario perfecto?",
            "question": "En términos de árboles binarios, ¿cuál es la diferencia clave entre un árbol binario completo y un árbol binario perfecto?",
            "options": {
                "A": "Un árbol binario completo tiene el mismo número de nodos en cada nivel, mientras que un árbol binario perfecto no.",
                "B": "Un árbol binario perfecto tiene todos sus nodos en el mismo nivel, mientras que un árbol binario completo no.",
                "C": "Un árbol binario completo tiene todos sus nodos en un solo nivel, mientras que un árbol binario perfecto no.",
                "D": "No hay diferencia entre un árbol binario completo y un árbol binario perfecto."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En un árbol binario completo, todos los niveles excepto posiblemente el último están completamente llenos, y si el último nivel no está lleno, los nodos se llenan de izquierda a derecha. En un árbol binario perfecto, todos los niveles están completamente llenos."
        },
        {
            "statement": "¿Qué es un nodo hoja en un árbol binario?",
            "question": "En un árbol binario, ¿qué se entiende por un nodo hoja?",
            "options": {
                "A": "Un nodo que tiene dos hijos.",
                "B": "Un nodo que no tiene hijos.",
                "C": "El primer nodo en el árbol.",
                "D": "Un nodo que tiene solo un hijo."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Un nodo hoja en un árbol binario es un nodo que no tiene hijos, es decir, no tiene nodos conectados debajo de él."
        },
        {
            "statement": "¿Cuál es la diferencia entre un árbol binario de búsqueda y un árbol binario equilibrado?",
            "question": "En términos de árboles binarios, ¿cuál es la diferencia entre un árbol binario de búsqueda y un árbol binario equilibrado?",
            "options": {
                "A": "No hay diferencia; ambos términos se refieren a lo mismo.",
                "B": "Un árbol binario de búsqueda tiene todos sus nodos en el mismo nivel, mientras que un árbol binario equilibrado no.",
                "C": "Un árbol binario de búsqueda está organizado de tal manera que cada nodo tiene un hijo izquierdo y uno derecho, mientras que un árbol binario equilibrado no tiene esta restricción.",
                "D": "Un árbol binario de búsqueda mantiene una propiedad de orden, mientras que un árbol binario equilibrado garantiza una altura limitada."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Un árbol binario de búsqueda mantiene una propiedad de orden, es decir, para cada nodo, todos los nodos en el subárbol izquierdo son menores y todos los nodos en el subárbol derecho son mayores. Un árbol binario equilibrado garantiza una altura limitada para mantener operaciones eficientes."
        },
        {
            "statement": "¿Qué es la altura de un árbol binario?",
            "question": "En el contexto de árboles binarios, ¿qué se entiende por la altura de un árbol?",
            "options": {
                "A": "El número de nodos en el árbol.",
                "B": "La cantidad de niveles en el árbol.",
                "C": "La distancia entre la raíz y el nodo más profundo.",
                "D": "La cantidad total de ramas en el árbol."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La altura de un árbol binario se refiere a la cantidad de niveles en el árbol, desde la raíz hasta el nivel más profundo."
        },
        {
            "statement": "¿Qué operación suele ser más lenta en un árbol binario desequilibrado en comparación con un árbol binario equilibrado?",
            "question": "En términos de operaciones en árboles binarios, ¿qué operación suele ser más lenta en un árbol binario desequilibrado en comparación con un árbol binario equilibrado?",
            "options": {
                "A": "Inserción",
                "B": "Eliminación",
                "C": "Búsqueda",
                "D": "Recorrido en orden"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En un árbol binario desequilibrado, la búsqueda puede ser más lenta, ya que la altura puede ser mayor, lo que resulta en un mayor número de comparaciones para encontrar un nodo específico."
        },
        {
            "statement": "¿Cuál es la ventaja principal de un árbol binario completo en términos de eficiencia de espacio?",
            "question": "En términos de eficiencia de espacio, ¿cuál es la principal ventaja de un árbol binario completo?",
            "options": {
                "A": "Requiere menos memoria en comparación con otros tipos de árboles.",
                "B": "Mantiene un equilibrio perfecto entre nodos izquierdos y derechos.",
                "C": "Tiene menos niveles que otros tipos de árboles.",
                "D": "Permite una búsqueda más rápida que otros tipos de árboles."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Un árbol binario completo utiliza el espacio de manera más eficiente, ya que todos los niveles, excepto posiblemente el último, están completamente llenos y los nodos se llenan de izquierda a derecha en el último nivel."
        }
    ]
}


export const stackQuiz = {
    "name": "Pilas",
    "questions": [
        {
            "statement": "¿Cuál es la definición correcta de una pila en estructuras de datos?",
            "question": "En el contexto de estructuras de datos, ¿qué es una pila?",
            "options": {
                "A": "Una estructura de datos que almacena elementos en orden aleatorio.",
                "B": "Una estructura de datos que almacena elementos en orden inverso.",
                "C": "Una estructura de datos que sigue el principio FIFO (First-In-First-Out).",
                "D": "Una estructura de datos que sigue el principio LIFO (Last-In-First-Out)."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una pila es una estructura de datos que sigue el principio LIFO (Last-In-First-Out), lo que significa que el último elemento en entrar es el primero en salir."
        },
        {
            "statement": "¿Cuál es la operación que añade un elemento al tope de una pila?",
            "question": "En una pila, ¿qué operación agrega un elemento al tope?",
            "options": {
                "A": "Push",
                "B": "Insert",
                "C": "Enqueue",
                "D": "Append"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La operación que agrega un elemento al tope de una pila se llama 'Push'."
        },
        {
            "statement": "¿Cuál es la operación que elimina y devuelve el elemento del tope de una pila?",
            "question": "En una pila, ¿qué operación elimina y devuelve el elemento del tope?",
            "options": {
                "A": "Pop",
                "B": "Dequeue",
                "C": "Remove",
                "D": "Extract"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La operación que elimina y devuelve el elemento del tope de una pila se llama 'Pop'."
        },
        {
            "statement": "¿Cuál es la ventaja principal de una pila en comparación con una cola?",
            "question": "En comparación con una cola, ¿cuál es la ventaja principal de una pila?",
            "options": {
                "A": "Permite acceso más rápido a los elementos.",
                "B": "Es más eficiente en términos de memoria.",
                "C": "Sigue el principio FIFO.",
                "D": "Sigue el principio LIFO."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La ventaja principal de una pila sobre una cola es que sigue el principio LIFO (Last-In-First-Out), lo que es útil en situaciones donde se necesita mantener el orden de llegada inverso de los elementos."
        },
        {
            "statement": "¿Cuál de los siguientes no es un escenario típico de uso de una pila?",
            "question": "De estos escenarios, ¿cuál no es un uso típico de una pila?",
            "options": {
                "A": "Gestionar llamadas a funciones en una ejecución de programa.",
                "B": "Realizar un recorrido en profundidad (DFS) en un árbol.",
                "C": "Implementar la función de 'deshacer' en un editor de texto.",
                "D": "Evaluar expresiones matemáticas en notación infija."
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Aunque las pilas son útiles en muchos contextos, el recorrido en profundidad (DFS) en un árbol suele requerir el uso de colas debido a la naturaleza FIFO de DFS."
        },
        {
            "statement": "¿Cuál de las siguientes estructuras de datos se asemeja a una pila, pero tiene un límite máximo en la cantidad de elementos?",
            "question": "¿Cuál de estas estructuras de datos es similar a una pila, pero tiene un límite máximo en la cantidad de elementos?",
            "options": {
                "A": "Cola",
                "B": "Lista enlazada",
                "C": "Pila con límite",
                "D": "Pila de prioridad"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una 'Pila con límite' es similar a una pila, pero tiene un límite máximo en la cantidad de elementos que puede contener."
        },
        {
            "statement": "¿Cuál es la complejidad temporal promedio de la operación 'Pop' en una pila implementada con una lista enlazada?",
            "question": "En una pila implementada con una lista enlazada, ¿cuál es la complejidad temporal promedio de la operación 'Pop'?",
            "options": {
                "A": "O(1)",
                "B": "O(log n)",
                "C": "O(n)",
                "D": "Depende de la implementación de la lista enlazada."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En una pila implementada con una lista enlazada, la operación 'Pop' tiene una complejidad temporal promedio constante de O(1), ya que solo se necesita ajustar los punteros adecuadamente."
        }
    ]
}


export const queueQuiz = {
    "name": "Colas",
    "questions": [
        {
            "statement": "¿Cuál es la definición correcta de una cola en estructuras de datos?",
            "question": "En el contexto de estructuras de datos, ¿qué es una cola?",
            "options": {
                "A": "Una estructura de datos que almacena elementos en orden aleatorio.",
                "B": "Una estructura de datos que almacena elementos en orden inverso.",
                "C": "Una estructura de datos que sigue el principio LIFO (Last-In-First-Out).",
                "D": "Una estructura de datos que sigue el principio FIFO (First-In-First-Out)."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una cola es una estructura de datos que sigue el principio FIFO (First-In-First-Out), lo que significa que el primer elemento en entrar es el primero en salir."
        },
        {
            "statement": "¿Cuál es la operación que añade un elemento al final de una cola?",
            "question": "En una cola, ¿qué operación agrega un elemento al final?",
            "options": {
                "A": "Push",
                "B": "Insert",
                "C": "Enqueue",
                "D": "Append"
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La operación que agrega un elemento al final de una cola se llama 'Enqueue'."
        },
        {
            "statement": "¿Cuál es la operación que elimina y devuelve el elemento del frente de una cola?",
            "question": "En una cola, ¿qué operación elimina y devuelve el elemento del frente?",
            "options": {
                "A": "Pop",
                "B": "Dequeue",
                "C": "Remove",
                "D": "Extract"
            },
            "answer": "B",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La operación que elimina y devuelve el elemento del frente de una cola se llama 'Dequeue'."
        },
        {
            "statement": "¿Cuál es la ventaja principal de una cola en comparación con una pila?",
            "question": "En comparación con una pila, ¿cuál es la ventaja principal de una cola?",
            "options": {
                "A": "Permite acceso más rápido a los elementos.",
                "B": "Es más eficiente en términos de memoria.",
                "C": "Sigue el principio LIFO.",
                "D": "Sigue el principio FIFO."
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "La ventaja principal de una cola sobre una pila es que sigue el principio FIFO (First-In-First-Out), lo que es útil en situaciones donde se necesita mantener el orden de llegada de los elementos."
        },
        {
            "statement": "¿Qué tipo de cola permite que los elementos recién agregados reemplacen a los elementos más antiguos si la cola está llena?",
            "question": "¿Qué tipo de cola permite la reemplazo de elementos más antiguos si la cola está llena?",
            "options": {
                "A": "Cola circular",
                "B": "Cola de prioridad",
                "C": "Cola doble",
                "D": "Cola lineal"
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una cola circular permite que los elementos recién agregados reemplacen a los elementos más antiguos si la cola está llena, manteniendo así un tamaño constante."
        },
        {
            "statement": "¿Cuál de las siguientes estructuras de datos se asemeja a una cola, pero tiene un límite máximo en la cantidad de elementos?",
            "question": "¿Cuál de estas estructuras de datos es similar a una cola, pero tiene un límite máximo en la cantidad de elementos?",
            "options": {
                "A": "Pila",
                "B": "Lista enlazada",
                "C": "Cola de prioridad",
                "D": "Cola con límite"
            },
            "answer": "D",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Una 'Cola con límite' es similar a una cola, pero tiene un límite máximo en la cantidad de elementos que puede contener."
        },
        {
            "statement": "¿Cuál de los siguientes no es un escenario típico de uso de una cola?",
            "question": "De estos escenarios, ¿cuál no es un uso típico de una cola?",
            "options": {
                "A": "Mantener el historial de navegación en un navegador web.",
                "B": "Implementar la función de 'deshacer' en un editor de texto.",
                "C": "Realizar un recorrido en profundidad (DFS) en un árbol.",
                "D": "Gestionar tareas en un sistema operativo (scheduling)."
            },
            "answer": "C",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "Aunque las colas son útiles en muchos contextos, realizar un recorrido en profundidad (DFS) en un árbol suele requerir el uso de pilas debido a la naturaleza LIFO de DFS."
        },
        {
            "statement": "¿Cuál es la complejidad temporal promedio de la operación 'Enqueue' en una cola implementada con una lista enlazada?",
            "question": "En una cola implementada con una lista enlazada, ¿cuál es la complejidad temporal promedio de la operación 'Enqueue'?",
            "options": {
                "A": "O(1)",
                "B": "O(log n)",
                "C": "O(n)",
                "D": "Depende de la implementación de la lista enlazada."
            },
            "answer": "A",
            "selectedAnswer": null,
            "state": "UNANSWERED",
            "feedback": "En una cola implementada con una lista enlazada, la operación 'Enqueue' tiene una complejidad temporal promedio constante de O(1), ya que solo se necesita ajustar los punteros adecuadamente."
        }
    ]
}

